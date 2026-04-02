import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

async function getScanWithResult(scanId: string) {
  const db = getDb();
  const scan = db.prepare('SELECT * FROM scans WHERE id = ?').get(scanId) as any;
  if (!scan || scan.status !== 'completed' || !scan.result_json) return null;

  let result: any;
  try {
    const decoded = Buffer.from(scan.result_json, 'base64');
    if (decoded[0] === 0x1f && decoded[1] === 0x8b) {
      result = JSON.parse(require('zlib').gunzipSync(decoded).toString('utf8'));
    } else {
      result = JSON.parse(scan.result_json);
    }
  } catch {
    return null;
  }

  // Try Stripe metadata as fallback
  if (!result) {
    try {
      const Stripe = (await import('stripe')).default;
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');
      const stripeSession = await stripe.checkout.sessions.retrieve(scan.stripe_session_id || '');
      const scanResultJson = stripeSession?.metadata?.scanResult;
      if (scanResultJson) result = JSON.parse(scanResultJson);
    } catch {}
  }

  return { scan, result };
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: scanId } = await params;

  const data = await getScanWithResult(scanId);
  if (!data) {
    return NextResponse.json(
      { error: 'Report not ready. Scan may still be processing. Please refresh the page.' },
      { status: 404 }
    );
  }

  const { scan, result } = data;

  // Generate the HTML report
  const { generateReportHtml } = await import('@/lib/report');
  const html = generateReportHtml(scan.url || '', result);

  // Return HTML that the browser can print to PDF via window.print()
  // No puppeteer/chromium needed — works on any platform
  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
      'Content-Disposition': `inline; filename="GDPR-Report-${scanId}.html"`,
    },
  });
}
