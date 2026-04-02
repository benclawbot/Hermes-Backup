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

    let result: any = null;
    try {
      const { crawlPage } = await import('@/lib/crawler');
      const { runRuleBasedChecks } = await import('@/lib/gdpr-checks');
      const { analyzeWithAI } = await import('@/lib/ai-analysis');

      const crawlResult = await crawlPage(scan.url || scan.metadata?.url);
      const ruleChecks = runRuleBasedChecks(crawlResult);
      const aiResult = await analyzeWithAI(crawlResult, ruleChecks);

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
    } catch (err: any) {
      console.error('Scan error:', err.message);
      db.prepare(`UPDATE scans SET status = 'failed' WHERE id = ?`).run(scanId);
      return NextResponse.json({ status: 'failed', error: err.message }, { status: 500 });
    }

    // Write to DB
    db.prepare(`
      UPDATE scans
      SET status = 'completed', result_json = ?, completed_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
      WHERE id = ?
    `).run(JSON.stringify(result), scanId);

    // Write to Stripe metadata — BLOCKING so the result is guaranteed available
    // when the success page polls /api/report/[id] on any Lambda instance.
    // Stripe metadata is the only cross-instance shared store in this architecture.
    if (scan.stripe_session_id) {
      try {
        const stripeKey = process.env.STRIPE_SECRET_KEY;
        if (stripeKey) {
          const stripe = new Stripe(stripeKey);
          const serialized = JSON.stringify(result);

          // Stripe metadata has a 16KB limit per session.
          // If result exceeds that, store a sentinel + rely on DB as primary.
          if (serialized.length <= 15000) {
            await stripe.checkout.sessions.update(scan.stripe_session_id, {
              metadata: { scanResult: serialized },
            });
          } else {
            // Result too large for metadata — DB is authoritative; log for observability
            console.warn(`Scan result for ${scanId} (${serialized.length}B) exceeds Stripe metadata limit. DB is authoritative.`);
          }
        }
      } catch (e: any) {
        // DB write succeeded — report endpoint will still find the result.
        // Log but don't fail the request.
        console.error('Failed to update Stripe metadata:', e.message);
      }
    }

    return NextResponse.json({ status: 'completed', result });
  } catch (err: any) {
    console.error('Trigger error:', err?.message || err);
    return NextResponse.json({ error: err?.message || 'Trigger failed' }, { status: 500 });
  }
}
