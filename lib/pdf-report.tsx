'use client';

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  pdf,
} from '@react-pdf/renderer';
import React from 'react';

// ── Fonts ────────────────────────────────────────────────────────────────────
// Use built-in fonts (Helvetica is always available in @react-pdf/renderer)
const FONT = 'Helvetica';
const FONT_BOLD = 'Helvetica-Bold';
const FONT_OBLIQUE = 'Helvetica-Oblique';

// ── Color palette ────────────────────────────────────────────────────────────
const C = {
  blue: '#2563eb',
  blueLight: '#dbeafe',
  green: '#16a34a',
  greenBg: '#f0fdf4',
  amber: '#d97706',
  amberBg: '#fffbeb',
  red: '#dc2626',
  redBg: '#fef2f2',
  text: '#1e293b',
  muted: '#64748b',
  border: '#e2e8f0',
  white: '#ffffff',
  darkBg: '#1e3a5f',
};

// ── Styles ───────────────────────────────────────────────────────────────────
const S = StyleSheet.create({
  // Cover
  coverPage: { backgroundColor: C.darkBg, flex: 1, padding: 50 },
  coverCenter: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  coverLogo: { fontSize: 36, fontFamily: FONT_BOLD, color: C.white, marginBottom: 6 },
  coverBadge: { fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: 3, marginBottom: 40 },
  coverTitle: { fontSize: 11, color: 'rgba(255,255,255,0.7)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 },
  coverUrl: { fontSize: 16, fontFamily: FONT_BOLD, color: C.white, textAlign: 'center', marginBottom: 40, maxWidth: 400 },
  coverScore: { fontSize: 96, fontFamily: FONT_BOLD, color: '#60a5fa', lineHeight: 1, marginBottom: 4 },
  coverScoreLabel: { fontSize: 10, color: 'rgba(255,255,255,0.5)', marginBottom: 20 },
  coverRiskBadge: { backgroundColor: '#3b82f6', padding: '6 20', borderRadius: 20, overflow: 'hidden' },
  coverRiskText: { fontSize: 10, color: C.white, fontFamily: FONT_BOLD, letterSpacing: 1 },
  coverMeta: { flexDirection: 'row', marginTop: 40, gap: 30 },
  coverMetaItem: { alignItems: 'center' },
  coverMetaLabel: { fontSize: 8, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 },
  coverMetaValue: { fontSize: 11, color: C.white, fontFamily: FONT_BOLD },

  // Body
  page: { padding: 45, backgroundColor: C.white },
  row: { flexDirection: 'row' },
  col2: { flex: 1 },

  // Section header
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginTop: 28, marginBottom: 14 },
  sectionBar: { width: 4, height: 18, backgroundColor: C.blue, borderRadius: 2, marginRight: 8 },
  sectionTitle: { fontSize: 14, fontFamily: FONT_BOLD, color: C.text },

  // Cards
  card: { borderWidth: 1, borderColor: C.border, borderRadius: 8, padding: 14, marginBottom: 10 },
  cardGreen: { borderColor: C.green, backgroundColor: C.greenBg },
  cardRed: { borderColor: C.red, backgroundColor: C.redBg },
  cardAmber: { borderColor: C.amber, backgroundColor: C.amberBg },

  // Check rows
  checkRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 },
  checkIcon: { width: 20, fontSize: 11, marginRight: 8, marginTop: 1 },
  checkBody: { flex: 1 },
  checkName: { fontSize: 10, fontFamily: FONT_BOLD, color: C.text, marginBottom: 2 },
  checkDetail: { fontSize: 9, color: C.muted, lineHeight: 1.4 },
  checkRec: { fontSize: 9, color: '#92400e', backgroundColor: C.amberBg, padding: '4 8', borderRadius: 4, marginTop: 4, lineHeight: 1.4 },
  checkArticle: { fontSize: 8, color: C.blue, marginTop: 4 },

  // Issue rows
  issueRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 },
  issueBadge: { width: 36, alignItems: 'center', marginRight: 8, marginTop: 2 },
  issueBadgeText: { fontSize: 7, fontFamily: FONT_BOLD },
  issueBody: { flex: 1 },
  issueTitle: { fontSize: 10, fontFamily: FONT_BOLD, color: C.text, marginBottom: 3 },
  issueDesc: { fontSize: 9, color: C.muted, lineHeight: 1.4, marginBottom: 4 },
  issueFix: { fontSize: 9, color: '#166534', backgroundColor: C.greenBg, padding: '4 8', borderRadius: 4, lineHeight: 1.4 },
  issueArticle: { fontSize: 8, color: C.blue, marginTop: 4 },

  // Info grid
  infoGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 0 },
  infoCell: { width: '50%', flexDirection: 'row', paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: C.border },
  infoLabel: { width: 90, fontSize: 9, color: C.muted },
  infoValue: { flex: 1, fontSize: 9, color: C.text, fontFamily: FONT_BOLD },
  infoGreen: { color: C.green },
  infoRed: { color: C.red },

  // Score bar
  scoreBar: { flexDirection: 'row', marginVertical: 10, gap: 4 },
  scoreSeg: { flex: 1, height: 14, borderRadius: 3 },
  scoreLegend: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  scoreLegendText: { fontSize: 7, color: C.muted },

  // Remediation
  remRow: { flexDirection: 'row', marginBottom: 6 },
  remCheck: { fontSize: 10, marginRight: 8 },
  remText: { fontSize: 9, color: C.text, flex: 1, lineHeight: 1.4 },

  // GDPR table
  gdprRow: { flexDirection: 'row', paddingVertical: 6, borderBottomWidth: 1, borderBottomColor: C.border },
  gdprArt: { width: 50, fontSize: 9, fontFamily: FONT_BOLD, color: C.blue },
  gdprDesc: { flex: 1, fontSize: 9, color: C.muted },

  // Footer
  footer: { position: 'absolute', bottom: 25, left: 45, right: 45, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: C.border, paddingTop: 8 },
  footerText: { fontSize: 8, color: C.muted },
  footerRight: { fontSize: 8, color: C.muted, fontFamily: FONT_OBLIQUE },

  // Page number
  pageNumber: { position: 'absolute', bottom: 25, right: 45, fontSize: 8, color: C.muted },
});

