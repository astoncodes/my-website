"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ContactForm from "@/components/ContactForm";
import {
  siPython, siCplusplus, siJavascript, siPostgresql, siMongodb,
  siNodedotjs, siNextdotjs, siSpring, siGit, siDocker,
} from "simple-icons";

/* ─────────────────────────────────────────────
   Reveal-on-scroll hook
───────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─────────────────────────────────────────────
   Tech Badge
───────────────────────────────────────────── */
function TechBadge({ icon, label }: { icon: { hex: string; path: string }; label: string }) {
  return (
    <div className="tech-badge" title={label} aria-label={label}>
      <svg viewBox="0 0 24 24" width={16} height={16} style={{ color: `#${icon.hex}`, flexShrink: 0 }} aria-hidden="true">
        <path d={icon.path} fill="currentColor" />
      </svg>
      <span>{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Animated counter
───────────────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let start = 0;
      const step = () => {
        start += Math.ceil(to / 40);
        if (start >= to) { setVal(to); return; }
        setVal(start);
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function Home() {
  useReveal();

  const LANGUAGES = [
    { icon: siPython,     label: "Python"            },
    { icon: siCplusplus,  label: "C++"               },
    { icon: siJavascript, label: "JavaScript"         },
    { icon: siPostgresql, label: "SQL (PostgreSQL)"   },
    { icon: siMongodb,    label: "NoSQL (MongoDB)"    },
  ];
  const TOOLS = [
    { icon: siNextdotjs, label: "Next.js"  },
    { icon: siNodedotjs, label: "Node.js"  },
    { icon: siSpring,    label: "Spring"   },
    { icon: siGit,       label: "Git"      },
    { icon: siDocker,    label: "Docker"   },
  ];

  const ALL_SKILLS = [...LANGUAGES, ...TOOLS];

  return (
    <div style={{ position: "relative" }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        id="home"
        style={{ position: "relative", paddingTop: "7rem", paddingBottom: "7rem", overflow: "hidden" }}
      >
        {/* Mesh background */}
        <div className="mesh-bg" />

        <div className="mx-auto max-w-6xl px-5" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-line">
            <span className="tag">
              <span style={{ display:"inline-block", width:7, height:7, borderRadius:"50%", background:"var(--accent-lime)" }} />
              Open to opportunities
            </span>
          </div>

          <h1
            className="hero-line mt-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: "14ch",
            }}
          >
            Ayobami{" "}
            <span style={{ color: "var(--accent-lime)" }}>Daniel</span>
          </h1>

          <p
            className="hero-line mt-3"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.9rem",
              color: "var(--accent-sky)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Software Engineer · CS @ UPEI
          </p>

          <p
            className="hero-line mt-5"
            style={{ maxWidth: "52ch", color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.75 }}
          >
            I build meaningful applications that make a real impact — from
            simulation engines to real-time apps. Curious about game development
            and everything across the stack.
          </p>

          <div className="hero-line mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>

          {/* Stats */}
          <div
            className="hero-line mt-14 grid grid-cols-3 gap-6"
            style={{ maxWidth: "420px" }}
          >
            {[
              { val: 3, suffix: "+", label: "Projects shipped" },
              { val: 1,  suffix: "",  label: "Internship" },
              { val: 5,  suffix: "+", label: "Tech stacks" },
            ].map(s => (
              <div key={s.label}>
                <div className="stat-number">
                  <Counter to={s.val} suffix={s.suffix} />
                </div>
                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MARQUEE — skill strip
      ══════════════════════════════════════ */}
      <div
        style={{
          overflow: "hidden",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "14px 0",
          background: "var(--surface)",
        }}
      >
        <div className="marquee-track">
          {[...ALL_SKILLS, ...ALL_SKILLS].map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginRight: 36,
                color: "var(--text-muted)",
                fontSize: "0.8rem",
                fontFamily: "var(--font-mono)",
                whiteSpace: "nowrap",
              }}
            >
              <svg viewBox="0 0 24 24" width={14} height={14} style={{ color: `#${s.icon.hex}` }} aria-hidden="true">
                <path d={s.icon.path} fill="currentColor" />
              </svg>
              {s.label}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          ABOUT
      ══════════════════════════════════════ */}
      <section id="about" style={{ borderTop: "1px solid var(--border)", padding: "6rem 0" }}>
        <div className="mx-auto max-w-6xl px-5">
          {/* Header */}
          <div className="reveal mb-12">
            <p className="tag mb-3">About me</p>
            <h2 className="section-heading">More than just code.</h2>
            <span className="glow-line mt-4" style={{ width: 56 }} />
          </div>

          {/* Bio */}
          <div className="reveal mb-14" style={{ maxWidth: "62ch" }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "1.05rem" }}>
              I'm a Computer Science major at the{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>University of Prince Edward Island</span>,
              minoring in Economics, set to graduate in{" "}
              <span style={{ color: "var(--accent-lime)", fontWeight: 500 }}>May 2027</span>.
              I'm especially curious about game development, emerging technologies, and how software
              can genuinely change how people experience the world.
            </p>
          </div>

          {/* Hobby cards */}
          <div className="reveal">
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1.2rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              What drives me outside the terminal
            </p>
            <div className="grid gap-5 sm:grid-cols-3">

              <div className="hobby-card reveal" data-accent="lime">
                <span className="hobby-icon">🎮</span>
                <p className="hobby-title">Gaming</p>
                <p className="hobby-body">
                  Gaming is where my love for interactive design was born.
                  Exploring richly crafted worlds and tight game mechanics constantly
                  fuels my creativity and inspires the interfaces I build.
                  It's also what first got me excited about game development as a craft.
                </p>
              </div>

              <div className="hobby-card reveal" data-accent="sky">
                <span className="hobby-icon">🏀</span>
                <p className="hobby-title">Basketball</p>
                <p className="hobby-body">
                  The court has taught me more about collaboration and resilience
                  than any classroom. Reading the game, trusting teammates, and
                  adapting on the fly — these translate directly into how I
                  approach building software with a team.
                </p>
              </div>

              <div className="hobby-card reveal" data-accent="orange">
                <span className="hobby-icon">🏊</span>
                <p className="hobby-title">Swimming</p>
                <p className="hobby-body">
                  Lap after lap, swimming teaches discipline and a clear head.
                  The rhythm of the water helps me decompress, reset, and come back
                  to hard problems with sharper focus. Some of my best debugging
                  happens right after a good swim.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          RESUME
      ══════════════════════════════════════ */}
      <section id="resume" style={{ borderTop: "1px solid var(--border)", padding: "6rem 0" }}>
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal mb-12">
            <p className="tag mb-3">Background</p>
            <h2 className="section-heading">Resume</h2>
            <span className="glow-line mt-4" style={{ width: 56 }} />
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left — Education + Certs + Download */}
            <div>
              {/* Education */}
              <div className="reveal mb-10">
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "1rem" }}>
                  Education
                </h3>
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    padding: "20px 22px",
                  }}
                >
                  <p style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>
                    University of Prince Edward Island
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "var(--accent-lime)", fontFamily: "var(--font-mono)", marginBottom: 8 }}>
                    Jan 2023 – May 2027
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                    B.S. Computer Science · Minor in Economics
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div className="reveal mb-10">
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "1rem" }}>
                  Certifications
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    "Google Cloud Fundamentals",
                    "Google UX Design",
                    "AI for Professional Development",
                  ].map(cert => (
                    <div
                      key={cert}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: 12,
                        padding: "12px 16px",
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span style={{ color: "var(--accent-lime)", fontSize: "1rem" }}>✓</span>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

              {/* Download */}
              <div className="reveal">
                <a href="/Ayobami_Oluwatosin_Resume.pdf" download className="btn-primary">
                  Download Résumé (PDF)
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12" /><path d="M6 9l6 6 6-6" /><path d="M5 21h14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right — Experience timeline + Skills */}
            <div>
              {/* Experience timeline */}
              <div className="reveal mb-10">
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "1.2rem" }}>
                  Experience
                </h3>
                <div style={{ position: "relative", paddingLeft: 36 }}>
                  <div className="timeline-line" />
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div className="timeline-dot" style={{ position: "absolute", left: 0 }} />
                    <div>
                      <p style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: 2 }}>
                        Software Engineer Intern
                      </p>
                      <p style={{ fontSize: "0.8rem", color: "var(--accent-sky)", fontFamily: "var(--font-mono)", marginBottom: 8 }}>
                        BC ELN · Jan – Apr 2025
                      </p>
                      <ul style={{ fontSize: "0.87rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 6 }}>
                        {[
                          "Built a Drupal 10 module in PHP with JSON APIs to dynamically render community-specific data.",
                          "Integrated Local Contexts Hub with Islandora; fetched and displayed Traditional Knowledge Labels.",
                          "Collaborated directly with the client to deliver a production-ready, accessible module.",
                          "Translated complex technical topics into clear language for non-technical stakeholders.",
                        ].map(pt => (
                          <li key={pt} style={{ display: "flex", gap: 8 }}>
                            <span style={{ color: "var(--accent-lime)", marginTop: 2, flexShrink: 0 }}>▸</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="reveal">
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "1rem" }}>
                  Technical Skills
                </h3>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.7rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Languages & Databases
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {LANGUAGES.map(s => <TechBadge key={s.label} icon={s.icon} label={s.label} />)}
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.7rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Frameworks & Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {TOOLS.map(s => <TechBadge key={s.label} icon={s.icon} label={s.label} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROJECTS
      ══════════════════════════════════════ */}
      <section id="portfolio" style={{ borderTop: "1px solid var(--border)", padding: "6rem 0" }}>
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal mb-12">
            <p className="tag mb-3">Work</p>
            <h2 className="section-heading">Featured Projects</h2>
            <span className="glow-line mt-4" style={{ width: 56 }} />
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {/* Monopoly Strategy Simulation */}
            <div className="project-card reveal">
              <a
                href="https://github.com/astoncodes/MonopolyStrategySim"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                aria-label="Monopoly Strategy Simulation on GitHub"
              >
                <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--surface-2)", overflow: "hidden" }}>
                  <Image
                    src="/monopoly.jpeg"
                    alt="Monopoly Strategy Simulation"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={90}
                    sizes="(min-width:1024px) 560px,(min-width:768px) 50vw,100vw"
                    priority
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,9,16,0.7) 0%, transparent 60%)" }} />
                  <div
                    style={{
                      position: "absolute", top: 14, right: 14,
                      background: "rgba(8,9,16,0.8)",
                      border: "1px solid var(--border-bright)",
                      borderRadius: 8,
                      padding: "4px 10px",
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-lime)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    Java · Simulation
                  </div>
                </div>
              </a>
              <div style={{ padding: "22px 24px 24px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: 8 }}>
                  Monopoly Strategy Simulation
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>
                  Java simulation engine with AI-driven strategies. Ran 60+ simulations and applied
                  statistical analysis to evaluate long-term outcomes — similar to portfolio backtesting.
                </p>
                <a
                  href="https://github.com/astoncodes/MonopolyStrategySim"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.83rem", color: "var(--accent-lime)", fontWeight: 500 }}
                  className="hover:underline underline-offset-4"
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* Particle Simulator */}
            <div className="project-card reveal">
              <a
                href="https://github.com/astoncodes/ParticleStimulator"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                aria-label="Particle Simulator on GitHub"
              >
                <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--surface-2)", overflow: "hidden" }}>
                  <Image
                    src="/partpartd.png"
                    alt="Particle Simulator"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    quality={90}
                    sizes="(min-width:1024px) 560px,(min-width:768px) 50vw,100vw"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,9,16,0.7) 0%, transparent 60%)" }} />
                  <div
                    style={{
                      position: "absolute", top: 14, right: 14,
                      background: "rgba(8,9,16,0.8)",
                      border: "1px solid var(--border-bright)",
                      borderRadius: 8,
                      padding: "4px 10px",
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-sky)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    JavaFX · Physics
                  </div>
                </div>
              </a>
              <div style={{ padding: "22px 24px 24px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: 8 }}>
                  Particle Simulator
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>
                  Interactive JavaFX physics simulation with 9 unique particle types (sand, water, fire,
                  acid, etc.). Modular OOP design makes it easy to extend without breaking the core system.
                </p>
                <a
                  href="https://github.com/astoncodes/ParticleStimulator"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.83rem", color: "var(--accent-lime)", fontWeight: 500 }}
                  className="hover:underline underline-offset-4"
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* UNBORED */}
            <div className="project-card reveal">
              <a
                href="https://github.com/astoncodes/UnBored"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                aria-label="UNBORED on GitHub"
              >
                <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--surface-2)", overflow: "hidden" }}>
                  <Image
                    src="/messaging.png"
                    alt="UNBORED Messaging App"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    quality={90}
                    sizes="(min-width:1024px) 560px,(min-width:768px) 50vw,100vw"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,9,16,0.7) 0%, transparent 60%)" }} />
                  <div
                    style={{
                      position: "absolute", top: 14, right: 14,
                      background: "rgba(8,9,16,0.8)",
                      border: "1px solid var(--border-bright)",
                      borderRadius: 8,
                      padding: "4px 10px",
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-violet)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    Next.js · Real-time
                  </div>
                </div>
              </a>
              <div style={{ padding: "22px 24px 24px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: 8 }}>
                  UNBORED
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>
                  Real-time messaging app built with Next.js and Tailwind CSS. Thread-based conversations,
                  SSR-optimised rendering, and a mobile-first accessible UI.
                </p>
                <a
                  href="https://github.com/astoncodes/UnBored"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.83rem", color: "var(--accent-lime)", fontWeight: 500 }}
                  className="hover:underline underline-offset-4"
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* More coming */}
            <div
              className="reveal"
              style={{
                border: "1px dashed var(--border-bright)",
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                minHeight: 220,
                background: "var(--surface)",
                padding: 32,
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "2rem" }}>🚧</span>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem" }}>
                More projects on the way
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", maxWidth: "28ch" }}>
                Currently building — check back soon or follow along on GitHub.
              </p>
              <a
                href="https://github.com/astoncodes"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ marginTop: 4, fontSize: "0.83rem" }}
              >
                GitHub Profile →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT
      ══════════════════════════════════════ */}
      <section id="contact" style={{ borderTop: "1px solid var(--border)", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
        {/* Subtle accent blob */}
        <div style={{
          position: "absolute", bottom: -200, right: -100,
          width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,241,53,0.06), transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="mx-auto max-w-6xl px-5" style={{ position: "relative", zIndex: 1 }}>
          <div className="reveal mb-10">
            <p className="tag mb-3">Get in touch</p>
            <h2 className="section-heading">Let's talk.</h2>
            <span className="glow-line mt-4" style={{ width: 56 }} />
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="reveal">
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "2rem" }}>
                I'd love to hear about new opportunities, collaborations, or just to connect.
                Drop a message below or reach out directly.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: "✉", label: "Email", val: "ayobamidaniel@email.com" },
                  { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/ayobami-daniel" },
                  { icon: "🐙", label: "GitHub",   val: "github.com/astoncodes" },
                ].map(item => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 14,
                      padding: "14px 18px",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                    <div>
                      <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
