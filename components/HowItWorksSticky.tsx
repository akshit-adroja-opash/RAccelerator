"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { siteContent } from "@/data/content";
import {
  FileText, Bot, CheckCircle2, AlertCircle, FileSpreadsheet,
  Download, Fingerprint, ChevronLeft, ChevronRight,
} from "lucide-react";

const stepIcons = ["01", "02", "03", "04", "05", "06"];

export function HowItWorksSticky() {
  const steps = siteContent.howItWorks;
  const [active, setActive] = useState(0);
  const ref = useReveal();
  const step = steps[active];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="how-it-works" className="py-24 sm:py-32 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="content-rail">

        {/* Header */}
        <div className="max-w-2xl mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Deterministic Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)] mb-3">
            How RAccelerator Works
          </h2>
          <p className="text-base text-[var(--muted)] leading-relaxed">
            A 6-step deterministic engine transforming messy device dossiers into verified, audit-ready technical files.
          </p>
        </div>

        {/* Step Tabs */}
        <div className="reveal flex items-center gap-2 mb-8 overflow-x-auto pb-1" style={{ transitionDelay: "100ms" }}>
          {steps.map((st, idx) => (
            <button
              key={st.id}
              onClick={() => setActive(idx)}
              className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                active === idx
                  ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-md"
                  : "bg-[var(--surface)] text-[var(--muted)] border-[var(--border)] hover:border-[var(--primary)]/40 hover:text-[var(--foreground)]"
              }`}
            >
              <span className={`text-[10px] font-bold ${active === idx ? "text-white/70" : "text-[var(--muted)]"}`}>
                {stepIcons[idx]}
              </span>
              <span>{st.title.replace(/Step \d+: /, "")}</span>
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="reveal h-0.5 bg-[var(--border)] rounded-full mb-10 overflow-hidden" style={{ transitionDelay: "150ms" }}>
          <div
            className="h-full bg-[var(--primary)] rounded-full transition-all duration-500"
            style={{ width: `${((active + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Main Content */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" style={{ transitionDelay: "200ms" }}>

          {/* LEFT: Step info */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <span className="text-xs font-semibold text-[var(--primary)] uppercase tracking-widest">{step.title}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mt-1 leading-snug">{step.headline}</h3>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed">{step.description}</p>
            <ul className="space-y-2.5">
              {step.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--foreground)]">
                  <span className="w-5 h-5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                  </span>
                  {detail}
                </li>
              ))}
            </ul>

            {/* Prev / Next */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setActive((p) => (p > 0 ? p - 1 : steps.length - 1))}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--border)] text-xs font-semibold text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Prev
              </button>
              <button
                onClick={() => setActive((p) => (p < steps.length - 1 ? p + 1 : 0))}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--primary)] text-white text-xs font-semibold hover:opacity-90 transition-all cursor-pointer"
              >
                Next <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs text-[var(--muted)] ml-auto">{active + 1} / {steps.length}</span>
            </div>
          </div>

          {/* RIGHT: Mockup panel */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-xl">

              {/* Window chrome */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--background)]/60">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                  </div>
                  <span className="text-xs text-[var(--muted)]">app.raccelerator.ai/{step.id}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-[11px] font-semibold border border-[var(--primary)]/20">
                  {step.badge}
                </span>
              </div>

              {/* Mockup content */}
              <div className="p-6 min-h-[340px]">

                {/* STEP 1: Upload */}
                {step.mockupType === "upload" && (
                  <div className="space-y-3">
                    <div className="p-5 rounded-xl border-2 border-dashed border-[var(--primary)]/30 bg-[var(--primary)]/5 text-center">
                      <FileSpreadsheet className="w-8 h-8 mx-auto text-[var(--primary)] mb-2" />
                      <p className="text-sm font-semibold text-[var(--foreground)]">DHF & Technical Files Ingestion Engine</p>
                      <p className="text-xs text-[var(--muted)] mt-1">Multi-format parsing: PDF, DOCX, XLSX with Annex I structural mapper</p>
                    </div>
                    {[
                      { name: "CER_CardioAssist_RevE_2026.pdf", tag: "GSPR 1–8" },
                      { name: "ISO14971_Risk_Management_Matrix.xlsx", tag: "GSPR 14" },
                      { name: "IEC62304_Firmware_Architecture.docx", tag: "GSPR 17.2" },
                    ].map((f) => (
                      <div key={f.name} className="flex items-center justify-between px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <FileText className="w-4 h-4 text-[var(--primary)] shrink-0" />
                          <span className="text-xs text-[var(--foreground)] truncate">{f.name}</span>
                        </div>
                        <span className="shrink-0 ml-3 text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">Indexed: {f.tag}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* STEP 2: Classify */}
                {step.mockupType === "classify" && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                      <div className="w-8 h-8 rounded-lg bg-[var(--primary)] text-white flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[var(--foreground)]">RAxy Regulatory Copilot</p>
                        <p className="text-[11px] text-[var(--muted)]">Annex VIII Rule Decision Logic</p>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[var(--primary)]/8 border border-[var(--primary)]/20 max-w-[88%]">
                      <p className="text-[11px] font-semibold text-[var(--primary)] mb-1">RAxy</p>
                      <p className="text-xs text-[var(--foreground)]">Does the device administer electrical energy into the human body in a potentially hazardous manner, per Rule 9?</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] max-w-[88%] ml-auto text-right">
                      <p className="text-[11px] font-semibold text-[var(--muted)] mb-1">RA Lead</p>
                      <p className="text-xs text-[var(--foreground)]">Yes, cardiovascular electrical modulation exceeds safety single-fault threshold.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-500/8 border border-emerald-500/25">
                      <p className="text-xs font-bold text-emerald-500">DETERMINATION: Class IIb Confirmed</p>
                      <p className="text-[11px] text-[var(--muted)] mt-1">Confidence 97.3% · Rules 9, 10, 11 · 0 Ambiguities</p>
                    </div>
                  </div>
                )}

                {/* STEP 3: Assess */}
                {step.mockupType === "assess" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                      <div>
                        <p className="text-xs font-bold text-[var(--foreground)]">GSPR Health Check</p>
                        <p className="text-[11px] text-[var(--muted)]">23 Requirements · ISO 14971 & IEC 62304</p>
                      </div>
                      <span className="text-lg font-black text-[var(--primary)]">91%</span>
                    </div>
                    {[
                      { icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />, label: "GSPR 1: General Safety & Performance", status: "Compliant", color: "emerald" },
                      { icon: <AlertCircle className="w-4 h-4 text-amber-400" />, label: "GSPR 17.2: Programmable Medical Systems", status: "Missing SBOM", color: "amber" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />, label: "GSPR 21: Usability & Labelling", status: "Verified", color: "emerald" },
                    ].map((row, i) => (
                      <div key={i} className={`flex items-center justify-between px-4 py-3 rounded-xl border ${row.color === "emerald" ? "border-emerald-500/20 bg-emerald-500/5" : "border-amber-500/20 bg-amber-500/5"}`}>
                        <div className="flex items-center gap-2.5">
                          {row.icon}
                          <span className="text-xs text-[var(--foreground)]">{row.label}</span>
                        </div>
                        <span className={`text-[11px] font-semibold shrink-0 ml-2 ${row.color === "emerald" ? "text-emerald-400" : "text-amber-400"}`}>{row.status}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* STEP 4: Remediate */}
                {step.mockupType === "remediate" && (
                  <div className="space-y-3">
                    <div className="px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-bold text-[var(--foreground)]">Remediation Roadmap</p>
                        <span className="text-[11px] font-semibold text-[var(--primary)]">14 Business Days</span>
                      </div>
                      <div className="w-full h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-[var(--primary)] rounded-full" />
                      </div>
                    </div>
                    {[
                      { task: "Generate IEC 62304 SBOM", meta: "R&D Embedded Team · 3 Days", badge: "Assigned", color: "primary" },
                      { task: "Biocompatibility Cytotoxicity Protocol", meta: "External Lab ISO 10993 · €4,200", badge: "In Review", color: "amber" },
                    ].map((t, i) => (
                      <div key={i} className="flex items-center justify-between px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                        <div>
                          <p className="text-xs font-semibold text-[var(--foreground)]">{t.task}</p>
                          <p className="text-[11px] text-[var(--muted)] mt-0.5">{t.meta}</p>
                        </div>
                        <span className={`shrink-0 ml-3 text-[11px] font-semibold px-2.5 py-1 rounded-full ${t.color === "primary" ? "bg-[var(--primary)]/15 text-[var(--primary)]" : "bg-amber-500/15 text-amber-500"}`}>
                          {t.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* STEP 5: Report */}
                {step.mockupType === "report" && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "RA Specialist", sub: "Clause-by-Clause", active: true },
                        { label: "R&D Engineering", sub: "Spec Deltas", active: false },
                        { label: "C-Suite", sub: "Budget & Risk", active: false },
                      ].map((r) => (
                        <div key={r.label} className={`p-3 rounded-xl border text-center ${r.active ? "border-[var(--primary)] bg-[var(--primary)]/8" : "border-[var(--border)] bg-[var(--background)]"}`}>
                          <p className={`text-xs font-bold ${r.active ? "text-[var(--primary)]" : "text-[var(--foreground)]"}`}>{r.label}</p>
                          <p className="text-[10px] text-[var(--muted)] mt-0.5">{r.sub}</p>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold text-[var(--foreground)]">NB Technical Pack Export</p>
                        <span className="text-[11px] font-semibold text-emerald-500">Validated 100%</span>
                      </div>
                      <p className="text-[11px] text-[var(--muted)] leading-relaxed">BSI & TÜV SÜD compliant PDF/A package, Annex I cross-reference tables, SHA-256 integrity manifest.</p>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--primary)] text-white text-[11px] font-semibold mt-1">
                        <Download className="w-3.5 h-3.5" /> Download Dossier Pack
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 6: Trace */}
                {step.mockupType === "trace" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                      <div className="flex items-center gap-2.5">
                        <Fingerprint className="w-5 h-5 text-[var(--primary)]" />
                        <div>
                          <p className="text-xs font-bold text-[var(--foreground)]">21 CFR Part 11 Electronic Records Vault</p>
                          <p className="text-[11px] text-[var(--muted)]">Append-only Cryptographic Log</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400">IMMUTABLE</span>
                    </div>
                    <div className="px-4 py-4 rounded-xl bg-[#071018] border border-[#2c4156] space-y-2 text-[11px]">
                      <p className="text-[#93a4b8]">[2026-03-14 09:12:44 CET] EVENT: Annex VIII Rule 9 Triggered</p>
                      <p className="text-[#93a4b8]">[USER_ID: e.rostova@medtech.com] AUTH: SAML Verified</p>
                      <p className="text-emerald-400">[EVIDENCE_HASH]: 7f8a9e22e92c4b01...c09d</p>
                      <p className="text-amber-400">[STATUS]: Bounded to DHF Page 42, §4.3</p>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