// ── Helpers ───────────────────────────────────────────────────────────────────
function esc(text: string | undefined | null): string {
  if (!text) return '';
  return String(text).replace(/&/g, 'and').replace(/</g, '').replace(/>/g, '');
}

function sevColor(s: string): string {
  if (s === 'critical') return C.red;
  if (s === 'warning') return C.amber;
  return C.blue;
}

function sevBg(s: string): string {
  if (s === 'critical') return C.redBg;
  if (s === 'warning') return C.amberBg;
  return '#eff6ff';
}

function artLabel(art: string | undefined): string {
  if (!art) return '';
  const map: Record<string, string> = {
    '5': 'Art. 5 — Principles', '6': 'Art. 6 — Lawfulness', '7': 'Art. 7 — Consent',
    '12': 'Art. 12 — Transparency', '13': 'Art. 13/14 — Info provision', '15': 'Art. 15 — Right of access',
    '16': 'Art. 16 — Rectification', '17': 'Art. 17 — Erasure', '20': 'Art. 20 — Portability',
    '21': 'Art. 21 — Objection', '22': 'Art. 22 — Automated decisions', '25': 'Art. 25 — Design',
    '28': 'Art. 28 — Processor', '30': 'Art. 30 — Records', '32': 'Art. 32 — Security',
    '33': 'Art. 33 — Breaches', '35': 'Art. 35 — DPIA', '44': 'Art. 44 — Transfers',
    '46': 'Art. 46 — Mechanisms',
  };
  return map[art] || `Art. ${art}`;
}

function scoreColor(score: number): string {
  if (score >= 75) return C.green;
  if (score >= 50) return C.amber;
  return C.red;
}

function scoreBar(score: number) {
  const filled = Math.round(score / 10);
  const color = scoreColor(score);
  return (
    <View>
      <View style={S.scoreBar}>
        {Array.from({ length: 10 }).map((_, i) => (
          <View key={i} style={[S.scoreSeg, { backgroundColor: i < filled ? color : C.border }]} />
        ))}
      </View>
      <View style={S.scoreLegend}>
        <Text style={S.scoreLegendText}>0 Critical</Text>
        <Text style={S.scoreLegendText}>50 Partial</Text>
        <Text style={S.scoreLegendText}>100 Compliant</Text>
      </View>
    </View>
  );
}

// ── Document ──────────────────────────────────────────────────────────────────
interface Props {
  url: string;
  result: any;
}

