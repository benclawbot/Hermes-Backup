import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '@/lib/db';
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
    // Detect local dev vs Vercel: VERCEL is set automatically on Vercel infrastructure
    const isLocal = !process.env.VERCEL;
    const appUrl = isLocal
      ? 'http://localhost:3000'
      : (process.env.NEXT_PUBLIC_APP_URL || 'https://complyscan2.vercel.app').trim();
    const stripe = new Stripe(stripeKey);

    // Pre-create scan record so webhook / success page can find it
    const db = getDb();
    db.prepare(`
      INSERT INTO scans (id, url, status, email, stripe_session_id)
      VALUES (?, ?, 'pending', ?, NULL)
    `).run(scanId, websiteUrl, email || null);

    // Build Stripe checkout session params
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

    // Update scan with Stripe session ID
    db.prepare(`UPDATE scans SET stripe_session_id = ? WHERE id = ?`).run(sessionId, scanId);

    return NextResponse.json({ url: sessionData.url, sessionId, scanId });
  } catch (err: any) {
    console.error('Checkout error:', err?.message || err);
    return NextResponse.json({ error: err?.message || 'Checkout failed' }, { status: 500 });
  }
}
