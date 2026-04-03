import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  try {
    const { url: websiteUrl, email, plan } = await request.json();

    if (!websiteUrl && plan !== 'monthly') {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
    }

    const priceId = (plan === 'monthly'
      ? process.env.STRIPE_PRICE_MONTHLY
      : process.env.STRIPE_PRICE_SINGLE_SCAN)?.trim();
    if (!priceId) {
      return NextResponse.json({ error: 'Price not configured' }, { status: 500 });
    }

    const scanId = uuidv4();
    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || 'https://complyscan2.vercel.app').trim();
    const stripe = new Stripe(stripeKey);

    // Build Stripe checkout session params.
    // Note: scan record is NOT pre-created here. The success page creates it in its
    // own Lambda invocation to avoid SQLite ephemerality issues across Lambda instances.
    // URL + email are passed as query params so the success page has them.
    const params = new URLSearchParams();
    params.append('mode', plan === 'monthly' ? 'subscription' : 'payment');
    params.append('line_items[0][price]', priceId);
    params.append('line_items[0][quantity]', '1');
    const successUrl = new URL(appUrl + '/success');
    successUrl.searchParams.set('session_id', '{CHECKOUT_SESSION_ID}');
    successUrl.searchParams.set('scan_id', scanId);
    successUrl.searchParams.set('plan', plan);
    // Pass URL + email so success page can create scan without depending on checkout's DB
    if (websiteUrl) successUrl.searchParams.set('url', websiteUrl);
    if (email) successUrl.searchParams.set('email', email);
    params.append('success_url', successUrl.toString());
    params.append('cancel_url', appUrl + '/?cancelled=true');
    params.append('metadata[scanId]', scanId);
    params.append('metadata[url]', websiteUrl || '');
    if (email) params.append('customer_email', email);

    if (plan === 'monthly') {
      const customerResp = await fetch('https://api.stripe.com/v1/customers', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + stripeKey,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email: email || '', 'metadata[scanId]': scanId }).toString(),
      });
      const customer = await customerResp.json();
      if (!customerResp.ok) {
        return NextResponse.json({ error: customer.error?.message || 'Customer creation failed' }, { status: 500 });
      }
      params.append('customer', customer.id);
      params.append('subscription_data[metadata][scanId]', scanId);
      params.append('subscription_data[metadata][url]', websiteUrl);
    }
    // For single scans, pass customer_email directly to the checkout session — no pre-creation needed

    const resp = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + stripeKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const sessionData = await resp.json();
    if (!resp.ok) {
      return NextResponse.json({ error: sessionData.error?.message || `Stripe error: ${resp.status}` }, { status: 500 });
    }

    const sessionId = sessionData.id;
    return NextResponse.json({ url: sessionData.url, sessionId, scanId });
  } catch (err: any) {
    console.error('Checkout error:', err?.message || err);
    return NextResponse.json({ error: err?.message || 'Checkout failed' }, { status: 500 });
  }
}
