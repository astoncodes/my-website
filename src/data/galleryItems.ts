export type GalleryCategory = "anime" | "music" | "film" | "sports" | "design" | "personal";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  /**
   * Optional local image, e.g. "/gallery/eva-terminal.jpg".
   * Drop files into /public/gallery and set the path here.
   * When absent, the card renders a typographic/gradient placeholder.
   */
  image?: string;
  alt?: string;
  caption: string;
  link?: string;
  moods: string[];
  /** CSS gradient used while no image exists */
  gradient: string;
  /** aspect ratio for the masonry card, e.g. "3/4" */
  ratio: string;
};

/* ─────────────────────────────────────────────────────────────
   HOW TO ADD YOUR OWN IMAGES
   1. Drop the file into  public/gallery/   (jpg/png/webp all fine)
      e.g.  public/gallery/eva-unit01.jpg
   2. Add an entry below (or set `image` + `alt` on an existing one):

      {
        id: "eva-unit01",                     // unique slug
        title: "UNIT-01 BERSERK",             // big label on the card
        category: "anime",                    // anime | music | film | sports | design | personal
        image: "/gallery/eva-unit01.jpg",     // path relative to /public
        alt: "Evangelion Unit-01 poster",     // describes the image (accessibility)
        caption: "Why the site glows purple.",// revealed on hover
        link: "https://...",                  // optional — card becomes a link
        moods: ["EVA", "PURPLE", "BERSERK"],  // hover tags
        gradient: "",                         // ignored once image is set
        ratio: "3/4",                         // card shape: "3/4" portrait,
      },                                      // "1/1" square, "16/10" wide

   3. That's it — filters, hover captions, and layout pick it up
      automatically. Once `image` is set the gradient placeholder
      is replaced by the photo with a dark scrim for readability.
──────────────────────────────────────────────────────────────── */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "nerv-feed",
    title: "NERV-STYLE SIGNAL FEED",
    category: "anime",
    caption: "Terminal dogma energy — the interface language half this site is built on.",
    moods: ["EVA", "HUD", "TERMINAL"],
    gradient: "linear-gradient(160deg, #1a0b2e 0%, #08080b 60%, #2d1b4e 100%)",
    ratio: "3/4",
  },
  {
    id: "soul-society",
    title: "SOUL SOCIETY ARCHIVE",
    category: "anime",
    caption: "Bleach — bankai reveals and title cards that go harder than most film posters.",
    moods: ["BLEACH", "INK", "BLADE"],
    gradient: "linear-gradient(200deg, #0c0c11 0%, #26140a 100%)",
    ratio: "4/5",
  },
  {
    id: "pluto-file",
    title: "PLUTO — CASE 001",
    category: "anime",
    caption: "Urasawa's robot noir. The bar for slow, deliberate storytelling.",
    moods: ["NOIR", "ROBOTS", "URASAWA"],
    gradient: "linear-gradient(180deg, #0d1520 0%, #08080b 100%)",
    ratio: "1/1",
  },
  {
    id: "mixtape-index",
    title: "MIXTAPE INDEX VOL. 1",
    category: "music",
    caption: "Underground rap & R&B rotation — poster-grade cover art only.",
    moods: ["RAP", "R&B", "ANALOG"],
    gradient: "linear-gradient(135deg, #2b1508 0%, #08080b 55%, #3d2510 100%)",
    ratio: "1/1",
  },
  {
    id: "cinema-log",
    title: "CINEMA LOG — 35MM",
    category: "film",
    caption: "90s film grain, archive prints, and everything logged on Letterboxd.",
    moods: ["GRAIN", "ARCHIVE", "90s"],
    gradient: "linear-gradient(180deg, #1f1a10 0%, #08080b 70%)",
    ratio: "16/10",
  },
  {
    id: "arrakis-study",
    title: "ARRAKIS GRAIN STUDY",
    category: "film",
    caption: "Dune-scale frames — warm sand tones against hard machinery.",
    moods: ["SCALE", "WARM", "EPIC"],
    gradient: "linear-gradient(170deg, #33200c 0%, #0c0c11 65%)",
    ratio: "21/12",
  },
  {
    id: "vs-the-world",
    title: "VS. THE WORLD",
    category: "design",
    caption: "Scott Pilgrim panels — playful graphic violence, Toronto canon.",
    moods: ["PANELS", "POP", "TORONTO"],
    gradient: "linear-gradient(145deg, #0b1f3a 0%, #08080b 50%, #2d0b3a 100%)",
    ratio: "3/4",
  },
  {
    id: "matchday-signal",
    title: "MATCHDAY SIGNAL",
    category: "sports",
    caption: "Chelsea FC — the blue that picked this site's accent color.",
    moods: ["CFC", "BLUE", "STAMFORD BRIDGE"],
    gradient: "linear-gradient(180deg, #034694 0%, #08080b 85%)",
    ratio: "4/5",
  },
  {
    id: "warriors-run",
    title: "WARRIORS RUN",
    category: "sports",
    caption: "Golden State — motion offense as system design.",
    moods: ["GSW", "GOLD", "MOTION"],
    gradient: "linear-gradient(160deg, #1d3a8f 0%, #08080b 55%, #4d3a08 100%)",
    ratio: "1/1",
  },
  {
    id: "diagnostic-board",
    title: "DIAGNOSTIC BOARD",
    category: "design",
    caption: "House MD case boards — differential diagnosis as a debugging method.",
    moods: ["CASE FILE", "WHITEBOARD", "DEBUG"],
    gradient: "linear-gradient(190deg, #101820 0%, #08080b 80%)",
    ratio: "16/10",
  },
  {
    id: "toronto-signal",
    title: "TORONTO SIGNAL",
    category: "personal",
    caption: "Home base. Skyline static and streetcar hum.",
    moods: ["HOME", "6IX", "NIGHT"],
    gradient: "linear-gradient(180deg, #0b1420 0%, #08080b 75%)",
    ratio: "3/4",
  },
  {
    id: "orun-concept",
    title: "ORUN CONCEPT SHEET",
    category: "design",
    caption: "Early visual language for ASHẸ — Yoruba mythology as game UI.",
    moods: ["ASHẸ", "MYTH", "CONCEPT"],
    gradient: "linear-gradient(150deg, #2d1b4e 0%, #08080b 55%, #26140a 100%)",
    ratio: "4/5",
  },
];