const ReportDocument: React.FC<Props> = ({ url, result }) => {
  const { crawl, ruleChecks, aiAnalysis, scannedAt } = result;
  const score = aiAnalysis?.gdprScore ?? 0;
  const sc = scoreColor(score);
  const risk = (aiAnalysis?.riskLevel ?? 'unknown') as 'low' | 'medium' | 'high' | 'critical' | 'unknown';
  const riskLabelMap = { low: 'LOW RISK', medium: 'MEDIUM RISK', high: 'HIGH RISK', critical: 'CRITICAL RISK', unknown: 'UNKNOWN RISK' };
  const riskLabel = riskLabelMap[risk] || risk.toUpperCase();
  const passCount = ruleChecks?.filter((c: any) => c.passed).length ?? 0;
  const failCount = ruleChecks?.filter((c: any) => !c.passed).length ?? 0;
  const issueCount = aiAnalysis?.issues?.length ?? 0;
  const scanDate = new Date(scannedAt).toLocaleDateString('en-GB', { timeZone: 'Europe/Zurich', day: 'numeric', month: 'long', year: 'numeric' });

  const failedChecks = (ruleChecks || []).filter((c: any) => !c.passed);
  const passedChecks = (ruleChecks || []).filter((c: any) => c.passed);
  const issues = aiAnalysis?.issues || [];

  const remItems = [
    ...failedChecks.map((c: any) => `Fix: ${c.name} — ${c.recommendation || 'See recommendation above'}`),
    ...issues.filter((i: any) => i.fix).map((i: any) => `AI Fix: ${i.title} — ${i.fix}`),
  ];

  return (
    <Document author="ComplyScan" title={`GDPR Report — ${url}`} subject="GDPR Compliance Report">
      {/* ── Cover Page ── */}
      <Page size="A4" style={S.coverPage}>
        <View style={S.coverCenter}>
          <Text style={S.coverLogo}>ComplyScan</Text>
          <Text style={S.coverBadge}>GDPR COMPLIANCE REPORT</Text>

          <Text style={S.coverScore}>{score}</Text>
          <Text style={S.coverScoreLabel}>out of 100 — Compliance Score</Text>

          <View style={S.coverRiskBadge}>
            <Text style={S.coverRiskText}>{riskLabel}</Text>
          </View>

          <Text style={S.coverTitle}>Scanned Website</Text>
          <Text style={S.coverUrl}>{esc(url)}</Text>

          <View style={S.coverMeta}>
            <View style={S.coverMetaItem}>
              <Text style={S.coverMetaLabel}>Date</Text>
              <Text style={S.coverMetaValue}>{scanDate}</Text>
            </View>
            <View style={S.coverMetaItem}>
              <Text style={S.coverMetaLabel}>Checks</Text>
              <Text style={S.coverMetaValue}>{passCount} ✅ / {failCount} ❌</Text>
            </View>
            <View style={S.coverMetaItem}>
              <Text style={S.coverMetaLabel}>AI Findings</Text>
              <Text style={S.coverMetaValue}>{issueCount}</Text>
            </View>
          </View>
        </View>
        <View style={S.footer}>
          <Text style={S.footerText}>Generated by ComplyScan — GDPR compliance made effortless</Text>
          <Text style={S.footerRight}>CONFIDENTIAL</Text>
        </View>
      </Page>

      {/* ── Page 2: Executive Summary ── */}
      <Page size="A4" style={S.page}>
        <View style={S.sectionHeader}>
          <View style={S.sectionBar} />
          <Text style={S.sectionTitle}>Executive Summary</Text>
        </View>

        <View style={[S.card, { backgroundColor: '#f8fafc' }]}>
          <Text style={{ fontSize: 10, color: C.muted, lineHeight: 1.6, marginBottom: 8 }}>
            This automated GDPR compliance scan was conducted on <Text style={{ fontFamily: FONT_BOLD }}>{esc(url)}</Text> on {scanDate}. The scan combines rule-based automated checks with AI-powered analysis.
          </Text>
          <Text style={{ fontSize: 10, color: C.muted, lineHeight: 1.6, marginBottom: 8 }}>
            Overall compliance score: <Text style={{ fontFamily: FONT_BOLD, color: sc }}>{score}/100</Text> — classified as <Text style={{ fontFamily: FONT_BOLD, color: sc }}>{riskLabel}</Text>.
          </Text>
          <Text style={{ fontSize: 10, color: C.muted, lineHeight: 1.6 }}>
            {ruleChecks?.length || 0} automated checks performed: <Text style={{ color: C.green }}>{passCount} passed</Text>, <Text style={{ color: C.red }}>{failCount} failed</Text>. {issueCount} additional AI-detected findings.
          </Text>
        </View>

        <View style={S.sectionHeader}>
          <View style={S.sectionBar} />
          <Text style={S.sectionTitle}>Compliance Score Breakdown</Text>
        </View>

        <View style={[S.card]}>
          {scoreBar(score)}
          <Text style={{ fontSize: 9, color: C.muted, marginTop: 8, lineHeight: 1.5 }}>
            {score >= 75
              ? 'Good standing. Your website demonstrates reasonable GDPR compliance. Address the flagged items to reach full compliance.'
              : score >= 50
              ? 'Partial compliance. Several issues require attention. Prioritise the critical and high-severity findings below.'
              : 'Significant compliance gaps. Immediate action is recommended. Critical issues are likely exposing your business to regulatory risk.'}
          </Text>
        </View>

        {aiAnalysis?.summary && (
          <>
            <View style={S.sectionHeader}>
              <View style={S.sectionBar} />
              <Text style={S.sectionTitle}>AI Assessment</Text>
            </View>
            <View style={[S.card, { backgroundColor: '#f8fafc' }]}>
              <Text style={{ fontSize: 10, color: C.muted, lineHeight: 1.6 }}>{esc(aiAnalysis.summary)}</Text>
            </View>
          </>
        )}

        <Text style={S.pageNumber}>2</Text>
        <View style={S.footer}>
          <Text style={S.footerText}>Generated by ComplyScan — GDPR compliance made effortless</Text>
          <Text style={S.footerRight}>{scanDate}</Text>
        </View>
      </Page>

      {/* ── Page 3+: Automated Checks ── */}
      <Page size="A4" style={S.page}>
        <View style={S.sectionHeader}>
          <View style={S.sectionBar} />
          <Text style={S.sectionTitle}>Automated GDPR Checks ({passCount} ✅ / {failCount} ❌)</Text>
        </View>

        {failedChecks.length > 0 && (
          <>
            <Text style={{ fontSize: 9, color: C.red, fontFamily: FONT_BOLD, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Failed Checks</Text>
            {failedChecks.map((check: any, i: number) => (
              <View key={i} style={[S.card, S.cardRed]}>
                <View style={S.checkRow}>
                  <Text style={[S.checkIcon, { color: C.red }]}>❌</Text>
                  <View style={S.checkBody}>
                    <Text style={S.checkName}>{esc(check.name)}</Text>
                    <Text style={S.checkDetail}>{esc(check.detail || '')}</Text>
                    {check.recommendation && <Text style={S.checkRec}>Fix: {esc(check.recommendation)}</Text>}
                    {check.gdprArticle && <Text style={S.checkArticle}>📋 {artLabel(check.gdprArticle)}</Text>}
                  </View>
                </View>
              </View>
            ))}
          </>
        )}

        {passedChecks.length > 0 && (
          <>
            <Text style={{ fontSize: 9, color: C.green, fontFamily: FONT_BOLD, marginTop: 16, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Passed Checks</Text>
            {passedChecks.map((check: any, i: number) => (
              <View key={i} style={[S.card, S.cardGreen]}>
                <View style={S.checkRow}>
                  <Text style={[S.checkIcon, { color: C.green }]}>✅</Text>
                  <View style={S.checkBody}>
                    <Text style={S.checkName}>{esc(check.name)}</Text>
                    <Text style={S.checkDetail}>{esc(check.detail || 'Passed')}</Text>
                    {check.gdprArticle && <Text style={S.checkArticle}>📋 {artLabel(check.gdprArticle)}</Text>}
                  </View>
                </View>
              </View>
            ))}
          </>
        )}

        <Text style={S.pageNumber}>3</Text>
        <View style={S.footer}>
          <Text style={S.footerText}>Generated by ComplyScan — GDPR compliance made effortless</Text>
          <Text style={S.footerRight}>{scanDate}</Text>
        </View>
      </Page>

      {/* ── AI Issues ── */}
      {issues.length > 0 && (
        <Page size="A4" style={S.page}>
          <View style={S.sectionHeader}>
            <View style={S.sectionBar} />
            <Text style={S.sectionTitle}>AI-Detected Issues ({issueCount} Findings)</Text>
          </View>

          {issues.map((issue: any, i: number) => (
            <View key={i} style={[S.card, { borderColor: sevColor(issue.severity), borderLeftWidth: 3 }]}>
              <View style={S.issueRow}>
                <View style={[S.issueBadge, { backgroundColor: sevBg(issue.severity) }]}>
                  <Text style={{ fontSize: 7, fontFamily: FONT_BOLD, color: sevColor(issue.severity) }}>
                    {issue.severity === 'critical' ? 'CRIT' : issue.severity === 'warning' ? 'WARN' : 'INFO'}
                  </Text>
                </View>
                <View style={S.issueBody}>
                  <Text style={S.issueTitle}>{esc(issue.title)}</Text>
                  <Text style={S.issueDesc}>{esc(issue.description)}</Text>
                  {issue.fix && <Text style={S.issueFix}>✅ Recommended Fix: {esc(issue.fix)}</Text>}
                  {issue.gdprArticle && <Text style={S.issueArticle}>📋 {artLabel(issue.gdprArticle)}</Text>}
                </View>
              </View>
            </View>
          ))}

          <Text style={S.pageNumber}>4</Text>
          <View style={S.footer}>
            <Text style={S.footerText}>Generated by ComplyScan — GDPR compliance made effortless</Text>
            <Text style={S.footerRight}>{scanDate}</Text>
          </View>
        </Page>
      )}

      {/* ── Website Analysis ── */}
      <Page size="A4" style={S.page}>
        <View style={S.sectionHeader}>
          <View style={S.sectionBar} />
          <Text style={S.sectionTitle}>Website Analysis</Text>
        </View>

        <View style={[S.card]}>
          <Text style={{ fontSize: 10, fontFamily: FONT_BOLD, color: C.text, marginBottom: 10 }}>General Information</Text>
          <View style={S.infoGrid}>
            <View style={S.infoCell}><Text style={S.infoLabel}>Website Title</Text><Text style={S.infoValue}>{esc(crawl?.title || 'N/A')}</Text></View>
            <View style={S.infoCell}><Text style={S.infoLabel}>URL</Text><Text style={S.infoValue}>{esc(url)}</Text></View>
            <View style={S.infoCell}><Text style={S.infoLabel}>HTTPS</Text><Text style={[S.infoValue, crawl?.hasSSL ? S.infoGreen : S.infoRed]}>{crawl?.hasSSL ? '✅ Enabled' : '❌ Not enabled'}</Text></View>
            <View style={S.infoCell}><Text style={S.infoLabel}>HTTP Status</Text><Text style={S.infoValue}>{crawl?.statusCode || 'N/A'}</Text></View>
            <View style={S.infoCell}><Text style={S.infoLabel}>Forms Found</Text><Text style={S.infoValue}>{crawl?.formsCount ?? 0}</Text></View>
            <View style={S.infoCell}><Text style={S.infoLabel}>Labeled Inputs</Text><Text style={S.infoValue}>{crawl?.formInputsLabeled ?? 0} / {crawl?.totalFormInputs ?? 0}</Text></View>
          </View>
        </View>

        <View style={[S.card, { marginTop: 10 }]}>
          <Text style={{ fontSize: 10, fontFamily: FONT_BOLD, color: C.text, marginBottom: 10 }}>Privacy & Cookie Policies</Text>
          <View style={S.infoGrid}>
            <View style={S.infoCell}><Text style={S.infoLabel}>Privacy Policy</Text><Text style={[S.infoValue, crawl?.hasPrivacyPolicy ? S.infoGreen : S.infoRed]}>{crawl?.hasPrivacyPolicy ? '✅ Found' : '❌ Missing'}</Text></View>
            <View style={S.infoCell}><Text style={S.infoLabel}>Cookie Policy</Text><Text style={[S.infoValue, crawl?.hasCookiePolicyPage ? S.infoGreen : { color: C.amber }]}>{crawl?.hasCookiePolicyPage ? '✅ Found' : '⚠️ Not detected'}</Text></View>
            <View style={S.infoCell}><Text style={S.infoLabel}>Cookie Banner</Text><Text style={[S.infoValue, crawl?.hasCookieBanner ? S.infoGreen : { color: C.amber }]}>{crawl?.hasCookieBanner ? '✅ Detected' : '⚠️ Not detected'}</Text></View>
            <View style={S.infoCell}><Text style={S.infoLabel}>SSL/TLS</Text><Text style={[S.infoValue, crawl?.hasSSL ? S.infoGreen : S.infoRed]}>{crawl?.hasSSL ? '✅ Active' : '❌ Inactive'}</Text></View>
          </View>
        </View>

        {crawl?.trackingScripts?.length > 0 && (
          <View style={[S.card, { marginTop: 10 }]}>
            <Text style={{ fontSize: 10, fontFamily: FONT_BOLD, color: C.text, marginBottom: 8 }}>Tracking Scripts Detected</Text>
            <Text style={{ fontSize: 9, color: C.muted }}>{crawl.trackingScripts.join(' • ')}</Text>
          </View>
        )}

        {crawl?.thirdPartyEmbeds?.length > 0 && (
          <View style={[S.card, { marginTop: 10 }]}>
            <Text style={{ fontSize: 10, fontFamily: FONT_BOLD, color: C.text, marginBottom: 8 }}>Third-Party Embeds</Text>
            <Text style={{ fontSize: 9, color: C.muted }}>{crawl.thirdPartyEmbeds.join(' • ')}</Text>
          </View>
        )}

        <Text style={S.pageNumber}>5</Text>
        <View style={S.footer}>
          <Text style={S.footerText}>Generated by ComplyScan — GDPR compliance made effortless</Text>
          <Text style={S.footerRight}>{scanDate}</Text>
        </View>
      </Page>

      {/* ── GDPR Reference ── */}
      <Page size="A4" style={S.page}>
        <View style={S.sectionHeader}>
          <View style={S.sectionBar} />
          <Text style={S.sectionTitle}>GDPR Articles Quick Reference</Text>
        </View>

        <View style={[S.card, { backgroundColor: '#f8fafc' }]}>
          {[
            ['Art. 5', 'Principles of processing'],
            ['Art. 6', 'Lawfulness of processing'],
            ['Art. 7', 'Conditions for consent'],
            ['Art. 12', 'Transparent information'],
            ['Art. 13/14', 'Information provision'],
            ['Art. 15', 'Right of access by data subject'],
            ['Art. 16', 'Right to rectification'],
            ['Art. 17', 'Right to erasure (right to be forgotten)'],
            ['Art. 18', 'Restriction of processing'],
            ['Art. 20', 'Right to data portability'],
            ['Art. 21', 'Right to object'],
            ['Art. 22', 'Automated decision-making'],
            ['Art. 25', 'Data protection by design & by default'],
            ['Art. 28', 'Processor obligations'],
            ['Art. 30', 'Records of processing activities'],
            ['Art. 32', 'Security of processing'],
            ['Art. 33', 'Breach notification (72h)'],
            ['Art. 35', 'Data Protection Impact Assessment'],
            ['Art. 44-49', 'International data transfers'],
          ].map(([art, desc]) => (
            <View key={art} style={S.gdprRow}>
              <Text style={S.gdprArt}>{art}</Text>
              <Text style={S.gdprDesc}>{desc}</Text>
            </View>
          ))}
        </View>

        <Text style={S.pageNumber}>6</Text>
        <View style={S.footer}>
          <Text style={S.footerText}>Generated by ComplyScan — GDPR compliance made effortless</Text>
          <Text style={S.footerRight}>{scanDate}</Text>
        </View>
      </Page>

      {/* ── Remediation Plan ── */}
      {remItems.length > 0 && (
        <Page size="A4" style={S.page}>
          <View style={S.sectionHeader}>
            <View style={S.sectionBar} />
            <Text style={S.sectionTitle}>Remediation Action Plan</Text>
          </View>

          <View style={[S.card, { backgroundColor: '#fffbeb' }]}>
            <Text style={{ fontSize: 9, color: C.muted, marginBottom: 10 }}>
              Address findings in priority order. Mark each item complete after implementing the fix.
            </Text>
            {remItems.map((item: string, i: number) => (
              <View key={i} style={S.remRow}>
                <Text style={S.remCheck}>☐</Text>
                <Text style={S.remText}>{esc(item)}</Text>
              </View>
            ))}
          </View>

          <Text style={{ fontSize: 9, color: C.muted, marginTop: 16, lineHeight: 1.6 }}>
            After fixing issues, re-run the scan at no additional cost to verify remediation.
          </Text>

          <Text style={S.pageNumber}>7</Text>
          <View style={S.footer}>
            <Text style={S.footerText}>Generated by ComplyScan — GDPR compliance made effortless</Text>
            <Text style={S.footerRight}>{scanDate}</Text>
          </View>
        </Page>
      )}
    </Document>
  );
};

export { ReportDocument };
export type { Props as ReportDocumentProps };

// ── Generate PDF buffer ───────────────────────────────────────────────────────
export async function generateReportPdfBuffer(url: string, result: any): Promise<Buffer> {
  const doc = <ReportDocument url={url} result={result} />;
  const blob = await pdf(doc).toBlob();
  const arrayBuffer = await blob.arrayBuffer();
  return Buffer.from(arrayBuffer);
}
