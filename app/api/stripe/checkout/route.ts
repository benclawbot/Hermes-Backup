import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const websiteUrl = body.url as string;
    const email = body.email as string | undefined;
    const plan = (body.plan as string) || 'single';

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    const priceId = plan === 'monthly'
      ? (process.env.STRIPE_PRICE_MONTHLY || '').trim()
      : (process.env.STRIPE_PRICE_SINGLE_SCAN || '').trim();

    const scanId = uuidv4();
    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || 'https://complyscan2.vercel.app').trim();
    const priceIdOk = !!priceId;
    const stripeKeyOk = !!stripeKey;
    const keyPrefix = stripeKey ? stripeKey.slice(0, 7) : 'MISSING';

    // Test 1: Can we make ANY request to Stripe?
    const testResp = await fetch('https://api.stripe.com/v1/balance', {
      headers: { 'Authorization': `Bearer ${stripeKey}` }
    });
    const testData = await testResp.json().catch(() => ({}));

    if (!testResp.ok) {
      return NextResponse.json({
        error: 'Cannot reach Stripe',
        testStatus: testResp.status,
        testData: testData.error,
        keyPrefix,
        priceIdOk,
        priceId: priceId.slice(0, 10) + '...',
      });
    }

    // Test 2: Can we create a checkout session?
    const checkoutBody = new URLSearchParams({
      mode: 'payment',
      'line_items[0][price]': priceId,
      'line_items[0][quantity]': '1',
      'customer_email': email || '',
      'success_url': `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}&scan_id=${scanId}`,
      'cancel_url': `${appUrl}/?cancelled=true`,
      'metadata[scanId]': scanId,
      'metadata[url]': websiteUrl,
    }).toString();

    const checkoutResp = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: checkoutBody,
    });

    const checkoutData = await checkoutResp.json();

    if (!checkoutResp.ok) {
      return NextResponse.json({
        error: 'Checkout session failed',
        status: checkoutResp.status,
        data: checkoutData.error,
        priceId: priceId.slice(0, 10) + '...',
      });
    }

    return NextResponse.json({ url: checkoutData.url, sessionId: checkoutData.id, scanId });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Unknown error' }, { status: 500 });
  }
}
