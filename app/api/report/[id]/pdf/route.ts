import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import Stripe from 'stripe';

async function getScanWithResult(scanId: string) {
  const db = getDb();
  const scan = db.prepare('SELECT * FROM scans WHERE id = ?').get(scanId) as any;
  if (!scan || scan.status !== 'completed' || !scan.result_json) return null;

  let result: any;
  try {
    let rawJson = scan.result_json;
    const hashIdx = rawJson.indexOf('|||HASH:');
    if (hashIdx !== -1) rawJson = rawJson.slice(0, hashIdx);
    const decoded = Buffer.from(rawJson, 'base64');
    if (decoded[0] === 0x1f && decoded[1] === 0x8b) {
      result = JSON.parse(require('zlib').gunzipSync(decoded).toString('utf8'));
    } else {
      result = JSON.parse(rawJson);
    }
  } catch {
    return null;
  }

  return { scan, result };
}

async function getResultFromStripe(stripeSessionId: string, scanId: string, db: ReturnType<typeof getDb>) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');
    const stripeSession = await stripe.checkout.sessions.retrieve(stripeSessionId);
    const scanResultJson = stripeSession?.metadata?.scanResult;
    if (!scanResultJson) return null;
    const result = JSON.parse(scanResultJson);
    try {
      db.prepare(`INSERT OR REPLACE INTO scans (id, url, status, email, stripe_session_id, result_json) VALUES (?, ?, 'completed', ?, ?, ?)`)
        .run(scanId, stripeSession.metadata?.url || '', stripeSession.customer_email || null, stripeSessionId, scanResultJson);
    } catch {}
    return result;
  } catch {
    return null;
  }
}

async function getWhiteLabelOptions(scanId: string): Promise<{ whiteLabel?: { companyName?: string } } | null> {
  const db = getDb();
  const scan = db.prepare('SELECT subscriber_id FROM scans WHERE id = ?').get(scanId) as any;
  if (!scan?.subscriber_id) return null;

  const subscriber = db.prepare('SELECT plan FROM subscribers WHERE id = ?').get(scan.subscriber_id) as any;
  if (subscriber?.plan === 'agency') {
    return { whiteLabel: { companyName: 'Compliance Report' } };
  }
  return null;
}

async function generateFromResult(result: any, scanId: string, format: string) {
  const url = result?.crawl?.url || result?.url || '';

  if (format === 'html') {
    const { generateReportHtml } = await import('@/lib/report');
    const html = generateReportHtml(url, result);
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
        'Content-Disposition': `inline; filename="GDPR-Report-${scanId}.html"`,
      },
    });
  }

  try {
    const { generateReportPdfBuffer } = await import('@/lib/pdf-report');
    const whiteLabelOpts = await getWhiteLabelOptions(scanId);
    const pdfBuffer = await generateReportPdfBuffer(url, result, whiteLabelOpts ?? undefined);
    const safeName = (url || 'report').replace(/[^a-zA-Z0-9.-]/g, '_').slice(0, 60);
    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="GDPR-Report-${safeName}.pdf"`,
        'Content-Length': String(pdfBuffer.length),
      },
    });
  } catch (err: any) {
    console.error('PDF generation failed:', err);
    return NextResponse.json(
      { error: `PDF generation failed: ${err.message}` },
      { status: 500 }
    );
  }
}

// ── POST: result passed in body (from report page — survives cold-start) ──
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: scanId } = await params;
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format') || 'pdf';

  let result: any;
  try {
    result = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  return generateFromResult(result, scanId, format);
}

// ── GET: DB lookup with Stripe fallback + payment verification ──
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: scanId } = await params;
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format') || 'pdf';
  const sessionId = searchParams.get('session_id');
  const db = getDb();

  // 1. Try DB lookup
  const data = await getScanWithResult(scanId);

  // 2. Try Stripe fallback (DB may be empty due to Lambda cold-start)
  let result = data?.result;
  let scan = data?.scan;
  if (!result) {
    const stripeSessionId = (data?.scan as any)?.stripe_session_id || sessionId;
    if (stripeSessionId) {
      result = await getResultFromStripe(stripeSessionId, scanId, db);
    }
  }

  if (!result) {
    return NextResponse.json(
      { error: 'Report not ready. Scan may still be processing. Please refresh the page.' },
      { status: 404 }
    );
  }

  // 3. Payment gate: verify the scan was paid
  //    - Has a stripe_session_id → paid (single-scan or PDF upgrade)
  //    - No stripe_session_id → free scan, must verify via session_id param
  const hasStripeSession = !!(scan as any)?.stripe_session_id;
  if (!hasStripeSession && sessionId) {
    // Verify this session was actually paid for this scan
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      const paid = session.payment_status === 'paid';
      if (!paid) {
        return NextResponse.json(
          { error: 'Payment not confirmed. Please complete your purchase first.' },
          { status: 403 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: 'Could not verify payment. Please contact support.' },
        { status: 500 }
      );
    }
  } else if (!hasStripeSession && !sessionId) {
    // Free scan with no payment session — block PDF (show upgrade prompt instead)
    return NextResponse.json(
      { error: 'PDF not purchased. Please upgrade to access the full report.' },
      { status: 403 }
    );
  }

  return generateFromResult(result, scanId, format);
}
