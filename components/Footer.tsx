"use client";

import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it Works", href: "#how-it-works" },
      { label: "Pricing", href: "#" },
      { label: "Security", href: "#security" },
      { label: "API Docs", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "EU MDR Guide", href: "#" },
      { label: "GSPR Checklist", href: "#" },
      { label: "Webinars", href: "#" },
      { label: "Case Studies", href: "#proof" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const bottomLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Sitemap", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--surface)] text-[var(--foreground)] border-t border-[var(--border)] pt-14 pb-8">
      <div className="content-rail">

        {/* Main Grid: Brand + 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[var(--border)]">

          {/* Brand Column */}
          <div className="md:col-span-4 space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/30 flex items-center justify-center">
                <Image src="/logo.svg" alt="RAccelerator Logo" width={18} height={18} />
              </div>
              <span className="font-bold text-base tracking-tight text-[var(--foreground)]">
                {siteContent.nav.logoText}
              </span>
            </Link>

            <p className="text-xs text-[var(--muted)] leading-relaxed max-w-xs">
              Regulatory intelligence for MedTech. Accelerating device lifecycle management
              from classification to NB submission.
            </p>

            <a
              href="https://www.raccelerator.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[var(--primary)] hover:underline"
            >
              www.RAccelerator.ai
            </a>
          </div>

          {/* 3 Link Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerColumns.map((col) => (
              <div key={col.title} className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <span>© 2026 RAccelerator LLC. All rights reserved.</span>
          <div className="flex items-center gap-5">
            {bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[var(--primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
