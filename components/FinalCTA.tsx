"use client";

import { useReveal } from "@/hooks/useReveal";
import { siteContent } from "@/data/content";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

interface FinalCTAProps {
  onOpenDemo: (mode?: "demo" | "gap") => void;
}

export function FinalCTA({ onOpenDemo }: FinalCTAProps) {
  const cta = siteContent.finalCta;
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative py-24 sm:py-32 bg-[#071018] text-[#f4f7fb] overflow-hidden border-t border-[#2c4156]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1f8a70]/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1f8a70_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      <div className="content-rail relative z-10 text-center max-w-4xl mx-auto">

        <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2c4156] bg-[#12202e] text-[#34d399] text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Zero Guesswork Compliance</span>
        </div>

        <h2 className="reveal text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6" style={{ transitionDelay: "100ms" }}>
          {cta.headline}
        </h2>

        <p className="reveal text-base sm:text-xl text-[#93a4b8] max-w-2xl mx-auto mb-10 leading-relaxed" style={{ transitionDelay: "200ms" }}>
          {cta.subheadline}
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-12" style={{ transitionDelay: "300ms" }}>
          <button
            onClick={() => onOpenDemo("gap")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#1f8a70] text-white font-bold text-base hover:opacity-95 active:scale-[0.98] transition-all shadow-xl shadow-[#1f8a70]/30 cursor-pointer"
          >
            <span>{cta.primaryButton}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => onOpenDemo("demo")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#2c4156] bg-[#12202e] hover:border-[#1f8a70] text-white font-bold text-base transition-all cursor-pointer shadow-md"
          >
            <span>{cta.secondaryButton}</span>
            <Sparkles className="w-4 h-4 text-[#34d399]" />
          </button>
        </div>

        <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-8 border-t border-[#2c4156]/60" style={{ transitionDelay: "400ms" }}>
          {cta.reassurance.map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-1.5 text-xs text-[#93a4b8]">
              <CheckCircle className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
