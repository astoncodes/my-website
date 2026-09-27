// Mirrors the resume (Aug 2026 version). Keep bullets short; the PDF has the detail.
export type Experience = {
  id: string;
  role: string;
  company: string;
  dates: string;
  bullets: string[];
  /** Shown under the bullets, like the project stack lines. */
  stack?: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: "mackenzie",
    role: "Software Engineer Intern",
    company: "Mackenzie Investments (IGM Financial)",
    dates: "May – Aug 2026",
    bullets: [
      "Built an analytics hub for the Product Department, giving investment teams one place to explore fund data instead of scattered reports",
      "Built two modules: Fund Health (performance and hit rates) and Brinson Attribution (allocation and selection effects)",
      "Data layer with SQLAlchemy and Marshmallow on a 23-table BigQuery warehouse, serving live data for 91 funds",
      "Vault-managed credentials and Entra ID single sign-on with role-based access, backed by 89 automated tests",
      "Automated artifact publishing and security scanning with GitHub Actions and JFrog Artifactory, and worked with the infrastructure team on the GCP deployment",
    ],
    stack: [
      "Flask", "React", "TypeScript", "Vite", "Redux Toolkit", "RTK Query", "Google BigQuery",
      "SQLAlchemy", "Marshmallow", "HashiCorp Vault", "Microsoft Entra ID", "GitHub Actions",
      "JFrog Artifactory", "GCP",
    ],
  },
  {
    id: "upei-ta",
    role: "Teaching Assistant",
    company: "University of Prince Edward Island",
    dates: "Sep 2025 – Apr 2026",
    bullets: ["Mentored 40+ students in Java, Python and C++ labs"],
  },
  {
    id: "bceln",
    role: "Software Engineer Intern",
    company: "British Columbia Electronic Library Network",
    dates: "Jan – Apr 2025",
    bullets: [
      "Integrated external REST APIs to pull Traditional Knowledge (TK) Labels into Islandora-based repositories",
      "Debugged and fixed production issues in a Drupal application",
    ],
  },
];
