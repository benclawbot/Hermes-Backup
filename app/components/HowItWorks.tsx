import { Link, ScanSearch, MailCheck } from "lucide-react";

const steps = [
  {
    icon: Link,
    title: "Enter your URL",
    description:
      "Type your website address into our secure scanner. No signup, no account needed.",
  },
  {
    icon: ScanSearch,
    title: "We scan automatically",
    description:
      "Our system crawls your site, checking for cookie banners, privacy policies, tracking scripts, and more.",
  },
  {
    icon: MailCheck,
    title: "Report emailed to you",
    description:
      "Receive a detailed PDF report with every GDPR issue found, severity levels, and fix suggestions.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 px-4 bg-midnight-light/30"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Three steps to GDPR peace of mind. No manual work required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="glass rounded-2xl p-8 text-center hover:border-accent-blue/30 transition-all"
            >
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent-blue/20 text-accent-blue text-sm font-bold mb-6">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-blue/10 mb-4">
                <step.icon className="w-7 h-7 text-accent-blue" />
              </div>

              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
