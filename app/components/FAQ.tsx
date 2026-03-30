"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/app/lib/utils";

const faqs = [
  {
    question: "How does the scan work?",
    answer:
      "Our system uses an automated crawler to visit your website, analyze the HTML, meta tags, cookie banners, privacy policy links, and third-party scripts. The results are then processed through our AI analysis engine to identify GDPR compliance gaps.",
  },
  {
    question: "Is my URL stored?",
    answer:
      "Your URL is processed to perform the scan and is stored only as part of your scan history if you purchase a report. We do not share your URL with third parties, and it is not made publicly accessible. Scan data is retained for 30 days then automatically deleted.",
  },
  {
    question: "What happens after payment?",
    answer:
      "After successful payment, your scan is automatically triggered and typically completes within 2 minutes. A PDF report is then emailed to you with a detailed breakdown of every compliance issue found, its severity, and actionable fix recommendations.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "If your scan completes but returns no findings (blank report), we offer a full refund. If you are unsatisfied with the report for any reason within 7 days of purchase, contact our support team and we will work to resolve your concern.",
  },
  {
    question: "Is this suitable for EU websites only?",
    answer:
      "GDPR applies to any website that collects data from or targets users in the European Union, regardless of where your business is based. ComplyScan is designed to audit against GDPR requirements specifically, which is the strictest privacy regulation globally. If you are compliant with GDPR, you will be well positioned for other regulations like CCPA.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 bg-midnight">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 text-lg">
            Everything you need to know before scanning your site.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-white/50 flex-shrink-0 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
