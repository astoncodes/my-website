import ExternalLink from "@/components/ExternalLink";
import StackLine from "@/components/StackLine";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <ul className="grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2">
      {PROJECTS.map((p) => (
        <li key={p.id} id={p.id}>
          <h3 className="font-display text-lg font-medium uppercase tracking-[0.06em] text-ink">
            {p.title}
          </h3>
          {p.status && (
            <p className="label mt-2 flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              {p.status}
            </p>
          )}
          <p className="mt-3">{p.description}</p>
          <StackLine items={p.stack} className="mt-4" />
          {p.links.length > 0 && (
            <p className="mt-4 flex gap-6 font-display text-[0.9375rem]">
              {p.links.map((l) => (
                <ExternalLink key={l.href} href={l.href} className="link">
                  {l.label}
                </ExternalLink>
              ))}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
