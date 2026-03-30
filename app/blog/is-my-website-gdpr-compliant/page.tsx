import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is My Website GDPR Compliant? A Practical Guide for 2025",
  description:
    "Discover the 5 signs your website might violate GDPR and what to do about it before you get fined up to €20 million.",
};

const articleContent = `
<p>The General Data Protection Regulation (GDPR) has been in effect since May 2018, yet countless websites still fail to meet its requirements. If your site collects any data from European users—even a simple email address—you're legally obligated to comply. The question isn't whether GDPR applies to you, but whether you're already in violation.</p>

<h2>Who Does GDPR Apply To?</h2>
<p>GDPR applies to any website that:</p>
<ul>
  <li>Targets EU residents with products or services</li>
  <li>Monitors the behavior of EU users (e.g., via analytics tracking)</li>
  <li>Has even a single EU visitor who submits personal data</li>
</ul>
<p>This means a US-based e-commerce store selling to European customers, a blog with EU readers, or a SaaS tool with EU subscribers—all fall squarely under GDPR jurisdiction. Ignorance is not a defense. The regulators know it, and enforcement has only gotten stricter.</p>

<h2>5 Signs Your Website Might Not Be GDPR Compliant</h2>

<h3>1. No Cookie Consent Banner</h3>
<p>If your site loads Google Analytics, Meta Pixel, Hotjar, or any tracking script before asking for user consent, you're violating GDPR's requirement for prior consent. Cookies that aren't strictly necessary to the requested service cannot be set without explicit opt-in.</p>

<h3>2. Missing or Incomplete Privacy Policy</h3>
<p>Your privacy policy must clearly disclose: what data you collect, why you collect it, how long you retain it, who you share it with, and every GDPR right your users have. A one-liner saying "we respect your privacy" doesn't cut it.</p>

<h3>3. No Way for Users to Exercise Their Rights</h3>
<p>GDPR grants users the right to access, rectify, erase, port, and restrict processing of their data. If you have no process—no email address, no form, no system—to handle these requests within 30 days, you're non-compliant.</p>

<h3>4. Forms and Inputs Lack Proper Labels</h3>
<p>Every form field collecting personal data must have a clear label. Pre-filled fields, misleading checkboxes, or hidden consent checkboxes all violate GDPR's requirement for freely given, specific, informed, and unambiguous consent.</p>

<h3>5. No Data Processing Agreement with Third Parties</h3>
<p>Any vendor that processes personal data on your behalf (email service providers, analytics tools, payment processors) requires a signed Data Processing Agreement (DPA). Using Google Analytics, Mailchimp, or Stripe without a DPA in place is a compliance gap.</p>

<h2>The Real Cost of GDPR Non-Compliance</h2>
<p>GDPR fines are tiered. Minor violations can cost up to €10 million or 2% of global annual turnover—whichever is higher. Serious violations, like unlawful data processing or violating core consent principles, can reach €20 million or 4% of global annual turnover. Meta has been fined over €1.3 billion. Amazon, Google, Uber—regulators have come for them all.</p>
<p>But fines aren't the only risk. Data breaches resulting from non-compliance must be reported to authorities within 72 hours. Failure to notify can double the fine. Then there's reputational damage: a public enforcement action is news. A leaked customer database is a PR catastrophe.</p>

<h2>How to Check if Your Website Is GDPR Compliant</h2>
<p>Auditing your own site is difficult—you're looking at it through the lens of someone who built it. A systematic GDPR compliance scan checks the things regulators check: Is a cookie consent banner present and functioning correctly? Is a privacy policy accessible and complete? Are tracking scripts firing before consent? Are your third-party vendors covered by DPAs?</p>
<p>ComplyScan performs an automated scan of your website, checking against 40+ GDPR requirements and delivering a detailed report with severity ratings and fix recommendations. It takes less than 2 minutes and tells you exactly where your compliance gaps are.</p>

<h2>Step-by-Step GDPR Compliance Checklist</h2>
<ol>
  <li><strong>Install a compliant cookie consent banner</strong> — one that blocks scripts until consent is given. CookieBot, Usercentrics, or OneTrust are popular options.</li>
  <li><strong>Write a complete privacy policy</strong> — cover every data category, processing purpose, legal basis, retention period, and third-party sharing detail.</li>
  <li><strong>Sign Data Processing Agreements</strong> — with every vendor that touches personal data (analytics, email, payments, CRM).</li>
  <li><strong>Add a data subject request mechanism</strong> — an email address or form where users can exercise their GDPR rights, with a 30-day response process.</li>
  <li><strong>Audit your forms</strong> — ensure all inputs are labeled, consent checkboxes are unchecked by default, and no dark patterns exist.</li>
  <li><strong>Enable HTTPS</strong> — mandatory for any site handling personal data.</li>
  <li><strong>Document your processing activities</strong> — Article 30 requires a record of all data processing operations.</li>
  <li><strong>Run a compliance scan</strong> — use an automated tool to find issues you missed.</li>
</ol>

<h2>Don't Wait for a Complaint</h2>
<p>GDPR enforcement is complaint-driven. A single unhappy customer filing with their local Data Protection Authority can trigger an investigation that ends in fines and public embarrassment. The smart move is to find your gaps before someone else does.</p>
<p>Run a free GDPR scan on your website right now. ComplyScan checks your site against the full GDPR framework and delivers a report in minutes—no signup required.</p>
`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does GDPR apply to my website if I'm based outside the EU?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. GDPR applies to any website that collects data from EU residents, regardless of where your business is based. If you have EU visitors or customers, GDPR applies.",
      },
    },
    {
      "@type": "Question",
      "name": "What happens if my website is not GDPR compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fines can reach €20 million or 4% of global annual turnover for serious violations. You may also face mandatory data breach notifications, investigative costs, and reputational damage.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I know if my website needs a cookie consent banner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your website uses any cookies or tracking technologies that are not strictly necessary for the service the user requested (such as analytics, advertising, or functional scripts), you need a consent banner that blocks those scripts until the user opts in.",
      },
    },
    {
      "@type": "Question",
      "name": "How often should I audit my website for GDPR compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You should audit your website at least annually and whenever you add new tracking tools, forms, third-party services, or significant changes to your data processing. Regular monitoring catches issues before they become violations.",
      },
    },
  ],
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-midnight text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
        <p className="text-white/50 text-sm mb-4">March 30, 2026 · ComplyScan Team</p>
        <h1
          className="text-3xl md:text-4xl font-bold mb-8 leading-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Is My Website GDPR Compliant? A Practical Guide for 2025
        </h1>
        <div
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: articleContent }}
        />
        <div className="mt-12 p-6 rounded-xl glass text-center">
          <p className="text-lg mb-4 font-medium">Ready to check your own website?</p>
          <p className="text-white/60 mb-6">
            Run a free automated GDPR scan and get your compliance report in minutes.
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
