import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — GDPR Compliance Insights | ComplyScan",
  description:
    "Expert guidance on GDPR compliance for website owners. Learn about cookie consent, privacy policies, compliance checklists, and more.",
};

const posts = [
  {
    slug: "is-my-website-gdpr-compliant",
    title: "Is My Website GDPR Compliant? A Practical Guide for 2025",
    description:
      "Discover the 5 signs your website might violate GDPR, the real cost of non-compliance, and a step-by-step checklist to get compliant.",
    date: "March 30, 2026",
    readTime: "8 min read",
  },
  {
    slug: "gdpr-cookie-consent-requirements-2025",
    title: "GDPR Cookie Consent Requirements 2025: What Every Website Owner Must Know",
    description:
      "A complete breakdown of what cookies require consent, what valid consent looks like under GDPR, and the consequences of getting it wrong.",
    date: "March 25, 2026",
    readTime: "7 min read",
  },
  {
    slug: "gdpr-compliance-checklist",
    title: "The Complete GDPR Compliance Checklist for Website Owners",
    description:
      "Use this comprehensive checklist to audit your website against GDPR requirements covering cookies, privacy policies, DPAs, and data subject rights.",
    date: "March 20, 2026",
    readTime: "6 min read",
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-midnight text-white">
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            ComplyScan
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            GDPR Compliance Blog
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Practical guidance for website owners on staying compliant with GDPR,
            cookie consent laws, and data protection requirements.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 rounded-xl glass hover:border-accent-blue/30 transition-all group"
            >
              <div className="flex items-center gap-3 text-sm text-white/40 mb-3">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2
                className="text-xl md:text-2xl font-bold mb-2 group-hover:text-accent-blue transition-colors"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {post.title}
              </h2>
              <p className="text-white/60 leading-relaxed">{post.description}</p>
              <div className="mt-4 text-accent-blue text-sm font-medium group-hover:underline">
                Read article →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl glass text-center">
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Check Your Own Website
          </h2>
          <p className="text-white/60 mb-6 max-w-lg mx-auto">
            Don't guess whether your site is GDPR compliant. Run an automated scan and
            get a detailed compliance report in minutes.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-colors"
          >
            Run Free GDPR Scan
          </Link>
        </div>
      </div>
    </main>
  );
}
