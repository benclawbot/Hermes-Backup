import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Complete GDPR Compliance Checklist for Website Owners",
  description:
    "Use this GDPR compliance checklist to audit your website. Covers cookie consent, privacy policy, data processing agreements, and more.",
};

const articleContent = `
<p>GDPR compliance isn't a one-time project you can tick off and forget. It's an ongoing responsibility that requires regular check-ins as your website evolves, new tools are added, and regulations are clarified. Whether you're building a new site or auditing an existing one, this checklist covers every major GDPR requirement that applies to website operators.</p>

<h2>1. Cookie Consent Banner</h2>
<ul>
  <li>A cookie consent banner or pop-up is displayed on first visit before any non-essential cookies are set</li>
  <li>The banner clearly explains the purpose of each cookie category</li>
  <li>Users can accept all, reject all, or customize their preferences</li>
  <li>The "reject all" option is as prominent and easy as "accept all"</li>
  <li>No cookies are set before consent is obtained (except strictly necessary ones)</li>
  <li>Analytics, advertising, and tracking scripts are blocked until consent is given</li>
  <li>A mechanism exists for users to withdraw consent as easily as they gave it (usually a link in the footer)</li>
  <li>Consent records are stored with timestamp, cookie version, and user preferences</li>
</ul>

<h2>2. Privacy Policy</h2>
<ul>
  <li>A privacy policy is accessible from every page (typically in the footer)</li>
  <li>The policy identifies the data controller and contact information</li>
  <li>All categories of personal data collected are listed (name, email, IP address, behavioral data, etc.)</li>
  <li>The legal basis for processing each category is stated (consent, contract, legitimate interest, or legal obligation)</li>
  <li>Data retention periods are specified for each data category</li>
  <li>All third-party data recipients are named (analytics providers, payment processors, email tools, etc.)</li>
  <li>Users are informed of their right to lodge a complaint with a supervisory authority</li>
  <li>The policy is written in clear, plain language—not dense legalese</li>
  <li>The policy is updated whenever data processing practices change</li>
</ul>

<h2>3. Data Processing Agreements (DPAs)</h2>
<ul>
  <li>A signed DPA is in place with every vendor that processes personal data on your behalf</li>
  <li>DPAs cover: Google (Analytics, Ads, Tag Manager, Firebase), Meta (Facebook Pixel, Instagram), Stripe, Mailchimp/Resend, Intercom or similar support tools, any CRM or marketing automation platform</li>
  <li>DPAs are reviewed and renewed annually or when vendor terms change</li>
  <li>The list of active processors is documented and available on request</li>
</ul>

<h2>4. Forms and User Inputs</h2>
<ul>
  <li>Every form field collecting personal data has a clear, descriptive label</li>
  <li>All consent checkboxes are unchecked by default</li>
  <li>Consent checkboxes use explicit opt-in language ("I agree to receive marketing emails") not pre-selected or implied</li>
  <li>No hidden form fields that collect data without disclosure</li>
  <li>Form submissions are only used for the stated purpose</li>
</ul>

<h2>5. Data Subject Rights Process</h2>
<ul>
  <li>A process exists to handle data subject access requests (DSARs) within 30 days</li>
  <li>Users can request: access to their data, correction of inaccurate data, deletion ("right to be forgotten"), restriction of processing, data portability, objection to processing</li>
  <li>Contact information for rights requests is clearly published (typically privacy policy or a dedicated email)</li>
  <li>A process exists to handle voluntary data disclosure to users upon request</li>
  <li>A process exists to erase user data upon request and from all connected systems (backup included)</li>
</ul>

<h2>6. Technical Security</h2>
<ul>
  <li>HTTPS is enforced site-wide (no mixed content issues)</li>
  <li>Form submissions are transmitted over encrypted connections</li>
  <li>Access to any admin or backend systems is restricted and logged</li>
  <li>Databases and file storage containing personal data are secured</li>
</ul>

<h2>7. Data Breach Preparedness</h2>
<ul>
  <li>A data breach response plan exists with defined steps and responsibilities</li>
  <li>Breaches affecting user rights must be reported to the relevant supervisory authority within 72 hours</li>
  <li>High-risk breaches must also be communicated to affected users without undue delay</li>
</ul>

<h2>8. Record of Processing Activities (Article 30)</h2>
<ul>
  <li>A written record of all data processing activities is maintained</li>
  <li>The record includes: purpose of processing, data categories, recipient categories, retention periods, and security measures</li>
</ul>

<h2>Automate Your GDPR Audit</h2>
<p>Working through this checklist manually is time-consuming and error-prone. An automated GDPR compliance scanner can check your site against dozens of specific requirements in minutes, flagging issues before they become violations. ComplyScan audits your cookie consent implementation, privacy policy completeness, tracking script behavior, and more, delivering a structured report with fix recommendations.</p>
`;

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-midnight text-white">
      <header className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            ComplyScan
          </Link>
          <Link
            href="/blog"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </header>
      <article className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-white/50 text-sm mb-4">March 20, 2026 · ComplyScan Team</p>
        <h1
          className="text-3xl md:text-4xl font-bold mb-8 leading-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          The Complete GDPR Compliance Checklist for Website Owners
        </h1>
        <div
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: articleContent }}
        />
        <div className="mt-12 p-6 rounded-xl glass text-center">
          <p className="text-lg mb-4 font-medium">Don't risk a GDPR violation.</p>
          <p className="text-white/60 mb-6">
            Run a free automated scan to find compliance gaps on your website.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-colors"
          >
            Run Free GDPR Scan
          </Link>
        </div>
      </article>
    </main>
  );
}
