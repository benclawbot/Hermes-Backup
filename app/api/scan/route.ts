import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '@/lib/db';
import { crawlPage } from '@/lib/crawler';
import { runRuleBasedChecks } from '@/lib/gdpr-checks';
import { analyzeWithAI } from '@/lib/ai-analysis';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, email } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
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

    const scanId = uuidv4();
    const db = getDb();

    db.prepare(`
      INSERT INTO scans (id, url, email, status)
      VALUES (?, ?, ?, 'processing')
    `).run(scanId, url, email || null);

    processScanAsync(scanId, url).catch(err => {
      console.error('Scan failed:', err);
      db.prepare(`UPDATE scans SET status = 'failed' WHERE id = ?`).run(scanId);
    });

    return NextResponse.json({
      scanId,
      status: 'processing',
      message: 'Scan started. Use GET /api/scan/[id] to check status.'
    });
  } catch (error: any) {
    console.error('Scan error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function processScanAsync(scanId: string, url: string) {
  const db = getDb();

  try {
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
  } catch (error: any) {
    console.error('Processing error:', error);
    throw error;
  }
}
