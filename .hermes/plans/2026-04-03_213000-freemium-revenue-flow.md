# ComplyScan — Freemium Revenue Flow Implementation Plan

> Created: 2026-04-03
> Goal: Transform ComplyScan from "pay-before-scan" to "free scan → email capture → upsell" model
> Revenue target: PDF reports (one-time) + Agency subscriptions (recurring) + affiliate commissions

---

## Current State Analysis

### Current User Flow (Problematic)

```
Homepage Hero (URL + email + "Scan Now — $29")
    ↓ [pay on Stripe]
Success page (runs scan, waits)
    ↓
Report page (full results + PDF)
    ↓
Dashboard (for subscribers only)
```

**Problems:**
1. **Hard paywall before scan** — users can't try the product, high drop-off at checkout
2. **No free scan** — zero lead capture from organic traffic
3. **Misaligned CTA** — "Scan Now — $29" on homepage conflicts with free-forever competitors
4. **No agency tier** — $99/mo is just "unlimited scans" for one person, no client management
5. **No upsell path** — user pays, sees report, done. No nurture sequence.
6. **Pricing doesn't signal value** — "Single Scan $29" vs competitors offering free scans

### Current Database Schema (already supports the needed model)

Tables: `users`, `sessions`, `scans`, `subscribers`, `subscriber_tokens`

The schema is actually well-designed — it already has:
- `scans.user_id` for registered users
- `scans.subscriber_id` for subscribers
- `subscribers.plan` (currently just 'monthly')
- Email capture in scans table

What it **lacks**:
- No `scan_count` or `monthly_limit` on subscribers
- No `is_paid` flag on individual scans
- No `client_name` / `client_url` fields for agency multi-site
- No affiliate tracking fields

---

## New User Flow (Target)

```
Homepage (URL input, "Scan Free →")
    ↓ [free scan, email required]
Processing page ("Running your free scan...")
    ↓
Results page (basic score + 3 issues free)
    ↓ [pay €9 to unlock full AI remediation + PDF]
Upsell modal / checkout
    ↓ [if paid] Full results + PDF download
    ↓ [if not paid] Email capture + nurture sequence
    ↓
Dashboard (for logged-in users)
    - Free users: see scan history, limited to 3 scans/month
    - Pro (€9/mo): unlimited scans, full AI, PDF
    - Agency (€99/mo): unlimited + client management + white-label
```

---

## Implementation Phases

### PHASE 1: Free Scan Flow (MVP — highest impact, smallest change)

**Goal:** Allow anyone to run a free scan that shows basic results, then upsell to PDF + AI remediation.

#### 1.1 New `/api/scan/free` route

**File:** `app/api/scan/free/route.ts` (new)

Behavior:
- Accepts `{ url, email }` — email is required (lead capture)
- Creates a scan record with `is_free_scan: true`
- Triggers scan via existing `processScanAsync()` logic
- Returns scan results directly (same JSON shape as paid scan)
- Rate limit: 3 free scans per email per month (enforced in DB)
- No Stripe involved

```
Request:  POST /api/scan/free
Body:     { url: "https://example.com", email: "user@example.com" }
Response: { scanId, status, result: { ... full scan result ... } }
```

#### 1.2 New free results page

**File:** `app/scan-results/[id]/page.tsx` (new route)

Behavior:
- Shows a **limited view** of scan results: overall score + first 3 issues
- Remaining issues blurred/hidden with overlay: "🔒 Unlock full AI remediation + PDF report — €9"
- CTA: "Get Full Report — €9" → Stripe checkout for PDF only
- Email signup prompt if not logged in ("Save your scan history — free")
- Uses the same report rendering logic as existing `/report/[id]` page

#### 1.3 Modify homepage Hero

**File:** `app/components/Hero.tsx`

Changes:
- Remove email field from form (email captured after scan)
- Change CTA from "Scan Now — $29" to "Scan Free →"
- Remove credit card mention from subtext
- Subtext: "Instant GDPR scan. No credit card. Get your PDF report from €9."
- Add small trust signals: "Trusted by X websites" (existing) + "3 free scans per month"

#### 1.4 New Stripe price for PDF-only

**New Price ID in Stripe:** `STRIPE_PRICE_PDF_REPORT` = €9 one-time

Single scan purchase becomes "Buy Full Report + AI Remediation — €9" (not "Scan Now")

The existing `STRIPE_PRICE_SINGLE_SCAN` at $29 should be replaced with the €9 PDF product.
Or keep both: €9 PDF (one-time) vs €9/month Pro subscription.

#### 1.5 Modify `/success` page

**File:** `app/success/SuccessClient.tsx`

Changes:
- After successful PDF purchase (`plan === 'pdf'`), redirect directly to `/report/[id]` with full results (no result embedding in URL needed — DB will have the scan record)
- Add a "PDF purchase" flow alongside existing `monthly` and `single-scan` flows

#### 1.6 Modify report page

**File:** `app/report/[id]/page.tsx`

