"use client";

import Image from "next/image";
import ExternalLink from "@/components/ExternalLink";
import { stars, useLetterboxd, useSpotify } from "@/components/hooks";
import { LINKS } from "@/data/links";
import type { Track } from "@/data/media";

const heading = "mb-2 font-display text-[0.9375rem] font-medium text-ink";
const row = "group flex items-center gap-4 py-3";
const title = "block truncate text-ink decoration-accent/60 underline-offset-[0.22em] group-hover:underline";
const meta = "block truncate font-display text-[0.8125rem] text-muted";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/** Grey rows shown until the feed responds. */
function Loading({ thumb }: { thumb: string }) {
  return (
    <ul aria-hidden="true" className="divide-y divide-line motion-safe:animate-pulse">
      {[0, 1, 2, 3].map((i) => (
        <li key={i} className="flex items-center gap-4 py-3">
          <span className={`${thumb} shrink-0 bg-raised`} />
          <span className="h-3 w-2/5 bg-raised" />
        </li>
      ))}
    </ul>
  );
}

function Listening() {
  const data = useSpotify();

  // Only real plays are shown; if Spotify is unavailable the column disappears.
  const tracks: Track[] = [];
  for (const t of data ? [data.nowPlaying, ...data.recentlyPlayed] : []) {
    if (t && !tracks.some((x) => x.title === t.title && x.artist === t.artist)) tracks.push(t);
  }
  if (data && (data.mock || tracks.length === 0)) return null;

  return (
    <div>
      <h3 className={heading}>Recently played</h3>
      {!data ? (
        <Loading thumb="size-11" />
      ) : (
        <ul className="divide-y divide-line">
          {tracks.slice(0, 4).map((t, i) => {
            const content = (
              <>
                {t.albumArt ? (
                  <Image src={t.albumArt} alt="" width={44} height={44} unoptimized className="size-11 shrink-0 object-cover" />
                ) : (
                  <span className="size-11 shrink-0 bg-raised" />
                )}
                <span className="min-w-0 flex-1">
                  <span className={title}>{t.title}</span>
                  <span className={meta}>{t.artist}</span>
                </span>
                {i === 0 && t.isPlaying && <span className="label shrink-0">Now playing</span>}
              </>
            );
            return (
              <li key={`${t.title}-${t.artist}`}>
                {t.url ? (
                  <a href={t.url} target="_blank" rel="noopener noreferrer" className={row}>
                    {content}
                    <span className="sr-only"> (opens Spotify in a new tab)</span>
                  </a>
                ) : (
                  <div className={row}>{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function Watching() {
  const data = useLetterboxd();
  if (data && data.films.length === 0) return null;

  return (
    <div>
      <h3 className={heading}>Recently watched</h3>
      {!data ? (
        <Loading thumb="h-[54px] w-9" />
      ) : (
        <ul className="divide-y divide-line">
          {data.films.slice(0, 4).map((film) => (
            <li key={`${film.title}-${film.watchedDate}`}>
              <a href={film.reviewLink ?? LINKS.letterboxd} target="_blank" rel="noopener noreferrer" className={row}>
                {film.poster ? (
                  <Image src={film.poster} alt="" width={36} height={54} unoptimized className="h-[54px] w-9 shrink-0 object-cover" />
                ) : (
                  <span className="h-[54px] w-9 shrink-0 bg-raised" />
                )}
                <span className="min-w-0 flex-1">
                  <span className={title}>
                    {film.title} <span className="text-muted">{film.year}</span>
                  </span>
                  <span className={meta}>
                    {formatDate(film.watchedDate)}
                    {film.rewatch && " · Rewatch"}
                  </span>
                </span>
                {film.rating > 0 && (
                  <>
                    <span aria-hidden="true" className="shrink-0 text-sm text-muted">{stars(film.rating)}</span>
                    <span className="sr-only">Rated {film.rating} out of 5</span>
                  </>
                )}
                <span className="sr-only"> (opens Letterboxd in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-5 font-display text-[0.9375rem]">
        <ExternalLink href={LINKS.letterboxd} className="link">Full diary on Letterboxd</ExternalLink>
      </p>
    </div>
  );
}

export default function MusicAndFilm() {
  return (
    // grid-cols-1 (minmax(0, 1fr)) lets long track titles truncate instead of widening the page.
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
      <Listening />
      <Watching />
    </div>
  );
}
