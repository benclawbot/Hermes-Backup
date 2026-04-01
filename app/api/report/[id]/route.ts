import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import Stripe from 'stripe';
import { generateReportHtml } from '@/lib/report';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: scanId } = await params;
  const sessionId = request.nextUrl.searchParams.get('session_id');
  const db = getDb();

  // Primary: check DB
  const scan = db.prepare('SELECT * FROM scans WHERE id = ?').get(scanId) as any;

  // If scan is completed in DB, return immediately (no Stripe API call needed)
  // result_json is gzip+base64 encoded for corruption protection on Lambda /tmp
  // (falls back to plain JSON for records written before this fix)
  if (scan?.status === 'completed' && scan?.result_json) {
    try {
      let rawJson: string;
      try {
        // Try compressed (gzip+base64) format first
        rawJson = require('zlib').gunzipSync(Buffer.from(scan.result_json, 'base64')).toString('utf8');
      } catch {
        // Fall back to plain JSON (for old records before compression fix)
        rawJson = scan.result_json;
      }
      const result = JSON.parse(rawJson);
      const html = generateReportHtml(scan.url || '', result);
      return NextResponse.json({ reportHtml: html, url: scan.url || '' });
    } catch (e: any) {
      console.error('DB parse failed:', e.message, '— falling back to Stripe');
      // Fall through to Stripe fallback below
    }
  }

  // Secondary: look up by scan ID in Stripe metadata directly (DB may not be shared across Lambda instances)
  const stripeSessionId = scan?.stripe_session_id || sessionId;
  if (stripeSessionId) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');
      const stripeSession = await stripe.checkout.sessions.retrieve(stripeSessionId);
      const scanResultJson = stripeSession?.metadata?.scanResult;
      if (scanResultJson) {
        try {
          const result = JSON.parse(scanResultJson);
          // Cache in DB if available
          try {
            db.prepare(`INSERT OR REPLACE INTO scans (id, url, status, email, stripe_session_id, result_json) VALUES (?, ?, 'completed', ?, ?, ?)`)
              .run(scanId, stripeSession.metadata?.url || scan?.url || '', stripeSession.customer_email || scan?.email || null, stripeSessionId, scanResultJson);
          } catch {}
          const reportUrl = stripeSession.metadata?.url || scan?.url || '';
          const html = generateReportHtml(reportUrl, result);
          return NextResponse.json({ reportHtml: html, url: reportUrl });
        } catch (e: any) {
          console.error('Stripe metadata parse failed:', e.message);
        }
      }
    } catch (e: any) {
      console.error('Stripe session retrieve failed:', e.message);
    }
  }

  // Fallback: return based on what we know
  if (!scan && !stripeSessionId) {
    return NextResponse.json({ error: 'Scan not found' }, { status: 404 });
  }

  if (scan?.status === 'pending' || scan?.status === 'processing') {
    return NextResponse.json({ error: 'Scan not yet complete' }, { status: 202 });
  }

  if (scan?.status === 'failed') {
    return NextResponse.json({ error: 'Scan failed. Please try again.' }, { status: 500 });
  }

  if (scan?.status === 'completed' && !scan?.result_json) {
    return NextResponse.json({ error: 'Scan not yet available' }, { status: 202 });
  }

  return NextResponse.json({ error: 'Scan not yet complete' }, { status: 202 });
}
