import { NextResponse } from "next/server";
import { SPOTIFY_MOCK, type SpotifyPayload, type Track } from "@/data/media";

/**
 * Spotify integration.
 *
 * TODO — to connect real Spotify data:
 *  1. Create an app at https://developer.spotify.com/dashboard
 *  2. Get a refresh token with the scopes:
 *       user-read-currently-playing user-read-recently-played
 *     (one-time OAuth authorization-code flow; any local script works)
 *  3. Set these env vars (e.g. in Vercel project settings / .env.local):
 *       SPOTIFY_CLIENT_ID
 *       SPOTIFY_CLIENT_SECRET
 *       SPOTIFY_REFRESH_TOKEN
 *
 * Until those are set, this route returns curated mock data so the UI
 * still renders a believable player.
 */

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_URL = "https://api.spotify.com/v1/me/player/recently-played?limit=4";

type SpotifyTrackItem = {
  name: string;
  artists: { name: string }[];
  album: { name: string; images: { url: string }[] };
};

function toTrack(item: SpotifyTrackItem, isPlaying?: boolean): Track {
  return {
    title: item.name,
    artist: item.artists.map((a) => a.name).join(", "),
    album: item.album.name,
    albumArt: item.album.images.at(-1)?.url ?? item.album.images[0]?.url,
    isPlaying,
  };
}

async function getAccessToken(id: string, secret: string, refresh: string) {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refresh }),
    cache: "no-store",
  });
  if (!res.ok) {
    // Surface Spotify's error code (e.g. invalid_client / invalid_grant) —
    // it identifies WHICH credential is bad without exposing any value.
    const body = (await res.json().catch(() => ({}))) as {
      error?: string;
      error_description?: string;
    };
    throw new Error(
      `token exchange failed: ${res.status} ${body.error ?? ""} ${body.error_description ?? ""}`.trim()
    );
  }
  const json = (await res.json()) as { access_token: string };
  return json.access_token;
}

export async function GET() {
  // Trim: pasted env values often carry stray spaces/newlines, and unlike
  // local .env loading, Vercel stores them verbatim.
  const id = process.env.SPOTIFY_CLIENT_ID?.trim();
  const secret = process.env.SPOTIFY_CLIENT_SECRET?.trim();
  const refresh = process.env.SPOTIFY_REFRESH_TOKEN?.trim();

  if (!id || !secret || !refresh) {
    // Diagnostic: names of the missing vars only — never values.
    const missing = [
      !id && "SPOTIFY_CLIENT_ID",
      !secret && "SPOTIFY_CLIENT_SECRET",
      !refresh && "SPOTIFY_REFRESH_TOKEN",
    ].filter(Boolean);
    return NextResponse.json({ ...SPOTIFY_MOCK, reason: "missing_env", missing });
  }

  try {
    const token = await getAccessToken(id, secret, refresh);
    const auth = { Authorization: `Bearer ${token}` };

    const [nowRes, recentRes] = await Promise.all([
      fetch(NOW_PLAYING_URL, { headers: auth, cache: "no-store" }),
      fetch(RECENTLY_PLAYED_URL, { headers: auth, cache: "no-store" }),
    ]);

    let nowPlaying: Track | null = null;
    if (nowRes.status === 200) {
      const now = await nowRes.json();
      if (now?.item) nowPlaying = toTrack(now.item, now.is_playing);
    }

    let recentlyPlayed: Track[] = [];
    if (recentRes.ok) {
      const recent = await recentRes.json();
      recentlyPlayed = (recent.items ?? []).map((i: { track: SpotifyTrackItem }) =>
        toTrack(i.track)
      );
    }

    const payload: SpotifyPayload = { mock: false, nowPlaying, recentlyPlayed };
    return NextResponse.json(payload);
  } catch (err) {
    // Diagnostic: error message only — never credentials.
    const message = err instanceof Error ? err.message : "unknown error";
    return NextResponse.json({ ...SPOTIFY_MOCK, reason: "api_error", message });
  }
}
