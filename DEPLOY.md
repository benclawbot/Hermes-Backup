# ComplyScan — Deployment Guide

## What You Need Before Starting

| Service | Sign up | Free tier |
|---------|---------|-----------|
| Vercel | vercel.com | ✅ Yes (hobby) |
| Stripe | dashboard.stripe.com | ✅ Yes (test mode) |
| Resend | resend.com | ✅ 100 emails |
| MiniMax API | api.minimax.io | ⚠️ Check your plan |

---

## Step 1 — Stripe Setup (10 minutes)

1. Go to **dashboard.stripe.com** → toggle **Test mode** (top right)

2. **Create Single Scan product:**
   - Products → Add product
   - Name: `GDPR Compliance Scan`
   - Price: $29.00 USD one-time
   - Save → copy the `price_...` ID

3. **Create Monthly Monitor product:**
   - Products → Add product
   - Name: `Monthly GDPR Monitor`
   - Price: $99.00 USD / month (recurring)
   - Save → copy the `price_...` ID

4. **Get API keys:**
   - Developers → API keys
   - Copy `pk_test_...` (publishable) and `sk_test_...` (secret)

5. **Set up webhook (for local dev only):**
   ```bash
   npm install -g stripe
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
   Copy the `whsec_...` secret it gives you.

---

## Step 2 — Resend Email (2 minutes)

1. Sign up at **resend.com**
2. Domains → Add your domain (or use the free test domain Resend gives you)
3. Copy your API key (`re_...`)

---

## Step 3 — Push to GitHub

```bash
cd /home/thomas/Dropbox/Projects/compliance-checker

# Initialize git (only once)
git init
git add .
git commit -m "ComplyScan — fully built, ready to deploy"

# Create a repo on GitHub (github.com/new)
# Then:
git remote add origin git@github.com:your-username/complyscan.git
git branch -M main
git push -u origin main
```

---

## Step 4 — Deploy to Vercel (5 minutes)

1. Go to **vercel.com** → Import Project → select your GitHub repo

2. **Framework Preset:** Next.js (auto-detected)

3. **Environment Variables** — add these (Settings → Environment Variables):
   ```
   # AI: MiniMax (OpenAI-compatible endpoint — ai-analysis.ts also supports OPENAI_API_KEY or ANTHROPIC_AUTH_TOKEN)
   OPENAI_API_KEY=sk-cp-...           # your MiniMax API key
   OPENAI_BASE_URL=https://api.minimax.io/v1

   # Stripe
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...    # from: stripe listen --forward-to localhost:3000/api/stripe/webhook
   STRIPE_PRICE_SINGLE_SCAN=price_...  # $29 one-time product
   STRIPE_PRICE_MONTHLY=price_...      # $99/month recurring product

   # Email
   RESEND_API_KEY=re_...

   # App
   NEXT_PUBLIC_APP_URL=https://your-project.vercel.app
   DATABASE_PATH=/tmp/complyscan.db

   # Crawling (REQUIRED on Vercel — fetch() fails for external URLs in serverless)
   BROWSERLESS_API_KEY=your_browserless_key  # get free 10K credits at browserless.io

   # Browser (local dev only — NOT needed on Vercel)
   CHROME_PATH=
   ```

4. **Build Command:** `npm run build`
5. **Output Directory:** `.next`

6. Deploy → Copy your Vercel URL (e.g. `complyscan.vercel.app`)

---

## Step 5 — Stripe Webhook (Production)

In Vercel dashboard → your project → Settings → Environment Variables:
```
STRIPE_WEBHOOK_SECRET = whsec_...
```

Then on Stripe dashboard:
- Developers → Webhooks → Add endpoint
- URL: `https://your-project.vercel.app/api/stripe/webhook`
- Events: `checkout.session.completed`, `customer.subscription.deleted`
- Copy the webhook signing secret to Vercel

---

## Step 6 — Update NEXT_PUBLIC_APP_URL

After deploying, update the env var on Vercel:
```
NEXT_PUBLIC_APP_URL = https://your-project.vercel.app
```
Redeploy to apply.

---

## Testing the Full Flow

1. Open `https://your-project.vercel.app`
2. Enter a URL (e.g. `https://example.com`)
3. Click "Scan Now" → should redirect to Stripe Checkout
4. Pay with Stripe test card: `4242 4242 4242 4242` (any future date, any CVC)
5. After payment → success page → report emailed to you

---

## Troubleshooting

**Scan returns 500 after payment:**
- Check Vercel logs: Functions → View Function Logs
- Common cause: `RESEND_API_KEY` not set or invalid

**Stripe redirects to cancel page:**
- Run `stripe listen` locally and check the webhook is received
- Or check Stripe dashboard → Developers → Webhook logs

**Puppeteer fails on Vercel:**
- Vercel doesn't support Chromium directly
- Replace Puppeteer with `@sparticuz/chromium` or use a scraping API like ScrapingBee

**Build fails on Vercel but works locally:**
- Check all env vars are set in Vercel dashboard
- Build must succeed locally before deploying

---

## Architecture Note

The crawler runs synchronously in the Stripe webhook handler. For high traffic, move scan processing to a background job queue (e.g. Inngest, Trigger.dev, or a simple cron). Currently: payment → webhook → scan → email, all in one chain.
