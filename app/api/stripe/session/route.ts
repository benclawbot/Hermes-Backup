import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: 'session_id required' }, { status: 400 });
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  try {
    const stripe = new Stripe(stripeKey, {
      apiVersion: '2025-02-24.acacia' as any,
    });

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const result: Record<string, any> = {
      mode: session.mode,
      scanId: session.metadata?.scanId || null,
      url: session.metadata?.url || null,
      customerEmail: session.customer_email || null,
    };

    // For subscriptions, look up the subscriber token from the DB
    if (session.mode === 'subscription' && session.customer) {
      try {
        const { getDb } = await import('@/lib/db');
        const db = getDb();
        const sub = db.prepare(
          'SELECT id, token FROM subscribers WHERE stripe_customer_id = ?'
        ).get(session.customer as string) as any;
        if (sub) {
          const tokenRec = db.prepare(
            'SELECT token FROM subscriber_tokens WHERE subscriber_id = ? ORDER BY created_at DESC LIMIT 1'
          ).get(sub.id) as any;
          if (tokenRec) {
            result.subscriberToken = tokenRec.token;
          }
        }
      } catch (_) {}
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Stripe session lookup error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
