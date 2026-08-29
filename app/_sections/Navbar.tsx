"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "#profil", label: "Profil" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#flotte", label: "Flotte" },
  { href: "#netzwerk", label: "Netzwerk" },
  { href: "#partner", label: "Partner" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 h-28 w-full bg-white/50 backdrop-blur-sm dark:bg-black/60 shadow-2xl shadow-black/5 dark:shadow-white/5">
      <Container>
        <nav className="flex h-28 items-center justify-between text-secondary dark:text-white">
          <a href="#" className="shrink-0">
            <div
              aria-label="JASS Logo"
              className="h-8 w-40 bg-secondary [mask:url('/images/jass.svg')_center/contain_no-repeat] sm:w-49 dark:bg-white"
            />
            <div className="mt-2 text-[9px] uppercase">Justice Aeronautical Special Services</div>
          </a>

          <div className="hidden gap-8 text-sm lg:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a className="text-sm" href="#kontakt">
              Kontakt
            </a>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-black/10 dark:hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                {isMenuOpen ? (
                  <path
                    d="M6 6l12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </Container>

      {isMenuOpen && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-t border-black/10 bg-white shadow-lg lg:hidden dark:border-white/10 dark:bg-black"
        >
          <Container>
            <div className="flex flex-col gap-4 py-6 text-sm text-secondary dark:text-white">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#kontakt" onClick={() => setIsMenuOpen(false)}>
                Kontakt
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
