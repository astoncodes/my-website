import ExternalLink from "@/components/ExternalLink";
import { LINKS } from "@/data/links";

export default function Intro() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-10 pb-14 sm:px-10 sm:pt-14 sm:pb-20">
      <p className="max-w-[26ch] text-[clamp(1.625rem,1.1rem+2vw,2.5rem)] leading-[1.18] tracking-[-0.01em] text-ink">
        Software engineer and computer science student at UPEI. Most recently at Mackenzie&nbsp;Investments.
      </p>

      <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3 font-display text-[0.9375rem]">
        <li>
          <ExternalLink href={LINKS.resume} className="link">Résumé</ExternalLink>
        </li>
        <li>
          <ExternalLink href={LINKS.github} className="link">GitHub</ExternalLink>
        </li>
        <li>
          <ExternalLink href={LINKS.linkedin} className="link">LinkedIn</ExternalLink>
        </li>
        <li>
          <a href={`mailto:${LINKS.email}`} className="link">{LINKS.email}</a>
        </li>
      </ul>
    </div>
  );
}
