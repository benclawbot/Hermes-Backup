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
      console.error('Webhook signature verification failed:', err.message, 'type:', err.type);
      return NextResponse.json({ error: 'Invalid signature', detail: err.message, type: err.type }, { status: 400 });
    }

    const db = getDb();

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const { scanId, url } = session.metadata || {};

        if (session.mode === 'payment') {
          // One-time scan
          if (scanId) {
            db.prepare(`
              UPDATE scans
              SET stripe_session_id = ?, status = 'pending', email = COALESCE(?, email)
              WHERE id = ?
            `).run(session.id, session.customer_email ?? null, scanId);
            triggerScan(scanId, url ?? '').catch(console.error);
          }
        } else if (session.mode === 'subscription') {
          // Subscriber checkout — create subscriber + token, email dashboard link
          const customerId = session.customer as string;
          const customerEmail = session.customer_email ?? '';

          // Upsert subscriber
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

          // Generate subscriber token
          const token = uuidv4();
          db.prepare(`
            INSERT OR REPLACE INTO subscriber_tokens (token, subscriber_id, created_at, last_used_at)
            VALUES (?, ?, strftime('%Y-%m-%dT%H:%M:%SZ', 'now'), strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
          `).run(token, subscriberId);

          // Email dashboard access link
          if (process.env.RESEND_API_KEY && customerEmail) {
            const { Resend } = await import('resend');
            const resend = new Resend(process.env.RESEND_API_KEY);
            const dashboardUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'https://complyscan2.vercel.app'}/dashboard?token=${token}`;

            await resend.emails.send({
              from: 'ComplyScan <hello@complyscan.com>',
              to: customerEmail,
              subject: 'Your ComplyScan Dashboard Access',
              html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;padding:40px 20px;color:#1a1a2e;">
  <h1 style="color:#4f8ef7;">Welcome to ComplyScan!</h1>
  <p>Your subscription is active. Access your dashboard to run unlimited GDPR scans:</p>
  <a href="${dashboardUrl}" style="display:inline-block;background:#4f8ef7;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;margin:20px 0;">Open Dashboard</a>
  <p style="color:#666;font-size:14px;">Or copy this link: ${dashboardUrl}</p>
  <hr style="border:none;border-top:1px solid #eee;margin:30px 0;">
  <p style="color:#999;font-size:12px;">ComplyScan — GDPR compliance made effortless</p>
</body>
</html>`,
            });
          }
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
    console.error('Webhook handler error:', err.message, err.stack);
    return NextResponse.json({ error: 'Internal error', detail: err.message }, { status: 500 });
  }
}

async function triggerScan(scanId: string, url: string) {
  // Dynamic imports to avoid circular dependency issues
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

    // Send email with report
    const scan = db.prepare('SELECT * FROM scans WHERE id = ?').get(scanId) as any;
    if (scan?.email && process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      const reportHtml = generateReportHtml(url, result);

      await resend.emails.send({
        from: 'ComplyScan <reports@complyscan.com>',
        to: scan.email,
        subject: `GDPR Compliance Report for ${url}`,
        html: reportHtml,
      });
    }
  } catch (error: any) {
    console.error('Trigger scan error:', error);
    db.prepare(`UPDATE scans SET status = 'failed' WHERE id = ?`).run(scanId);
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
