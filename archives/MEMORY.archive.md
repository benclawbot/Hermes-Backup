# MEMORY.archive.md — Archived Semantic Memory

> Archived by v4 migration.
> Active semantic memory remains in `MEMORY.md`.

## project-autonomy

### 2026-03-30 — PROJECT: AUTONOMY — Fully Automated Business Opportunities Research
type: SUMMARY
tags: autonomy, research, automated-business, micro-saas
context: Thomas asked for a ranked list of profitable fully automated business ideas.
lesson: Research produced 20 candidates scored on profit, automation, barrier, and demand. Top 10 were delivered in AUTONOMY_REPORT.md. Compliance Checker ranked highly as a low-barrier opportunity.
source: verified-by-test
confidence: HIGH
verified_at: 2026-03-30
expires_after: never
superseded_by:

## task-001

### 2026-03-30 — TASK-001 — Landing Page + Brand Identity (Compliance Checker)
type: SUMMARY
tags: task-001, compliance-checker, landing-page, brand, next-js
context: Built the marketing landing page and brand identity for the GDPR compliance checker.
lesson: Delivered app/page.tsx, app/layout.tsx, app/globals.css, and brand tokens in tailwind.config.ts. The page includes hero, features, pricing, SEO metadata, and a scan-entry flow.
source: verified-by-test
confidence: HIGH
verified_at: 2026-03-30
expires_after: never
superseded_by:

## task-002

### 2026-03-30 — TASK-002 — Crawler + GDPR Analysis Engine (Compliance Checker)
type: SUMMARY
tags: task-002, compliance-checker, crawler, gdpr, puppeteer, openai, sqlite
context: Built the core backend scan pipeline.
lesson: Delivered crawler, GDPR rules, OpenAI analysis, SQLite storage, scan retrieval, and report generation endpoints. The result model includes issues, severity, and fix suggestions.
source: verified-by-test
confidence: HIGH
verified_at: 2026-03-30
expires_after: never
superseded_by:

## task-003

### 2026-03-30 — TASK-003 — Stripe Payments + Customer Flow (Compliance Checker)
type: SUMMARY
tags: task-003, compliance-checker, stripe, payments, webhook, resend
context: Wired up Stripe payment flows and post-payment automation.
lesson: Delivered checkout, webhook, subscription creation, and email-triggering logic for paid scans and monitoring subscriptions.
source: verified-by-test
confidence: HIGH
verified_at: 2026-03-30
expires_after: never
superseded_by:

## task-004

### 2026-03-30 — TASK-004 — SEO Content + Launch (Compliance Checker)
type: SUMMARY
tags: task-004, compliance-checker, seo, blog, legal, launch
context: Prepared SEO and launch collateral.
lesson: Delivered blog content, legal pages, and launch-facing assets to support acquisition and compliance messaging.
source: verified-by-test
confidence: HIGH
verified_at: 2026-03-30
expires_after: never
superseded_by:

## mailjet-credentials

### 2026-03-31 — Mailjet credentials — two distinct systems
type: DECISION
tags: credentials, mailjet, smtp, api-key
context: Thomas provided Mailjet website login separately from Mailjet API credentials.
lesson: Website login and API credentials are different systems. Programmatic email delivery must use API credentials, not dashboard login. Raw values were removed from repo files during v4 migration.
source: verified-by-test
confidence: HIGH
verified_at: 2026-03-31
expires_after: never
superseded_by:

## credential-persistence-root-cause

### 2026-03-30 — Credentials not persisted — root cause: session memory compaction
type: DECISION
tags: credentials, persistence, root-cause, thomas
context: Credentials were getting lost across sessions.
lesson: Credentials must be persisted as entity references in `ENTITIES.md`, not in transient conversation memory or narrative notes.
source: agent-inferred
confidence: HIGH
verified_at: 2026-03-31
expires_after: never
superseded_by:
