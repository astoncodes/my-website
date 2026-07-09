"use client";

import { useState } from "react";
import { useSpotify, useLetterboxd, stars } from "@/components/hooks";
import { LINKS } from "@/data/links";

export default function SignalDock() {
  const [hidden, setHidden] = useState(false);
  const spotify = useSpotify();
  const letterboxd = useLetterboxd();

  const track = spotify.nowPlaying ?? spotify.recentlyPlayed[0];
  const film = letterboxd.films[0];

  if (hidden) return null;

  return (
    <aside
      className="dossier z-40 hidden w-72 lg:block"
      style={{
        // .dossier sets position: relative and outranks Tailwind's layered
        // `fixed` utility, so pin the dock inline.
        position: "fixed",
        bottom: 16,
        right: 16,
        background: "rgba(12,12,17,0.92)",
        backdropFilter: "blur(10px)",
      }}
      aria-label="Signal dock"
    >
      <div className="dossier-glow" style={{ opacity: 1 }} />

      <header className="flex items-center justify-between border-b px-4 py-2" style={{ borderColor: "var(--line)" }}>
        <span className="hud-label" style={{ color: "var(--blue)" }}>SIGNAL DOCK</span>
        <button
          onClick={() => setHidden(true)}
          className="mono cursor-pointer text-[0.65rem]"
          style={{ color: "var(--muted)" }}
          aria-label="Dismiss signal dock"
        >
          [×]
        </button>
      </header>

      <div className="flex flex-col gap-2.5 px-4 py-3">
        {track && (
          <div className="flex items-center gap-2.5">
            <span className={`eq shrink-0 ${track.isPlaying ? "" : "eq--paused"}`} aria-hidden="true">
              <span /><span /><span /><span /><span />
            </span>
            <p className="mono truncate text-[0.68rem]" style={{ color: "var(--text-2)" }}>
              {track.title} — {track.artist}
            </p>
          </div>
        )}

        {film && (
          <p className="mono truncate text-[0.68rem]" style={{ color: "var(--text-2)" }}>
            <span style={{ color: "var(--alert)" }}>▣</span> {film.title}{" "}
            <span style={{ color: "var(--gold)" }}>{stars(film.rating)}</span>
          </p>
        )}

        <p className="mono truncate text-[0.68rem]" style={{ color: "var(--text-2)" }}>
          <span style={{ color: "var(--toxic)" }}>●</span> FOCUS: full-stack + data platforms
        </p>

        <div className="mt-1 flex gap-2 border-t pt-2.5" style={{ borderColor: "var(--line)" }}>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="chip flex-1 justify-center">GitHub</a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="chip flex-1 justify-center">LinkedIn</a>
          <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="chip chip--blue flex-1 justify-center">Resume</a>
        </div>
      </div>
    </aside>
  );
}
