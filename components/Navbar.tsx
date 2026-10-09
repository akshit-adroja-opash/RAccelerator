"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenDemo: (mode?: "demo" | "gap") => void;
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 flex justify-center px-4 transition-all duration-300 ${
          scrolled ? "pt-2.5 sm:pt-3.5" : "pt-4 sm:pt-6"
        }`}
      >
        <div
          className={`flex items-center justify-between w-full max-w-6xl transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border ${
            scrolled
              ? "bg-[var(--surface)]/85 backdrop-blur-xl border-[var(--border)] shadow-xl shadow-black/5"
              : "bg-[var(--surface)]/70 backdrop-blur-md border-[var(--border)]/70 shadow-md"
          }`}
        >
          {/* Brand Logo & Tag */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/30 group-hover:border-[var(--primary)] transition-all">
              <Image
                src="/logo.svg"
                alt="RAccelerator Logo"
                width={20}
                height={20}
                className="w-5 h-5 transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-sm sm:text-base text-[var(--foreground)] leading-none">
                {siteContent.nav.logoText}
              </span>
              <span className="text-[9px] font-mono tracking-widest uppercase text-[var(--primary)] font-semibold mt-0.5 hidden xs:block">
                {siteContent.nav.badge}
              </span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {siteContent.nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-[var(--muted)] hover:text-[var(--primary)] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-200 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <button
              onClick={() => onOpenDemo("demo")}
              className="hidden sm:inline-flex text-xs font-medium text-[var(--foreground)] hover:text-[var(--primary)] px-3 py-1.5 transition-colors cursor-pointer"
            >
              {siteContent.nav.signInText}
            </button>

            <button
              onClick={() => onOpenDemo("gap")}
              className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full bg-[var(--primary)] text-white px-3.5 sm:px-4 py-1.5 sm:py-2 hover:opacity-95 active:scale-95 transition-all shadow-sm shadow-[var(--primary)]/20 cursor-pointer"
            >
              <span>{siteContent.nav.demoText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--border)]/40 transition-colors"
              aria-label="Open mobile navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Slide-In Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[var(--background)] p-6 animate-fade-in text-[var(--foreground)]">
          <div className="flex items-center justify-between pb-6 border-b border-[var(--border)]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/30 flex items-center justify-center">
                <Image src="/logo.svg" alt="RAccelerator" width={20} height={20} />
              </div>
              <span className="font-bold tracking-tight text-lg">{siteContent.nav.logoText}</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 py-8 flex-1 overflow-y-auto">
            {siteContent.nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[var(--border)] space-y-3">
            <div className="flex items-center justify-between text-xs text-[var(--muted)] pb-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
                Deterministic MDR/IVDR AI
              </span>
              <ThemeToggle />
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo("demo");
              }}
              className="w-full py-3 rounded-xl border border-[var(--border)] font-medium text-sm text-center hover:bg-[var(--surface)] transition-colors"
            >
              {siteContent.nav.signInText}
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo("gap")}
              }
              className="w-full py-3 rounded-xl bg-[var(--primary)] text-white font-medium text-sm text-center shadow-lg shadow-[var(--primary)]/20 transition-transform active:scale-95"
            >
              {siteContent.nav.gapText}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
