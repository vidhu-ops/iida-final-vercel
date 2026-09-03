"use client";

import { IidaMascot } from "@/components/iida/IidaMascot";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const THEME_WELCOME_KEY = "iida-theme-welcome-seen";
export const THEME_WELCOME_DONE_EVENT = "iida-theme-welcome-done";

export function hasSeenThemeWelcome() {
  if (typeof window === "undefined") return true;
  return localStorage.getItem(THEME_WELCOME_KEY) === "1";
}

export function IidaThemeWelcome() {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (hasSeenThemeWelcome()) return;
    const timer = window.setTimeout(() => setOpen(true), 450);
    return () => window.clearTimeout(timer);
  }, []);

  const choose = (theme: "dark" | "light") => {
    setTheme(theme);
    localStorage.setItem(THEME_WELCOME_KEY, "1");
    window.dispatchEvent(new CustomEvent(THEME_WELCOME_DONE_EVENT));
    setOpen(false);
  };

  if (!mounted || !open) return null;

  return createPortal(
    <div className="iida-theme-welcome-backdrop" role="presentation">
      <div
        className="iida-theme-welcome"
        role="dialog"
        aria-labelledby="iida-theme-welcome-title"
        aria-modal="true"
      >
        <span className="iida-theme-welcome-glow" aria-hidden="true" />
        <IidaMascot mood="excited" size={96} bob className="iida-theme-welcome-mascot" />
        <p className="iida-theme-welcome-eyebrow">Hi — I&apos;m IIDA</p>
        <h2 id="iida-theme-welcome-title" className="iida-theme-welcome-title">
          Pick light or dark for the best experience
        </h2>
        <p className="iida-theme-welcome-copy">
          IIDA remembers your choice. You can switch anytime from the sun / moon button in the nav.
        </p>
        <div className="iida-theme-welcome-actions">
          <button type="button" className="iida-theme-welcome-btn iida-theme-welcome-btn-dark" onClick={() => choose("dark")}>
            <Moon className="h-4 w-4" aria-hidden />
            Dark mode
          </button>
          <button type="button" className="iida-theme-welcome-btn iida-theme-welcome-btn-light" onClick={() => choose("light")}>
            <Sun className="h-4 w-4" aria-hidden />
            Light mode
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
