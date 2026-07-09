/**
 * Mock media data — used as graceful fallback when the Spotify /
 * Letterboxd APIs are unreachable or credentials are missing.
 */

export type Track = {
  title: string;
  artist: string;
  album?: string;
  albumArt?: string; // external URL or /public path
  isPlaying?: boolean;
};

export type SpotifyPayload = {
  mock: boolean;
  nowPlaying: Track | null;
  recentlyPlayed: Track[];
};

// TODO: Replace with live data — see src/app/api/spotify/route.ts for setup.
export const SPOTIFY_MOCK: SpotifyPayload = {
  mock: true,
  nowPlaying: {
    title: "Nights",
    artist: "Frank Ocean",
    album: "Blonde",
    isPlaying: true,
  },
  recentlyPlayed: [
    { title: "Tyrone's Theme", artist: "Desmond Murray", album: "They Cloned Tyrone (OST)" },
    { title: "Rock With You", artist: "Michael Jackson", album: "Off the Wall" },
    { title: "Shirt", artist: "SZA", album: "SOS" },
    { title: "Money Trees", artist: "Kendrick Lamar", album: "good kid, m.A.A.d city" },
  ],
};

export type Film = {
  title: string;
  year: number;
  rating: number; // 0–5, halves allowed
  poster?: string;
  watchedDate: string; // ISO date
  reviewLink?: string;
  rewatch?: boolean;
};

export type LetterboxdPayload = {
  mock: boolean;
  films: Film[];
};

// Snapshot of the real Letterboxd diary (letterboxd.com/wa4tchingm0vies)
// used as fallback when the live RSS fetch fails.
export const LETTERBOXD_MOCK: LetterboxdPayload = {
  mock: true,
  films: [
    {
      title: "Transformers",
      year: 2007,
      rating: 5,
      poster: "https://a.ltrbxd.com/resized/sm/upload/5z/cu/ki/sx/transformers-0-600-0-900-crop.jpg?v=983540ffc0",
      watchedDate: "2026-06-30",
      reviewLink: "https://letterboxd.com/wa4tchingm0vies/film/transformers/",
      rewatch: true,
    },
    {
      title: "They Cloned Tyrone",
      year: 2023,
      rating: 4,
      poster: "https://a.ltrbxd.com/resized/film-poster/6/5/8/9/0/6/658906-they-cloned-tyrone-0-600-0-900-crop.jpg?v=afe533ab4e",
      watchedDate: "2026-06-28",
      reviewLink: "https://letterboxd.com/wa4tchingm0vies/film/they-cloned-tyrone/",
      rewatch: true,
    },
    {
      title: "Beasts of No Nation",
      year: 2015,
      rating: 5,
      poster: "https://a.ltrbxd.com/resized/film-poster/2/0/8/8/8/5/208885-beasts-of-no-nation-0-600-0-900-crop.jpg?v=3e873c30a8",
      watchedDate: "2026-06-25",
      reviewLink: "https://letterboxd.com/wa4tchingm0vies/film/beasts-of-no-nation/",
    },
    {
      title: "City of God",
      year: 2002,
      rating: 4.5,
      poster: "https://a.ltrbxd.com/resized/film-poster/5/1/5/2/3/51523-city-of-god-0-600-0-900-crop.jpg?v=7517ea94ce",
      watchedDate: "2026-05-22",
      reviewLink: "https://letterboxd.com/wa4tchingm0vies/film/city-of-god/",
    },
    {
      title: "Scott Pilgrim vs. the World",
      year: 2010,
      rating: 5,
      poster: "https://a.ltrbxd.com/resized/sm/upload/vs/75/02/fx/2B5zjs5E3xerqAyowpw3QcOCyLq-0-600-0-900-crop.jpg?v=3aef2095df",
      watchedDate: "2026-05-03",
      reviewLink: "https://letterboxd.com/wa4tchingm0vies/film/scott-pilgrim-vs-the-world/",
      rewatch: true,
    },
    {
      title: "Project Hail Mary",
      year: 2026,
      rating: 5,
      poster: "https://a.ltrbxd.com/resized/film-poster/6/1/1/2/8/8/611288-project-hail-mary-0-600-0-900-crop.jpg?v=ac31b6ec03",
      watchedDate: "2026-04-04",
      reviewLink: "https://letterboxd.com/wa4tchingm0vies/film/project-hail-mary/",
    },
  ],
};
