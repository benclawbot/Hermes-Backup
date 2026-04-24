# TASKS.archive.md — Archived Task Detail Blocks

> Archived by v4 migration.
> Historical tasks completed under the v3 single-approval model.
> TASK-003 structure was normalized during archive migration for readability.

## TASK-001

Title: Landing Page + Brand Identity
Complexity: M
Legacy approval: STATUS_CHANGE: APPROVED — 2026-03-30
Summary: Build the marketing landing page and establish brand identity for the GDPR compliance checker.
Outputs:
- app/page.tsx
- app/layout.tsx
- app/globals.css
- tailwind brand tokens
Subtasks:
- subtask-01 — Landing page core (hero, features, pricing)
Completion: DONE on 2026-03-30

## TASK-002

Title: Crawler + GDPR Analysis Engine
Complexity: L
Legacy approval: STATUS_CHANGE: APPROVED — 2026-03-30
Summary: Build the backend scan pipeline, AI GDPR checks, storage, PDF generation, and result retrieval.
Outputs:
- app/api/scan/route.ts
- app/api/scan/[id]/route.ts
- app/api/report/[id]/route.ts
- lib/crawler.ts
- lib/gdpr-checks.ts
- lib/ai-analysis.ts
- lib/db.ts
Subtasks:
- subtask-01 — SQLite database schema + lib/db.ts
- subtask-02 — Puppeteer crawler + GDPR check rules
- subtask-03 — OpenAI analysis + scan API route
- subtask-04 — PDF report generation + email delivery
Completion: DONE on 2026-03-30

## TASK-003

Title: Stripe Payments + Customer Flow
Complexity: M
Legacy approval: STATUS_CHANGE: APPROVED — 2026-03-30
Summary: Wire up Stripe payments for single scans and monthly subscriptions, then trigger scanning and email delivery after payment.
Outputs:
- app/api/stripe/checkout/route.ts
- app/api/stripe/webhook/route.ts
- app/api/stripe/subscription/route.ts
- lib/stripe.ts
Subtasks:
- subtask-01 — Stripe checkout + webhook + email trigger
Completion: DONE on 2026-03-30
Migration note: The malformed v3 PLAN block was normalized during archive migration without changing task meaning.

## TASK-004

Title: SEO Content + Launch
Complexity: S
Legacy approval: STATUS_CHANGE: APPROVED — 2026-03-30
Summary: Create SEO blog content, legal pages, and launch-ready marketing assets.
Outputs:
- app/blog/[slug]/page.tsx
- app/legal/terms/page.tsx
- app/legal/privacy/page.tsx
- app/api/contact/route.ts (optional)
Subtasks:
- subtask-01 — SEO blog posts (3 articles)
- subtask-02 — Legal pages + launch setup
Completion: DONE on 2026-03-30
