export type Project = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  signal: string;
  tone: "blue" | "purple" | "toxic" | "alert";
  stack: string[];
  summary: string;
  // Case-file modal content
  problem: string;
  build: string;
  outcome: string;
  links: { label: string; href: string }[];
  /** visual treatment of the archive card */
  variant: "standard" | "mythic" | "strategy";
};

export const PROJECTS: Project[] = [
  {
    id: "ashe",
    index: "FILE 001",
    title: "ASHẸ: Lords of the Orun",
    tagline: "Mobile action-RPG rooted in Yoruba mythology",
    signal: "GAME SYSTEMS",
    tone: "purple",
    stack: ["Unity", "C#"],
    summary:
      "Mobile action-RPG in development — four elemental combat paths through a 50-stage progression map, with a morality system driving eight endings.",
    problem:
      "Most mythology-driven games pull from the same few pantheons. ASHẸ builds an action-RPG around Yoruba cosmology — the Orishas, the Orun — with combat and moral choice as the storytelling engine.",
    build:
      "Solo-building in Unity with C#: core gameplay systems including combat, movement, map progression, loot, and bosses, plus a morality system tracking choices across a run.",
    outcome:
      "In active development: four elemental combat paths, a 50-stage progression map, and eight distinct endings driven by the morality system.",
    // Repo stays private while in development — swap in the real link when it goes public.
    links: [{ label: "GitHub Profile", href: "https://github.com/astoncodes" }],
    variant: "mythic",
  },
  {
    id: "maplenest",
    index: "FILE 002",
    title: "MapleNest",
    tagline: "Full-stack student rental housing platform",
    signal: "FULL-STACK",
    tone: "blue",
    stack: ["Node.js", "Express", "MongoDB", "React", "Tailwind"],
    summary:
      "Housing-aggregation platform for student rentals across Canada — filtered search by location, price, and type, deployed to production.",
    problem:
      "Students hunting for rentals end up crawling Facebook groups and stale listing sites. MapleNest aggregates student housing across Canada into one searchable, filterable place.",
    build:
      "React + Tailwind frontend over an Express REST API. Designed a MongoDB schema optimized for fast filtered search across location, price, and property type.",
    outcome:
      "Deployed to production with 50+ live listings and a working end-to-end search flow.",
    links: [{ label: "View on GitHub", href: "https://github.com/astoncodes/MapleNest" }],
    variant: "standard",
  },
  {
    id: "monopoly",
    index: "FILE 003",
    title: "Monopoly Strategy Simulation",
    tagline: "Java simulation engine for strategy benchmarking",
    signal: "SIMULATION",
    tone: "toxic",
    stack: ["Java", "OOP", "Statistics"],
    summary:
      "Simulation engine modelling financial transactions and asset management, benchmarking four AI strategies across 60+ full-game simulations.",
    problem:
      "Which Monopoly strategy actually wins over the long run? Intuition is cheap — the question needs a backtesting engine.",
    build:
      "Java engine modelling financial transactions, asset management, and strategic decision-making across full game cycles, with four pluggable AI strategies run head-to-head.",
    outcome:
      "Benchmarked four AI strategies across 60+ simulations, applying techniques analogous to portfolio backtesting.",
    links: [
      { label: "View on GitHub", href: "https://github.com/astoncodes/MonopolyStrategySim" },
    ],
    variant: "strategy",
  },
];
