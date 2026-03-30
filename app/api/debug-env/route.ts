import { NextResponse } from 'next/server';

export async function GET() {
  const stripeKey = process.env.STRIPE_SECRET_KEY || '';
  const priceSingle = process.env.STRIPE_PRICE_SINGLE_SCAN || '';
  const priceMonthly = process.env.STRIPE_PRICE_MONTHLY || '';
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
  
  return NextResponse.json({
    stripeKeyPrefix: stripeKey ? stripeKey.slice(0, 7) : 'MISSING',
    priceSingle: priceSingle || 'MISSING',
    priceMonthly: priceMonthly || 'MISSING',
    webhookSecretPrefix: webhookSecret ? webhookSecret.slice(0, 10) : 'MISSING',
  });
}
