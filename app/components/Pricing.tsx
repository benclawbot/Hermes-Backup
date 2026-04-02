"use client";

import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Single Scan",
    price: "$29",
    period: "per scan",
    description:
      "One-time full GDPR compliance scan with PDF report and unlimited retakes if you fix issues.",
    features: [
      "1 full GDPR compliance scan",
      "PDF report with issue details",
      "Severity ratings for each finding",
      "Fix suggestions for every issue",
      "Unlimited retakes after fixes",
    ],
    plan: "single" as const,
    cta: "Start Single Scan",
  },
  {
    name: "Monthly Monitor",
    price: "$99",
    period: "per month",
    description:
      "Continuous compliance monitoring for active websites. Unlimited scans, monthly reports, and priority support.",
    features: [
      "Unlimited scans per month",
      "Monthly compliance reports",
      "Priority email support",
      "New issue alerts",
      "Historical scan comparison",
    ],
    plan: "monthly" as const,
    cta: "Start Monthly Monitor",
    highlighted: true,
  },
];

export function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (plan: 'single' | 'monthly', url?: string) => {
    setLoading(plan);

    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url || '', email: undefined, plan }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      alert('Failed to start checkout. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="pricing" className="py-24 px-4 bg-midnight-light/20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Pay once for a single scan, or subscribe for continuous monitoring.
            No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "border-accent-blue/40 shadow-lg shadow-accent-blue/10"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="inline-flex items-center gap-2 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-semibold px-3 py-1 mb-4 w-fit">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold text-white mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-white/50 text-sm">{plan.period}</span>
                </div>
                <p className="text-white/50 text-sm mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/70"
                  >
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  if (plan.plan === 'single') {
                    // Single scan requires a URL — scroll to the hero form at the top of the page
                    const hero = document.getElementById('hero');
                    if (hero) hero.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    else window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    handleCheckout(plan.plan);
                  }
                }}
                disabled={loading !== null}
                className={`w-full rounded-lg py-3 px-6 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                  plan.highlighted
                    ? "bg-accent-blue text-white hover:bg-accent-glow shadow-lg shadow-accent-blue/30"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                {loading === plan.plan ? 'Redirecting...' : plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
