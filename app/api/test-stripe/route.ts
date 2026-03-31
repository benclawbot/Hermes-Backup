import { NextResponse } from 'next/server';

export async function GET() {
  const stripeKey = process.env.STRIPE_SECRET_KEY || '';
  const priceId = process.env.STRIPE_PRICE_SINGLE_SCAN || '';
  
  // Test 1: Minimal checkout with hardcoded values
  const testParams = new URLSearchParams({
    'mode': 'payment',
    'line_items[0][price]': 'price_1TGkWfRRZnzJLuOLnO0ZDJpJ',
    'line_items[0][quantity]': '1',
    'success_url': 'https://complyscan2.vercel.app/success?session_id={CHECKOUT_SESSION_ID}',
    'cancel_url': 'https://complyscan2.vercel.app/',
  });
  
  const headers = {
    'Authorization': 'Bearer ' + stripeKey,
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  
  // Test with hardcoded price
  const resp1 = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers,
    body: testParams.toString(),
  });
  const data1 = await resp1.json();
  
  // Test 2: With env price
  const testParams2 = new URLSearchParams({
    'mode': 'payment',
    'line_items[0][price]': priceId,
    'line_items[0][quantity]': '1',
    'success_url': 'https://complyscan2.vercel.app/success?session_id={CHECKOUT_SESSION_ID}',
    'cancel_url': 'https://complyscan2.vercel.app/',
  });
  
  const resp2 = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers,
    body: testParams2.toString(),
  });
  const data2 = await resp2.json();
  
  return NextResponse.json({
    hardcodedPrice: { status: resp1.status, error: data1.error?.message, url: data1.url ? 'yes' : 'no', id: data1.id },
    envPrice: { 
      status: resp2.status, 
      error: data2.error?.message, 
      url: data2.url ? 'yes' : 'no',
      priceIdPrefix: priceId ? priceId.slice(0, 10) : 'MISSING',
      priceIdLength: priceId.length,
    },
    stripeKeyPrefix: stripeKey ? stripeKey.slice(0, 7) : 'MISSING',
  });
}
