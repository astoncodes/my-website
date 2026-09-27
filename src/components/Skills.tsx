import { SKILL_GROUPS } from "@/data/skills";

export default function Skills() {
  return (
    <dl className="divide-y divide-line">
      {SKILL_GROUPS.map((group) => (
        <div
          key={group.label}
          className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6"
        >
          <dt className="font-display text-[0.9375rem] font-medium text-ink">{group.label}</dt>
          <dd>{group.skills.join(", ")}</dd>
        </div>
      ))}
    </dl>
  );
}
