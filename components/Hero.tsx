"use client";

import { useState, useEffect } from "react";
import { siteContent } from "@/data/content";
import {
  ArrowRight,
  Shield,
  CheckCircle2,
  Cpu,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  onOpenDemo: (mode?: "demo" | "gap") => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  const [activeRuleIndex, setActiveRuleIndex] = useState(0);
  const [animatedConfidence, setAnimatedConfidence] = useState(0);
  const [chipRevealed, setChipRevealed] = useState([false, false, false]);

  const heroData = siteContent.hero;
  const report = heroData.reportMockup;

  useEffect(() => {
    // Confidence ring count-up animation
    const target = report.confidence;
    let start = 0;
    const duration = 1200;
    const intervalTime = 20;
    const increment = target / (duration / intervalTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setAnimatedConfidence(target);
        clearInterval(timer);
      } else {
        setAnimatedConfidence(Number(start.toFixed(1)));
      }
    }, intervalTime);

    // Stagger rule chips reveal
    const c1 = setTimeout(() => setChipRevealed([true, false, false]), 300);
    const c2 = setTimeout(() => setChipRevealed([true, true, false]), 600);
    const c3 = setTimeout(() => setChipRevealed([true, true, true]), 900);

    return () => {
      clearInterval(timer);
      clearTimeout(c1);
      clearTimeout(c2);
      clearTimeout(c3);
    };
  }, [report.confidence]);

  // SVG circular progress calculation
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (animatedConfidence / 100) * circumference;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[var(--primary)]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-5 w-72 h-72 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="content-rail">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm animate-fade-up delay-100">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span>{heroData.eyebrow}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.1] mb-6 animate-fade-up delay-200">
              <span>{heroData.h1Line1}</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-emerald-400 to-teal-500">
                {heroData.h1Line2}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl mb-8 animate-fade-up delay-300">
              {heroData.subtext}
            </p>

            {/* CTA Cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8 animate-fade-up delay-400">
              <button
                onClick={() => onOpenDemo("gap")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--primary)] text-white font-semibold text-sm hover:opacity-95 active:scale-[0.98] transition-all shadow-lg shadow-[var(--primary)]/25 cursor-pointer"
              >
                <span>{heroData.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenDemo("demo")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--primary)] font-semibold text-sm transition-all cursor-pointer shadow-sm"
              >
                <span>{heroData.secondaryCta}</span>
                <Sparkles className="w-4 h-4 text-[var(--primary)]" />
              </button>
            </div>

            {/* Trust Reassurance Strip */}
            <div className="flex items-center gap-3 text-xs text-[var(--muted)] border-t border-[var(--border)]/70 pt-5 w-full animate-fade-up delay-500">
              <Shield className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <span className="font-mono text-[11px] sm:text-xs">
                {heroData.guarantee}
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Device Classification Report */}
          <div className="lg:col-span-5 w-full animate-slide-left delay-300">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-2xl">

              {/* Header */}
              <div className="px-5 pt-4 pb-3.5 border-b border-[var(--border)] bg-[var(--background)]/50">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0">
                      <Cpu className="w-4 h-4 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] leading-none mb-1">{report.title}</p>
                      <p className="text-[11px] font-semibold text-[var(--foreground)] leading-snug">{report.deviceRef}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                    <span className="text-[10px] font-semibold text-[var(--primary)] uppercase tracking-wide">{report.annexCoverage}</span>
                  </div>
                </div>
              </div>

              {/* Classification Hero Row */}
              <div className="px-5 py-5 border-b border-[var(--border)]">
                <div className="flex items-center justify-between gap-4">
                  {/* Class result */}
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-1.5">Annex VIII Result</p>
                    <p className="text-[56px] font-black tracking-tighter leading-none bg-gradient-to-br from-[var(--foreground)] to-[var(--foreground)]/70 bg-clip-text text-transparent">
                      {report.classResult}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                        <span className="w-1 h-1 rounded-full bg-[var(--primary)]" />
                        <span className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-wide">Active High Risk</span>
                      </span>
                      <span className="text-[10px] text-[var(--muted)]">Rules <span className="text-[var(--foreground)] font-bold">{report.rulesHitCount}</span></span>
                    </div>
                  </div>

                  {/* Confidence Ring */}
                  <div className="flex flex-col items-center gap-1.5 shrink-0">
                    <div className="relative w-[80px] h-[80px]">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 90 90">
                        <circle cx="45" cy="45" r={radius} className="stroke-[var(--border)] fill-none" strokeWidth="5" />
                        <circle
                          cx="45" cy="45" r={radius}
                          className="fill-none transition-all duration-1000 ease-out"
                          stroke="var(--primary)"
                          strokeWidth="5"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[15px] font-black text-[var(--foreground)] leading-none">{animatedConfidence}%</span>
                      </div>
                    </div>
                    <span className="text-[9px] text-[var(--muted)] uppercase tracking-widest">Confidence</span>
                  </div>
                </div>
              </div>

              {/* Rules */}
              <div className="px-5 py-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">Triggered Annex VIII Rules</p>
                  <span className="text-[10px] text-[var(--primary)] font-semibold">Deterministic Engine</span>
                </div>

                <div className="space-y-2">
                  {report.rules.map((ruleItem, idx) => {
                    const isSelected = activeRuleIndex === idx;
                    const isVisible = chipRevealed[idx];
                    const isPrimary = ruleItem.type === "Primary Determination";
                    return (
                      <div
                        key={ruleItem.rule}
                        onClick={() => setActiveRuleIndex(idx)}
                        className={`rounded-xl border cursor-pointer transition-all duration-300 overflow-hidden ${
                          isVisible ? "opacity-100" : "opacity-0"
                        } ${
                          isSelected
                            ? "border-[var(--primary)]/35 bg-[var(--primary)]/5"
                            : "border-[var(--border)] bg-[var(--background)] hover:border-[var(--primary)]/20"
                        }`}
                        style={{ transitionDelay: `${idx * 120}ms` }}
                      >
                        {/* Rule row */}
                        <div className="flex items-center gap-3 px-3.5 py-2.5">
                          {/* Left accent bar */}
                          <span className={`w-0.5 h-7 rounded-full shrink-0 ${
                            isPrimary ? "bg-[var(--primary)]" : "bg-[var(--border)]"
                          }`} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className={`text-[11px] font-black ${
                                isSelected ? "text-[var(--primary)]" : "text-[var(--foreground)]"
                              }`}>{ruleItem.rule}</span>
                              <span className="text-[11px] text-[var(--muted)] font-medium truncate">{ruleItem.category}</span>
                            </div>
                            {isSelected && (
                              <p className="text-[10px] text-[var(--muted)] leading-relaxed mt-1">{ruleItem.description}</p>
                            )}
                            {isSelected && (
                              <div className="flex items-center justify-between mt-1.5">
                                <span className="text-[9px] text-[var(--muted)]">Citation: <span className="text-[var(--primary)] font-medium">{ruleItem.clause}</span></span>
                                <span className="flex items-center gap-1 text-[9px] text-[var(--primary)] font-semibold">
                                  <CheckCircle2 className="w-2.5 h-2.5" />
                                  {ruleItem.status}
                                </span>
                              </div>
                            )}
                          </div>
                          <span className={`shrink-0 text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide ${
                            isPrimary
                              ? "bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
                              : "bg-[var(--border)]/60 text-[var(--muted)] border border-[var(--border)]"
                          }`}>
                            {isPrimary ? "Primary" : "Contributing"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-[var(--border)] bg-[var(--background)]/40 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[var(--primary)]" />
                  <span className="text-[10px] text-[var(--muted)] font-medium">MDR Annex VIII Engine</span>
                </div>
                <span className="text-[10px] text-[var(--muted)] font-mono">{report.auditHash}</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
