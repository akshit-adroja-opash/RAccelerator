"use client";

import { useReveal } from "@/hooks/useReveal";
import { Shield, Bot, ClipboardList, FileText, BarChart3, Lock } from "lucide-react";

const features = [
  {
    id: "gspr-health-check",
    icon: Shield,
    title: "GSPR Health Check",
    description:
      "RAccelerator will evaluate your device documentation against applicable ISO standards and GSPR, and provide a detailed overview of gaps and potential remediation.",
  },
  {
    id: "device-classification",
    icon: Bot,
    title: "Device Classification",
    description:
      "RAxy, the RAccelerator chatbot, walks you through the classification rules. It will provide the device classification with accuracy level and the classification determination report for your technical documentation.",
  },
  {
    id: "remediation-plan",
    icon: ClipboardList,
    title: "Remediation Plan",
    description:
      "When gaps are identified, RAccelerator will provide a remediation plan with estimated timelines and generic cost.",
  },
  {
    id: "document-review",
    icon: FileText,
    title: "Document Review",
    description:
      "RAccelerator can read your PDFs, DOCX, and XLSX documents. It will organize them under the applicable GSPR.",
  },
  {
    id: "transparent-reporting",
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "RAccelerator will provide a status report with the level of detail required for the audience — whether it is an RA professional, R&D Engineer, or C-suite.",
  },
  {
    id: "full-traceability",
    icon: Lock,
    title: "Full Traceability",
    description:
      "RAccelerator is 21 CFR Part 11 compliant and provides full traceability of data and evidence.",
  },
];

export function Features() {
  const ref = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="features" className="py-24 sm:py-32 bg-[var(--background)]">
      <div className="content-rail">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold uppercase tracking-wider mb-5">
            <span>Platform Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            Everything Your RA Team Needs in One Platform
          </h2>
        </div>

        {/* 2×3 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="reveal group p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all duration-200"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--foreground)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
