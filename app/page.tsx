"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { Features } from "@/components/Features";
import { HowItWorksSticky } from "@/components/HowItWorksSticky";
import { DeterministicCompare } from "@/components/DeterministicCompare";
import { ProofBento } from "@/components/ProofBento";
import { Security } from "@/components/Security";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { DemoModal } from "@/components/DemoModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"demo" | "gap">("demo");

  const handleOpenDemo = (mode: "demo" | "gap" = "demo") => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-white">
      {/* Floating Pill Navbar */}
      <Navbar onOpenDemo={handleOpenDemo} />

      <main id="main-content">
        {/* 1. Hero */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* 2. Stats Band */}
        <StatsBand />

        {/* 3. Platform Features */}
        <Features />

        {/* 4. How It Works */}
        <HowItWorksSticky />

        {/* 5. Deterministic AI Comparison */}
        <DeterministicCompare />

        {/* 6. Proof / Trust (Testimonials + Case Study) */}
        <ProofBento onOpenDemo={handleOpenDemo} />

        {/* 6. Security */}
        <Security />

        {/* 7. FAQ */}
        <FAQ onOpenDemo={handleOpenDemo} />

        {/* 8. Final CTA */}
        <FinalCTA onOpenDemo={handleOpenDemo} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Demo / Gap Assessment Modal */}
      <DemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialMode={modalMode}
      />
    </div>
  );
}
