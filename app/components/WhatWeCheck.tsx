import {
  Cookie,
  FileText,
  Lock,
  Eye,
  FormInput,
  Scale,
} from "lucide-react";

const checks = [
  {
    icon: Cookie,
    title: "Cookie Consent Banner",
    description:
      "Detects if your site displays a GDPR-compliant cookie consent banner.",
  },
  {
    icon: FileText,
    title: "Privacy Policy Presence",
    description:
      "Verifies that a privacy policy page exists and is accessible.",
  },
  {
    icon: Lock,
    title: "SSL/HTTPS Security",
    description:
      "Confirms your site uses HTTPS encryption to protect data in transit.",
  },
  {
    icon: Eye,
    title: "Third-Party Tracking Scripts",
    description:
      "Identifies tracking pixels, analytics, and ad scripts that may require consent.",
  },
  {
    icon: FormInput,
    title: "Form Input Labels",
    description:
      "Checks that all form fields have proper labels for accessibility and GDPR clarity.",
  },
  {
    icon: Scale,
    title: "Data Processing Transparency",
    description:
      "Evaluates whether data collection practices are clearly disclosed to users.",
  },
];

export function WhatWeCheck() {
  return (
    <section id="what-we-check" className="py-24 px-4 bg-midnight">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            What We Check
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Our scanner audits 6 key areas of GDPR compliance across your
            entire site.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {checks.map((check) => (
            <div
              key={check.title}
              className="glass rounded-xl p-6 hover:border-accent-blue/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-blue/10">
                  <check.icon className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    {check.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {check.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
