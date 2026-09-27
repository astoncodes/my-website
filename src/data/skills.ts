// Mirrors the resume's Technical Skills section.
export const SKILL_GROUPS: { label: string; skills: string[] }[] = [
  {
    label: "Languages",
    skills: ["Java", "Python", "C++", "C#", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    label: "Frameworks & libraries",
    skills: [
      "React", "Next.js", "Node.js", "Express", "Flask", "Redux Toolkit",
      "Spring Boot", "SQLAlchemy", "Marshmallow",
    ],
  },
  {
    label: "Databases & cloud",
    skills: [
      "Google BigQuery", "PostgreSQL", "MongoDB", "Redis", "Supabase", "AWS",
      "Google Cloud Platform",
    ],
  },
  {
    label: "Tools & infrastructure",
    skills: [
      "Git", "GitHub Actions", "Docker", "Linux", "JFrog Artifactory", "HashiCorp Vault",
      "Microsoft Entra ID", "OAuth 2.0/OIDC", "Postman", "JUnit", "Unity", "Drupal",
    ],
  },
];

export const EDUCATION = {
  school: "University of Prince Edward Island",
  degree: "B.Sc. Computer Science, Minor in Economics",
  dates: "Expected May 2027",
  coursework: [
    "Data Structures and Algorithms",
    "Software Engineering",
    "Operating Systems",
    "System Design",
    "Machine Learning",
  ],
  certifications: ["Google Cloud Fundamentals"],
};
