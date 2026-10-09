"use client";

import { useState } from "react";
import { siteContent, PersonaContent } from "@/data/content";
import {
  Users,
  CheckCircle,
  TrendingUp,
  FileBadge2,
  Cpu,
  Layers,
  ShieldCheck,
  Building,
} from "lucide-react";

export function PersonaTabs() {
  const personas = siteContent.personas;
  const [selectedPersonaId, setSelectedPersonaId] = useState<"ra" | "rd" | "csuite">("ra");

  const currentPersona = personas.find((p) => p.id === selectedPersonaId) || personas[0];

  return (
    <section className="py-24 sm:py-32 bg-[var(--background)] relative overflow-hidden">
      <div className="content-rail">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Built for Every Stakeholder</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            Tailored Compliance Velocity Across the Enterprise
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)] mt-3">
            Whether you are defending clauses before an auditor, coding SaMD firmware, or reporting to the board.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2.5 p-1.5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] max-w-xl mb-12 shadow-sm">
          {personas.map((persona) => {
            const isSelected = persona.id === selectedPersonaId;
            return (
              <button
                key={persona.id}
                onClick={() => setSelectedPersonaId(persona.id)}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  isSelected
                    ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/20"
                    : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--background)]/80"
                }`}
              >
                {persona.id === "ra" && <FileBadge2 className="w-4 h-4" />}
                {persona.id === "rd" && <Cpu className="w-4 h-4" />}
                {persona.id === "csuite" && <Building className="w-4 h-4" />}
                <span>{persona.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Persona Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Role Outcomes & Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-md text-xs font-mono font-bold bg-[var(--border)] text-[var(--foreground)]">
              {currentPersona.roleTitle}
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
              {currentPersona.headline}
            </h3>

            <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
              {currentPersona.summary}
            </p>

            {/* Metric Highlights */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-[var(--border)]">
              {currentPersona.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[var(--primary)]">
                    {metric.value}
                  </span>
                  <span className="text-xs text-[var(--muted)] mt-0.5 font-medium">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bullet Outcomes */}
            <div className="space-y-3.5 pt-2">
              {currentPersona.bulletOutcomes.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--primary)]/15 text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--foreground)]">
                      {bullet.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--muted)] mt-0.5">
                      {bullet.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tailored Dashboard Mockup */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-4">
                <div>
                  <div className="text-xs font-semibold text-[var(--muted)]">Role-Specific View</div>
                  <h4 className="text-sm font-bold text-[var(--foreground)]">{currentPersona.dashboardPreview.title}</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[var(--primary)]/15 text-[var(--primary)]">
                  {currentPersona.dashboardPreview.badge}
                </span>
              </div>

              <div className="space-y-3">
                {currentPersona.dashboardPreview.items.map((item, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-semibold text-[var(--foreground)]">{item.label}</div>
                      <div className="text-[11px] font-mono text-[var(--muted)] mt-0.5">{item.value}</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-[var(--surface)] border border-[var(--border)] text-[var(--primary)]">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted)] font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--primary)]" />
                  Live Sync Active
                </span>
                <span>Verified: Just Now</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
