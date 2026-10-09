"use client";

import { useState } from "react";
import { siteContent, DeviceClass } from "@/data/content";
import {
  Layers,
  CheckCircle,
  Network,
  Clock,
  ArrowRight,
  Shield,
  FileCheck2,
} from "lucide-react";

export function CoverageOnboarding() {
  const { eyebrow, title, subtitle, classes, integrations, onboardingTimeline } =
    siteContent.coverageAndOnboarding;

  const [selectedClassId, setSelectedClassId] = useState<string>("class-iib");

  const currentClass = classes.find((c) => c.id === selectedClassId) || classes[2];

  return (
    <section id="coverage" className="py-24 sm:py-32 bg-[var(--background)] relative overflow-hidden">
      <div className="content-rail">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)] mt-3">
            {subtitle}
          </p>
        </div>

        {/* 1. VISUAL DEVICE CLASS SELECTOR */}
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 shadow-xl mb-12">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] mb-4">
            Select Device Classification To View Annex VIII Rules & Scope:
          </div>

          {/* Clickable Class Selector Chips */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {classes.map((cls) => {
              const isSelected = cls.id === selectedClassId;
              return (
                <button
                  key={cls.id}
                  onClick={() => setSelectedClassId(cls.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/20"
                      : "border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--primary)]/50"
                  }`}
                >
                  <span>{cls.name}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-md font-mono ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-[var(--border)] text-[var(--muted)]"
                    }`}
                  >
                    {cls.riskLevel} Risk
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Class Deep-Dive Panel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)]">
            <div>
              <span className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider block mb-1">
                Typical Representative Devices
              </span>
              <ul className="space-y-1.5 mt-2">
                {currentClass.examples.map((ex, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-medium text-[var(--foreground)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider block mb-1">
                GSPR & Notified Body Requirements
              </span>
              <p className="text-xs sm:text-sm text-[var(--foreground)] mt-2 font-medium leading-relaxed">
                {currentClass.gsprRequirements}
              </p>
              <div className="mt-3 text-[11px] font-mono text-[var(--primary)]">
                {currentClass.ruleCoverage}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider block mb-1">
                Typical RAccelerator Review Cycle
              </span>
              <div className="text-xl sm:text-2xl font-black font-mono text-[var(--primary)] mt-1">
                {currentClass.typicalReviewTime}
              </div>
              <span className="text-[11px] text-[var(--muted)] block mt-1">
                vs 2-4 months traditional manual consulting cycles
              </span>
            </div>
          </div>
        </div>

        {/* 2. INTEGRATIONS STRIP & 3. ONBOARDING TIMELINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Integrates with your QMS */}
          <div className="lg:col-span-5 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Network className="w-4 h-4 text-[var(--primary)]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  Integrates With Your QMS Stack
                </h3>
              </div>
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] mb-3">
                API, SSO/SAML & Standard Exports
              </div>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-6">
                Direct bi-directional synchronization with Veeva Vault, MasterControl, Greenlight Guru, Arena, and Jira.
              </p>

              <div className="space-y-3">
                {integrations.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                    <div className="text-xs font-bold text-[var(--foreground)]">{item.name}</div>
                    <div className="text-[11px] text-[var(--muted)] mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[var(--border)] text-xs text-[var(--muted)] font-mono flex items-center justify-between">
              <span>REST & GraphQL APIs</span>
              <span className="text-[var(--primary)] font-bold">99.99% Uptime SLA</span>
            </div>
          </div>

          {/* 2-4 Weeks Turnkey Onboarding Timeline */}
          <div className="lg:col-span-7 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[var(--primary)]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  Dedicated Deployment
                </h3>
              </div>
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] mb-2">
                {onboardingTimeline.headline}
              </div>
              <p className="text-xs sm:text-sm text-[var(--muted)] mb-6">
                {onboardingTimeline.subline}
              </p>

              {/* 4-Step Horizontal / Stacked Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {onboardingTimeline.steps.map((st, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-[var(--primary)]">
                        {st.week}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--muted)]">
                        Phase 0{i + 1}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[var(--foreground)]">
                      {st.title}
                    </div>
                    <p className="text-[11px] text-[var(--muted)] mt-1 leading-snug">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted)]">
              <span>Includes Dedicated Regulatory Solutions CSM</span>
              <span className="font-mono text-[var(--primary)] font-semibold">Fast-Track Live</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
