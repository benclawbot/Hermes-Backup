import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getDb, compressGzip } from '@/lib/env';
import { crawlPage } from '@/lib/crawler';
import { runRuleBasedChecks } from '@/lib/gdpr-checks';
import { analyzeWithAI } from '@/lib/ai-analysis';

function verifySubscriberToken(token: string): { subscriberId: string; email: string } | null {
  const db = getDb();
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

export async function GET(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({ error: 'Token required' }, { status: 401 });
  }

  const sub = verifySubscriberToken(token);
  if (!sub) {
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
  }

  const db = getDb();
  db.prepare(`UPDATE subscriber_tokens SET last_used_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now') WHERE token = ?`).run(token);

  const scans = db.prepare(`
    SELECT id, url, status, created_at, completed_at
    FROM scans
    WHERE subscriber_id = ?
    ORDER BY created_at DESC
    LIMIT 50
  `).all(sub.subscriberId);

  return NextResponse.json({ scans });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
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

    const db = getDb();

    // Validate subscriber token using shared helper
    const sub = verifySubscriberToken(token);
    if (!sub) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    // Update last_used_at
    db.prepare(`UPDATE subscriber_tokens SET last_used_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now') WHERE token = ?`).run(token);

    const subscriberId = sub.subscriberId;
    const email = sub.email;
    const scanId = uuidv4();

    // Create scan record
    db.prepare(`
      INSERT INTO scans (id, url, email, status, subscriber_id)
      VALUES (?, ?, ?, 'processing', ?)
    `).run(scanId, url, email, subscriberId);

    // Run scan async and email result
    runSubscriberScan(scanId, url, email).catch(err => {
      console.error('Subscriber scan failed:', err);
      db.prepare(`UPDATE scans SET status = 'failed' WHERE id = ?`).run(scanId);
    });

    return NextResponse.json({
      scanId,
      status: 'processing',
      message: 'Scan started. You will receive the report by email.'
    });
  } catch (error: any) {
    console.error('Subscriber scan error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function runSubscriberScan(scanId: string, url: string, email: string | null) {
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
  } catch (error: any) {
    console.error('Subscriber scan processing error:', error);
    throw error;
  }
}

function generateReportHtml(url: string, result: any): string {
  const { ruleChecks, aiAnalysis } = result;
  const score = aiAnalysis?.gdprScore ?? 0;
  const scoreColor = score >= 70 ? '#22c55e' : score >= 40 ? '#f59e0b' : '#ef4444';

  const checksHtml = ruleChecks.map((check: any) => `
    <div style="padding:12px;margin:8px 0;border-radius:8px;background:#f5f5f5;border-left:4px solid ${check.passed ? '#22c55e' : '#ef4444'};">
      <strong>${check.name}</strong> — ${check.passed ? 'PASS' : 'FAIL'}
      <p>${check.detail}</p>
      ${check.recommendation ? `<p><em>Fix: ${check.recommendation}</em></p>` : ''}
    </div>
  `).join('');

  const issuesHtml = aiAnalysis?.issues?.length
    ? aiAnalysis.issues.map((issue: any) => `
        <div style="padding:12px;margin:8px 0;border-radius:8px;background:#fef2f2;border-left:4px solid #ef4444;">
          <strong>${issue.title}</strong> (${issue.severity})
          <p>${issue.description}</p>
          <p><strong>Fix:</strong> ${issue.fix}</p>
        </div>
      `).join('')
    : '';

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>GDPR Report</title>
</head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:800px;margin:0 auto;padding:40px 20px;color:#1a1a2e;">
  <div style="text-align:center;margin-bottom:40px;">
    <h1 style="font-size:28px;color:#4f8ef7;">ComplyScan</h1>
    <h2>GDPR Compliance Report</h2>
    <p style="color:#666;">${url}</p>
  </div>
  <div style="text-align:center;font-size:72px;font-weight:bold;color:${scoreColor};">${score}/100</div>
  <div style="text-align:center;color:#666;margin-bottom:30px;">GDPR Compliance Score</div>
  <div style="margin-bottom:30px;">
    <h3 style="border-bottom:2px solid #4f8ef7;padding-bottom:8px;">Automated Checks</h3>
    ${checksHtml}
  </div>
  ${issuesHtml ? `<div style="margin-bottom:30px;">
    <h3 style="border-bottom:2px solid #4f8ef7;padding-bottom:8px;">AI-Detected Issues</h3>
    ${issuesHtml}
  </div>` : ''}
  <div style="text-align:center;color:#999;font-size:12px;margin-top:50px;">
    <p>Generated by ComplyScan — GDPR compliance made effortless</p>
  </div>
</body>
</html>`;
}
