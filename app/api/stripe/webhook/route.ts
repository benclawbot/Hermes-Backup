import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-02-24.acacia' as any,
    });

    const body = await request.text();
    const signature = request.headers.get('stripe-signature');
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!signature || !webhookSecret) {
      console.error('Missing stripe-signature or STRIPE_WEBHOOK_SECRET');
      return NextResponse.json({ error: 'Missing signature or webhook secret' }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return NextResponse.json({ error: 'Invalid signature', detail: err.message }, { status: 400 });
    }

    const db = getDb();

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const { scanId, url } = session.metadata || {};
        const customerEmail = session.customer_email || '';

        if (session.mode === 'payment') {
          // One-time scan — upsert scan with 'pending' so the trigger knows to run it.
          if (scanId) {
            const existing = db.prepare('SELECT id FROM scans WHERE id = ?').get(scanId);
            if (existing) {
              db.prepare(`
                UPDATE scans
                SET stripe_session_id = ?, email = COALESCE(?, email)
                WHERE id = ?
              `).run(session.id, customerEmail || null, scanId);
            } else {
              db.prepare(`
                INSERT INTO scans (id, url, status, email, stripe_session_id)
                VALUES (?, ?, 'pending', ?, ?)
              `).run(scanId, url || '', customerEmail || null, session.id);
            }
          }

          // Trigger scan immediately, pass Stripe session ID so result can be stored in Stripe metadata
          if (scanId && url) {
            triggerScan(scanId, url, session.id).catch(err => {
              console.error('Webhook scan trigger failed:', err.message);
            });
          }
        } else if (session.mode === 'subscription') {
          // Subscriber checkout
          const customerId = session.customer as string;
          const customerEmail = session.customer_email ?? '';

          const existingSub = db.prepare('SELECT id FROM subscribers WHERE stripe_customer_id = ?').get(customerId) as any;
          let subscriberId = existingSub?.id;

          if (!subscriberId) {
            subscriberId = uuidv4();
            db.prepare(`
              INSERT INTO subscribers (id, stripe_customer_id, email, plan, status)
              VALUES (?, ?, ?, 'monthly', 'active')
            `).run(subscriberId, customerId, customerEmail);
          } else {
            db.prepare(`
              UPDATE subscribers SET status = 'active', updated_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
              WHERE id = ?
            `).run(subscriberId);
          }

          const token = uuidv4();
          db.prepare(`
            INSERT OR REPLACE INTO subscriber_tokens (token, subscriber_id, created_at, last_used_at)
            VALUES (?, ?, strftime('%Y-%m-%dT%H:%M:%SZ', 'now'), strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
          `).run(token, subscriberId);

          // Subscriber dashboard link shown on success page — no email sent
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;
        db.prepare(`
          UPDATE subscribers SET status = 'cancelled', updated_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
          WHERE stripe_customer_id = ?
        `).run(customerId);
        break;
      }

      default:
        console.log('Unhandled event type:', event.type);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error('Webhook handler error:', err.message, err?.stack);
    return NextResponse.json({ error: 'Internal error', detail: err.message }, { status: 500 });
  }
}

