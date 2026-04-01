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
    return NextResponse.json({
      mode: session.mode,
      scanId: session.metadata?.scanId || null,
      url: session.metadata?.url || null,
      customerEmail: session.customer_email || null,
    });
  } catch (error: any) {
    console.error('Stripe session lookup error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
