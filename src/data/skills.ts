export type SkillGroup = {
  label: string;
  code: string; // loadout slot code
  tone: "blue" | "purple" | "toxic" | "alert";
  skills: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Languages",
    code: "SLOT 01",
    tone: "blue",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "C++", "C#", "SQL"],
  },
  {
    label: "Frontend",
    code: "SLOT 02",
    tone: "purple",
    skills: ["React", "Next.js", "Redux Toolkit", "RTK Query", "Tailwind", "MUI", "Highcharts", "Vite"],
  },
  {
    label: "Backend",
    code: "SLOT 03",
    tone: "toxic",
    skills: ["Node.js", "Express", "Flask", "SQLAlchemy", "Spring Boot", "REST APIs", "Marshmallow"],
  },
  {
    label: "Data / Cloud",
    code: "SLOT 04",
    tone: "blue",
    skills: ["BigQuery", "PostgreSQL", "MongoDB", "Redis", "GCP", "AWS"],
  },
  {
    label: "DevOps / Security",
    code: "SLOT 05",
    tone: "alert",
    skills: ["Docker", "GitHub Actions", "OAuth2 / OIDC", "Entra ID", "HashiCorp Vault", "JFrog Artifactory"],
  },
  {
    label: "Testing / Tooling",
    code: "SLOT 06",
    tone: "purple",
    skills: ["pytest", "JUnit", "SonarQube", "Xray Scanning", "Git", "Unity"],
  },
];
