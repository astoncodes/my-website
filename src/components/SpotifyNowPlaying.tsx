"use client";

import Image from "next/image";
import { useSpotify } from "@/components/hooks";
import { LINKS } from "@/data/links";

function AlbumArt({ src, title, size = 56 }: { src?: string; title: string; size?: number }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={`Album art for ${title}`}
        width={size}
        height={size}
        className="shrink-0 object-cover"
        style={{ border: "1px solid var(--line-bright)" }}
        unoptimized
      />
    );
  }
  return (
    <div
      className="display flex shrink-0 items-center justify-center text-lg"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(140deg, #2b1508, #08080b 60%, #1a0b2e)",
        border: "1px solid var(--line-bright)",
        color: "var(--beige)",
      }}
      aria-hidden="true"
    >
      {title.charAt(0)}
    </div>
  );
}

export default function SpotifyNowPlaying() {
  const { mock, nowPlaying, recentlyPlayed } = useSpotify();
  const track = nowPlaying ?? recentlyPlayed[0] ?? null;

  return (
    <div className="dossier reveal flex h-full flex-col">
      <div className="dossier-glow" />

      {/* Cassette header */}
      <header className="flex items-center justify-between border-b px-5 py-3" style={{ borderColor: "var(--line)" }}>
        <span className="hud-label">MIXTAPE INDEX // AUDIO FEED</span>
        <span className={`chip ${mock ? "chip--alert" : "chip--toxic"}`}>
          {mock ? "MOCK FEED" : "LIVE"}
        </span>
      </header>

      <div className="flex flex-1 flex-col px-5 py-5">
        {/* Deck */}
        {track ? (
          <div className="flex items-center gap-4">
            <AlbumArt src={track.albumArt} title={track.title} />
            <div className="min-w-0">
              <p className="hud-label mb-1" style={{ color: "var(--toxic)" }}>
                {track.isPlaying ? "NOW PLAYING" : "LAST PLAYED"}
              </p>
              <p className="display truncate text-lg" style={{ color: "var(--text)" }}>{track.title}</p>
              <p className="mono truncate text-[0.72rem]" style={{ color: "var(--text-2)" }}>
                {track.artist}{track.album ? ` — ${track.album}` : ""}
              </p>
            </div>
            <span className={`eq ml-auto shrink-0 ${track.isPlaying ? "" : "eq--paused"}`} aria-hidden="true">
              <span /><span /><span /><span /><span />
            </span>
          </div>
        ) : (
          <p className="mono text-xs" style={{ color: "var(--muted)" }}>SIGNAL LOST — nothing on deck.</p>
        )}

        {/* Tape spools */}
        <div
          className="mt-5 flex items-center justify-between border px-6 py-3"
          style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
          aria-hidden="true"
        >
          {[0, 1].map((i) => (
            <div
              key={i}
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                border: "1px solid var(--line-bright)",
                animation: track?.isPlaying ? `spin 3s linear infinite` : undefined,
              }}
            >
              <div className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--blue)" }} />
            </div>
          ))}
          <span className="hud-label">SIDE A · 90 MIN</span>
        </div>

        {/* Recently played */}
        <p className="hud-label mt-6 mb-2">RECENTLY PLAYED</p>
        <ul className="flex flex-col">
          {recentlyPlayed.slice(0, 4).map((t, i) => (
            <li
              key={`${t.title}-${i}`}
              className="mono flex items-baseline gap-3 border-b py-2 text-[0.75rem] last:border-b-0"
              style={{ borderColor: "var(--line)", color: "var(--text-2)" }}
            >
              <span style={{ color: "var(--muted)" }}>{String(i + 1).padStart(2, "0")}</span>
              <span className="truncate" style={{ color: "var(--text)" }}>{t.title}</span>
              <span className="ml-auto truncate text-right" style={{ color: "var(--muted)" }}>{t.artist}</span>
            </li>
          ))}
        </ul>

        <a
          href={LINKS.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="mono mt-auto pt-5 text-[0.7rem] uppercase tracking-widest"
          style={{ color: "var(--toxic)" }}
        >
          Open Spotify ↗
        </a>
      </div>
    </div>
  );
}
