# ComplyScan Full Workflow Testing Plan

## Environment
- **App URL**: https://complyscan2.vercel.app
- **Test Website**: http://www.epfl.ch (realistic target - large Swiss institution with GDPR concerns)
- **Stripe**: Test mode (pk_test_... / sk_test_...)
- **Browserless API Key**: `2U8sCY...7372` (configured in .env.local)

---

## Test Credentials
- **Test card (Stripe)**: 4242 4242 4242 4242 | any future date | any CVV
- **Test email**: thomas@benposta.com (or use a fresh test email)

---

## Test Suites

### SUITE 1: Free Scan Flow (http://www.epfl.ch)
**Objective**: Verify the complete free scan workflow from URL submission to report display

**Steps**:
1. Navigate to https://complyscan2.vercel.app
2. Enter URL: `http://www.epfl.ch`
3. Enter email: `test-complyscan-001@benposta.com`
4. Click "Scan Free"
5. Wait for redirect to scan results page
6. Verify the scan results page loads with:
   - Score display (0-100)
   - Issue breakdown (critical/warning/info)
   - Website information (title, URL, SSL status)
   - Privacy policy analysis
   - Automated checks results
   - Remediation plan
7. Verify all sections render correctly (no empty states where content should exist)
8. Verify no console errors

**Expected Result**: Scan completes successfully, report displays all sections with real data from EPFL.ch

---

### SUITE 2: PDF Download - Free Scan (should be blocked/upsell)
**Objective**: Verify that PDF download prompts upgrade for free scans

**Steps**:
1. From SUITE 1 result page
2. Look for "Download PDF" button
3. Click "Download PDF"
4. Verify it shows upgrade prompt / redirects to pricing

**Expected Result**: PDF download blocked with upsell prompt

---

### SUITE 3: PDF Report Purchase via Stripe
**Objective**: Test purchasing a PDF report via Stripe checkout

**Steps**:
1. Navigate to https://complyscan2.vercel.app/pricing (or scroll to pricing section)
2. Click "Get PDF Report" on Pro plan (€9)
3. Complete Stripe checkout:
   - Email: `test-complyscan-001@benposta.com`
   - Card: 4242 4242 4242 4242
   - Expiry: any future date (e.g., 12/28)
   - CVV: any 3 digits (e.g., 123)
4. Complete 3DS if prompted
5. Verify redirect to success page
6. Verify success page shows "Payment Confirmed" state
7. Wait for redirect to report page
8. Verify report page loads with full data
9. Click "Download PDF" button
10. Verify PDF downloads successfully (check file size > 0, correct filename)

**Expected Result**: PDF purchase completes, PDF downloads successfully

---

### SUITE 4: Monthly Subscription Flow
**Objective**: Test complete subscription creation and dashboard access

**Steps**:
1. Navigate to https://complyscan2.vercel.app/pricing
2. Click "Start Agency" on Agency plan (€99/month)
3. Complete Stripe checkout with same test card:
   - Email: `test-agency-001@benposta.com`
   - Card: 4242 4242 4242 4242
4. Complete 3DS if prompted
5. Verify redirect to success page
6. **CRITICAL**: Verify success page shows:
   - "Subscription Active!" heading
   - Dashboard access token displayed (or direct dashboard link)
7. Click "Go to Dashboard" or use token in URL
8. Verify dashboard page loads at `/dashboard?token=...`
9. Verify dashboard shows:
   - Subscriber email
   - Plan: Agency/Monthly
   - Period end date
   - Scan input form
10. Verify token is saved/used for subsequent requests

**Expected Result**: Subscription created, subscriber record in DB, dashboard accessible with token

---

### SUITE 5: Subscriber Scan - Up to 100 Websites
**Objective**: Verify subscribers can scan multiple websites

**Steps**:
1. From SUITE 4 dashboard (logged in as subscriber)
2. Enter URL: `http://www.epfl.ch`
3. Click "Scan" (submit)
4. Verify scan starts (message: "Scan started!")
5. Verify scan appears in scan history
6. Wait for completion (check status changes from "processing" to "completed")
7. Repeat for 2 more different URLs:
   - `https://www.wikipedia.org`
   - `https://www.github.com`
8. Verify all 3 scans are listed in history
9. Verify scan counter/meter shows correct count (3/100 or similar)

**Expected Result**: All scans process successfully, history shows all scans

---

### SUITE 6: PDF Download for Subscribed User
**Objective**: Verify PDF download works for subscriber's scans

**Steps**:
1. From SUITE 5 dashboard
2. Click "View Report" on any completed scan
3. Verify report page loads with full data
4. Click "Download PDF"
5. Verify PDF downloads without payment prompt

**Expected Result**: PDF downloads freely for subscriber

---

### SUITE 7: Token Expiry and Renewal
**Objective**: Verify subscription token behavior on expiry/renewal

**Steps** (if time allows):
1. Check that subscription period end is stored correctly
2. Verify token is invalidated when subscription is cancelled
3. Verify renewal extends token validity

---

## Test Results (Executed: April 4, 2026)

### SUITE 1: Single Scan Purchase Flow — FAILED

