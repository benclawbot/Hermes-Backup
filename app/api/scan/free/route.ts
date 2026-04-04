import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '@/lib/db';

export const maxDuration = 60;

const FREE_SCAN_LIMIT = 3; // per email per month

// Rate-limit check: count scans for this email in the current calendar month
function getMonthlyScanCount(db: any, email: string): number {
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);
  const row = db
    .prepare(
      `SELECT COUNT(*) as count FROM scans WHERE email = ? AND created_at >= ?`
    )
    .get(email, startOfMonth.toISOString()) as { count: number } | undefined;
  return row?.count ?? 0;
}

export async function POST(request: NextRequest) {
  const { url, email } = await request.json();

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }
  if (!email) {
    return NextResponse.json({ error: 'Email is required for free scans' }, { status: 400 });
  }

  const db = getDb();
  const count = getMonthlyScanCount(db, email);

  if (count >= FREE_SCAN_LIMIT) {
    return NextResponse.json(
      {
        error: `Free scan limit reached (${FREE_SCAN_LIMIT}/month). Upgrade to Pro for unlimited scans.`,
        code: 'LIMIT_REACHED',
      },
      { status: 429 }
    );
  }

  // Create scan record
  const scanId = uuidv4();
  db.prepare(
    `INSERT INTO scans (id, url, status, email, stripe_session_id) VALUES (?, ?, 'processing', ?, NULL)`
  ).run(scanId, url, email);

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
        url: crawlResult.url,
        h1s: crawlResult.h1s,
        trackingScripts: crawlResult.trackingScripts,
        formsCount: crawlResult.formsCount,
        hasSSL: crawlResult.hasSSL,
        statusCode: crawlResult.statusCode,
        hasPrivacyPolicy: crawlResult.hasPrivacyPolicy,
        hasCookiePolicyPage: crawlResult.hasCookiePolicyPage,
        hasCookieBanner: crawlResult.hasCookieBanner,
        cookieBannerText: crawlResult.cookieBannerText,
        privacyPolicyUrl: crawlResult.privacyPolicyUrl,
        formInputsLabeled: crawlResult.formInputsLabeled,
        totalFormInputs: crawlResult.totalFormInputs,
        thirdPartyEmbeds: crawlResult.thirdPartyEmbeds,
      },
      ruleChecks,
      aiAnalysis: aiResult,
      scannedAt: new Date().toISOString(),
    };

    // Compress result for storage
    const rawJson = JSON.stringify(result);
    const compressed = require('zlib').gzipSync(Buffer.from(rawJson, 'utf8'));
    const resultJson = compressed.toString('base64');

    db.prepare(
      `UPDATE scans SET status = 'completed', result_json = ?, completed_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now') WHERE id = ?`
    ).run(resultJson, scanId);

    // Trigger welcome email (non-blocking)
    import('@/lib/mailjet').then(({ subscribeToNurture }) => {
      subscribeToNurture({ email, scanUrl: url }).catch(() => {});
    });

    return NextResponse.json({ scanId, status: 'completed', result });
  } catch (err: any) {
    console.error(`Free scan ${scanId} failed:`, err.message);
    db.prepare(`UPDATE scans SET status = 'failed' WHERE id = ?`).run(scanId);
    return NextResponse.json({ error: err.message || 'Scan failed' }, { status: 500 });
  }
}
