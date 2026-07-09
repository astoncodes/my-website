"use client";

import { useEffect, useRef, useState } from "react";
import SectionDivider from "@/components/SectionDivider";
import { PROJECTS, type Project } from "@/data/projects";

const TONE_COLOR: Record<string, string> = {
  blue: "var(--blue)",
  purple: "var(--purple)",
  toxic: "var(--toxic)",
  alert: "var(--alert)",
};

/** Poster-style top panel per card variant — pure CSS, no copyrighted art. */
function CardVisual({ project }: { project: Project }) {
  const accent = TONE_COLOR[project.tone];

  if (project.variant === "mythic") {
    return (
      <div
        className="relative flex aspect-[16/8] items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(150deg, #2d1b4e 0%, #08080b 55%, #26140a 100%)" }}
        aria-hidden="true"
      >
        <div className="hero-grid absolute inset-0" />
        <div
          className="absolute h-40 w-40 rounded-full"
          style={{ border: `1px solid ${accent}`, boxShadow: `0 0 60px rgba(157,123,255,0.35), inset 0 0 40px rgba(157,123,255,0.15)` }}
        />
        <div className="absolute h-24 w-24 rotate-45" style={{ border: `1px solid rgba(255,106,43,0.5)` }} />
        <span className="display crt relative text-3xl" style={{ color: "var(--beige)" }}>
          ASHẸ
        </span>
        <span className="hud-label absolute bottom-3 left-4">FOUR PATHS · EIGHT ENDINGS</span>
        <span className="hud-label absolute top-3 right-4" style={{ color: "var(--alert)" }}>MYTHIC CLASS</span>
      </div>
    );
  }

  if (project.variant === "strategy") {
    return (
      <div
        className="relative flex aspect-[16/8] items-end overflow-hidden px-5 pb-4"
        style={{ background: "linear-gradient(180deg, #0d1a0d 0%, #08080b 80%)" }}
        aria-hidden="true"
      >
        {/* fake backtest bars */}
        <div className="flex w-full items-end gap-1.5">
          {[35, 55, 40, 70, 52, 85, 64, 92, 78, 100, 88, 60, 74, 96].map((h, i) => (
            <div
              key={i}
              className="flex-1"
              style={{
                height: `${h * 0.7}px`,
                background: i % 4 === 0 ? "var(--toxic)" : "rgba(182,255,46,0.25)",
              }}
            />
          ))}
        </div>
        <span className="hud-label absolute top-3 left-4">STRATEGY BACKTEST · N=60+</span>
      </div>
    );
  }

  return (
    <div
      className="relative flex aspect-[16/8] items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0b1f3a 0%, #08080b 70%)" }}
      aria-hidden="true"
    >
      <div className="hero-grid absolute inset-0" />
      <span className="display text-3xl" style={{ color: accent }}>
        {project.title.split(" ")[0]}
      </span>
      <span className="hud-label absolute bottom-3 left-4">DEPLOYED · PRODUCTION</span>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const accent = TONE_COLOR[project.tone];

  return (
    <div className="overlay-backdrop flex items-center justify-center p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case file`}
        className="modal-enter dossier max-h-[85vh] w-full max-w-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <header
          className="sticky top-0 flex items-center justify-between border-b px-6 py-4"
          style={{ borderColor: "var(--line)", background: "var(--surface)" }}
        >
          <span className="hud-label">{project.index} — CASE FILE OPEN</span>
          <button
            ref={closeRef}
            onClick={onClose}
            className="mono cursor-pointer text-xs uppercase tracking-widest"
            style={{ color: "var(--alert)" }}
            aria-label="Close case file"
          >
            [ESC] CLOSE
          </button>
        </header>

        <div className="px-6 py-6">
          <h3 className="display text-3xl" style={{ color: accent }}>{project.title}</h3>
          <p className="mono mt-2 text-[0.75rem]" style={{ color: "var(--text-2)" }}>{project.tagline}</p>

          {[
            { label: "PROBLEM", body: project.problem },
            { label: "BUILD", body: project.build },
            { label: "OUTCOME", body: project.outcome },
          ].map((s) => (
            <div key={s.label} className="mt-6">
              <p className="hud-label mb-2" style={{ color: accent }}>{"/// "}{s.label}</p>
              <p className="text-[0.92rem] leading-relaxed" style={{ color: "var(--text-2)" }}>{s.body}</p>
            </div>
          ))}

          <div className="mt-6">
            <p className="hud-label mb-2" style={{ color: accent }}>{"/// STACK"}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn">
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectArchive() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionDivider index="SEC. 03 — FEATURED WORK" title="Project" solid="Archive" />

      <div className="grid gap-6 md:grid-cols-3">
        {PROJECTS.map((p) => (
          <button
            key={p.id}
            onClick={() => setOpen(p)}
            className="dossier reveal cursor-pointer text-left"
            aria-haspopup="dialog"
            aria-label={`Open case file: ${p.title}`}
          >
            <div className="dossier-glow" />
            <CardVisual project={p} />
            <div className="border-t px-5 py-5" style={{ borderColor: "var(--line)" }}>
              <div className="mb-3 flex items-center justify-between">
                <span className="hud-label">{p.index}</span>
                <span className={`chip chip--${p.tone}`}>{p.signal}</span>
              </div>
              <h3 className="display text-xl" style={{ color: "var(--text)" }}>{p.title}</h3>
              <p className="mt-3 text-[0.85rem] leading-relaxed" style={{ color: "var(--text-2)" }}>
                {p.summary}
              </p>
              <p className="mono mt-4 text-[0.7rem] uppercase tracking-widest" style={{ color: TONE_COLOR[p.tone] }}>
                Open case file →
              </p>
            </div>
          </button>
        ))}
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