| Step | Result | Notes |
|------|--------|-------|
| Navigate to app | PASS | Homepage loaded |
| Fill URL/email form | PASS | example.com, test-scan-002@benposta.com |
| Click "Scan Now — $29" | PASS | Redirected to Stripe checkout |
| Fill Stripe details | PASS | Card 4242..., 12/28, CVC 123, Test User |
| Click Pay | PASS | Payment processed |
| Scan completes | FAIL | **CRITICAL BUG: BROWSERLESS_API_KEY not configured** |
| Report page loads | SKIP | Scan never ran |
| PDF download | SKIP | — |

**CRITICAL BUG #1: BROWSERLESS_API_KEY not configured**
```
Error: Crawl failed: fetch(Fetch failed: fetch failed) browser(BROWSERLESS_API_KEY not configured)
```
The `BROWSERLESS_API_KEY` environment variable is NOT set in Vercel. All scanning is completely broken.

---

### SUITE 2: Monthly Subscription Flow — PARTIALLY FAILED

| Step | Result | Notes |
|------|--------|-------|
| Navigate to app | PASS | |
| Click "Start Monthly Monitor" | PASS | |
| Fill Stripe details | PASS | |
| Click Subscribe | PASS | Payment processed |
| Success page with "Subscription Active!" | PASS | |
| Redirect to dashboard | FAIL | **CRITICAL BUG: No token in URL** |
| Login/signup to access dashboard | FAIL | **500 errors** |
| Scan 2-3 websites | SKIP | — |

**CRITICAL BUG #2: Dashboard access token missing**
After payment, "Access Dashboard" link goes to `/dashboard` but has NO authentication token. Subscribers cannot access their dashboard.

**CRITICAL BUG #3: Authentication API broken**
Login and signup form submissions return 500 errors. No way to create or access accounts.

---

## Critical Bugs Found

### Bug 1: BROWSERLESS_API_KEY Not Set in Vercel (CRITICAL)
- **Impact**: ALL scanning is broken — both $29 single scans and $99/month subscriber scans
- **Root Cause**: `BROWSERLESS_API_KEY` is in `.env.local` but NOT set as Vercel environment variable
- **Fix**: Add `BROWSERLESS_API_KEY` to Vercel project environment variables

### Bug 2: Dashboard Token Not Passed After Subscription (CRITICAL)
- **Impact**: Monthly subscribers cannot access their dashboard after payment
- **Root Cause**: Success page redirects to `/dashboard` without a `?token=xxx` query parameter
- **Fix**: Pass subscriber token in URL: `/dashboard?token=${subscriberToken}`

### Bug 3: Authentication API 500 Errors (CRITICAL)
- **Impact**: Login and signup completely broken — 500 errors on all auth endpoints
- **Root Cause**: Unknown — needs investigation of `/api/auth/*` endpoints
- **Fix**: Debug auth API routes

### Bug 4: AI Response Truncation (HIGH)
- **Impact**: Large websites (like epfl.ch) cause scan to fail with JSON parse error
- **Root Cause**: MiniMax-M2.5 truncates long JSON responses
- **Fix Applied**: Commit `375b56c` — reduced HTML truncation (3000→1500) and added JSON truncation recovery
- **Status**: Fix pushed to GitHub but Vercel may not have auto-deployed yet

---

## Discrepancy: Source Code vs Deployed Version

The **source code** has:
- Free plan (3 scans/month, no CC)
- Pro plan (€9) for PDF reports
- Agency plan (€99/month) for unlimited scans

The **deployed version** (complyscan2.vercel.app) has:
- Single Scan: $29 (no free tier)
- Monthly Monitor: $99/month

The deployed version does NOT match the source code. The pricing/page structure was changed but not fully tested.

---

## Success Criteria Status
- [ ] ~~Free scan of epfl.ch~~ — BLOCKED: BROWSERLESS_API_KEY not set
- [ ] ~~Report page displays all sections~~ — BLOCKED: scan fails
- [ ] ~~PDF download blocked for free scans~~ — BLOCKED: no free tier exists
- [ ] ~~PDF purchase via Stripe~~ — BLOCKED: scan fails after payment
- [ ] ~~PDF download works after payment~~ — BLOCKED: scan never ran
- [ ] ~~Monthly subscription creates subscriber~~ — BLOCKED: dashboard broken
- [ ] ~~Dashboard accessible after subscription~~ — BLOCKED: no token passed
- [ ] ~~Subscriber scans~~ — BLOCKED: dashboard inaccessible
- [ ] ~~Subscriber PDF downloads~~ — BLOCKED: dashboard inaccessible
- [ ] ~~No console errors~~ — FAIL: multiple 500 errors

---

## Notes
- BROWSERLESS_API_KEY in .env.local (2U8sCY...7372) is LOCAL only, not deployed to Vercel
- Stripe webhook must receive `checkout.session.completed` to mark scans as paid
- Subscriber tokens stored in `subscriber_tokens` table with subscriber_id link
- PDF generation uses `@react-pdf/renderer` → `lib/pdf-report.tsx`
- Fix for AI truncation (commit 375b56c) needs Vercel deployment to take effect
