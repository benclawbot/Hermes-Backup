export interface GdprCheck {
  id: string;
  name: string;
  description: string;
  severity: 'critical' | 'warning' | 'info';
  passed: boolean;
  detail: string;
  recommendation: string;
}

export function runRuleBasedChecks(crawlResult: any): GdprCheck[] {
  const checks: GdprCheck[] = [];

  checks.push({
    id: 'ssl',
    name: 'SSL/HTTPS Encryption',
    description: 'Website must use HTTPS for secure data transmission',
    severity: 'critical',
    passed: crawlResult.hasSSL,
    detail: crawlResult.hasSSL ? 'Site uses HTTPS' : 'Site does not use HTTPS',
    recommendation: crawlResult.hasSSL ? '' : 'Install an SSL certificate (Let\'s Encrypt is free)',
  });

  checks.push({
    id: 'privacy_policy',
    name: 'Privacy Policy Present',
    description: 'GDPR requires a clearly accessible privacy policy',
    severity: 'critical',
    passed: crawlResult.hasPrivacyPolicy,
    detail: crawlResult.hasPrivacyPolicy
      ? `Privacy policy found at: ${crawlResult.privacyPolicyUrl || 'linked on page'}`
      : 'No privacy policy link detected',
    recommendation: crawlResult.hasPrivacyPolicy ? '' : 'Add a privacy policy page and link it in the footer',
  });

  checks.push({
    id: 'cookie_consent',
    name: 'Cookie Consent Banner',
    description: 'EU law requires cookie consent before setting non-essential cookies',
    severity: 'critical',
    passed: crawlResult.hasCookieBanner,
    detail: crawlResult.hasCookieBanner
      ? `Cookie banner detected: "${crawlResult.cookieBannerText?.slice(0, 100)}"`
      : 'No cookie consent banner detected',
    recommendation: crawlResult.hasCookieBanner ? '' : 'Add a GDPR-compliant cookie consent banner',
  });

  checks.push({
    id: 'tracking_scripts',
    name: 'Third-Party Tracking Scripts',
    description: 'Tracking scripts (Google Analytics, Meta Pixel, etc.) require consent under GDPR',
    severity: crawlResult.trackingScripts.length > 0 ? 'warning' : 'info',
    passed: crawlResult.trackingScripts.length === 0,
    detail: crawlResult.trackingScripts.length > 0
      ? `Found: ${crawlResult.trackingScripts.join(', ')}`
      : 'No known tracking scripts detected',
    recommendation: crawlResult.trackingScripts.length > 0
      ? 'Ensure these scripts only load after explicit user consent. Use a consent management platform.'
      : '',
  });

  checks.push({
    id: 'form_labels',
    name: 'Form Input Labels',
    description: 'Form inputs must have labels for accessibility and GDPR transparency',
    severity: 'warning',
    passed: crawlResult.totalFormInputs === 0 || (crawlResult.formInputsLabeled / crawlResult.totalFormInputs) >= 0.8,
    detail: crawlResult.totalFormInputs === 0
      ? 'No form inputs found'
      : `${crawlResult.formInputsLabeled}/${crawlResult.totalFormInputs} inputs have labels (${Math.round((crawlResult.formInputsLabeled / Math.max(crawlResult.totalFormInputs, 1)) * 100)}%)`,
    recommendation: crawlResult.totalFormInputs > 0 && (crawlResult.formInputsLabeled / crawlResult.totalFormInputs) < 0.8
      ? 'Add <label> elements or aria-label attributes to all form inputs'
      : '',
  });

  return checks;
}
