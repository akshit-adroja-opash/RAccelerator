"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial html class or default to dark
    const html = document.documentElement;
    if (html.classList.contains("light")) {
      setIsDark(false);
    } else {
      setIsDark(true);
      html.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      html.classList.add("light");
      setIsDark(false);
    } else {
      html.classList.remove("light");
      html.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative p-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--primary)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] cursor-pointer"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 animate-spin-once" />
      ) : (
        <Moon className="w-4 h-4 text-[var(--primary)]" />
      )}
    </button>
  );
}
