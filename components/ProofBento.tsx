"use client";

import { siteContent } from "@/data/content";
import {
  Award,
  ArrowRight,
  Quote,
  Star,
  CheckCircle,
  Clock,
  Sparkles,
  Building2,
  FileCheck2,
} from "lucide-react";

interface ProofBentoProps {
  onOpenDemo: (mode?: "demo" | "gap") => void;
}

export function ProofBento({ onOpenDemo }: ProofBentoProps) {
  const { eyebrow, title, caseStudy, testimonial1, testimonial2, segments, statTile } =
    siteContent.proofBento;

  return (
    <section id="proof" className="py-24 sm:py-32 bg-[var(--surface)]/60 border-t border-[var(--border)]">
      <div className="content-rail">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            {title}
          </h2>
        </div>

        {/* Asymmetric Bento Grid (12-column layout with distinct card shapes) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* TILE 1: Large Case Study Card (Col Span 12 on mobile, 7 on desktop) */}
          <div className="md:col-span-7 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-[var(--primary)]/60 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--primary)]/10 blur-3xl rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/30">
                  {caseStudy.tag}
                </span>
                <span className="text-xs font-mono text-[var(--muted)]">
                  MDR 2017/745 Case
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight mb-3">
                {caseStudy.headline}
              </h3>

              <div className="text-xs font-semibold text-[var(--primary)] mb-4">
                {caseStudy.manufacturer} · {caseStudy.deviceType}
              </div>

              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-6">
                {caseStudy.description}
              </p>

              <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] mb-6 text-xs text-[var(--foreground)] italic flex items-start gap-3">
                <Quote className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                <span>"{caseStudy.quote}"</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-sm font-bold font-mono text-[var(--foreground)]">
                  {caseStudy.result}
                </span>
              </div>

              <button
                onClick={() => onOpenDemo("demo")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] hover:underline cursor-pointer"
              >
                <span>{caseStudy.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* TILE 2: Big Stat Callout Card (Col Span 12 on mobile, 5 on desktop) */}
          <div className="md:col-span-5 rounded-3xl border border-[var(--border)] bg-[#071018] text-[#f4f7fb] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#065F4A_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-mono font-bold text-[#34d399] uppercase tracking-wider">
                Audited Efficiency Metric
              </span>

              <div className="my-6">
                <div className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-white">
                  {statTile.stat}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[#34d399] mt-1">
                  {statTile.unit}
                </div>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-[#f4f7fb]">
                {statTile.label}
              </h4>
              <p className="text-xs text-[#93a4b8] mt-1 leading-relaxed">
                {statTile.subtext}
              </p>
            </div>

            <div className="relative z-10 pt-4 mt-6 border-t border-[#2c4156] flex items-center justify-between text-xs text-[#93a4b8]">
              <span>75% Cycle Compression</span>
              <span className="font-mono text-[#34d399]">Verified 2026</span>
            </div>
          </div>

          {/* TILE 3: Testimonial 1 (Col Span 12 on mobile, 4 on desktop) */}
          <div className="md:col-span-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 flex flex-col justify-between shadow-md hover:border-[var(--primary)]/50 transition-all">
            <div>
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(testimonial1.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[var(--foreground)] leading-relaxed italic mb-6">
                "{testimonial1.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border)] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)]/15 text-[var(--primary)] flex items-center justify-center font-bold text-sm shrink-0">
                ER
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--foreground)]">
                  {testimonial1.author}
                </div>
                <div className="text-[11px] text-[var(--muted)]">
                  {testimonial1.role}
                </div>
                <div className="text-[10px] font-mono text-[var(--primary)]">
                  {testimonial1.company}
                </div>
              </div>
            </div>
          </div>

          {/* TILE 4: Testimonial 2 (Col Span 12 on mobile, 4 on desktop) */}
          <div className="md:col-span-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 flex flex-col justify-between shadow-md hover:border-[var(--primary)]/50 transition-all">
            <div>
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(testimonial2.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[var(--foreground)] leading-relaxed italic mb-6">
                "{testimonial2.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border)] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)]/15 text-[var(--primary)] flex items-center justify-center font-bold text-sm shrink-0">
                ML
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--foreground)]">
                  {testimonial2.author}
                </div>
                <div className="text-[11px] text-[var(--muted)]">
                  {testimonial2.role}
                </div>
                <div className="text-[10px] font-mono text-[var(--primary)]">
                  {testimonial2.company}
                </div>
              </div>
            </div>
          </div>

          {/* TILE 5: Segments Chips Card (Col Span 12 on mobile, 4 on desktop) */}
          <div className="md:col-span-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-[var(--primary)]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  Active MedTech Segments
                </h4>
              </div>
              <p className="text-xs text-[var(--muted)] mb-4">
                Pre-trained deterministic rule matrices for specialized device portfolios.
              </p>

              <div className="flex flex-wrap gap-2">
                {segments.map((segment) => (
                  <span
                    key={segment}
                    className="px-2.5 py-1 rounded-xl text-xs font-medium border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--primary)] transition-colors"
                  >
                    {segment}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[var(--border)] text-[11px] font-mono text-[var(--primary)] flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Full MDR & IVDR Annex VIII Coverage</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
