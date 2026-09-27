export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  status?: string;
  links: { label: string; href: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: "drop-in",
    title: "Drop In",
    description:
      "Find and organize pickup sports sessions. Create a session at a map pin or venue, chat with the group, share photos and clips.",
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Mapbox"],
    status: "In development",
    links: [{ label: "GitHub", href: "https://github.com/astoncodes/SportsApp" }],
  },
  {
    id: "ashe",
    title: "ASHẸ: Lords of the Orun",
    description:
      "2D pixel-art action RPG rooted in Yoruba mythology, with three elemental combat paths and a hidden morality system. Currently building a five-room playable slice.",
    stack: ["Unity", "C#"],
    status: "In development",
    // Repo is private while in development.
    links: [],
  },
  {
    id: "maplenest",
    title: "MapleNest",
    description:
      "Student housing marketplace with search and filtering by location, price and type, plus Supabase auth and access controls.",
    stack: ["Node.js", "Express", "Supabase", "React"],
    links: [{ label: "GitHub", href: "https://github.com/astoncodes/MapleNest" }],
  },
  {
    id: "monopoly",
    title: "Monopoly Strategy Simulation",
    description: "Java engine comparing four AI strategies over 60+ simulated games.",
    stack: ["Java"],
    links: [{ label: "GitHub", href: "https://github.com/astoncodes/MonopolyStrategySim" }],
  },
];
