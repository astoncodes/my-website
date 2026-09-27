"use client";

import { useEffect, useState } from "react";
import {
  SPOTIFY_UNAVAILABLE,
  type SpotifyPayload,
  type LetterboxdPayload,
} from "@/data/media";

/** Polls /api/spotify while the tab is visible. `null` until the first response. */
export function useSpotify(pollMs = 60_000) {
  const [data, setData] = useState<SpotifyPayload | null>(null);

  useEffect(() => {
    let alive = true;
    const load = () =>
      fetch("/api/spotify")
        .then((r) => r.json())
        .then((d: SpotifyPayload) => alive && setData(d))
        .catch(() => alive && setData((prev) => prev ?? SPOTIFY_UNAVAILABLE));
    load();
    const id = setInterval(() => {
      if (document.visibilityState === "visible") load();
    }, pollMs);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, [pollMs]);

  return data;
}

/** Fetches /api/letterboxd once. `null` until the response arrives. */
export function useLetterboxd() {
  const [data, setData] = useState<LetterboxdPayload | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/letterboxd")
      .then((r) => r.json())
      .then((d: LetterboxdPayload) => alive && setData(d))
      .catch(() => alive && setData({ mock: true, films: [] }));
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
