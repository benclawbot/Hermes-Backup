import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR Cookie Consent Requirements 2025: What Every Website Owner Must Know",
  description:
    "A complete guide to GDPR cookie consent requirements for 2025. Learn what requires consent, how to get valid consent, and the consequences of getting it wrong.",
};

const articleContent = `
<p>In 2025, cookie consent violations remain one of the most common GDPR infractions—and one of the most frequently enforced. Data Protection Authorities across the EU have issued millions in fines for consent banners that manipulate users, pre-ticked boxes, and tracking scripts that fire before permission is granted. If your website serves EU visitors, understanding exactly what GDPR requires for cookie consent isn't optional. It's mandatory.</p>

<h2>What Cookies and Tracking Technologies Require Consent</h2>
<p>GDPR and the ePrivacy Directive distinguish between cookies that are strictly necessary for a requested service and everything else. Strictly necessary cookies don't require consent. These are typically functional cookies that remember items in a shopping cart, authenticate users, or maintain security sessions.</p>
<p>Everything else requires explicit, prior consent:</p>
<ul>
  <li><strong>Analytics cookies</strong> — Google Analytics, Mixpanel, Amplitude, and similar tools track user behavior across pages. Even "anonymized" analytics typically requires consent because they process personal data.</li>
  <li><strong>Advertising and targeting cookies</strong> — DoubleClick, Facebook Pixel, retargeting pixels, and any cookie used to build user profiles for advertising.</li>
  <li><strong>Social media plugins</strong> — Facebook Like buttons, Twitter shares, LinkedIn plugins—these set cookies and transmit data to third parties before a user clicks.</li>
  <li><strong>Video and embed cookies</strong> — YouTube embeds, Vimeo players, and similar third-party media players that set tracking cookies.</li>
  <li><strong>Chat widgets and live support tools</strong> — Intercom, Drift, Tidio, and similar tools that load scripts for real-time support.</li>
  <li><strong>A/B testing and personalization cookies</strong> — Tools that personalize content or test variations based on user behavior profiles.</li>
</ul>

<h2>What Constitutes Valid Consent Under GDPR</h2>
<p>GDPR Article 7, along with the ICO and EDPB guidelines, is explicit: consent must be freely given, specific, informed, and unambiguous. That means:</p>
<ul>
  <li><strong>Freely given:</strong> Users must have a genuine choice. A design where declining consent means they can't access your content is invalid consent. The "accept all" button cannot be more prominent than the "reject all" option.</li>
  <li><strong>Specific:</strong> Consent must be granular. You cannot bundle analytics and advertising into a single "marketing" consent. Users must be able to accept functional cookies, reject analytics, and accept advertising independently.</li>
  <li><strong>Informed:</strong> Users must know who is setting each cookie, what data it collects, and for what purpose. A plain-language explanation of each cookie category is required.</li>
  <li><strong>Unambiguous:</strong> Consent requires a clear affirmative action. Pre-ticked boxes, implied consent, silence, or continued browsing do not constitute valid consent.</li>
</ul>
<p>In practice, this means your cookie banner must have clearly labeled reject and accept buttons of equal visual weight. The word "accept" cannot be a bright CTA while "manage preferences" is greyed out and hidden behind a second click.</p>

<h2>Cookie Banner Requirements in Practice</h2>
<p>Beyond the consent mechanics, GDPR and the ePrivacy Directive impose specific requirements on how your banner is implemented:</p>
<ul>
  <li><strong>No cookie walls:</strong> Refusing consent must not deny access to the website or materially degrade the user experience beyond what's necessary.</li>
  <li><strong>No pre-ticked boxes:</strong> Every non-essential cookie category must default to off.</li>
  <li><strong>Cookie list must be specific:</strong> "Advertising cookies" isn't enough. List the specific companies (e.g., Google LLC, Meta Platforms Ireland Ltd.) and what data they process.</li>
  <li><strong>Withdraw consent easily:</strong> Users must be able to change their mind as easily as they gave consent. A preference center accessible from every page (usually in the footer) is the standard implementation.</li>
  <li><strong>Consent records:</strong> You must store proof of when consent was given, what was consented to, and the version of the consent mechanism at that time. This is your evidence if a regulator comes knocking.</li>
  <li><strong>Consent must be refreshed:</strong> After a meaningful change to your cookie practices, re-request consent. Annual refresh is a minimum; significant changes require immediate re-consent.</li>
</ul>

<h2>Consequences of Getting Cookie Consent Wrong</h2>
<p>Enforcement for cookie consent violations has been aggressive and ongoing. In recent years, regulators across Europe have issued landmark fines:</p>
<ul>
  <li>Meta was fined €390 million for illegal use of data for behavioral advertising without valid consent.</li>
  <li>Google received fines totaling over €150 million from French and Italian authorities for making it easier to accept cookies than to refuse them.</li>
  <li>Amazon and LinkedIn were fined for similar cookie consent violations in France and Germany.</li>
</ul>
<p>Beyond fines, many European countries now have "follow-on" litigation where privacy advocacy groups sue non-compliant companies. The reputational cost of being publicly named in an enforcement action—particularly in a high-profile GDPR case—is significant.</p>
<p>The path of least risk is to implement a properly configured consent management platform (CMP) that respects all five GDPR consent principles, maintain accurate consent records, and run periodic audits to ensure your tracking scripts are actually being blocked until consent is given.</p>

<h2>How to Audit Your Cookie Consent</h2>
<p>The most effective way to verify your cookie consent is compliant is to run a technical audit. A GDPR compliance scanner like ComplyScan will check whether your cookie banner meets GDPR requirements, whether tracking scripts are firing before consent, whether your privacy policy discloses your cookie practices, and whether your consent records are being stored. You get a full report with actionable fix recommendations.</p>
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
        <p className="text-white/50 text-sm mb-4">March 25, 2026 · ComplyScan Team</p>
        <h1
          className="text-3xl md:text-4xl font-bold mb-8 leading-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          GDPR Cookie Consent Requirements 2025: What Every Website Owner Must Know
        </h1>
        <div
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: articleContent }}
        />
        <div className="mt-12 p-6 rounded-xl glass text-center">
          <p className="text-lg mb-4 font-medium">Find out if your cookie consent is GDPR compliant.</p>
          <p className="text-white/60 mb-6">
            ComplyScan checks your cookie banners, tracking scripts, and consent mechanisms.
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
