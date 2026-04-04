import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  try {
    const { url: websiteUrl, email, plan, scanId: existingScanId } = await request.json() as { url?: string; email?: string; plan?: string; scanId?: string };

    if (!websiteUrl && plan !== 'monthly' && plan !== 'pdf') {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
    }

    // Resolve price ID based on plan
    let priceId: string | undefined;
    if (plan === 'monthly') {
      priceId = process.env.STRIPE_PRICE_MONTHLY?.trim();
    } else if (plan === 'pdf') {
      priceId = process.env.STRIPE_PRICE_PDF_REPORT?.trim();
    } else {
      // single scan (legacy / replaced by free scan + pdf upsell)
      priceId = process.env.STRIPE_PRICE_SINGLE_SCAN?.trim();
    }

    if (!priceId) {
      return NextResponse.json({ error: 'Price not configured' }, { status: 500 });
    }

    // For PDF purchase, scanId must be provided so we can mark it paid on success
    const scanId = plan === 'pdf' && existingScanId
      ? existingScanId
      : (plan === 'pdf' ? null : uuidv4());

    if (plan === 'pdf' && !scanId) {
      return NextResponse.json({ error: 'Scan ID is required for PDF purchase' }, { status: 400 });
    }

    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || 'https://complyscan2.vercel.app').trim();
    const stripe = new Stripe(stripeKey);

    // Build Stripe checkout session params.
    const params = new URLSearchParams();
    params.append('mode', plan === 'monthly' ? 'subscription' : 'payment');
    params.append('line_items[0][price]', priceId);
    params.append('line_items[0][quantity]', '1');
    const successUrl = new URL(appUrl + '/success');
    successUrl.searchParams.set('session_id', '{CHECKOUT_SESSION_ID}');
    successUrl.searchParams.set('scan_id', scanId || '');
    successUrl.searchParams.set('plan', plan || '');
    if (websiteUrl) successUrl.searchParams.set('url', websiteUrl);
    if (email) successUrl.searchParams.set('email', email);
    params.append('success_url', successUrl.toString());
    params.append('cancel_url', appUrl + '/?cancelled=true');
    params.append('metadata[scanId]', scanId || '');
    params.append('metadata[url]', websiteUrl || '');
    if (email) params.append('customer_email', email);

    if (plan === 'monthly') {
      const customerResp = await fetch('https://api.stripe.com/v1/customers', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + stripeKey,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email: email || '', 'metadata[scanId]': scanId || '' }).toString(),
      });
      const customer = await customerResp.json();
      if (!customerResp.ok) {
        return NextResponse.json({ error: customer.error?.message || 'Customer creation failed' }, { status: 500 });
      }
      params.append('customer', customer.id);
      params.append('subscription_data[metadata][scanId]', scanId || '');
      params.append('subscription_data[metadata][url]', websiteUrl || '');
    }

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

    return NextResponse.json({ url: sessionData.url, sessionId: sessionData.id, scanId });
  } catch (err: any) {
    console.error('Checkout error:', err?.message || err);
    return NextResponse.json({ error: err?.message || 'Checkout failed' }, { status: 500 });
  }
}
