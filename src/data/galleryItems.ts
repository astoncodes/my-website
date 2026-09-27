import type { StaticImageData } from "next/image";
import endOfEvangelion from "../../public/gallery/end-of-evangelion.jpg";
import terminalDogma from "../../public/gallery/terminal-dogma.jpg";
import bleachSpread from "../../public/gallery/bleach-spread.jpg";
import plutoGesicht from "../../public/gallery/pluto-gesicht.jpg";
import cityOfGod from "../../public/gallery/city-of-god.jpg";
import scottAndRamona from "../../public/gallery/scott-and-ramona.jpg";
import scottPilgrimPoster from "../../public/gallery/scott-pilgrim-poster.jpg";
import lampardMunich from "../../public/gallery/lampard-munich.jpg";
import drogbaGoggles from "../../public/gallery/drogba-goggles.jpg";
import hazardBowling from "../../public/gallery/hazard-bowling.jpg";

export type GalleryItem = {
  id: string;
  image: StaticImageData;
  alt: string;
  title: string;
  /** Year or creator, shown after the title. */
  detail?: string;
  /** Which hero column the image rotates through. */
  lane: "anime" | "film" | "football";
  /** CSS object-position for the narrow hero columns (keeps the subject in frame). */
  focus?: string;
};

/*
  To add an image: drop it in public/gallery/, import it above, and add an
  entry below. Width, height and the blur placeholder come from the import.
*/
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "end-of-evangelion",
    image: endOfEvangelion,
    lane: "anime",
    alt: "End of Evangelion poster art: Shinji and Asuka on the shore under a giant Rei",
    title: "The End of Evangelion",
    detail: "1997",
    focus: "50% 70%",
  },
  {
    id: "city-of-god",
    image: cityOfGod,
    lane: "film",
    alt: "City of God movie poster",
    title: "City of God",
    detail: "2002",
    focus: "50% 45%",
  },
  {
    id: "drogba-goggles",
    image: drogbaGoggles,
    lane: "football",
    alt: "Didier Drogba in the 2007/08 Chelsea kit making a goggles gesture",
    title: "Didier Drogba",
    detail: "2007–08",
    focus: "50% 22%",
  },
  {
    id: "terminal-dogma",
    image: terminalDogma,
    lane: "anime",
    focus: "85% 30%",
    alt: "Green cross-shaped explosions over a red sea, from The End of Evangelion",
    title: "The End of Evangelion",
    detail: "1997",
  },
  {
    id: "bleach-spread",
    image: bleachSpread,
    lane: "anime",
    focus: "89% 50%",
    alt: "Bleach colour spread of Ichigo, Renji and others on subway stairs",
    title: "Bleach",
    detail: "Tite Kubo",
  },
  {
    id: "pluto-gesicht",
    image: plutoGesicht,
    lane: "anime",
    focus: "50% 50%",
    alt: "Gesicht from Pluto by Naoki Urasawa",
    title: "Pluto",
    detail: "Naoki Urasawa",
  },
  {
    id: "scott-and-ramona",
    image: scottAndRamona,
    lane: "film",
    focus: "85% 55%",
    alt: "Scott Pilgrim and Ramona Flowers at a party",
    title: "Scott Pilgrim vs. the World",
    detail: "2010",
  },
  {
    id: "scott-pilgrim-poster",
    image: scottPilgrimPoster,
    lane: "film",
    focus: "70% 45%",
    alt: "Textless Scott Pilgrim poster: Scott playing bass on a red background",
    title: "Scott Pilgrim vs. the World",
    detail: "Poster",
  },
  {
    id: "lampard-munich",
    image: lampardMunich,
    lane: "football",
    focus: "28% 40%",
    alt: "Frank Lampard with a cigar and the Champions League trophy in the dressing room",
    title: "Frank Lampard, Munich",
    detail: "2012",
  },
  {
    id: "hazard-bowling",
    image: hazardBowling,
    lane: "football",
    focus: "50% 50%",
    alt: "Eden Hazard bowling in Chelsea training gear",
    title: "Eden Hazard",
  },
];

// Hero columns, left to right. Each starts on its first image and rotates
// through the rest; the gallery section shows everything that isn't a starting image.
export const HERO_LANES = (["anime", "film", "football"] as const).map((lane) =>
  GALLERY_ITEMS.filter((i) => i.lane === lane)
);
export const WALL_ITEMS = GALLERY_ITEMS.filter((i) => !HERO_LANES.some((lane) => lane[0] === i));
