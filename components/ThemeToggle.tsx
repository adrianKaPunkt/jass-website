"use client";

import { useEffect, useState } from "react";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable (e.g. privacy mode) — theme just won't persist
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Zu Light Mode wechseln" : "Zu Dark Mode wechseln"}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/10 ${className}`}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36-1.41-1.41M7.05 7.05 5.64 5.64m12.72 0-1.41 1.41M7.05 16.95l-1.41 1.41"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 1 0 20.354 15.354Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
