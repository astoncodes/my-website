import SectionDivider from "@/components/SectionDivider";
import { EXPERIENCE } from "@/data/experience";

export default function ExperienceLog() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionDivider index="SEC. 02 — MISSION RECORDS" title="Experience" solid="Log" />

      <div className="flex flex-col gap-6">
        {EXPERIENCE.map((job, i) => (
          <article key={job.id} className="dossier reveal">
            <div className="dossier-glow" />

            <header
              className="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 sm:px-7"
              style={{ borderColor: "var(--line)" }}
            >
              <span className="hud-label">
                LOG {String(i + 1).padStart(3, "0")} · {job.dates}
              </span>
              <span className={`chip chip--${job.signalTone}`}>{job.signal}</span>
            </header>

            <div className="px-5 py-6 sm:px-7">
              <h3 className="display text-2xl sm:text-3xl" style={{ color: "var(--text)" }}>
                {job.role}
              </h3>
              <p className="mono mt-2 text-[0.78rem]" style={{ color: "var(--blue)" }}>
                {job.company} · {job.location}
              </p>

              <ul className="mt-5 flex flex-col gap-2.5">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[0.92rem] leading-relaxed" style={{ color: "var(--text-2)" }}>
                    <span aria-hidden="true" className="mt-0.5 shrink-0" style={{ color: "var(--toxic)" }}>
                      ›
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
