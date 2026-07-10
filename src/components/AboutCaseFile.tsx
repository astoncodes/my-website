import SectionDivider from "@/components/SectionDivider";

const FILE_ROWS = [
  { k: "SUBJECT", v: "DANIEL OLUWATOSIN" },
  { k: "FIELD", v: "SOFTWARE ENGINEERING" },
  { k: "BASE", v: "TORONTO, ON" },
  { k: "EDUCATION", v: "B.S. COMPUTER SCIENCE · MINOR IN ECONOMICS — UPEI, EXP. MAY 2027" },
  { k: "INTERESTS", v: "SYSTEMS, MUSIC, ANIME, FILM, SPORTS" },
  { k: "CERTS", v: "GOOGLE CLOUD FUNDAMENTALS · GOOGLE UX DESIGN" },
  { k: "CLEARANCE", v: "OPEN TO OPPORTUNITIES" },
];

export default function AboutCaseFile() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionDivider index="SEC. 01 — PERSONNEL FILE" title="About" solid="Me" />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Case file table */}
        <div className="dossier reveal lg:col-span-2">
          <div className="dossier-glow" />
          <div className="flex items-center justify-between border-b px-5 py-3" style={{ borderColor: "var(--line)" }}>
            <span className="hud-label">CASE FILE // 001</span>
            <span className="chip chip--toxic">ACTIVE</span>
          </div>
          <dl className="px-5 py-4">
            {FILE_ROWS.map((row) => (
              <div key={row.k} className="grid grid-cols-[92px_1fr] gap-3 border-b py-3 last:border-b-0" style={{ borderColor: "var(--line)" }}>
                <dt className="hud-label pt-0.5">{row.k}</dt>
                <dd className="mono text-[0.78rem] leading-relaxed" style={{ color: "var(--text)" }}>
                  {row.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Narrative */}
        <div className="reveal flex flex-col justify-center gap-6 lg:col-span-3">
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-2)" }}>
            I&apos;m a software engineer and computer science student building
            full-stack products, data platforms, and game systems. My work sits
            between clean engineering and strong taste — dashboards, APIs, auth
            flows, student housing tools, simulation engines, and
            mythology-driven games.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--text-2)" }}>
            Right now that means fund analytics at{" "}
            <span style={{ color: "var(--text)" }}>Mackenzie Investments</span>,
            TA&apos;ing data structures and algorithms at UPEI, and shipping side
            projects that borrow more from cinema and anime title cards than from
            SaaS landing pages. The rest of the signal — what I&apos;m watching
            and running on repeat — is further down the page.
          </p>
          <div className="flex flex-wrap gap-2">
            {["FULL-STACK", "DATA PLATFORMS", "GAME SYSTEMS", "CINEMATIC UI"].map((t) => (
              <span key={t} className="chip chip--blue">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
