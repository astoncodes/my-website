"use client";

import { useState } from "react";
import SectionDivider from "@/components/SectionDivider";
import { LINKS } from "@/data/links";

const CHANNELS = [
  { label: "EMAIL", value: LINKS.email, href: `mailto:${LINKS.email}` },
  { label: "GITHUB", value: "github.com/astoncodes", href: LINKS.github },
  { label: "LINKEDIN", value: "linkedin.com/in/ayobami-daniel", href: LINKS.linkedin },
  { label: "LETTERBOXD", value: "letterboxd.com/wa4tchingm0vies", href: LINKS.letterboxd },
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" }); // website = honeypot

  function update<K extends keyof typeof form>(key: K, val: string) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.website.trim()) { setStatus("sent"); return; } // honeypot
    if (!form.name || !form.email || !form.message) { setStatus("error"); return; }

    const subject = encodeURIComponent(`Signal from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionDivider index="SEC. 07 — TRANSMISSION" title="Get In" solid="Touch" />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-2)" }}>
            Open to internships, new-grad opportunities, collaborations, or a good
            conversation about systems, cinema, or why Chelsea&apos;s midfield
            needs work. Direct channels below — or send a transmission.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {CHANNELS.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="dossier flex items-center justify-between px-4 py-3"
                >
                  <span className="hud-label">{c.label}</span>
                  <span className="mono text-[0.78rem]" style={{ color: "var(--blue)" }}>{c.value} ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="dossier reveal p-6">
          <div className="dossier-glow" />
          <p className="hud-label mb-5" style={{ color: "var(--toxic)" }}>{"// OUTBOUND TRANSMISSION"}</p>

          {/* Honeypot */}
          <input
            type="text"
            name="website"
            autoComplete="off"
            tabIndex={-1}
            className="hidden"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="hud-label mb-1.5 block">CALLSIGN / NAME</label>
              <input id="name" type="text" required className="field" placeholder="Your name"
                value={form.name} onChange={(e) => update("name", e.target.value)} />
            </div>
            <div>
              <label htmlFor="email" className="hud-label mb-1.5 block">RETURN FREQUENCY / EMAIL</label>
              <input id="email" type="email" required className="field" placeholder="you@example.com"
                value={form.email} onChange={(e) => update("email", e.target.value)} />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="hud-label mb-1.5 block">MESSAGE</label>
            <textarea id="message" required rows={5} className="field resize-y" placeholder="What are we building?"
              value={form.message} onChange={(e) => update("message", e.target.value)} />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="submit" className="btn">Transmit ▸</button>
            <span
              role="status"
              className="mono text-[0.72rem]"
              style={{ color: status === "error" ? "var(--alert)" : "var(--toxic)" }}
            >
              {status === "sent" && "✓ SIGNAL SENT — your mail app should open."}
              {status === "error" && "✕ MISSING FIELDS — check the form."}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
