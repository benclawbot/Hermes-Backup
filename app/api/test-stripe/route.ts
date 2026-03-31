import { NextResponse } from 'next/server';

export async function GET() {
  const priceSingle = (process.env.STRIPE_PRICE_SINGLE_SCAN || '') + '';
  const priceMonthly = (process.env.STRIPE_PRICE_MONTHLY || '') + '';
  
  return NextResponse.json({
    priceSinglePrefix: priceSingle.slice(0, 10),
    priceSingleLength: priceSingle.length,
    priceSingleHasNewline: priceSingle.includes('\n'),
    priceMonthlyPrefix: priceMonthly.slice(0, 10),
    priceMonthlyLength: priceMonthly.length,
    priceMonthlyHasNewline: priceMonthly.includes('\n'),
    priceSingleHex: Buffer.from(priceSingle).toString('hex'),
    priceMonthlyHex: Buffer.from(priceMonthly).toString('hex'),
  });
}