Changes:
- Add `?tier=free|paid` query param
- If `tier=free`: blur/hide AI remediation details, show upsell overlay on the PDF button
- If `tier=paid`: full results, no upsell
- Detect tier from the scan's associated payment status (query `/api/report/[id]/access`)

---

### PHASE 2: Dashboard + User Accounts

**Goal:** Capture leads, enable logged-in free users to revisit scan history.

#### 2.1 Auto-create account after free scan

**File:** `app/api/auth/register-free/route.ts` (new)

Behavior:
- After a free scan, if email not already registered, create a `user` account (no password, email-only)
- Send a magic link or just store a session cookie
- Simple approach: create user with a random password, email them a login link
- Actually: for MVP, just create the user record and set a long-lived session cookie

Actually a simpler approach:
- After free scan: prompt "Save your scan? Enter your email to get a link" → creates user + sends magic link
- For MVP: skip email verification, just prompt "We'll send you a link to your scan history"

#### 2.2 Modify free scan to auto-login

**File:** `app/api/scan/free/route.ts`

After creating/finding user, set a session cookie:
- Same auth mechanism as existing `sessions` table
- Return `{ scanId, token, ... }` — client stores token in localStorage

#### 2.3 Modify Hero to show logged-in state

**File:** `app/components/Hero.tsx`

- Check for session token in localStorage
- If logged in: show "Welcome back, {email}" + "Scan Free →"
- If not logged in: show "Scan Free →"
- The form submits to `/api/scan/free` which handles auth

#### 2.4 Dashboard upgrade prompts

**File:** `app/dashboard/DashboardClient.tsx`

- Show free users: "You've used {n}/3 free scans this month"
- Show upgrade CTA: "Get unlimited scans + full AI remediation from €9/month"
- Pro badge on dashboard for paid users

---

### PHASE 3: Pricing Page Redesign

**Goal:** Signal free-first, then paid tiers clearly.

#### 3.1 New pricing structure

| Plan | Price | Includes | CTA |
|------|-------|----------|-----|
| **Free** | €0/mo | 3 scans/month, basic results (score + 3 issues), no PDF, no AI remediation | "Scan Free" |
| **Pro** | €9/mo | Unlimited scans, full AI remediation, PDF downloads, scan history | "Start Pro" |
| **Agency** | €99/mo | Everything in Pro + unlimited client sites + client dashboard + white-label reports | "Start Agency" |

#### 3.2 Update Pricing component

**File:** `app/components/Pricing.tsx`

- Replace current 2-plan layout with 3-plan layout
- Remove "Single Scan" from plans — PDF is the one-time purchase
- Highlight "Pro" as recommended
- Agency plan should clearly call out "Unlimited client sites" as the key differentiator
- Each plan should show what's NOT included (e.g., "PDF reports not included in Free")

---

### PHASE 4: Agency Tier

**Goal:** Create a defensible recurring revenue product that no competitor offers.

#### 4.1 Database changes

**File:** `lib/db.ts`

New table:
```sql
CREATE TABLE IF NOT EXISTS agency_clients (
  id TEXT PRIMARY KEY,
  subscriber_id TEXT NOT NULL,  -- the agency
  name TEXT NOT NULL,            -- client site name
  url TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  FOREIGN KEY (subscriber_id) REFERENCES subscribers(id)
);
```

New field on `subscribers`:
```sql
ALTER TABLE subscribers ADD COLUMN plan_type TEXT NOT NULL DEFAULT 'pro';  -- 'pro' | 'agency'
```

#### 4.2 Agency dashboard view

**File:** `app/dashboard/AgencyClient.tsx` (new, or extend DashboardClient)

- Show tabs: "My Scans" | "Client Sites"
- Client Sites: add/edit/remove client URLs, run scan on any client site
- Client report: white-label PDF (no ComplyScan branding in footer)
- Invite client: generate a read-only link for the client to view their report

#### 4.3 White-label PDF

**File:** `lib/pdf-report.tsx`

- Add `whiteLabel: boolean` param
- If whiteLabel: remove "Made with ComplyScan" footer, add agency logo placeholder

#### 4.4 Stripe prices

New Stripe Price IDs:
- `STRIPE_PRICE_PRO_MONTHLY` = €9/mo (Pro subscription)
- `STRIPE_PRICE_AGENCY_MONTHLY` = €99/mo (Agency subscription)

Existing `STRIPE_PRICE_MONTHLY` at $99 → update to `STRIPE_PRICE_AGENCY_MONTHLY` or keep separate.

---

### PHASE 5: Email Nurture (Low Priority — Phase 4+)

For users who run a free scan but don't convert:

**File:** `app/api/email/nurture/route.ts` (new, or use existing scan record)

- After free scan without conversion, add to email sequence
- Day 1: "Here's your GDPR scan summary — complete your compliance report for €9"
- Day 3: "3 common GDPR mistakes we found on [similar sites]"
- Day 7: "Last chance: your GDPR report expires in 48 hours" (artificial scarcity)
- Day 14: "Have you fixed those issues? Rescan for free"

