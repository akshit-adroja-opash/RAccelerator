"use client";

import { siteContent } from "@/data/content";
import { ShieldCheck, Award } from "lucide-react";

export function StandardsMarquee() {
  const standards = siteContent.standards;
  // Duplicate for seamless infinite loop
  const marqueeList = [...standards, ...standards, ...standards];

  return (
    <section className="relative py-6 border-y border-[var(--border)] bg-[var(--surface)]/40 overflow-hidden">
      <div className="content-rail mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
          <span>Supports Workflows Aligned To</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-[var(--muted)]">
          <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
          <span>Continuous MDCG 2026 Sync</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="animate-marquee flex items-center gap-4 py-2">
          {marqueeList.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-xs hover:border-[var(--primary)] transition-all cursor-default shrink-0 group"
            >
              <div className="w-7 h-7 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {item.name}
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-[var(--border)]/60 text-[var(--muted)]">
                    {item.badge}
                  </span>
                </div>
                <span className="text-[11px] text-[var(--muted)] line-clamp-1">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
