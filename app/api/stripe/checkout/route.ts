import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const STRIPE_API = 'https://api.stripe.com';

async function stripeRequest<T = any>(
  path: string,
  method: string,
  body: Record<string, string>,
  key: string
): Promise<T> {
  const params = new URLSearchParams(body).toString();
  const url = `${STRIPE_API}${path}${method === 'GET' && params ? '?' + params : ''}`;
  
  const resp = await fetch(url, {
    method,
    headers: {
      'Authorization': 'Bearer ' + key,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: method !== 'GET' ? params : undefined,
  });

  const data = await resp.json();
  
  if (!resp.ok) {
    throw new Error(data.error?.message || `Stripe error: ${resp.status}`);
  }
  
  return data;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, email, plan } = body as { url: string; email?: string; plan: 'single' | 'monthly' };

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
    }

    const scanId = uuidv4();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://complyscan2.vercel.app';

    const baseParams = {
      'success_url': `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}&scan_id=${scanId}`,
      'cancel_url': `${appUrl}/?cancelled=true`,
      'metadata[scanId]': scanId,
      'metadata[url]': url,
    };

    if (plan === 'monthly') {
      const customer = await stripeRequest<{ id: string }>('/v1/customers', 'POST', {
        email: email || '',
        'metadata[scanId]': scanId,
      }, stripeKey);

      const session = await stripeRequest<{ url: string; id: string }>('/v1/checkout/sessions', 'POST', {
        customer: customer.id,
        'mode': 'subscription',
        'line_items[0][price]': process.env.STRIPE_PRICE_MONTHLY || '',
        'line_items[0][quantity]': '1',
        ...Object.fromEntries(Object.entries(baseParams).map(([k, v]) => [`subscription_data[metadata][${k}]`, v])),
        ...Object.fromEntries(Object.entries(baseParams)),
      }, stripeKey);

      return NextResponse.json({ url: session.url, sessionId: session.id, scanId });
    } else {
      const session = await stripeRequest<{ url: string; id: string }>('/v1/checkout/sessions', 'POST', {
        'mode': 'payment',
        'line_items[0][price]': process.env.STRIPE_PRICE_SINGLE_SCAN || '',
        'line_items[0][quantity]': '1',
        'customer_email': email || '',
        ...Object.fromEntries(Object.entries(baseParams).map(([k, v]) => [`metadata[${k}]`, v])),
      }, stripeKey);

      return NextResponse.json({ url: session.url, sessionId: session.id, scanId });
    }
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
