import CurrentYear from "@/components/CurrentYear";
import ExternalLink from "@/components/ExternalLink";
import { LINKS } from "@/data/links";

const linkClass = "inline-block py-1.5 text-muted transition-colors duration-150 hover:text-ink";

export default function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl px-5 sm:px-10">
      <div className="flex flex-col gap-4 border-t border-line py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-[0.8125rem] text-muted">
          © <CurrentYear initial={new Date().getFullYear()} /> {LINKS.name}
        </p>
        <ul className="flex flex-wrap gap-x-6 font-display text-[0.8125rem]">
          <li>
            <a href={`mailto:${LINKS.email}`} className={linkClass}>Email</a>
          </li>
          <li>
            <ExternalLink href={LINKS.linkedin} className={linkClass}>LinkedIn</ExternalLink>
          </li>
          <li>
            <ExternalLink href={LINKS.github} className={linkClass}>GitHub</ExternalLink>
          </li>
          <li>
            <ExternalLink href={LINKS.letterboxd} className={linkClass}>Letterboxd</ExternalLink>
          </li>
          <li>
            <ExternalLink href={LINKS.resume} className={linkClass}>Résumé</ExternalLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
