import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  try {
    const { url: websiteUrl, email, plan } = await request.json();

    if (!websiteUrl) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
    }

    const stripe = new Stripe(stripeKey);
    const scanId = crypto.randomUUID();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://complyscan2.vercel.app';
    const priceId = plan === 'monthly'
      ? process.env.STRIPE_PRICE_MONTHLY
      : process.env.STRIPE_PRICE_SINGLE_SCAN;

    if (!priceId) {
      return NextResponse.json({ error: 'Price not configured' }, { status: 500 });
    }

    const baseParams = {
      success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}&scan_id=${scanId}`,
      cancel_url: `${appUrl}/?cancelled=true`,
      metadata: { scanId, url: websiteUrl },
    };

    if (plan === 'monthly') {
      const customer = await stripe.customers.create({ email, metadata: { scanId } });
      const session = await stripe.checkout.sessions.create({
        customer: customer.id,
        mode: 'subscription',
        line_items: [{ price: priceId, quantity: 1 }],
        ...baseParams,
        subscription_data: { metadata: { scanId, url: websiteUrl } },
      });
      return NextResponse.json({ url: session.url, sessionId: session.id, scanId });
    } else {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [{ price: priceId, quantity: 1 }],
        customer_email: email,
        ...baseParams,
      });
      return NextResponse.json({ url: session.url, sessionId: session.id, scanId });
    }
  } catch (err: any) {
    console.error('Checkout error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
