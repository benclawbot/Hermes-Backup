import { NextRequest, NextResponse } from 'next/server';
import { getDb, parseResultJson, decompressGzip } from '@/lib/env';
import Stripe from 'stripe';
import { generateReportHtml } from '@/lib/report';
import crypto from 'crypto';

function verifyAgencySubscriber(token: string, db: ReturnType<typeof getDb>): { subscriberId: string; email: string } | null {
  const rec = db.prepare(`
    SELECT st.subscriber_id, st.expires_at, s.email, s.status, s.plan
    FROM subscriber_tokens st
    JOIN subscribers s ON s.id = st.subscriber_id
    WHERE st.token=?
  `).get(token) as any;

  if (!rec) return null;
  if (rec.status !== 'active') return null;
  if (rec.plan !== 'agency') return null;
  if (rec.expires_at && new Date(rec.expires_at) < new Date()) return null;
  return { subscriberId: rec.subscriber_id, email: rec.email };
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
  env: any
) {
  const { id: scanId } = await params;
  const sessionId = request.nextUrl.searchParams.get('session_id');
  const db = getDb(env);

  // Primary: check DB
  const scan = await db.prepare('SELECT * FROM scans WHERE id = ?').get(scanId) as any;

  // If scan is completed in DB, return immediately (no Stripe API call needed)
  // result_json may have a hash suffix appended for corruption detection on Lambda /tmp
  if (scan?.status === 'completed' && scan?.result_json) {
    try {
      let rawJson = scan.result_json;
      // Strip hash suffix if present (format: JSON|||HASH:...)
      const hashIdx = rawJson.indexOf('|||HASH:');
      if (hashIdx !== -1) {
        const storedHash = rawJson.slice(hashIdx + 8);
        rawJson = rawJson.slice(0, hashIdx);
        // Verify integrity
        if (storedHash) {
          const computedHash = crypto.createHash('sha256').update(rawJson).digest('hex').slice(0, 16);
          if (storedHash !== computedHash) {
            throw new Error(`DB JSON integrity check failed (stored=${storedHash}, computed=${computedHash})`);
          }
        }
      }
      // result_json is stored as gzip+base64 — detect via magic bytes
      let result;
      const firstBytes = atob(rawJson.slice(0, Math.ceil(2 * 4 / 3)));
      const isGzip = firstBytes.charCodeAt(0) === 0x1f && firstBytes.charCodeAt(1) === 0x8b;
      if (isGzip) {
        result = JSON.parse(await decompressGzip(rawJson));
      } else {
        result = JSON.parse(rawJson);
      }
      const html = generateReportHtml(scan.url || '', result);
      return NextResponse.json({ reportHtml: html, url: scan.url || '' });
    } catch (e: any) {
      console.error('DB parse/integrity failed:', e.message, '— falling back to Stripe');
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
            await db.prepare(`INSERT OR REPLACE INTO scans (id, url, status, email, stripe_session_id, result_json) VALUES (?, ?, 'completed', ?, ?, ?)`)
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
