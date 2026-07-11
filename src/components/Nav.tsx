"use client";

import { useState } from "react";
import { LINKS } from "@/data/links";

const NAV_LINKS = [
  { href: "#about", label: "Profile" },
  { href: "#experience", label: "Log" },
  { href: "#projects", label: "Archive" },
  { href: "#skills", label: "Loadout" },
  { href: "#gallery", label: "Wall" },
  { href: "#signal", label: "Signal" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ borderColor: "var(--line)", background: "rgba(8,8,11,0.85)", backdropFilter: "blur(10px)" }}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="display text-lg" style={{ color: "var(--text)" }} aria-label="Back to top">
          D<span style={{ color: "var(--blue)" }}>O</span>
          <span className="mono ml-2 text-[0.6rem] tracking-[0.2em]" style={{ color: "var(--muted)" }}>
            SIGNAL OS
          </span>
        </a>

        <ul className="hidden items-center lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
          <li className="ml-2">
            <button
              onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
              className="chip chip--blue cursor-pointer"
              aria-label="Open command palette"
            >
              ⌘K
            </button>
          </li>
          <li className="ml-3">
            <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="btn py-2 text-[0.68rem]">
              resume.pdf
            </a>
          </li>
        </ul>

        <button
          className="mono cursor-pointer p-2 text-xs uppercase tracking-widest lg:hidden"
          style={{ color: "var(--text)" }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {menuOpen ? "[CLOSE]" : "[MENU]"}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t px-5 pb-5 pt-2 lg:hidden" style={{ borderColor: "var(--line)", background: "var(--bg)" }}>
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="nav-link block border-b py-3"
                  style={{ borderColor: "var(--line)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="btn mt-4 w-full justify-center">
            resume.pdf
          </a>
        </div>
      )}
    </header>
  );
}
