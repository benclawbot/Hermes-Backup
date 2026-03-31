import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const websiteUrl = body.url as string;
    const email = body.email as string | undefined;
    const plan = (body.plan as string) || 'single';

    const stripeKey = process.env.STRIPE_SECRET_KEY || '';
    const priceId = (plan === 'monthly'
      ? process.env.STRIPE_PRICE_MONTHLY
      : process.env.STRIPE_PRICE_SINGLE_SCAN) || '';

    console.log('Checkout params:', {
      websiteUrl,
      email,
      plan,
      stripeKeyPrefix: stripeKey ? stripeKey.slice(0, 7) : 'MISSING',
      priceIdPrefix: priceId ? priceId.slice(0, 10) : 'MISSING',
      priceIdLength: priceId.length,
      appUrl: (process.env.NEXT_PUBLIC_APP_URL || '').slice(0, 20),
    });

    if (!websiteUrl) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }
    if (!stripeKey) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
    }
    if (!priceId) {
      return NextResponse.json({ error: 'Price not configured' }, { status: 500 });
    }

    const scanId = uuidv4();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://complyscan2.vercel.app';

    const params = new URLSearchParams({
      mode: plan === 'monthly' ? 'subscription' : 'payment',
      'line_items[0][price]': priceId,
      'line_items[0][quantity]': '1',
      'customer_email': email || '',
      'success_url': appUrl + '/success?session_id={CHECKOUT_SESSION_ID}&scan_id=' + scanId,
      'cancel_url': appUrl + '/?cancelled=true',
      'metadata[scanId]': scanId,
      'metadata[url]': websiteUrl,
    });

    const fetchHeaders = {
      'Authorization': 'Bearer ' + stripeKey,
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const before = Date.now();
    const resp = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: fetchHeaders,
      body: params.toString(),
    });
    const elapsed = Date.now() - before;

    const data = await resp.json();
    console.log('Stripe response:', { status: resp.status, elapsed, error: data.error?.message, hasUrl: !!data.url });

    if (!resp.ok) {
      return NextResponse.json({ error: data.error?.message || 'Stripe error: ' + resp.status }, { status: 500 });
    }

    return NextResponse.json({ url: data.url, sessionId: data.id, scanId });
  } catch (err: any) {
    console.error('Checkout error:', err?.message || err, err?.stack);
    return NextResponse.json({ error: err?.message || 'Checkout failed' }, { status: 500 });
  }
}
