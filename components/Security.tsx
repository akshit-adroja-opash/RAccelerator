"use client";

import { useReveal } from "@/hooks/useReveal";
import { siteContent } from "@/data/content";
import { ShieldAlert, Lock, FileCheck, Key, CheckCircle, Users, ShieldCheck } from "lucide-react";

export function Security() {
  const { eyebrow, h2, statement, badges } = siteContent.security;
  const ref = useReveal();

  const badgeIcons = { ShieldAlert, Lock, FileCheck, Key, CheckCircle, Users };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="security" className="py-24 sm:py-32 bg-[#071018] text-[#f4f7fb] border-y border-[#2c4156] relative overflow-hidden">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#065F4A]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#2c4156_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="content-rail relative z-10">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 reveal-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2c4156] bg-[#12202e] text-[#34d399] text-xs font-semibold uppercase tracking-wider mb-5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            {h2}
          </h2>
        </div>

        {/* Badge Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {badges.map((badge, idx) => {
            const IconComponent = badgeIcons[badge.icon as keyof typeof badgeIcons] || ShieldCheck;
            return (
              <div
                key={badge.id}
                className="reveal p-5 rounded-2xl bg-[#12202e] border border-[#2c4156] hover:border-[#065F4A] transition-all group flex flex-col justify-between"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#071018] border border-[#2c4156] text-[#34d399] flex items-center justify-center group-hover:border-[#065F4A] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#071018] text-[#93a4b8] border border-[#2c4156]">
                      {badge.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{badge.title}</h3>
                  <p className="text-xs text-[#93a4b8] leading-relaxed">{badge.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2c4156] flex items-center gap-1.5 text-[10px] text-[#34d399]">
                  <CheckCircle className="w-3 h-3" />
                  <span>Auditor Inspected & Active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <p className="text-center text-sm text-[#93a4b8] reveal">{statement}</p>

      </div>
    </section>
  );
}
