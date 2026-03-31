import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function POST(request: NextRequest) {
  const { scanId } = await request.json();
  if (!scanId) return NextResponse.json({ error: 'scanId required' }, { status: 400 });

  const db = getDb();
  const scan = db.prepare('SELECT * FROM scans WHERE id = ?').get(scanId) as any;
  if (!scan) return NextResponse.json({ error: 'Scan not found' }, { status: 404 });
  if (scan.status !== 'pending') return NextResponse.json({ status: scan.status });

  // Fire and forget
  doScan(scanId, scan.url).catch(console.error);

  return NextResponse.json({ ok: true });
}

async function doScan(scanId: string, url: string) {
  const { crawlPage } = await import('@/lib/crawler');
  const { runRuleBasedChecks } = await import('@/lib/gdpr-checks');
  const { analyzeWithAI } = await import('@/lib/ai-analysis');
  const { getDb } = await import('@/lib/db');

  const db = getDb();

  try {
    db.prepare(`UPDATE scans SET status = 'processing' WHERE id = ?`).run(scanId);

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

    db.prepare(`
      UPDATE scans
      SET status = 'completed', result_json = ?, completed_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
      WHERE id = ?
    `).run(JSON.stringify(result), scanId);

    console.log('Scan completed:', scanId);
  } catch (error: any) {
    console.error('Scan failed:', error.message);
    db.prepare(`UPDATE scans SET status = 'failed' WHERE id = ?`).run(scanId);
  }
}
