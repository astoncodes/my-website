"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ArrowUpRight from "@/components/ArrowUpRight";
import { LINKS } from "@/data/links";

// Absolute paths so the links also work from the 404 page.
const NAV = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the menu is open: lock page scroll, make the page behind it inert,
  // close on Escape, and close if the window widens past the mobile layout.
  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const behind = [document.getElementById("main"), document.querySelector("body > footer")];
    const setBehindInert = (inert: boolean) => {
      for (const el of behind) if (el instanceof HTMLElement) el.inert = inert;
    };
    root.style.overflow = "hidden";
    setBehindInert(true);
    panelRef.current?.querySelector("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    const wide = window.matchMedia("(min-width: 768px)");
    const onWide = () => wide.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      root.style.overflow = "";
      setBehindInert(false);
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <header
      data-solid={scrolled || open}
      className="site-header fixed inset-x-0 top-0 z-50"
    >
      <div aria-hidden="true" className="site-header-bg absolute inset-0 -z-10" />
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-10">
        <Link
          href="/"
          className="-my-2 py-2 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-ink"
        >
          Daniel Oluwatosin
        </Link>

        <ul className="hidden items-center gap-8 font-display text-[0.9375rem] md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-muted transition-colors duration-150 hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="font-medium text-ink">
              Résumé
              <ArrowUpRight />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-3 min-h-11 cursor-pointer px-3 font-display text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-ink md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        data-open={open}
        inert={!open}
        className="menu-panel fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-canvas md:hidden"
      >
        <div className="px-5 pt-2 pb-10">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-5 font-display text-2xl font-medium uppercase tracking-[0.08em] text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-8 w-full"
          >
            Résumé
            <ArrowUpRight />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>

          <ul className="mt-8 space-y-1 font-display text-[0.9375rem] text-muted">
            <li>
              <a href={`mailto:${LINKS.email}`} className="inline-block py-2">{LINKS.email}</a>
            </li>
            <li>
              <a href={LINKS.phoneHref} className="inline-block py-2">{LINKS.phone}</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
