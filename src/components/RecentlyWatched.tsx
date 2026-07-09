"use client";

import Image from "next/image";
import { useLetterboxd, stars } from "@/components/hooks";
import { LINKS } from "@/data/links";

function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" });
}

export default function RecentlyWatched() {
  const { mock, films } = useLetterboxd();

  return (
    <div className="dossier reveal flex h-full flex-col">
      <div className="dossier-glow" />

      <header className="flex items-center justify-between border-b px-5 py-3" style={{ borderColor: "var(--line)" }}>
        <span className="hud-label">CINEMA LOG // DIARY FEED</span>
        <span className={`chip ${mock ? "chip--alert" : "chip--toxic"}`}>
          {mock ? "ARCHIVE SNAPSHOT" : "LIVE RSS"}
        </span>
      </header>

      <div className="filmstrip" aria-hidden="true" />

      <ul className="flex flex-1 flex-col px-5 py-4">
        {films.slice(0, 5).map((film) => (
          <li key={`${film.title}-${film.watchedDate}`} className="border-b last:border-b-0" style={{ borderColor: "var(--line)" }}>
            <a
              href={film.reviewLink ?? LINKS.letterboxd}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-3"
            >
              {film.poster ? (
                <Image
                  src={film.poster}
                  alt={`Poster for ${film.title}`}
                  width={40}
                  height={60}
                  className="shrink-0 object-cover"
                  style={{ border: "1px solid var(--line-bright)" }}
                  unoptimized
                />
              ) : (
                <div
                  className="display flex h-[60px] w-[40px] shrink-0 items-center justify-center text-sm"
                  style={{ background: "var(--bg-2)", border: "1px solid var(--line-bright)", color: "var(--muted)" }}
                  aria-hidden="true"
                >
                  {film.title.charAt(0)}
                </div>
              )}

              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.9rem] font-medium" style={{ color: "var(--text)" }}>
                  {film.title}{" "}
                  <span className="mono text-[0.7rem]" style={{ color: "var(--muted)" }}>({film.year})</span>
                </p>
                <p className="mono mt-0.5 text-[0.68rem]" style={{ color: "var(--muted)" }}>
                  {formatDate(film.watchedDate)}
                  {film.rewatch && <span style={{ color: "var(--purple)" }}> · REWATCH</span>}
                </p>
              </div>

              <span className="mono shrink-0 text-[0.8rem]" style={{ color: "var(--gold)" }} aria-label={`Rated ${film.rating} out of 5`}>
                {stars(film.rating)}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="filmstrip" aria-hidden="true" />

      <a
        href={LINKS.letterboxd}
        target="_blank"
        rel="noopener noreferrer"
        className="mono px-5 py-4 text-[0.7rem] uppercase tracking-widest"
        style={{ color: "var(--alert)" }}
      >
        Full diary on Letterboxd ↗
      </a>
    </div>
  );
}
