/**
 * One-time helper to obtain a Spotify refresh token for the portfolio.
 *
 * Usage:
 *   1. Put SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in .env.local
 *   2. Make sure your Spotify app has this Redirect URI registered:
 *        http://127.0.0.1:8888/callback
 *   3. Run:  node scripts/get-spotify-token.mjs
 *   4. A browser opens — log in and approve. The script prints your
 *      SPOTIFY_REFRESH_TOKEN. Paste it into .env.local (and Vercel).
 */

import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { exec } from "node:child_process";

const REDIRECT_URI = "http://127.0.0.1:8888/callback";
const SCOPES = "user-read-currently-playing user-read-recently-played";

// Read .env.local (falls back to real env vars)
let env = {};
try {
  for (const line of readFileSync(new URL("../.env.local", import.meta.url), "utf8").split("\n")) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m) env[m[1]] = m[2].trim();
  }
} catch { /* no .env.local — use process.env */ }

const CLIENT_ID = env.SPOTIFY_CLIENT_ID || process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = env.SPOTIFY_CLIENT_SECRET || process.env.SPOTIFY_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("✕ Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in .env.local first.");
  process.exit(1);
}

const authUrl =
  "https://accounts.spotify.com/authorize" +
  `?client_id=${CLIENT_ID}` +
  "&response_type=code" +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&scope=${encodeURIComponent(SCOPES)}`;

const server = createServer(async (req, res) => {
  const url = new URL(req.url, REDIRECT_URI);
  if (url.pathname !== "/callback") { res.end(); return; }

  const code = url.searchParams.get("code");
  if (!code) {
    res.end("No code in callback — try again.");
    return;
  }

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const json = await tokenRes.json();
  if (json.refresh_token) {
    res.end("Done! Check your terminal for the refresh token. You can close this tab.");
    console.log("\n✓ Add this line to .env.local (and Vercel env vars):\n");
    console.log(`SPOTIFY_REFRESH_TOKEN=${json.refresh_token}\n`);
  } else {
    res.end("Token exchange failed — check the terminal.");
    console.error("✕ Token exchange failed:", json);
  }
  server.close();
});

server.listen(8888, "127.0.0.1", () => {
  console.log("Opening Spotify authorization in your browser...");
  console.log("If it doesn't open, visit:\n" + authUrl + "\n");
  exec(`open "${authUrl}"`);
});
