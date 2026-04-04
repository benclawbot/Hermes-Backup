import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getDb, sendScanJob } from '@/lib/env';
import { generateReportHtml } from '@/lib/report';

function verifySubscriberToken(db: any, token: string): { subscriberId: string; email: string } | null {
  const rec = db.prepare(`
    SELECT st.subscriber_id, s.email, s.status
    FROM subscriber_tokens st
    JOIN subscribers s ON s.id = st.subscriber_id
    WHERE st.token = ?
  `).get(token) as any;

  if (!rec) return null;
  if (rec.status !== 'active') return null;
  return { subscriberId: rec.subscriber_id, email: rec.email };
}

/**
 * GET /api/scan/subscriber — list recent scans
 * POST /api/scan/subscriber — create new scan (queue-based on Cloudflare)
 */
export async function GET(request: NextRequest) {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({ error: 'Token required' }, { status: 401 });
  }

  const env: any = (request as any).env ?? (globalThis as any).__env ?? undefined;
  const db = getDb(env);

  const sub = verifySubscriberToken(db, token);
  if (!sub) {
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
  }

  db.prepare(`UPDATE subscriber_tokens SET last_used_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now') WHERE token = ?`).run(token);

  const scans = db.prepare(`
    SELECT id, url, status, created_at, completed_at
    FROM scans
    WHERE email = ?
    ORDER BY created_at DESC
    LIMIT 50
  `).all(sub.email);

  return NextResponse.json({ scans });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { url?: string; token?: string };
    const { url, token } = body;

    if (!url || !token) {
      return NextResponse.json({ error: 'URL and token are required' }, { status: 400 });
    }

    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url);
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        throw new Error('Invalid protocol');
      }
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
    }

    const env: any = (request as any).env ?? (globalThis as any).__env ?? undefined;
    const db = getDb(env);

    const sub = verifySubscriberToken(db, token);
    if (!sub) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    db.prepare(`UPDATE subscriber_tokens SET last_used_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now') WHERE token = ?`).run(token);

    const subscriberId = sub.subscriberId;
    const email = sub.email;
    const scanId = uuidv4();

    // Create scan record with pending status
    db.prepare(`
      INSERT INTO scans (id, url, email, status, subscriber_id, created_at)
      VALUES (?, ?, ?, 'pending', ?, strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
    `).run(scanId, url, email, subscriberId);

    // ── Cloudflare: send to Queue ─────────────────────────────────────────
    if (env?.SCAN_QUEUE) {
      await sendScanJob({ scanId, url, email, trigger: 'subscriber' }, env);
      return NextResponse.json({
        scanId,
        status: 'queued',
        message: 'Scan queued. You will receive the report by email.'
      });
    }

    // ── Vercel fallback: run synchronously ─────────────────────────────────
    db.prepare(`UPDATE scans SET status = 'processing' WHERE id = ?`).run(scanId);

    const { crawlPage } = await import('@/lib/crawler');
    const { runRuleBasedChecks } = await import('@/lib/gdpr-checks');
    const { analyzeWithAI } = await import('@/lib/ai-analysis');

    const crawlResult = await crawlPage(url);
    const ruleChecks = runRuleBasedChecks(crawlResult);
    const aiResult = await analyzeWithAI(crawlResult, ruleChecks);

    const result = {
      crawl: crawlResult,
      ruleChecks,
      aiAnalysis: aiResult,
      scannedAt: new Date().toISOString(),
    };

    const { compressGzip } = await import('@/lib/env');
    const rawJson = JSON.stringify(result);
    const resultJson = await compressGzip(rawJson);
    db.prepare(`
      UPDATE scans
      SET status = 'completed', result_json = ?, completed_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
      WHERE id = ?
    `).run(resultJson, scanId);

    // Email report
    if (email && process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      const reportHtml = generateReportHtml(url, result);

      await resend.emails.send({
        from: 'ComplyScan <reports@complyscan.com>',
        to: email,
        subject: `GDPR Compliance Report for ${url}`,
        html: reportHtml,
      });
    }

    return NextResponse.json({
      scanId,
      status: 'completed',
      result,
      message: 'Scan complete. Report sent by email.'
    });
  } catch (error: any) {
    console.error('Subscriber scan error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
