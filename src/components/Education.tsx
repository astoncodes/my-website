import { EDUCATION } from "@/data/skills";

export default function Education() {
  return (
    <div>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div>
          <h3 className="font-display text-[0.9375rem] font-medium uppercase tracking-[0.08em] text-ink">
            {EDUCATION.school}
          </h3>
          <p className="mt-1 text-muted">{EDUCATION.degree}</p>
        </div>
        <p className="font-display text-sm text-muted sm:shrink-0">{EDUCATION.dates}</p>
      </div>

      <dl className="mt-6 space-y-4">
        <div className="grid gap-1 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6">
          <dt className="font-display text-[0.9375rem] font-medium text-ink">Coursework</dt>
          <dd>{EDUCATION.coursework.join(", ")}</dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6">
          <dt className="font-display text-[0.9375rem] font-medium text-ink">Certification</dt>
          <dd>{EDUCATION.certifications.join(", ")}</dd>
        </div>
      </dl>
    </div>
  );
}
