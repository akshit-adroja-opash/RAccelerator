"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "How does RAccelerator's AI ensure classification accuracy?",
    answer:
      "RAccelerator uses a deterministic, rule-based AI engine built on the complete MDR Annex VIII classification rule set. Every determination is evidence-anchored and reproducible — not probabilistic. Each output cites the rules applied, the evidence anchors that informed the conclusion, and the standard clauses that govern the determination, so a Notified Body reviewer can re-trace the reasoning end-to-end.",
  },
  {
    question: "Is my regulatory data secure?",
    answer:
      "Yes. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II audited, GDPR compliant, and offer EU-based data residency. Access is controlled via role-based permissions with mandatory MFA.",
  },
  {
    question: "Does this work for Class I, IIa, IIb, and III devices?",
    answer:
      "Yes. RAccelerator supports classification and GSPR assessment for all MDR risk classes, including Class I devices with measuring function or sterile variants. The platform also supports IVDR devices under EU IVDR 2017/746.",
  },
  {
    question: "Is RAccelerator accepted by Notified Bodies?",
    answer:
      "RAccelerator generates documentation that aligns with Notified Body expectations for technical file structure, GSPR mapping format, and clinical evaluation report standards. Several of our clients have successfully used RAccelerator-generated reports in their NB submissions.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "Turnkey onboarding takes 2–4 weeks. A dedicated Regulatory Solutions Engineer configures your secure workspace, integrates with your QMS and SSO, ingests your existing technical files, and assists in running your first GSPR gap assessments.",
  },
  {
    question: "Can RAccelerator integrate with our existing QMS?",
    answer:
      "Yes. RAccelerator provides REST APIs and pre-built connectors for Veeva Vault, MasterControl, Greenlight Guru, Arena PLM, Jira, and Azure DevOps. We support SSO/SAML 2.0 and standard export formats for Notified Body submission packages.",
  },
];

interface FAQProps {
  onOpenDemo: (mode?: "demo" | "gap") => void;
}

export function FAQ({ onOpenDemo }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useReveal();

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="faq" className="py-24 sm:py-32 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="content-rail max-w-3xl mx-auto">

        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold uppercase tracking-wider mb-5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            Common Questions from Regulatory Teams
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? "border-[var(--primary)]/50 bg-[var(--surface)]"
                    : "border-[var(--border)] bg-[var(--surface)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[var(--foreground)]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--muted)] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[var(--primary)]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--border)] pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center reveal">
          <p className="text-sm text-[var(--muted)] mb-3">Have a device-specific question?</p>
          <button
            onClick={() => onOpenDemo("demo")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--primary)] text-sm font-semibold text-[var(--foreground)] transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[var(--primary)]" />
            Talk to a Regulatory Specialist
          </button>
        </div>

      </div>
    </section>
  );
}
