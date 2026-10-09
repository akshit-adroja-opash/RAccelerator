"use client";

import { siteContent } from "@/data/content";
import { AlertTriangle, CheckCircle, Clock, ArrowRight, Zap } from "lucide-react";

export function Problem() {
  const problem = siteContent.problem;
  const { before, after } = problem.timeline;

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[var(--background)]">
      <div className="content-rail">
        
        {/* Editorial Heading Block */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-5">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{problem.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.15] mb-6">
            {problem.title}
          </h2>

          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            {problem.description}
          </p>
        </div>

        {/* Before / After Timeline Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* BEFORE: Traditional Manual Audit Prep (12 Weeks) */}
          <div className="relative rounded-2xl border border-red-500/20 bg-[var(--surface)] p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-500 border border-red-500/20">
                {before.badge}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-red-500">
                    {before.weeks}
                  </div>
                  <div className="text-xs font-semibold text-[var(--muted)]">
                    {before.title}
                  </div>
                </div>
              </div>

              {/* Timeline steps */}
              <div className="space-y-4 mt-6 border-l-2 border-red-500/20 pl-4">
                {before.steps.map((st, i) => (
                  <div key={i} className="relative group">
                    <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-red-400 border-2 border-[var(--surface)]" />
                    <span className="text-[11px] font-mono font-bold text-red-500 block">
                      {st.phase}
                    </span>
                    <p className="text-xs sm:text-sm text-[var(--muted)] mt-0.5 leading-snug">
                      {st.task}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--border)] text-xs text-red-400 font-medium flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Prone to Stage 1 non-conformities & 6-month submission delays</span>
            </div>
          </div>

          {/* AFTER: RAccelerator Deterministic AI (3 Weeks) */}
          <div className="relative rounded-2xl border-2 border-[var(--primary)] bg-[var(--surface)] p-6 sm:p-8 flex flex-col justify-between shadow-xl glow-emerald">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/30">
                {after.badge}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/15 text-[var(--primary)] flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-[var(--primary)]">
                    {after.weeks}
                  </div>
                  <div className="text-xs font-semibold text-[var(--muted)]">
                    {after.title}
                  </div>
                </div>
              </div>

              {/* Timeline steps */}
              <div className="space-y-4 mt-6 border-l-2 border-[var(--primary)] pl-4">
                {after.steps.map((st, i) => (
                  <div key={i} className="relative group">
                    <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--primary)] border-2 border-[var(--surface)]" />
                    <span className="text-[11px] font-mono font-bold text-[var(--primary)] block">
                      {st.phase}
                    </span>
                    <p className="text-xs sm:text-sm text-[var(--foreground)] font-medium mt-0.5 leading-snug">
                      {st.task}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--border)] text-xs text-[var(--primary)] font-semibold flex items-center gap-2">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>Full GSPR Annex I coverage + 21 CFR Part 11 cryptographic defense</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
