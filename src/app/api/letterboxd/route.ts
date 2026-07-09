import { NextResponse } from "next/server";
import { LETTERBOXD_MOCK, type Film, type LetterboxdPayload } from "@/data/media";

/**
 * Letterboxd integration — parses the public diary RSS feed.
 * Feed: https://letterboxd.com/wa4tchingm0vies/rss/
 * Falls back to a snapshot in src/data/media.ts if the fetch fails.
 * Set LETTERBOXD_USER to change accounts without touching code.
 */

const USER = process.env.LETTERBOXD_USER ?? "wa4tchingm0vies";
const FEED_URL = `https://letterboxd.com/${USER}/rss/`;
const MAX_FILMS = 6;

export const revalidate = 3600; // re-fetch the diary at most hourly

function tag(block: string, name: string): string | undefined {
  const m = block.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
  return m?.[1].trim();
}

function parseFeed(xml: string): Film[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  const films: Film[] = [];

  for (const item of items) {
    const title = tag(item, "letterboxd:filmTitle");
    const year = tag(item, "letterboxd:filmYear");
    const watchedDate = tag(item, "letterboxd:watchedDate");
    if (!title || !year || !watchedDate) continue; // skip lists / non-diary items

    const poster = item.match(/<img src="([^"]+)"/)?.[1];
    films.push({
      title: title.replace(/&amp;/g, "&"),
      year: Number(year),
      rating: Number(tag(item, "letterboxd:memberRating") ?? 0),
      poster,
      watchedDate,
      reviewLink: tag(item, "link"),
      rewatch: tag(item, "letterboxd:rewatch") === "Yes",
    });
    if (films.length >= MAX_FILMS) break;
  }
  return films;
}

export async function GET() {
  try {
    const res = await fetch(FEED_URL, {
      headers: { "User-Agent": "daniel-oluwatosin-portfolio" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`feed fetch failed: ${res.status}`);

    const films = parseFeed(await res.text());
    if (films.length === 0) throw new Error("no diary entries parsed");

    const payload: LetterboxdPayload = { mock: false, films };
    return NextResponse.json(payload);
  } catch {
    return NextResponse.json(LETTERBOXD_MOCK);
  }
}
