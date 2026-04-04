import { NextRequest, NextResponse } from 'next/server';
import { getDb, parseResultJson, compressGzip } from '@/lib/env';

// Extend timeout to 60s (scan takes ~50s) — works on Vercel Hobby
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const { scanId, url, email } = await request.json();

  const db = getDb();

  if (!scanId || !url) {
    return NextResponse.json({ error: 'scanId and url are required' }, { status: 400 });
  }

  let scan = scanId ? (db.prepare('SELECT * FROM scans WHERE id = ?').get(scanId) as any) : null;

  // Scan doesn't exist — create it
  if (!scan) {
    const { v4: uuidv4 } = await import('uuid');
    const id = scanId || uuidv4();
    db.prepare(`
      INSERT INTO scans (id, url, status, email, stripe_session_id)
      VALUES (?, ?, 'processing', ?, NULL)
    `).run(id, url, email || null);
    scan = { id, url, status: 'processing' };
  }

  // Already done with a result — return immediately
  if (scan.status === 'completed' && scan.result_json) {
    try {
      const result = await parseResultJson(scan.result_json);
      return NextResponse.json({ status: 'completed', result: result || {} });
    } catch {
      return NextResponse.json({ status: 'completed', result: {} });
    }
  }

  // Mark as processing (in case it was pending from a previous run)
  db.prepare(`UPDATE scans SET status = 'processing' WHERE id = ?`).run(scan.id);

  try {
    const { crawlPage } = await import('@/lib/crawler');
    const { runRuleBasedChecks } = await import('@/lib/gdpr-checks');
    const { analyzeWithAI } = await import('@/lib/ai-analysis');

    const crawlResult = await crawlPage(scan.url);
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

    // Compress with gzip+base64 for consistent storage format
    const rawJson = JSON.stringify(result);
    const resultJson = await compressGzip(rawJson);

    db.prepare(`
      UPDATE scans
      SET status = 'completed', result_json = ?, completed_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
      WHERE id = ?
    `).run(resultJson, scan.id);

    return NextResponse.json({ status: 'completed', result });
  } catch (err: any) {
    console.error(`Scan ${scan.id} failed:`, err.message);
    db.prepare(`UPDATE scans SET status = 'failed' WHERE id = ?`).run(scan.id);
    return NextResponse.json({ error: err.message || 'Scan failed' }, { status: 500 });
  }
}
