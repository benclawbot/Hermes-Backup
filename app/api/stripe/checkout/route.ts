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

    // Minimal params - avoid customer_email which may cause issues
    const params = new URLSearchParams();
    params.append('mode', plan === 'monthly' ? 'subscription' : 'payment');
    params.append('line_items[0][price]', priceId);
    params.append('line_items[0][quantity]', '1');
    params.append('success_url', appUrl + '/success?session_id={CHECKOUT_SESSION_ID}&scan_id=' + scanId);
    params.append('cancel_url', appUrl + '/?cancelled=true');
    params.append('metadata[scanId]', scanId);
    params.append('metadata[url]', websiteUrl);
    
    if (email) {
      params.append('customer_email', email);
    }

    const fetchHeaders = {
      'Authorization': 'Bearer ' + stripeKey,
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const resp = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: fetchHeaders,
      body: params.toString(),
    });

    const data = await resp.json();
    console.log('Stripe response:', { status: resp.status, error: data.error?.message, hasUrl: !!data.url, dataKeys: Object.keys(data) });

    if (!resp.ok) {
      return NextResponse.json({ error: data.error?.message || 'Stripe error: ' + resp.status }, { status: 500 });
    }

    return NextResponse.json({ url: data.url, sessionId: data.id, scanId });
  } catch (err: any) {
    console.error('Checkout error:', err?.message || err);
    return NextResponse.json({ error: err?.message || 'Checkout failed' }, { status: 500 });
  }
}
