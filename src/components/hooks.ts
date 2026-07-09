"use client";

import { useEffect, useState } from "react";
import {
  SPOTIFY_MOCK,
  LETTERBOXD_MOCK,
  type SpotifyPayload,
  type LetterboxdPayload,
} from "@/data/media";

/** Adds .visible to .reveal elements as they scroll into view. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function useSpotify(pollMs = 60_000) {
  const [data, setData] = useState<SpotifyPayload>(SPOTIFY_MOCK);

  useEffect(() => {
    let alive = true;
    const load = () =>
      fetch("/api/spotify")
        .then((r) => r.json())
        .then((d: SpotifyPayload) => alive && setData(d))
        .catch(() => {});
    load();
    const id = setInterval(load, pollMs);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, [pollMs]);

  return data;
}

export function useLetterboxd() {
  const [data, setData] = useState<LetterboxdPayload>(LETTERBOXD_MOCK);

  useEffect(() => {
    let alive = true;
    fetch("/api/letterboxd")
      .then((r) => r.json())
      .then((d: LetterboxdPayload) => alive && setData(d))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  return data;
}

/** 4.5 → "★★★★½" */
export function stars(rating: number): string {
  return "★".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "½" : "");
}
