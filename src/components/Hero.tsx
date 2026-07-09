"use client";

import { LINKS } from "@/data/links";
import { useSpotify, useLetterboxd, stars } from "@/components/hooks";

const BOOT_LINES = [
  "> INITIALIZING SIGNAL OS v3.0 ...",
  "> LOADING PROFILE: OLUWATOSIN_D",
  "> MOUNTING /music /film /code",
  "> ALL SYSTEMS NOMINAL",
];

const HUD = [
  { label: "STATUS", value: "BUILDING", tone: "chip--toxic" },
  { label: "LOCATION", value: "TORONTO", tone: "chip--blue" },
  { label: "MODE", value: "SOFTWARE ENGINEER", tone: "chip--purple" },
  { label: "SIGNAL", value: "MUSIC / FILM / CODE", tone: "chip--alert" },
];

export default function Hero() {
  const spotify = useSpotify();
  const letterboxd = useLetterboxd();
  const track = spotify.nowPlaying ?? spotify.recentlyPlayed[0];
  const film = letterboxd.films[0];

  return (
    <section id="home" className="relative overflow-hidden border-b" style={{ borderColor: "var(--line)" }}>
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(3,70,148,0.25), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* Boot sequence */}
        <div className="mono mb-10 text-[0.7rem] leading-relaxed" style={{ color: "var(--muted)" }} aria-hidden="true">
          {BOOT_LINES.map((line, i) => (
            <p key={line} className="boot-line" style={{ animationDelay: `${i * 220}ms` }}>
              {line}
            </p>
          ))}
          <p className="boot-line cursor-blink" style={{ animationDelay: `${BOOT_LINES.length * 220}ms`, color: "var(--toxic)" }}>
            {"> READY "}
          </p>
        </div>

        {/* Title card */}
        <h1
          className="display crt boot-line"
          style={{
            fontSize: "clamp(3.2rem, 11vw, 8.5rem)",
            animationDelay: "1100ms",
          }}
        >
          Daniel
          <br />
          <span style={{ color: "var(--blue)" }}>Oluwatosin</span>
        </h1>

        <p
          className="boot-line mt-6 max-w-[58ch] text-base sm:text-lg"
          style={{ color: "var(--text-2)", animationDelay: "1300ms", whiteSpace: "normal" }}
        >
          Software engineer building clean systems, strange worlds, and useful tools.
          Toronto-based CS student focused on full-stack engineering, data-heavy
          products, and cinematic interfaces.
        </p>

        {/* HUD labels */}
        <div className="boot-line mt-8 flex flex-wrap gap-2" style={{ animationDelay: "1500ms", whiteSpace: "normal", overflow: "visible" }}>
          {HUD.map((h) => (
            <span key={h.label} className={`chip ${h.tone}`}>
              <span style={{ color: "var(--muted)" }}>{h.label}:</span> {h.value}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="boot-line mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: "1700ms", whiteSpace: "normal", overflow: "visible" }}>
          <a href="#projects" className="btn">
            Open Project Archive ↓
          </a>
          <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            ./resume.pdf
          </a>
          <a href="#contact" className="btn btn-ghost">
            Contact Signal
          </a>
        </div>

        {/* Live feed chips */}
        <div className="boot-line mt-12 flex flex-wrap gap-3" style={{ animationDelay: "1900ms", whiteSpace: "normal", overflow: "visible" }}>
          {track && (
            <a
              href="#signal"
              className="dossier flex items-center gap-3 px-4 py-2.5"
              aria-label={`Now playing: ${track.title} by ${track.artist}`}
            >
              <span className={`eq ${track.isPlaying ? "" : "eq--paused"}`} aria-hidden="true">
                <span /><span /><span /><span /><span />
              </span>
              <span className="mono text-[0.7rem]" style={{ color: "var(--text-2)" }}>
                <span style={{ color: "var(--toxic)" }}>
                  {track.isPlaying ? "NOW PLAYING" : "LAST PLAYED"}
                </span>{" "}
                — {track.title} · {track.artist}
              </span>
            </a>
          )}
          {film && (
            <a
              href="#signal"
              className="dossier flex items-center gap-3 px-4 py-2.5"
              aria-label={`Latest watch: ${film.title}, rated ${film.rating} out of 5`}
            >
              <span className="mono text-[0.7rem]" style={{ color: "var(--text-2)" }}>
                <span style={{ color: "var(--alert)" }}>LATEST WATCH</span> — {film.title} ({film.year}){" "}
                <span style={{ color: "var(--gold)" }}>{stars(film.rating)}</span>
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
