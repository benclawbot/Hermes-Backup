import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

// Node.js runtime required — puppeteer and @sparticuz/chromium are native modules
export const runtime = 'nodejs';

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

  // Dynamically import to avoid top-level import of large modules
  const { generateReportHtml } = await import('@/lib/report');
  const html = generateReportHtml(scan.url || '', result);

  // Generate PDF using @sparticuz/chromium (works on Vercel)
  const isDev = process.env.NODE_ENV === 'development';
  let browser = null;

  try {
    let executablePath: string;
    if (isDev) {
      // Local dev: use system Chrome/Chromium
      executablePath = process.env.CHROME_PATH ||
        '/usr/bin/google-chrome' ||
        '/usr/bin/chromium' ||
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    } else {
      // Vercel: use @sparticuz/chromium
      try {
        executablePath = await chromium.executablePath();
      } catch (chromiumErr: any) {
        console.error('Chromium executablePath failed:', chromiumErr.message);
        return NextResponse.json(
          { error: 'PDF generation unavailable on this platform.', detail: chromiumErr.message },
          { status: 500 }
        );
      }
    }

    browser = await puppeteer.launch({
      executablePath,
      headless: true,
      args: isDev
        ? ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
        : chromium.args,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' },
    });
    await browser.close();

    const filename = `GDPR-Report-${(scan.url || 'scan').replace(/[^a-zA-Z0-9.-]/g, '_')}.pdf`;

    return new NextResponse(Buffer.from(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': String(pdfBuffer.length),
      },
    });
  } catch (err: any) {
    if (browser) await browser.close().catch(() => {});
    console.error('PDF generation failed:', err?.message || err);
    return NextResponse.json(
      { error: 'PDF generation failed. Please try again or refresh the page.', detail: err?.message },
      { status: 500 }
    );
  }
}
