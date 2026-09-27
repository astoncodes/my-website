import StackLine from "@/components/StackLine";
import { EXPERIENCE } from "@/data/experience";

export default function Experience() {
  return (
    <ol className="space-y-12">
      {EXPERIENCE.map((job) => (
        <li key={job.id}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div>
              <h3 className="font-display text-[0.9375rem] font-medium uppercase tracking-[0.08em] text-ink">
                {job.company}
              </h3>
              <p className="mt-1 text-muted">{job.role}</p>
            </div>
            <p className="font-display text-sm tabular-nums text-muted sm:shrink-0">{job.dates}</p>
          </div>

          <ul className="mt-4 max-w-[68ch] space-y-2">
            {job.bullets.map((b) => (
              <li
                key={b}
                className="relative pl-6 before:absolute before:top-[0.8em] before:left-0 before:h-px before:w-3 before:bg-faint"
              >
                {b}
              </li>
            ))}
          </ul>

          {job.stack && <StackLine items={job.stack} className="mt-4 max-w-[68ch]" />}
        </li>
      ))}
    </ol>
  );
}
