# Daniel Oluwatosin — Signal OS

Personal portfolio with a dark cinematic terminal aesthetic. Next.js 15
(App Router) + Tailwind CSS v4 + TypeScript, deployed on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Structure

- `src/app/page.tsx` — single-page layout assembling all sections
- `src/components/` — Hero, AboutCaseFile, ExperienceLog, ProjectArchive,
  SkillsLoadout, ArtGallery (carousel), SpotifyNowPlaying, RecentlyWatched,
  CommandPalette (⌘K), SignalDock, ContactSection, SystemStatusFooter
- `src/data/` — all content lives here (experience, projects, skills,
  gallery items, links, media fallbacks); edit these to update the site
- `src/app/api/spotify` — live now-playing/recently-played
- `src/app/api/letterboxd` — live diary via public RSS

## Integrations

**Spotify** needs three env vars (see `.env.example`); without them the
player renders curated fallback data. Get a refresh token with:

```bash
node scripts/get-spotify-token.mjs
```

**Letterboxd** needs nothing — it reads the public RSS feed
(`LETTERBOXD_USER` overrides the account).

## Adding gallery images

Drop a file into `public/gallery/` and register it in
`src/data/galleryItems.ts` — full template in the comment at the top of
that file.
