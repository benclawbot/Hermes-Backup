import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, email, plan } = body as { url: string; email?: string; plan: 'single' | 'monthly' };

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-02-24.acacia' as any,
    });

    const scanId = uuidv4();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    if (plan === 'monthly') {
      const customer = await stripe.customers.create({
        email: email || undefined,
        metadata: { scanId },
      });

      const session = await stripe.checkout.sessions.create({
        customer: customer.id,
        mode: 'subscription',
        line_items: [
          {
            price: process.env.STRIPE_PRICE_MONTHLY,
            quantity: 1,
          },
        ],
        success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}&scan_id=${scanId}`,
        cancel_url: `${appUrl}/?cancelled=true`,
        metadata: { scanId, url },
        subscription_data: {
          metadata: { scanId, url },
        },
      });

      return NextResponse.json({ url: session.url, sessionId: session.id, scanId });
    } else {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [
          {
            price: process.env.STRIPE_PRICE_SINGLE_SCAN,
            quantity: 1,
          },
        ],
        customer_email: email || undefined,
        success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}&scan_id=${scanId}`,
        cancel_url: `${appUrl}/?cancelled=true`,
        metadata: { scanId, url },
      });

      return NextResponse.json({ url: session.url, sessionId: session.id, scanId });
    }
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
