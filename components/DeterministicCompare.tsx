"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { siteContent } from "@/data/content";
import { AlertTriangle, CheckCircle2, RefreshCw, GitBranch, ShieldCheck, Shield, X } from "lucide-react";

export function DeterministicCompare() {
  const data = siteContent.deterministicAI;
  const [activeIdx, setActiveIdx] = useState(0);
  const ref = useReveal();
  const pillarIcons = { RefreshCw, GitBranch, ShieldCheck };
  const active = data.sliderComparison[activeIdx];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="deterministic" className="py-24 sm:py-32 bg-[var(--surface)]/70 border-y border-[var(--border)]">
      <div className="content-rail">

        {/* Header */}
        <div className="max-w-2xl mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>{data.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
            {data.h2}
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)] mt-3 leading-relaxed">
            {data.leadText}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT: Comparison Panel */}
          <div className="lg:col-span-7 space-y-4 reveal-right">

            {/* Dimension Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {data.sliderComparison.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all cursor-pointer border ${
                    activeIdx === idx
                      ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-md"
                      : "bg-[var(--background)] text-[var(--muted)] border-[var(--border)] hover:border-[var(--primary)]/40 hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.dimension}
                </button>
              ))}
            </div>

            {/* Comparison Card */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] overflow-hidden">

              {/* Column Headers */}
              <div className="grid grid-cols-2 border-b border-[var(--border)]">
                <div className="flex items-center gap-2 px-5 py-3 border-r border-[var(--border)] bg-red-500/5">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span className="text-xs font-semibold text-red-500">Generic AI</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-[var(--primary)]/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                  <span className="text-xs font-semibold text-[var(--primary)]">RAccelerator Deterministic AI</span>
                </div>
              </div>

              {/* Content Row */}
              <div className="grid grid-cols-2">
                <div className="px-5 py-6 border-r border-[var(--border)] space-y-3">
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{active.genericAI.text}</p>
                  <div className="flex items-start gap-2 pt-2 border-t border-red-500/10">
                    <X className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-red-500 font-medium">{active.genericAI.flaw}</span>
                  </div>
                </div>
                <div className="px-5 py-6 space-y-3">
                  <p className="text-sm text-[var(--foreground)] leading-relaxed">{active.raccelerator.text}</p>
                  <div className="flex items-start gap-2 pt-2 border-t border-[var(--primary)]/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)] shrink-0 mt-0.5" />
                    <span className="text-xs text-[var(--primary)] font-semibold">{active.raccelerator.guarantee}</span>
                  </div>
                </div>
              </div>

              {/* Dot nav */}
              <div className="flex items-center justify-center gap-2 py-4 border-t border-[var(--border)]">
                {data.sliderComparison.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`rounded-full transition-all cursor-pointer ${
                      activeIdx === idx ? "w-5 h-1.5 bg-[var(--primary)]" : "w-1.5 h-1.5 bg-[var(--border)] hover:bg-[var(--muted)]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Pillars */}
          <div className="lg:col-span-5 space-y-4 reveal-left" style={{ transitionDelay: "150ms" }}>
            <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
              3 Architectural Pillars
            </p>

            {data.pillars.map((pillar, i) => {
              const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons];
              return (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--primary)]/50 transition-all group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-9 h-9 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-bold text-[var(--foreground)]">{pillar.title}</h3>
                      <span className="text-[10px] font-semibold text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-0.5 rounded-full">{pillar.stat}</span>
                    </div>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}


          </div>

        </div>
      </div>
    </section>
  );
}
