"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { StillsShade, stillStyle } from "@/components/Stills";
import type { GalleryItem } from "@/data/galleryItems";

const INTERVAL_MS = 5000;

type Show = {
  current: number[]; // image index on show in each column
  previous: number[]; // index left underneath while the current one fades in (-1: none)
  reach: number[]; // highest index mounted in each column (the next one preloads)
};

function PauseIcon() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className="size-3" fill="currentColor">
      <rect x="2" y="1.5" width="2.5" height="9" />
      <rect x="7.5" y="1.5" width="2.5" height="9" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className="size-3" fill="currentColor">
      <path d="M3 1.5v9l7.5-4.5z" />
    </svg>
  );
}

/**
 * Hero background: three columns, each rotating through its own lane of
 * pictures. Every INTERVAL_MS the next column in turn crossfades to its next
 * picture, but only once that picture has loaded. Rotation stops while
 * paused, while the tab is hidden and while the hero is off-screen, and it
 * starts paused when the device asks for reduced motion.
 *
 * `children` is the left side of the caption strip; the photo credits and the
 * pause button sit on the right.
 */
export default function RotatingStills({
  lanes,
  children,
}: {
  lanes: GalleryItem[][];
  children: React.ReactNode;
}) {
  const [show, setShow] = useState<Show>(() => ({
    current: lanes.map(() => 0),
    previous: lanes.map(() => -1),
    reach: lanes.map(() => 0),
  }));
  const [paused, setPaused] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const loaded = useRef(new Set(lanes.map((lane) => lane[0].id)));
  const turn = useRef(0);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
  }, []);

  // Mount each column's next picture only after the page has loaded, so the
  // extra downloads never compete with the first paint.
  useEffect(() => {
    const arm = () =>
      setShow((s) => ({
        ...s,
        reach: s.reach.map((r, l) => Math.max(r, Math.min(1, lanes[l].length - 1))),
      }));
    if (document.readyState === "complete") {
      arm();
      return;
    }
    window.addEventListener("load", arm, { once: true });
    return () => window.removeEventListener("load", arm);
  }, [lanes]);

  useEffect(() => {
    const onVisibility = () => setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    if (stageRef.current) io.observe(stageRef.current);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      io.disconnect();
    };
  }, []);

  const running = !paused && onScreen && tabVisible;

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      const l = turn.current;
      turn.current = (l + 1) % lanes.length;
      setShow((s) => {
        const lane = lanes[l];
        const next = (s.current[l] + 1) % lane.length;
        // Not downloaded yet: skip this column's turn rather than fade to a blank.
        if (lane.length < 2 || !loaded.current.has(lane[next].id)) return s;
        const set = (arr: number[], value: number) => arr.map((v, i) => (i === l ? value : v));
        return {
          current: set(s.current, next),
          previous: set(s.previous, s.current[l]),
          reach: set(s.reach, Math.max(s.reach[l], Math.min(next + 1, lane.length - 1))),
        };
      });
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [running, lanes]);

  const credits = lanes
    .map((lane, l) => {
      const item = lane[show.current[l]];
      return [item.title, item.detail].filter(Boolean).join(", ");
    })
    .join(" · ");

  return (
    <>
      <div ref={stageRef} aria-hidden="true" className="absolute inset-0 -z-10 grid grid-cols-3 gap-[3px]">
        {lanes.map((lane, l) => (
          <div key={lane[0].lane} className="relative isolate overflow-hidden">
            {lane.slice(0, show.reach[l] + 1).map((item, i) => {
              const state =
                i === show.current[l] ? "current" : i === show.previous[l] ? "previous" : "hidden";
              return (
                // The incoming picture fades in on top while the outgoing one stays
                // opaque underneath, so the crossfade never dips to black.
                <div
                  key={item.id}
                  data-state={state}
                  className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                    state === "current" ? "z-10 opacity-100" : state === "previous" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    priority={i === 0}
                    placeholder="blur"
                    sizes="34vw"
                    className="object-cover"
                    style={stillStyle(item)}
                    onLoad={() => loaded.current.add(item.id)}
                  />
                </div>
              );
            })}
          </div>
        ))}
        <StillsShade />
      </div>

      <div className="mx-auto flex h-full max-w-6xl items-end px-5 pb-6 sm:px-10 sm:pb-8">
        <div className="flex w-full items-end justify-between gap-6">
          <div className="min-w-0">{children}</div>
          <div className="flex shrink-0 items-end gap-6">
            <p className="hidden font-display text-xs tracking-[0.04em] text-muted md:block">{credits}</p>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="-m-4 flex cursor-pointer items-center gap-2 p-4 font-display text-xs font-medium uppercase tracking-[0.16em] text-muted transition-colors duration-150 hover:text-ink"
            >
              {paused ? <PlayIcon /> : <PauseIcon />}
              <span className="max-sm:sr-only">{paused ? "Play" : "Pause"}</span>
              <span className="sr-only"> slideshow</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
