"use client";

import { useEffect, useState, useRef } from "react";
import { siteContent } from "@/data/content";
import { ShieldCheck, Check, Sparkles } from "lucide-react";

export function StatsBand() {
  const stats = siteContent.statsBand;
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          stats.forEach((stat, index) => {
            const target = stat.value;
            let current = 0;
            const duration = 1400;
            const steps = 30;
            const increment = target / steps;
            const intervalTime = duration / steps;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCounts((prev) => {
                  const next = [...prev];
                  next[index] = target;
                  return next;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const next = [...prev];
                  next[index] = Math.floor(current);
                  return next;
                });
              }
            }, intervalTime);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-14 sm:py-16 bg-[#071018] text-[#f4f7fb] border-y border-[#2c4156] overflow-hidden"
    >
      {/* Decorative High-Contrast Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#065F4A_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="content-rail relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#2c4156]/60">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center px-4 ${
                idx > 0 ? "pt-6 md:pt-0" : ""
              }`}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-white">
                  {counts[idx]}
                </span>
                {stat.suffix && (
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#065F4A]">
                    {stat.suffix}
                  </span>
                )}
              </div>

              <div className="mt-2 text-sm sm:text-base font-bold text-[#f4f7fb]">
                {stat.label}
              </div>

              <div className="text-xs text-[#93a4b8] mt-0.5">
                {stat.sublabel}
              </div>

              <div className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded-full bg-[#12202e] border border-[#2c4156] text-[11px] font-mono text-[#34d399]">
                <Check className="w-3 h-3 text-[#34d399]" />
                <span>{stat.citation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
