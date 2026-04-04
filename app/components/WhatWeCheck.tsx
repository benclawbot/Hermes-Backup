"use client";

import {
  Cookie,
  FileText,
  Lock,
  Eye,
  FormInput,
  Scale,
} from "lucide-react";
import { RevealSection } from "./ui/RevealSection";

const checks = [
  {
    icon: Cookie,
    title: "Cookie Consent Banner",
    description:
      "Detects if your site displays a GDPR-compliant cookie consent banner with proper opt-in/opt-out controls.",
    risk: "high",
  },
  {
    icon: FileText,
    title: "Privacy Policy",
    description:
      "Verifies that a privacy policy page exists, is accessible, and covers all required GDPR disclosure items.",
    risk: "high",
  },
  {
    icon: Lock,
    title: "SSL / HTTPS",
    description:
      "Confirms your site uses HTTPS encryption to protect data in transit — baseline for any compliance.",
    risk: "low",
  },
  {
    icon: Eye,
    title: "Tracking Scripts",
    description:
      "Identifies Google Analytics, Facebook Pixel, Hotjar, and other ad scripts that require prior user consent.",
    risk: "high",
  },
  {
    icon: FormInput,
    title: "Form Input Labels",
    description:
      "Checks that every form field has a proper label — required for GDPR clarity and WCAG accessibility.",
    risk: "medium",
  },
  {
    icon: Scale,
    title: "Third-Party Embeds",
    description:
      "Reviews YouTube, Twitter, and other embeds to ensure they don't load tracking content before consent.",
    risk: "medium",
  },
];

const riskColors: Record<string, { dot: string; label: string }> = {
  high: { dot: "bg-risk-high", label: "Common violation" },
  medium: { dot: "bg-risk-medium", label: "Often overlooked" },
  low: { dot: "bg-risk-low", label: "Baseline" },
};

export function WhatWeCheck() {
  return (
    <section id="what-we-check" className="py-28 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight to-midnight-light/30 pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <RevealSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            <span className="text-white/50 text-xs font-medium uppercase tracking-wider">40+ audit checks</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            What We Scan For
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Our AI crawler checks every corner of your site against GDPR requirements — automatically.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {checks.map((check, i) => (
            <RevealSection key={check.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="group glass rounded-2xl p-6 border border-white/[0.07] hover:border-white/[0.14] hover-lift transition-all h-full">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl"
                    style={{
                      background: `rgba(${
                        check.risk === "high" ? "239,68,68" : check.risk === "medium" ? "245,158,11" : "34,197,94"
                      }, 0.12)`,
                      border: `1px solid rgba(${
                        check.risk === "high" ? "239,68,68" : check.risk === "medium" ? "245,158,11" : "34,197,94"
                      }, 0.2)`,
                    }}
                  >
                    <check.icon
                      className="w-5 h-5"
                      style={{
                        color: check.risk === "high" ? "#ef4444" : check.risk === "medium" ? "#f59e0b" : "#22c55e",
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-white text-sm">{check.title}</h3>
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-medium text-white/40`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${riskColors[check.risk].dot}`} />
                        {riskColors[check.risk].label}
                      </span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed">{check.description}</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Bottom note */}
        <RevealSection delay={2} className="mt-8 text-center">
          <p className="text-white/25 text-xs">
            Plus: form action transparency, COPPA indicators, CCPA opt-out mechanisms, data retention disclosures, and more.
          </p>
        </RevealSection>
      </div>
    </section>
  );
}