async function triggerScan(scanId: string, url: string, stripeSessionId: string) {
  const { crawlPage } = await import('@/lib/crawler');
  const { runRuleBasedChecks } = await import('@/lib/gdpr-checks');
  const { analyzeWithAI } = await import('@/lib/ai-analysis');
  const { getDb } = await import('@/lib/db');

  const db = getDb();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-02-24.acacia' as any,
  });

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

    // Compress with gzip+base64 for corruption protection on Lambda /tmp (consistent with scan/route.ts)
    const rawJson = JSON.stringify(result);
    JSON.parse(rawJson); // validate before storing
    const compressed = require('zlib').gzipSync(Buffer.from(rawJson, 'utf8'));
    const resultJson = compressed.toString('base64');
    db.prepare(`
      UPDATE scans
      SET status = 'completed', result_json = ?, completed_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
      WHERE id = ?
    `).run(resultJson, scanId);

    // Store essential result data in Stripe metadata for cross-Lambda access
    // (DB may not persist across Lambda invocations on serverless)
    const meta = {
      scanId,
      url,
      status: 'completed',
      gdprScore: aiResult.gdprScore ?? 0,
      riskLevel: aiResult.riskLevel ?? 'unknown',
      summary: (aiResult.summary || '').slice(0, 400),
      issueCount: (aiResult.issues || []).length,
      positiveCount: (aiResult.positives || []).length,
      scannedAt: result.scannedAt,
    };
    try {
      await stripe.checkout.sessions.update(stripeSessionId, {
        metadata: {
          scanId,
          url,
          status: 'completed',
          // Store compressed summary in metadata (500-char limit per key)
          aiSummary: JSON.stringify(meta).slice(0, 450),
        },
      }).catch(() => {}); // Non-fatal if this fails
    } catch (_) {}
  } catch (error: any) {
    console.error('Trigger scan error:', error);
    db.prepare(`UPDATE scans SET status = 'failed' WHERE id = ?`).run(scanId);
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function generateReportHtml(url: string, result: any): string {
  const { ruleChecks, aiAnalysis } = result;
  const score = aiAnalysis?.gdprScore ?? 0;
  const scoreColor = score >= 70 ? '#22c55e' : score >= 40 ? '#f59e0b' : '#ef4444';

  const checksHtml = ruleChecks.map((check: any) => `
    <div style="padding:12px;margin:8px 0;border-radius:8px;background:#f5f5f5;border-left:4px solid ${check.passed ? '#22c55e' : '#ef4444'};">
      <strong>${escapeHtml(check.name)}</strong> — ${check.passed ? 'PASS' : 'FAIL'}
      <p style="margin:4px 0 0 0;color:#666;">${escapeHtml(check.detail || '')}</p>
    </div>
  `).join('');

  const issuesHtml = aiAnalysis?.issues?.length
    ? aiAnalysis.issues.map((issue: any) => `
        <div style="padding:12px;margin:8px 0;border-radius:8px;background:#fef2f2;border-left:4px solid ${issue.severity === 'critical' ? '#ef4444' : issue.severity === 'warning' ? '#f59e0b' : '#3b82f6'};">
          <strong>[${(issue.severity || 'info').toUpperCase()}] ${escapeHtml(issue.title || '')}</strong>
          <p style="margin:4px 0 0 0;color:#666;">${escapeHtml(issue.description || '')}</p>
          ${issue.fix ? `<p style="margin:4px 0 0 0;"><strong>Fix:</strong> ${escapeHtml(issue.fix)}</p>` : ''}
        </div>
      `).join('')
    : '';

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:800px;margin:0 auto;padding:40px 20px;color:#1a1a2e;">
  <div style="text-align:center;margin-bottom:40px;">
    <h1 style="color:#4f8ef7;font-size:28px;">ComplyScan</h1>
    <h2 style="font-size:22px;color:#1a1a2e;">GDPR Compliance Report</h2>
    <p style="color:#666;">${url}</p>
  </div>
  <div style="text-align:center;margin-bottom:40px;">
    <div style="font-size:80px;font-weight:bold;color:${scoreColor};">${score}</div>
    <div style="color:#666;">GDPR Compliance Score</div>
    <div style="margin-top:8px;"><span style="background:${scoreColor};color:#fff;padding:4px 12px;border-radius:12px;font-size:12px;">${(aiAnalysis?.riskLevel || 'unknown').toUpperCase()} RISK</span></div>
  </div>
  ${aiAnalysis?.summary ? `<div style="background:#f9f9f9;padding:20px;border-radius:12px;margin-bottom:30px;"><p style="margin:0;line-height:1.6;">${aiAnalysis.summary}</p></div>` : ''}
  <div style="margin-bottom:30px;">
    <h3 style="border-bottom:2px solid #4f8ef7;padding-bottom:8px;">Automated Checks</h3>
    ${checksHtml}
  </div>
  ${issuesHtml ? `<div style="margin-bottom:30px;">
    <h3 style="border-bottom:2px solid #4f8ef7;padding-bottom:8px;">AI-Detected Issues (${aiAnalysis.issues.length})</h3>
    ${issuesHtml}
  </div>` : ''}
  <div style="margin-top:40px;padding-top:20px;border-top:1px solid #eee;color:#999;font-size:12px;text-align:center;">
    Generated by ComplyScan — GDPR compliance made effortless
  </div>
</body>
</html>`;
}