Implementation: Use a simple approach — store `nurture_email_sent` flag on the scan record. A cron job (or manual trigger) checks for scans older than X days without conversion and sends the sequence.

For MVP: skip this, just add a "Get your full report" CTA in the free results view.

---

## File Changes Summary

### New Files

| File | Purpose |
|------|---------|
| `app/api/scan/free/route.ts` | Free scan endpoint with rate limiting |
| `app/api/scan/free-access/route.ts` | Check if scan results are paid/unlocked |
| `app/api/auth/register-free/route.ts` | Auto-create account after free scan |
| `app/scan-results/[id]/page.tsx` | Free user results page (limited view) |
| `app/dashboard/AgencyClient.tsx` | Agency-specific dashboard view |
| `lib/pdf-report.tsx` | Add white-label PDF support |
| `app/api/email/nurture/route.ts` | Email nurture sequence (Phase 5) |

### Modified Files

| File | Changes |
|------|---------|
| `app/components/Hero.tsx` | Free scan CTA, remove $29, email field removed from form |
| `app/components/Pricing.tsx` | 3-tier pricing, new plan names |
| `app/success/SuccessClient.tsx` | Handle PDF purchase flow (plan='pdf') |
| `app/report/[id]/page.tsx` | Tier-based result visibility, upsell overlay |
| `app/dashboard/DashboardClient.tsx` | Free tier limits, upgrade prompts, agency tab |
| `lib/db.ts` | Add `agency_clients` table, `plan_type` column |
| `app/api/stripe/checkout/route.ts` | Add `plan='pdf'` for one-time PDF purchase |
| `.env` | Add `STRIPE_PRICE_PDF_REPORT`, `STRIPE_PRICE_PRO_MONTHLY` |
| `app/layout.tsx` | Keywords updated ✅ (already done) |

---

## Environment Variables Needed

```env
STRIPE_PRICE_PDF_REPORT=price_xxxxx      # €9 one-time PDF purchase
STRIPE_PRICE_PRO_MONTHLY=price_xxxxx    # €9/month Pro subscription
STRIPE_PRICE_AGENCY_MONTHLY=price_xxxxx # €99/month Agency subscription
# Keep existing STRIPE_PRICE_SINGLE_SCAN or deprecate it
```

---

## Migration Strategy

**IMPORTANT:** Don't break the existing paid flow until the new flow is proven.

1. **Deploy Phase 1.1-1.5** (free scan + limited results page) behind a feature flag
2. **Add a "Try Free Scan" button** on homepage alongside existing $29 CTA — A/B test
3. Once free scan converts at >10% (email captured), Phase 1 is validated
4. **Then** add the paid PDF upsell on the results page
5. **Then** add Pro/Agency subscription tiers

Alternatively: Ship the full Phase 1-3 as one release, but keep the old `/success` flow working for existing Stripe customers.

---

## Risks & Tradeoffs

### Risk 1: Free scans will be abused
**Mitigation:** Rate limit 3 per email/month + IP-based limit. The scan is computationally expensive (crawler + AI analysis). Add CAPTCHA if abuse detected.

### Risk 2: Users run free scans and never pay
**Mitigation:** The limited results view is compelling but incomplete. The upsell is timed (show after user has seen enough to be interested but not satisfied). The €9 price is low-friction. Pro subscription at €9/mo with unlimited scans is an easy upsell.

### Risk 3: Existing $29 single-scan customers feel burned
**Mitigation:** Their scan still works. Offer them a Pro subscription at €9/mo (effectively they overpaid once, now get recurring value). Or issue a credit.

### Risk 4: Crawler + AI analysis cost on free scans
**Mitigation:** This is the real cost center. The scan runs actual crawler + MiniMax AI. Free tier should have a 55s timeout (already exists) but no other limits. If abuse is detected, reduce the crawler depth for free users.

### Risk 5: Complexity explosion
**Mitigation:** Keep the free scan flow as simple as possible. Don't add user verification emails, magic links, or password resets until it's clear the product needs authenticated users for retention.

---

## Open Questions

1. **Magic link auth vs simple token auth?** — For MVP, just store a long-lived token in localStorage. But users who clear browser lose access. A magic link (email) is more reliable for retention.

2. **What does a free user see in the report?** — Score + 3 issues (the most critical ones, not random). The rest are blurred. Should we show WHICH categories are missing (e.g., "4 cookie issues found — unlock to see") or just show a blank? Showing "4 cookie issues found" is more compelling — it's FOMO, not just curiosity.

3. **Should free scans be logged in or anonymous?** — Anonymous: frictionless but no history. Logged in (email): higher friction but enables follow-up. Compromise: scan first, prompt to save after results are shown.

4. **What happens to the $29 single-scan buyers?** — Existing buyers need to keep access. Map them to the Pro plan at no additional cost for 1 month, then €9/mo.

5. **Stripe webhook for PDF purchases?** — PDF is a one-time payment. The existing webhook infrastructure (subscription renewals) doesn't apply. Just verify `checkout.session.completed` event and mark the scan as paid.
