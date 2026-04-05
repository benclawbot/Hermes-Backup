import { NextRequest, NextResponse } from 'next/server';
import { getDb, compressGzip, sendScanJob } from '@/lib/env';

/**
 * POST /api/scan/trigger
 *
 * Cloudflare Pages: writes to D1, sends job to SCAN_QUEUE, returns immediately.
 * Vercel fallback: runs scan synchronously (original behavior).
 *
 * Expected body: { scanId?, url, email? }
 * Returns: { status: 'queued'|'processing', scanId }
 */
export async function POST(request: NextRequest) {
  // Support both /api/scan/trigger (body scanId) and /api/scan/[id]/route (URL param)
  let scanId: string | undefined;
  let url: string | undefined;
  let email: string | undefined;

  // Check Content-Type to distinguish JSON body vs form params
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const body = await request.json() as { scanId?: string; url?: string; email?: string; id?: string };
    scanId = body.scanId || body.id;
    url = body.url;
    email = body.email;
  } else {
    // URL-encoded or GET
    const formData = await request.formData();
    scanId = (formData.get('scanId') as string) || (formData.get('id') as string);
    url = (formData.get('url') as string) || undefined;
    email = (formData.get('email') as string) || undefined;
  }

  if (!url) {
    return NextResponse.json({ error: 'url is required' }, { status: 400 });
  }

  // Attempt to get env (Cloudflare Pages passes it as 3rd param, Next.js API routes don't have it)
  // We detect runtime by checking if we're in a Cloudflare context
  const isCloudflare = typeof globalThis !== 'undefined' && 'D1Database' in globalThis;
  let env: any;
  try {
    // In Cloudflare Pages, env is passed as second param to pages functions
    // Next.js API routes don't have this — we fall back to Vercel/sync mode
    env = (request as any).env ?? (globalThis as any).__env ?? undefined;
  } catch {
    env = undefined;
  }

  const db = getDb(env);

  // ── New scan: create record in D1 ─────────────────────────────────────────
  if (!scanId) {
    const { v4: uuidv4 } = await import('uuid');
    scanId = uuidv4();
  }

  let existingScan: any = null;
  if (scanId) {
    existingScan = await db.prepare('SELECT * FROM scans WHERE id = ?').get(scanId) as any;
  }

  if (existingScan) {
    // If already completed, return result immediately
    if (existingScan.status === 'completed' && existingScan.result_json) {
      const { parseResultJson } = await import('@/lib/env');
      const result = await parseResultJson(existingScan.result_json);
      return NextResponse.json({ status: 'completed', result: result || {}, scanId });
    }
    // If already processing/pending via queue, just return queued status
    if (existingScan.status === 'processing' || existingScan.status === 'pending') {
      return NextResponse.json({ status: 'queued', scanId });
    }
  }

  // Insert new scan record with pending status
  db.prepare(`
    INSERT OR REPLACE INTO scans (id, url, status, email, stripe_session_id, created_at)
    VALUES (?, ?, 'pending', ?, NULL, strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
  `).run(scanId, url, email || null);

  // ── Cloudflare: send to Queue ─────────────────────────────────────────────
  if (env?.SCAN_QUEUE) {
    await sendScanJob({ scanId, url, email, trigger: 'stripe' }, env);
    return NextResponse.json({ status: 'queued', scanId });
  }

  // ── Vercel fallback: run synchronously ────────────────────────────────────
  // Keep original synchronous behavior as fallback
  db.prepare(`UPDATE scans SET status = 'processing' WHERE id = ?`).run(scanId);

  try {
    const { crawlPage } = await import('@/lib/crawler');
    const { runRuleBasedChecks } = await import('@/lib/gdpr-checks');
    const { analyzeWithAI } = await import('@/lib/ai-analysis');

    const crawlResult = await crawlPage(url);
    const ruleChecks = runRuleBasedChecks(crawlResult);
    const aiResult = await analyzeWithAI(crawlResult, ruleChecks);

    const result = {
      crawl: {
        title: crawlResult.title,
        description: crawlResult.description,
        h1s: crawlResult.h1s,
        trackingScripts: crawlResult.trackingScripts,
        formsCount: crawlResult.formsCount,
        hasSSL: crawlResult.hasSSL,
        statusCode: crawlResult.statusCode,
      },
      ruleChecks,
      aiAnalysis: aiResult,
      scannedAt: new Date().toISOString(),
    };

    const rawJson = JSON.stringify(result);
    const resultJson = await compressGzip(rawJson);

    db.prepare(`
      UPDATE scans
      SET status = 'completed', result_json = ?, completed_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
      WHERE id = ?
    `).run(resultJson, scanId);

    return NextResponse.json({ status: 'completed', result, scanId });
  } catch (err: any) {
    console.error(`Scan ${scanId} failed:`, err.message);
    db.prepare(`UPDATE scans SET status = 'failed' WHERE id = ?`).run(scanId);
    return NextResponse.json({ error: err.message || 'Scan failed' }, { status: 500 });
  }
}
