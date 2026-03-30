import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const STRIPE_API = 'https://api.stripe.com';

async function stripePost<T = any>(path: string, body: Record<string, string>, key: string): Promise<T> {
  const params = new URLSearchParams(body).toString();
  const url = `${STRIPE_API}${path}`;
  
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + key,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
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
    const websiteUrl = body.url as string;
    const email = body.email as string | undefined;
    const plan = (body.plan as string) || 'single';

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
      ? (process.env.STRIPE_PRICE_MONTHLY || '').trim()
      : (process.env.STRIPE_PRICE_SINGLE_SCAN || '').trim();

    if (!priceId) {
      return NextResponse.json({ error: 'Price not configured' }, { status: 500 });
    }

    const sessionParams: Record<string, string> = {
      'mode': plan === 'monthly' ? 'subscription' : 'payment',
      'line_items[0][price]': priceId,
      'line_items[0][quantity]': '1',
      'customer_email': email || '',
      'success_url': `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}&scan_id=${scanId}`,
      'cancel_url': `${appUrl}/?cancelled=true`,
      'metadata[scanId]': scanId,
      'metadata[url]': websiteUrl,
    };

    if (plan === 'monthly') {
      const customer = await stripePost<{ id: string }>('/v1/customers', {
        email: email || '',
        'metadata[scanId]': scanId,
      }, stripeKey);
      sessionParams['customer'] = customer.id;
      // Add subscription_data for subscription mode
      sessionParams['subscription_data[metadata][scanId]'] = scanId;
      sessionParams['subscription_data[metadata][url]'] = websiteUrl;
    }

    const session = await stripePost<{ url: string; id: string }>('/v1/checkout/sessions', sessionParams, stripeKey);

    return NextResponse.json({ url: session.url, sessionId: session.id, scanId });
  } catch (error: any) {
    console.error('Stripe checkout error:', error?.message || error);
    return NextResponse.json({ error: error?.message || 'Unknown error' }, { status: 500 });
  }
}
