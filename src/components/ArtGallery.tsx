"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import SectionDivider from "@/components/SectionDivider";
import { GALLERY_ITEMS, type GalleryCategory } from "@/data/galleryItems";

const FILTERS: { label: string; value: GalleryCategory | "all" }[] = [
  { label: "ALL", value: "all" },
  { label: "ANIME", value: "anime" },
  { label: "FILM", value: "film" },
  { label: "SPORTS", value: "sports" },
  { label: "DESIGN", value: "design" },
  // Re-add { label: "MUSIC", value: "music" } once music images exist.
];

export default function ArtGallery() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const trackRef = useRef<HTMLDivElement>(null);
  const items = GALLERY_ITEMS.filter((i) => filter === "all" || i.category === filter);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.75, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionDivider index="SEC. 05 — REFERENCE WALL" title="Things I" solid="Like" />

      {/* Filters + carousel controls */}
      <div className="reveal mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery by category">
          {FILTERS.map((f) => {
            const active = filter === f.value;
            return (
              <button
                key={f.value}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.value)}
                className="mono cursor-pointer px-4 py-2 text-[0.68rem] tracking-[0.14em] transition-colors duration-150"
                style={{
                  border: `1px solid ${active ? "var(--blue)" : "var(--line)"}`,
                  background: active ? "var(--blue-deep)" : "transparent",
                  color: active ? "var(--beige)" : "var(--text-2)",
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            className="btn btn-ghost px-4 py-2"
            aria-label="Scroll gallery left"
          >
            ‹
          </button>
          <button
            onClick={() => scroll(1)}
            className="btn btn-ghost px-4 py-2"
            aria-label="Scroll gallery right"
          >
            ›
          </button>
        </div>
      </div>

      {/* Carousel track */}
      <div className="reveal relative">
        {/* edge fades */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10"
          style={{ background: "linear-gradient(90deg, var(--bg), transparent)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10"
          style={{ background: "linear-gradient(270deg, var(--bg), transparent)" }}
          aria-hidden="true"
        />

        <div
          ref={trackRef}
          className="gallery-track flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
          tabIndex={0}
          role="region"
          aria-label="Reference gallery — scroll horizontally"
        >
          {items.map((item) => {
            const card = (
              <figure
                className="dossier group relative h-[320px] shrink-0 snap-start overflow-hidden sm:h-[400px]"
                style={{ aspectRatio: item.ratio }}
              >
                <div className="dossier-glow" />

                {item.image ? (
                  <>
                    <Image
                      src={item.image}
                      alt={item.alt ?? item.title}
                      fill
                      sizes="(min-width: 640px) 400px, 320px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    {/* scrim so labels stay readable over any photo */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(8,8,11,0.85) 0%, rgba(8,8,11,0.2) 40%, rgba(8,8,11,0.35) 100%)",
                      }}
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  <div className="absolute inset-0" style={{ background: item.gradient }} aria-hidden="true">
                    <div className="hero-grid absolute inset-0 opacity-60" />
                  </div>
                )}

                <figcaption className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex items-start justify-between gap-2">
                    <span className="hud-label" style={{ color: "var(--beige)" }}>
                      {item.category.toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <p
                      className="display text-xl leading-tight"
                      style={{ color: "var(--beige)", textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
                    >
                      {item.title}
                    </p>

                    {/* Hover-reveal caption + moods */}
                    <div
                      className="mt-2 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100 group-focus-within:max-h-32 group-focus-within:opacity-100"
                      style={{ transitionTimingFunction: "var(--ease-out)" }}
                    >
                      <p className="text-[0.78rem] leading-snug" style={{ color: "var(--text-2)" }}>
                        {item.caption}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {item.moods.map((m) => (
                          <span key={m} className="chip" style={{ background: "rgba(8,8,11,0.7)" }}>
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </figcaption>
              </figure>
            );

            return item.link ? (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                {card}
              </a>
            ) : (
              <div key={item.id} tabIndex={0} className="shrink-0" aria-label={`${item.title} — ${item.caption}`}>
                {card}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
