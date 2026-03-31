import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '@/lib/db';

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

    const priceId = (plan === 'monthly'
      ? process.env.STRIPE_PRICE_MONTHLY
      : process.env.STRIPE_PRICE_SINGLE_SCAN)?.trim();
    if (!priceId) {
      return NextResponse.json({ error: 'Price not configured' }, { status: 500 });
    }

    const scanId = uuidv4();
    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || 'https://complyscan2.vercel.app').trim();

    // Pre-create scan record so webhook can find and update it
    const db = getDb();
    db.prepare(`
      INSERT INTO scans (id, url, status, email, stripe_session_id)
      VALUES (?, ?, 'pending', ?, NULL)
    `).run(scanId, websiteUrl, email || null);

    const params = new URLSearchParams();
    params.append('mode', plan === 'monthly' ? 'subscription' : 'payment');
    params.append('line_items[0][price]', priceId);
    params.append('line_items[0][quantity]', '1');
    params.append('success_url', appUrl + '/success?session_id={CHECKOUT_SESSION_ID}&scan_id=' + scanId);
    params.append('cancel_url', appUrl + '/?cancelled=true');
    params.append('metadata[scanId]', scanId);
    params.append('metadata[url]', websiteUrl);
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

    const resp = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + stripeKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = await resp.json();

    if (!resp.ok) {
      return NextResponse.json({ error: data.error?.message || `Stripe error: ${resp.status}` }, { status: 500 });
    }

    // Update scan with Stripe session ID
    db.prepare(`UPDATE scans SET stripe_session_id = ? WHERE id = ?`).run(data.id, scanId);

    return NextResponse.json({ url: data.url, sessionId: data.id, scanId });
  } catch (err: any) {
    console.error('Checkout error:', err?.message || err);
    return NextResponse.json({ error: err?.message || 'Checkout failed' }, { status: 500 });
  }
}
