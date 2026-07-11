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
  /** CSS gradient placeholder, only used when `image` is absent */
  gradient?: string;
  /** aspect ratio of the carousel card, e.g. "3/4" */
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
        ratio: "3/4",                         // card shape: "3/4" portrait,
      },                                      // "1/1" square, "16/10" wide

   3. That's it — filters, hover captions, and layout pick it up
      automatically. Once `image` is set the gradient placeholder
      is replaced by the photo with a dark scrim for readability.
──────────────────────────────────────────────────────────────── */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "end-of-evangelion",
    title: "THE END OF EVANGELION",
    category: "anime",
    image: "/gallery/end-of-evangelion.jpg",
    alt: "End of Evangelion poster art — Shinji and Asuka on the LCL shore under giant Rei",
    caption: "The frame that rewired my taste. Half this site's color palette starts here.",
    moods: ["EVA", "GAINAX", "LCL"],
    ratio: "2/3",
  },
  {
    id: "terminal-dogma",
    title: "TERMINAL DOGMA",
    category: "anime",
    image: "/gallery/terminal-dogma.jpg",
    alt: "Green cross-shaped explosions over a red sea from End of Evangelion",
    caption: "Green crosses over a red sea — nobody frames an apocalypse like Evangelion.",
    moods: ["EVA", "CROSSES", "RED SKY"],
    ratio: "9/16",
  },
  {
    id: "bleach-spread",
    title: "SOUL SOCIETY ARCHIVE",
    category: "anime",
    image: "/gallery/bleach-spread.jpg",
    alt: "Bleach color spread of Ichigo, Renji, and crew on subway stairs",
    caption: "Kubo's fits go harder than most lookbooks. Manga panels as street style.",
    moods: ["BLEACH", "KUBO", "DRIP"],
    ratio: "1/1",
  },
  {
    id: "pluto-gesicht",
    title: "PLUTO — GESICHT",
    category: "anime",
    image: "/gallery/pluto-gesicht.jpg",
    alt: "Gesicht from Pluto by Naoki Urasawa",
    caption: "Urasawa's robot noir. The bar for slow, deliberate storytelling.",
    moods: ["PLUTO", "URASAWA", "NOIR"],
    ratio: "1/1",
  },
  {
    id: "city-of-god",
    title: "CITY OF GOD (2002)",
    category: "film",
    image: "/gallery/city-of-god.jpg",
    alt: "City of God movie poster",
    caption: "Incredible pacing, incredible storytelling. 4.5★ on the diary.",
    moods: ["MEIRELLES", "35MM", "CANNES"],
    ratio: "2/3",
  },
  {
    id: "scott-and-ramona",
    title: "SCOTT & RAMONA",
    category: "film",
    image: "/gallery/scott-and-ramona.jpg",
    alt: "Scott Pilgrim and Ramona Flowers at a party",
    caption: "5★ every rewatch. Toronto canon — Lee's Palace pilgrimage pending.",
    moods: ["SCOTT PILGRIM", "TORONTO", "RAMONA"],
    ratio: "9/16",
  },
  {
    id: "scott-pilgrim-poster",
    title: "VS. THE WORLD",
    category: "design",
    image: "/gallery/scott-pilgrim-poster.jpg",
    alt: "Textless Scott Pilgrim poster — Scott playing bass on a red background",
    caption: "Textless poster perfection. One color, one bass, all attitude.",
    moods: ["POSTER", "SEX BOB-OMB", "RED"],
    ratio: "9/16",
  },
  {
    id: "lampard-munich",
    title: "MUNICH 2012",
    category: "sports",
    image: "/gallery/lampard-munich.jpg",
    alt: "Frank Lampard with a cigar and the Champions League trophy in the dressing room",
    caption: "Lampard, a cigar, and old big ears. The greatest night in blue.",
    moods: ["CFC", "UCL", "LAMPARD"],
    ratio: "3/4",
  },
  {
    id: "drogba-goggles",
    title: "DROGBA AT THE BRIDGE",
    category: "sports",
    image: "/gallery/drogba-goggles.jpg",
    alt: "Braids-era Didier Drogba in the 2007/08 Samsung mobile Chelsea kit making a goggles gesture",
    caption: "Samsung Mobile era, braids, gloves. Goggles up.",
    moods: ["CFC", "DROGBA", "07/08"],
    ratio: "9/20",
  },
  {
    id: "hazard-bowling",
    title: "HAZARD, OFF DUTY",
    category: "sports",
    image: "/gallery/hazard-bowling.jpg",
    alt: "Eden Hazard bowling in Chelsea training gear",
    caption: "Chelsea's last true no.10, cooking at the bowling alley.",
    moods: ["CFC", "HAZARD", "ARCHIVE"],
    ratio: "4/5",
  },
];
