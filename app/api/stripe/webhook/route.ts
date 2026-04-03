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

          // Scan is triggered by /api/scan/trigger on the /success page.
          // The webhook just pre-creates the record so it exists before Stripe redirects.
        } else if (session.mode === 'subscription') {
          // Subscriber checkout
          const customerId = session.customer as string;
          const customerEmail = session.customer_email ?? '';

          // Retrieve subscription to get current_period_end
          let periodEnd: string | null = null;
          let cancelAtPeriodEnd = false;
          try {
            const subscription = await stripe.subscriptions.retrieve(session.subscription as string) as any;
            periodEnd = subscription.current_period_end
              ? new Date(subscription.current_period_end * 1000).toISOString()
              : null;
            cancelAtPeriodEnd = subscription.cancel_at_period_end;
          } catch (_) {}

          const existingSub = db.prepare('SELECT id FROM subscribers WHERE stripe_customer_id = ?').get(customerId) as any;
          let subscriberId = existingSub?.id;

          if (!subscriberId) {
            subscriberId = uuidv4();
            db.prepare(`
              INSERT INTO subscribers (id, stripe_customer_id, email, plan, status, current_period_end, cancel_at_period_end)
              VALUES (?, ?, ?, 'monthly', 'active', ?, ?)
            `).run(subscriberId, customerId, customerEmail, periodEnd, cancelAtPeriodEnd ? 1 : 0);
          } else {
            db.prepare(`
              UPDATE subscribers
              SET status = 'active',
                  current_period_end = COALESCE(?, current_period_end),
                  cancel_at_period_end = ?,
                  updated_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
              WHERE id = ?
            `).run(periodEnd, cancelAtPeriodEnd ? 1 : 0, subscriberId);
          }

          // Clear any expired token and create a fresh one
          const token=uuidv4();
          db.prepare(`
            DELETE FROM subscriber_tokens WHERE subscriber_id = ?
          `).run(subscriberId);
          db.prepare(`
            INSERT INTO subscriber_tokens (token, subscriber_id, created_at, last_used_at)
            VALUES (?, ?, strftime('%Y-%m-%dT%H:%M:%SZ', 'now'), strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
          `).run(token, subscriberId);
        }
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;
        const subAny = subscription as any;
        const periodEnd = subAny.current_period_end
          ? new Date(subAny.current_period_end * 1000).toISOString()
          : null;
        const cancelAtPeriodEnd = subAny.cancel_at_period_end ? 1 : 0;

        const sub = db.prepare('SELECT id FROM subscribers WHERE stripe_customer_id = ?').get(customerId) as any;
        if (sub) {
          if (subscription.status === 'active') {
            // Renewal or cancellation flipped back — extend period, clear cancel flag
            db.prepare(`
              UPDATE subscribers
              SET status = 'active',
                  current_period_end = ?,
                  cancel_at_period_end = ?,
                  updated_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
              WHERE stripe_customer_id = ?
            `).run(periodEnd, cancelAtPeriodEnd, customerId);
            // Clear any previously-set expires_at on tokens
            db.prepare(`UPDATE subscriber_tokens SET expires_at = NULL WHERE subscriber_id = ?`).run(sub.id);
          } else if (subscription.status === 'canceled' || subscription.cancel_at_period_end) {
            // Cancelled at period end — keep active until period_end, set expires_at on tokens
            db.prepare(`
              UPDATE subscribers
              SET cancel_at_period_end = ?
              WHERE stripe_customer_id = ?
            `).run(cancelAtPeriodEnd, customerId);
            // Set expires_at on all tokens for this subscriber
            if (periodEnd) {
              db.prepare(`UPDATE subscriber_tokens SET expires_at = ? WHERE subscriber_id = ?`).run(periodEnd, sub.id);
            }
          }
        }
        break;
      }

      case 'invoice.payment_succeeded': {
        // Renewal payment confirmed — extend period_end
        const invoice = event.data.object as Stripe.Invoice;
        const invoiceAny = invoice as any;
        const customerId = invoiceAny.customer as string;
        if (invoiceAny.subscription) {
          try {
            const subscription = await stripe.subscriptions.retrieve(invoiceAny.subscription as string) as any;
            const periodEnd = subscription.current_period_end
              ? new Date(subscription.current_period_end * 1000).toISOString()
              : null;
            db.prepare(`
              UPDATE subscribers
              SET status = 'active',
                  current_period_end = COALESCE(?, current_period_end),
                  cancel_at_period_end = 0,
                  updated_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
              WHERE stripe_customer_id = ?
            `).run(periodEnd, customerId);
            // Clear expires_at on tokens on successful renewal
            const sub = db.prepare('SELECT id FROM subscribers WHERE stripe_customer_id = ?').get(customerId) as any;
            if (sub) {
              db.prepare(`UPDATE subscriber_tokens SET expires_at = NULL WHERE subscriber_id = ?`).run(sub.id);
            }
          } catch (_) {}
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;
        const sub = db.prepare('SELECT id FROM subscribers WHERE stripe_customer_id = ?').get(customerId) as any;
        if (sub) {
          // Immediately revoke — set expires_at to now
          db.prepare(`
            UPDATE subscribers SET status = 'cancelled', updated_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
            WHERE stripe_customer_id = ?
          `).run(customerId);
          db.prepare(`
            UPDATE subscriber_tokens SET expires_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now') WHERE subscriber_id = ?
          `).run(sub.id);
        }
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

