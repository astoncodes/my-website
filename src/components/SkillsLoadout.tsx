import SectionDivider from "@/components/SectionDivider";
import { SKILL_GROUPS } from "@/data/skills";

const TONE_COLOR: Record<string, string> = {
  blue: "var(--blue)",
  purple: "var(--purple)",
  toxic: "var(--toxic)",
  alert: "var(--alert)",
};

export default function SkillsLoadout() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionDivider index="SEC. 04 — EQUIPMENT" title="Loadout" solid="Screen" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label} className="dossier reveal p-5">
            <div className="dossier-glow" />
            <div className="mb-4 flex items-center justify-between">
              <span className="hud-label">{group.code}</span>
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: TONE_COLOR[group.tone], boxShadow: `0 0 8px ${TONE_COLOR[group.tone]}` }}
              />
            </div>
            <h3 className="display mb-4 text-xl" style={{ color: TONE_COLOR[group.tone] }}>
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <li key={s} className="chip">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
