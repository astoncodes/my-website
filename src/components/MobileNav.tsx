"use client";
import { useState, useEffect } from "react";

interface NavLink { href: string; label: string; }

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  // Close on route change / outside click
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  return (
    <div className="md:hidden" onClick={e => e.stopPropagation()}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-lg transition"
        style={{ border: "1px solid var(--border-bright)", color: "var(--text-secondary)" }}
      >
        {/* Hamburger / X */}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          {open ? (
            <>
              <line x1="3" y1="3" x2="15" y2="15" />
              <line x1="15" y1="3" x2="3" y2="15" />
            </>
          ) : (
            <>
              <line x1="2" y1="5" x2="16" y2="5" />
              <line x1="2" y1="9" x2="16" y2="9" />
              <line x1="2" y1="13" x2="16" y2="13" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-4 top-[4.5rem] z-50 w-52 rounded-2xl p-2 shadow-2xl"
          style={{
            background: "var(--surface-2)",
            border: "1px solid var(--border-bright)",
            backdropFilter: "blur(20px)",
          }}
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm transition"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "";
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
              }}
            >
              {label}
            </a>
          ))}
          <div style={{ borderTop: "1px solid var(--border)", margin: "6px 0" }} />
          <a
            href="/Daniel's Resume.pdf"
            download
            onClick={() => setOpen(false)}
            className="btn-primary mx-1 mt-1 block text-center text-sm"
          >
            Download Résumé
          </a>
        </div>
      )}
    </div>
  );
}
