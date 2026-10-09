"use client";

import { useState } from "react";
import { X, CheckCircle, Shield, ArrowRight, Sparkles } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "demo" | "gap";
}

export function DemoModal({ isOpen, onClose, initialMode = "demo" }: DemoModalProps) {
  const [mode, setMode] = useState<"demo" | "gap">(initialMode);
  const [deviceClass, setDeviceClass] = useState("Class IIb");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 shadow-2xl text-[var(--foreground)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[var(--muted)] hover:text-[var(--foreground)] rounded-full hover:bg-[var(--border)]/30 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">
              {mode === "demo" ? "Demo Session Reserved" : "Gap Assessment Initialized"}
            </h3>
            <p className="text-sm text-[var(--muted)] max-w-sm mx-auto">
              {mode === "demo"
                ? `Thank you ${name || "there"}. A dedicated MedTech Regulatory Solutions Engineer will connect with ${email} within 2 business hours.`
                : `Your secure sandbox assessment environment for ${deviceClass} has been provisioned. Check ${email} for encrypted login credentials.`}
            </p>
            <div className="p-3.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-xs text-[var(--muted)] flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-[var(--primary)]" />
              <span>EU Sovereign Infrastructure · 21 CFR Part 11 Compliant Storage</span>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Return to Platform
            </button>
          </div>
        ) : (
          <div>
            {/* Mode Switcher */}
            <div className="inline-flex p-1 rounded-xl bg-[var(--background)] border border-[var(--border)] mb-6 text-xs font-medium">
              <button
                type="button"
                onClick={() => setMode("gap")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  mode === "gap"
                    ? "bg-[var(--primary)] text-white shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                Start Gap Assessment
              </button>
              <button
                type="button"
                onClick={() => setMode("demo")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  mode === "demo"
                    ? "bg-[var(--primary)] text-white shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                Book a Live Demo
              </button>
            </div>

            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                {mode === "gap" ? "Evaluate Your EU MDR / IVDR GSPR Gaps" : "Schedule a Regulatory Deep-Dive Demo"}
              </h2>
              <p className="text-xs md:text-sm text-[var(--muted)] mt-1.5">
                {mode === "gap"
                  ? "Run a deterministic sample audit against MDR Annex VIII rules & Annex I GSPRs."
                  : "See how RAccelerator shortens Technical Dossier review from 12 weeks to 3 weeks."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-1">
                  Device Regulatory Class
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {["Class I", "Class IIa", "Class IIb", "Class III", "IVDR"].map((cls) => (
                    <button
                      type="button"
                      key={cls}
                      onClick={() => setDeviceClass(cls)}
                      className={`py-2 text-xs font-medium rounded-lg border text-center transition-all ${
                        deviceClass === cls
                          ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)] font-semibold"
                          : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--primary)]/50"
                      }`}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-1">
                    MedTech Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vascutech Biomechatronics"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-1">
                  Work Email (Corporate)
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@medtech-company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                />
              </div>

              <div className="p-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-[11px] text-[var(--muted)] flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                <span>
                  Deterministic AI guarantees 0% hallucination. Protected under bilateral mutual NDA and encrypted EU data storage.
                </span>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[var(--primary)] text-white font-medium hover:opacity-90 active:scale-[0.99] transition-all shadow-md shadow-[var(--primary)]/20 cursor-pointer text-sm"
              >
                <span>{mode === "gap" ? "Run Instant Gap Assessment" : "Confirm Demo Booking"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
