"use client";

import { useReveal } from "@/hooks/useReveal";
import { siteContent } from "@/data/content";
import {
  ShieldAlert, Lock, FileCheck, Key, CheckCircle, Users,
  Server, ShieldCheck, Globe,
} from "lucide-react";

export function Security() {
  const { eyebrow, h2, statement, onPremNote, badges } = siteContent.security;
  const ref = useReveal();

  const badgeIcons = {
    ShieldAlert, Lock, FileCheck, Key, CheckCircle, Users,
  };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="security" className="py-24 sm:py-32 bg-[#071018] text-[#f4f7fb] border-y border-[#2c4156] relative overflow-hidden">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#065F4A]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#2c4156_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="content-rail relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">

          {/* LEFT */}
          <div className="lg:col-span-5 space-y-6 reveal-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2c4156] bg-[#12202e] text-[#34d399] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {h2}
            </h2>

            <p className="text-base sm:text-lg text-[#93a4b8] leading-relaxed">
              {statement}
            </p>

            <div className="p-5 rounded-2xl bg-[#12202e] border border-[#2c4156] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#34d399]">
                <Server className="w-4 h-4" />
                <span>EU Sovereign & Air-Gapped Deployments</span>
              </div>
              <p className="text-xs text-[#93a4b8] leading-relaxed">{onPremNote}</p>
              <div className="pt-2 border-t border-[#2c4156] flex items-center gap-2 text-[11px] text-[#f4f7fb]">
                <Globe className="w-3.5 h-3.5 text-[#065F4A]" />
                <span>Primary Datacenters: Frankfurt (DE) & Dublin (IE)</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#93a4b8]">
              <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
              <span>Zero model training on proprietary medical device files</span>
            </div>
          </div>

          {/* RIGHT: Badge Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          </div>

        </div>
      </div>
    </section>
  );
}
