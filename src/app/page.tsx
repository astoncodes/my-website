import Hero from "@/components/Hero";
import AboutCaseFile from "@/components/AboutCaseFile";
import ExperienceLog from "@/components/ExperienceLog";
import ProjectArchive from "@/components/ProjectArchive";
import SkillsLoadout from "@/components/SkillsLoadout";
import ArtGallery from "@/components/ArtGallery";
import SpotifyNowPlaying from "@/components/SpotifyNowPlaying";
import RecentlyWatched from "@/components/RecentlyWatched";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import RevealManager from "@/components/RevealManager";

const TICKER = [
  "NERV-STYLE SIGNAL FEED",
  "SOUL SOCIETY ARCHIVE",
  "DIAGNOSTIC BOARD",
  "MIXTAPE INDEX",
  "CINEMA LOG",
  "MATCHDAY SIGNAL",
  "WARRIORS RUN",
  "FULL-STACK ENGINEERING",
  "DATA-HEAVY PRODUCTS",
  "CINEMATIC INTERFACES",
];

function TickerStrip() {
  return (
    <div
      className="overflow-hidden border-b py-3"
      style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {[...TICKER, ...TICKER].map((t, i) => (
          <span
            key={i}
            className="mono mr-10 whitespace-nowrap text-[0.65rem] tracking-[0.18em]"
            style={{ color: i % 3 === 0 ? "var(--blue)" : "var(--muted)" }}
          >
            {t} <span style={{ color: "var(--alert)" }}>{"//"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <RevealManager />
      <Hero />
      <TickerStrip />
      <AboutCaseFile />
      <ExperienceLog />
      <ProjectArchive />
      <SkillsLoadout />
      <ArtGallery />

      {/* Live media feed — Spotify + Letterboxd */}
      <section id="signal" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <SectionDivider index="SEC. 06 — SIGNAL FEED" title="Music &" solid="Film" />
        <div className="grid gap-6 lg:grid-cols-2">
          <SpotifyNowPlaying />
          <RecentlyWatched />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
