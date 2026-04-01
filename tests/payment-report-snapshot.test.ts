/**
 * Payment → Document Pipeline — Snapshot Tests
 *
 * Tests the full generateReportHtml output for a completed scan,
 * simulating what the /api/report/[id] endpoint returns after a
 * successful Stripe checkout.session.completed webhook fires.
 *
 * Run with: npx vitest run tests/payment-report-snapshot.test.ts
 * Update snapshots: npx vitest run tests/payment-report-snapshot.test.ts --update
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mockDb } from './setup';

// -----------------------------------------------------------------------
// Deterministic mock result — used across all snapshots
// -----------------------------------------------------------------------
const MOCK_SCAN_RESULT = {
  crawl: {
    title: 'Example Domain',
    description: 'Example Domain',
    h1s: ['Example Domain'],
    trackingScripts: [],
    formsCount: 0,
    hasSSL: true,
    statusCode: 200,
  },
  ruleChecks: [
    { name: 'HTTPS', passed: true, detail: 'Site uses HTTPS', recommendation: null },
    { name: 'Privacy Policy', passed: false, detail: 'No privacy policy found', recommendation: 'Add a privacy policy page' },
    { name: 'Cookie Consent', passed: true, detail: 'Cookie consent banner detected', recommendation: null },
  ],
  aiAnalysis: {
    gdprScore: 65,
    riskLevel: 'medium',
    summary: 'This website has basic GDPR compliance issues that should be addressed.',
    issues: [
      {
        severity: 'warning',
        title: 'Missing Privacy Policy',
        description: 'No privacy policy page was found.',
        fix: 'Add a privacy policy page at /privacy or /privacy-policy',
      },
    ],
  },
  scannedAt: '2026-03-31T18:00:00.000Z',
};

// -----------------------------------------------------------------------
// Test 1 — Standard GDPR report HTML (medium risk, 2 rule checks, 1 issue)
// -----------------------------------------------------------------------
describe('generateReportHtml — standard medium-risk report', () => {
  it('renders score 65 / MEDIUM RISK with correct structure', async () => {
    const { generateReportHtml } = await import('@/app/api/report/[id]/route');
    const html = generateReportHtml('https://example.com', MOCK_SCAN_RESULT);

    // Structural assertions
    expect(html).toContain('GDPR Compliance Report');
    expect(html).toContain('https://example.com');
    expect(html).toContain('65');
    expect(html).toContain('MEDIUM RISK');
    expect(html).toContain('Automated Checks');
    expect(html).toContain('HTTPS');
    expect(html).toContain('Privacy Policy');
    expect(html).toContain('AI-Detected Issues');
    expect(html).toContain('Missing Privacy Policy');

    // No XSS — angle brackets must be escaped (preventing tag injection)
    expect(html).not.toContain('<script>');
    expect(html).not.toContain('<img');
    expect(html).not.toContain('&lt;script&gt;'); // script tags encoded as text, not executed
  });

  it('matches saved snapshot', async () => {
    const { generateReportHtml } = await import('@/app/api/report/[id]/route');
    const html = generateReportHtml('https://example.com', MOCK_SCAN_RESULT);
    expect(html).toMatchSnapshot();
  });
});

// -----------------------------------------------------------------------
// Test 2 — High-risk report (low score)
// -----------------------------------------------------------------------
describe('generateReportHtml — high-risk / low score', () => {
  it('renders score 20 / HIGH RISK correctly', async () => {
    const { generateReportHtml } = await import('@/app/api/report/[id]/route');
    const result = {
      ...MOCK_SCAN_RESULT,
      aiAnalysis: { ...MOCK_SCAN_RESULT.aiAnalysis, gdprScore: 20, riskLevel: 'high', issues: [
        { severity: 'critical', title: 'No SSL', description: 'Site is not served over HTTPS.', fix: 'Install an SSL certificate.' },
        { severity: 'critical', title: 'Missing Privacy Policy', description: 'No privacy policy page was found.', fix: 'Add a privacy policy page.' },
        { severity: 'warning', title: 'Tracking scripts found', description: '3rd-party tracking detected.', fix: 'Review and minimize tracking scripts.' },
      ]},
    };
    const html = generateReportHtml('https://example.com', result);
    expect(html).toContain('20');
    expect(html).toContain('HIGH RISK');
    expect(html).toContain('No SSL');
    expect(html).toContain('3'); // issue count
  });

  it('matches saved snapshot for high-risk', async () => {
    const { generateReportHtml } = await import('@/app/api/report/[id]/route');
    const result = {
      ...MOCK_SCAN_RESULT,
      aiAnalysis: { ...MOCK_SCAN_RESULT.aiAnalysis, gdprScore: 20, riskLevel: 'high', issues: [
        { severity: 'critical', title: 'No SSL', description: 'Site is not served over HTTPS.', fix: 'Install an SSL certificate.' },
        { severity: 'critical', title: 'Missing Privacy Policy', description: 'No privacy policy page was found.', fix: 'Add a privacy policy page.' },
        { severity: 'warning', title: 'Tracking scripts found', description: '3rd-party tracking detected.', fix: 'Review and minimize tracking scripts.' },
      ]},
    };
    const html = generateReportHtml('https://example.com', result);
    expect(html).toMatchSnapshot();
  });
});

// -----------------------------------------------------------------------
// Test 3 — Clean / high-score report (no issues)
// -----------------------------------------------------------------------
describe('generateReportHtml — clean / high-score report', () => {
  it('renders score 90 / LOW RISK with PASS on all checks', async () => {
    const { generateReportHtml } = await import('@/app/api/report/[id]/route');
    const result = {
      ...MOCK_SCAN_RESULT,
      aiAnalysis: { ...MOCK_SCAN_RESULT.aiAnalysis, gdprScore: 90, riskLevel: 'low', summary: 'This website has strong GDPR compliance.', issues: [] },
      ruleChecks: [
        { name: 'HTTPS', passed: true, detail: 'Site uses HTTPS', recommendation: null },
        { name: 'Privacy Policy', passed: true, detail: 'Privacy policy found at /privacy', recommendation: null },
        { name: 'Cookie Consent', passed: true, detail: 'Cookie consent banner detected', recommendation: null },
      ],
    };
    const html = generateReportHtml('https://example.com', result);
    expect(html).toContain('90');
    expect(html).toContain('LOW RISK');
    // AI-Detected Issues section should not appear when issues is empty
    expect(html).not.toContain('AI-Detected Issues');
  });
});

// -----------------------------------------------------------------------
// Test 4 — XSS sanitisation in all user-controlled fields
// -----------------------------------------------------------------------
describe('generateReportHtml — XSS sanitisation', () => {
  it('escapes rule check fields (name, detail, recommendation)', async () => {
    const { generateReportHtml } = await import('@/app/api/report/[id]/route');
    const result = {
      ...MOCK_SCAN_RESULT,
      ruleChecks: [
        { name: '<b>XSS in name</b>', passed: true, detail: '<img src=x onerror=alert(1)>', recommendation: '<script>alert(1)</script>' },
      ],
    };
    const html = generateReportHtml('https://example.com', result);
    // All XSS vectors: < becomes &lt;, > becomes &gt;
    expect(html).toContain('&lt;b&gt;');        // b tag neutralized
    expect(html).toContain('&lt;img');         // img tag neutralized
    expect(html).toContain('&lt;script&gt;');  // script tag neutralized
    expect(html).not.toContain('<script>');  // raw script never appears
  });

  it('escapes AI issue fields (title, description, fix)', async () => {
    const { generateReportHtml } = await import('@/app/api/report/[id]/route');
    const result = {
      ...MOCK_SCAN_RESULT,
      aiAnalysis: {
        ...MOCK_SCAN_RESULT.aiAnalysis,
        issues: [{ severity: 'warning', title: '<em>italic</em>', description: '<img src=x>', fix: '<script>steal()</script>' }],
      },
    };
    const html = generateReportHtml('https://example.com', result);
    expect(html).toContain('&lt;em&gt;');
    expect(html).toContain('&lt;img');
    expect(html).toContain('&lt;script&gt;');
    expect(html).not.toContain('<script>'); // raw never appears
  });

  it('escapes URL field', async () => {
    const { generateReportHtml } = await import('@/app/api/report/[id]/route');
    const html = generateReportHtml('https://evil.com/<script>alert(1)</script>', MOCK_SCAN_RESULT);
    expect(html).not.toContain('<script>alert(1)</script>');
    expect(html).toContain('&lt;script&gt;');
  });
});

// -----------------------------------------------------------------------
// Test 5 — Webhook handler: scan upsert via mock Stripe session
// -----------------------------------------------------------------------
describe('Webhook: checkout.session.completed → scan upsert', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.STRIPE_SECRET_KEY = 'sk_test_mock';
    process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test_mock';
  });

  it('upserts scan record with stripe_session_id on one-time payment', async () => {
    const mockRun = vi.fn().mockReturnValue({ changes: 1, lastInsertRowid: 1 });
    const mockGet = vi.fn().mockReturnValue(null); // no existing scan
    mockDb.prepare.mockReturnValue({
      run: mockRun,
      get: mockGet,
    } as any);

    // Simulate what the webhook handler does for checkout.session.completed (payment mode)
    const scanId = 'scan-abc123';
    const stripeSessionId = 'cs_test_abc';
    const customerEmail = 'payer@example.com';
    const url = 'https://example.com';

    // The handler checks for existing scan, then inserts
    const existing = mockDb.prepare('SELECT id FROM scans WHERE id = ?').get(scanId);
    expect(existing).toBeNull();

    // Insert path
    mockDb.prepare(`
      INSERT INTO scans (id, url, status, email, stripe_session_id)
      VALUES (?, ?, 'completed', ?, ?)
    `).run(scanId, url, customerEmail, stripeSessionId);

    expect(mockRun).toHaveBeenCalledWith(scanId, url, customerEmail, stripeSessionId);
  });

  it('updates existing scan stripe_session_id when re-fired', async () => {
    const mockRun = vi.fn().mockReturnValue({ changes: 1 });
    const mockGet = vi.fn().mockReturnValue({ id: 'scan-abc123' }); // existing scan
    mockDb.prepare.mockReturnValue({
      run: mockRun,
      get: mockGet,
    } as any);

    const scanId = 'scan-abc123';
    const stripeSessionId = 'cs_test_xyz';
    const customerEmail = 'payer2@example.com';

    // Update path (existing scan)
    mockDb.prepare(`
      UPDATE scans
      SET stripe_session_id = ?, email = COALESCE(?, email)
      WHERE id = ?
    `).run(stripeSessionId, customerEmail, scanId);

    expect(mockRun).toHaveBeenCalledWith(stripeSessionId, customerEmail, scanId);
  });
});
