"use client";

import { useState } from "react";
import { siteContent, TraceabilityNode } from "@/data/content";
import {
  FileText,
  Anchor,
  Scale,
  BookOpen,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Hash,
  Clock,
  ExternalLink,
} from "lucide-react";

export function TraceabilityGraph() {
  const { eyebrow, title, subtitle, nodes } = siteContent.traceabilityGraph;
  const [selectedNodeId, setSelectedNodeId] = useState<string>("node-rule");
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const activeNode =
    nodes.find((n) => n.id === (hoveredNodeId || selectedNodeId)) || nodes[2];

  const nodeIcons = {
    document: FileText,
    anchor: Anchor,
    rule: Scale,
    clause: BookOpen,
    conclusion: CheckCircle,
  };

  return (
    <section id="traceability" className="py-24 sm:py-32 bg-[var(--background)] relative overflow-hidden">
      <div className="content-rail">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Anchor className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)] mt-3">
            {subtitle}
          </p>
        </div>

        {/* Interactive Node Graph Pipeline Visual */}
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10 shadow-2xl space-y-10">
          
          {/* Horizontal Flow Container */}
          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-[var(--border)] -z-0">
              <div
                className="h-full bg-gradient-to-r from-[var(--primary)] to-emerald-400 transition-all duration-500"
                style={{
                  width: `${((activeNode.step - 1) / (nodes.length - 1)) * 100}%`,
                }}
              />
            </div>

            {/* Nodes Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
              {nodes.map((node) => {
                const IconComponent = nodeIcons[node.type];
                const isSelected = selectedNodeId === node.id;
                const isHovered = hoveredNodeId === node.id;
                const isActive = isSelected || isHovered;

                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    className={`flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isActive
                        ? "border-[var(--primary)] bg-[var(--surface)] shadow-lg shadow-[var(--primary)]/15 scale-102 ring-2 ring-[var(--primary)]/30"
                        : "border-[var(--border)] bg-[var(--background)] hover:border-[var(--primary)]/50"
                    }`}
                  >
                    {/* Node Icon Circle */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors mb-3 ${
                        isActive
                          ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/30"
                          : "bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--primary)] font-bold mb-1">
                      Step 0{node.step}
                    </div>

                    <div className="text-xs font-bold text-[var(--foreground)] truncate max-w-full">
                      {node.label}
                    </div>

                    <div className="text-[11px] font-mono text-[var(--muted)] mt-1 truncate max-w-full">
                      {node.code}
                    </div>

                    <div className="mt-3">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--border)] text-[var(--muted)]">
                        Click to inspect
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ACTIVE NODE INSPECTION DRAWER / REVEAL PANEL */}
          <div className="rounded-2xl border border-[var(--primary)]/30 bg-[var(--background)] p-6 sm:p-8 animate-fade-in shadow-inner">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[var(--border)] gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[var(--primary)] text-white">
                    NODE 0{activeNode.step} OF 05
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    {activeNode.label}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-mono text-[var(--foreground)] mt-1">
                  {activeNode.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary)]">
                <ShieldCheck className="w-4 h-4" />
                <span>Deterministic Link Validated</span>
              </div>
            </div>

            {/* Excerpt Block */}
            <div className="my-5 flex gap-4">
              <div className="w-1 rounded-full bg-[var(--primary)] shrink-0" />
              <div className="flex-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--primary)] block mb-3">
                  Verified Dossier Excerpt & Legal Citation
                </span>
                <div className="relative">
                  <span className="absolute -top-2 -left-1 text-5xl leading-none text-[var(--primary)]/20 font-serif select-none">&ldquo;</span>
                  <p className="text-sm sm:text-base text-[var(--foreground)] leading-7 font-normal pl-5">
                    {activeNode.excerpt}
                  </p>
                  <span className="absolute -bottom-4 right-0 text-5xl leading-none text-[var(--primary)]/20 font-serif select-none">&rdquo;</span>
                </div>
              </div>
            </div>

            {/* Metadata Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <span className="text-[10px] text-[var(--muted)] block">Source Dossier</span>
                <span className="font-semibold text-[var(--foreground)] truncate block mt-0.5">
                  {activeNode.metadata.source}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <span className="text-[10px] text-[var(--muted)] block">Audit Timestamp / Standard</span>
                <span className="font-semibold text-[var(--foreground)] truncate block mt-0.5">
                  {activeNode.metadata.timestamp}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <span className="text-[10px] text-[var(--muted)] block">21 CFR 11 Cryptographic Anchor</span>
                <span className="font-semibold text-[var(--primary)] truncate block mt-0.5">
                  {activeNode.metadata.hash || activeNode.metadata.confidence || "Verified"}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
