import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  try {
    const { scanId } = await request.json();
    if (!scanId) {
      return NextResponse.json({ error: 'scanId required' }, { status: 400 });
    }

    const db = getDb();
    const scan = db.prepare('SELECT * FROM scans WHERE id = ?').get(scanId) as any;

    if (!scan) {
      return NextResponse.json({ error: 'Scan not found' }, { status: 404 });
    }

    // Already done with a result — return immediately
    if (scan.status === 'completed' && scan.result_json) {
      return NextResponse.json({ status: 'completed', result: JSON.parse(scan.result_json || '{}') });
    }

    // completed but no result_json means the webhook raced ahead — fall through and run the scan
    if (scan.status === 'completed' && !scan.result_json) {
      // intentionally fall through to processing
    }

    // In progress elsewhere — report current state unless there's no result_json
    // (stuck in processing from a previous partial failure — re-process it)
    if (scan.status === 'processing' && scan.result_json) {
      return NextResponse.json({ status: 'processing' });
    }

    // Mark as processing
    db.prepare(`UPDATE scans SET status = 'processing' WHERE id = ?`).run(scanId);

    // Run the actual scan in the background — fire and forget.
    // Vercel serverless waits for setTimeout() callbacks to settle before terminating,
    // so this will complete even after we return the HTTP response.
    setTimeout(async () => {
      let result: any = null;
      try {
        const { crawlPage } = await import('@/lib/crawler');
        const { runRuleBasedChecks } = await import('@/lib/gdpr-checks');
        const { analyzeWithAI } = await import('@/lib/ai-analysis');

        const { getDb: getDbBg } = await import('@/lib/db');
        const dbBg = getDbBg();
        // Re-read scan in this context (may be a different Lambda instance with fresh DB)
        const scanBg = dbBg.prepare('SELECT * FROM scans WHERE id = ?').get(scanId) as any;
        if (!scanBg) {
          console.error(`[trigger] Background scan ${scanId}: scan not found`);
          return;
        }
        if (scanBg.status === 'completed') {
          console.log(`[trigger] Background scan ${scanId}: already completed, skipping`);
          return;
        }

        console.log(`[trigger] Background scan starting ${scanId} for URL:`, scanBg.url);
        const crawlResult = await crawlPage(scanBg.url);
        console.log(`[trigger] Crawl done for ${scanId}, title:`, crawlResult.title);
        const ruleChecks = runRuleBasedChecks(crawlResult);
        const aiResult = await analyzeWithAI(crawlResult, ruleChecks);
        console.log(`[trigger] AI analysis done for ${scanId}, score:`, aiResult.gdprScore);

        result = {
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

        // Compress with gzip+base64 (consistent format expected by report reader)
        const rawJson = JSON.stringify(result);
        const compressed = require('zlib').gzipSync(Buffer.from(rawJson, 'utf8'));
        const resultJson = compressed.toString('base64');

        dbBg.prepare(`
          UPDATE scans
          SET status = 'completed', result_json = ?, completed_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
          WHERE id = ?
        `).run(resultJson, scanId);

        console.log(`[trigger] Background scan ${scanId} completed successfully`);
      } catch (err: any) {
        console.error(`[trigger] Background scan ${scanId} failed:`, err.message);
        try {
          const { getDb: getDbErr } = await import('@/lib/db');
          getDbErr().prepare(`UPDATE scans SET status = 'failed' WHERE id = ?`).run(scanId);
        } catch (_) {}
      }
    }, 0);

    // Return immediately — the scan is running in the background
    return NextResponse.json({ status: 'processing' });
  } catch (err: any) {
    console.error('Trigger error:', err?.message || err);
    return NextResponse.json({ error: err?.message || 'Trigger failed' }, { status: 500 });
  }
}
