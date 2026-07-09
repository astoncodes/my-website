export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  signal: string; // case-file label, e.g. DATA PLATFORM
  signalTone: "blue" | "purple" | "toxic" | "alert";
  stack: string[];
  bullets: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: "mackenzie",
    role: "Software Engineer Intern",
    company: "Mackenzie Investments (IGM Financial) — Product Department",
    location: "Toronto, ON",
    dates: "May 2026 — Aug 2026",
    signal: "DATA PLATFORM",
    signalTone: "blue",
    stack: [
      "Flask 3", "React 18", "TypeScript", "Vite", "BigQuery",
      "SQLAlchemy 2", "Redux Toolkit", "RTK Query", "Entra ID", "Vault",
    ],
    bullets: [
      "Built a full-stack fund-analytics platform (Flask 3, React 18, TypeScript, Vite) over a 23-table Google BigQuery warehouse, designed as a reusable foundation for future investment-product tools such as Brinson performance attribution.",
      "Shipped a Product Health dashboard surfacing fund performance, hit rates, and peer-ranking trends for 91 live funds, with Redux Toolkit and RTK Query as the single source of truth and URL-synced filters for shareable, cached views.",
      "Designed the BigQuery data layer with SQLAlchemy 2 and Marshmallow, exposing REST endpoints behind a single typed {data, asOfDate} contract and serving all 91 funds end to end from production.",
      "Hardened security by sourcing the BigQuery service-account key from HashiCorp Vault (AppRole, KV v2) and adding Microsoft Entra ID (OIDC/MSAL) SSO with group-based access control behind a fail-closed auth layer — 89 passing tests.",
      "Defined the CI/CD pipeline publishing two lockstep-versioned artifacts (npm bundle and Python wheel) to JFrog Artifactory through GitHub Actions with OIDC and Xray security scanning.",
    ],
  },
  {
    id: "upei-ta",
    role: "Teaching Assistant",
    company: "University of Prince Edward Island",
    location: "Charlottetown, PE",
    dates: "Sept 2025 — Present",
    signal: "TEACHING",
    signalTone: "toxic",
    stack: ["Java", "Python", "C++", "Data Structures", "Algorithms"],
    bullets: [
      "Guide students through data structures, algorithms, and core programming in Java, Python, and C++.",
      "Support debugging and algorithmic problem-solving in labs and office hours, helping students strengthen their approach.",
      "Evaluate assignments with structured feedback and work with faculty to close common learning gaps.",
    ],
  },
  {
    id: "bceln",
    role: "Software Engineer Intern",
    company: "British Columbia Electronic Library Network",
    location: "British Columbia",
    dates: "Jan 2025 — Apr 2025",
    signal: "API",
    signalTone: "purple",
    stack: ["Drupal", "PHP", "REST APIs", "Unit Testing", "Agile"],
    bullets: [
      "Integrated the external TK Labels REST API into production Drupal applications, mapping metadata schemas and improving interoperability across digital-library systems.",
      "Investigated production issues and shipped fixes across data-driven applications in an Agile team, adding unit tests and iterative improvements to a Drupal platform.",
    ],
  },
];
