import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function GET() {
  const key = process.env.STRIPE_SECRET_KEY || 'NOT SET';
  const prefix = key.slice(0, 7);
  
  try {
    const stripe = new Stripe(key, {
      apiVersion: '2025-02-24.acacia' as any,
    });
    const balance = await stripe.balance.retrieve();
    return NextResponse.json({ 
      ok: true, 
      keyPrefix: prefix,
      balance: balance
    });
  } catch (error: any) {
    return NextResponse.json({ 
      ok: false, 
      keyPrefix: prefix,
      error: error.message,
      type: error.type,
      code: error.code
    }, { status: 500 });
  }
}
