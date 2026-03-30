import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

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

    const scanId = uuidv4();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://complyscan2.vercel.app';
    const priceId = plan === 'monthly'
      ? process.env.STRIPE_PRICE_MONTHLY
      : process.env.STRIPE_PRICE_SINGLE_SCAN;

    if (!priceId) {
      return NextResponse.json({ error: 'Price not configured' }, { status: 500 });
    }

    const authHeader = 'Bearer ' + stripeKey;
    const contentType = 'application/x-www-form-urlencoded';

    const buildBody = (extra: Record<string, string> = {}) => {
      const params = new URLSearchParams({
        mode: plan === 'monthly' ? 'subscription' : 'payment',
        'line_items[0][price]': priceId,
        'line_items[0][quantity]': '1',
        'customer_email': email || '',
        'success_url': appUrl + '/success?session_id={CHECKOUT_SESSION_ID}&scan_id=' + scanId,
        'cancel_url': appUrl + '/?cancelled=true',
        'metadata[scanId]': scanId,
        'metadata[url]': websiteUrl,
        ...extra,
      });
      return params.toString();
    };

    if (plan === 'monthly') {
      const customerBody = new URLSearchParams({ email: email || '', 'metadata[scanId]': scanId }).toString();
      const customerResp = await fetch('https://api.stripe.com/v1/customers', {
        method: 'POST',
        headers: { 'Authorization': authHeader, 'Content-Type': contentType },
        body: customerBody,
      });
      const customer = await customerResp.json();
      if (!customerResp.ok) {
        return NextResponse.json({ error: customer.error?.message || 'Customer creation failed' }, { status: 500 });
      }
      const checkoutBody = buildBody({
        customer: customer.id,
        'subscription_data[metadata][scanId]': scanId,
        'subscription_data[metadata][url]': websiteUrl,
      });
      const resp = await fetch('https://api.stripe.com/v1/checkout/sessions', {
        method: 'POST',
        headers: { 'Authorization': authHeader, 'Content-Type': contentType },
        body: checkoutBody,
      });
      const data = await resp.json();
      if (!resp.ok) {
        return NextResponse.json({ error: data.error?.message || `Stripe error: ${resp.status}` }, { status: 500 });
      }
      return NextResponse.json({ url: data.url, sessionId: data.id, scanId });
    } else {
      const checkoutBody = buildBody();
      const resp = await fetch('https://api.stripe.com/v1/checkout/sessions', {
        method: 'POST',
        headers: { 'Authorization': authHeader, 'Content-Type': contentType },
        body: checkoutBody,
      });
      const data = await resp.json();
      if (!resp.ok) {
        return NextResponse.json({ error: data.error?.message || `Stripe error: ${resp.status}` }, { status: 500 });
      }
      return NextResponse.json({ url: data.url, sessionId: data.id, scanId });
    }
  } catch (err: any) {
    console.error('Checkout error:', err?.message || err);
    return NextResponse.json({ error: err?.message || 'Checkout failed' }, { status: 500 });
  }
}
