import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import {
  siPython,
  siCplusplus,
  siJavascript,
  siPostgresql,
  siMongodb,
  siNodedotjs,
  siNextdotjs,
  siSpring,
  siGit,
  siDocker,
} from "simple-icons";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section id="home" className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm text-zinc-400">Software Engineer</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-6xl">
            Ayobami Oluwatosin Daniel
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            I enjoy building meaningful applications that make a real impact. I
            am also passionate about learning new technologies and exploring
            game development as I grow my skills across the stack.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#portfolio"
              className="rounded-xl bg-yellow-500 px-4 py-2 font-medium text-black"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-4 py-2"
            >
              
              
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">About Me</h2>

          <p className="mb-6 max-w-3xl text-zinc-300">
            I’m a Computer Science major at the University of Prince Edward
            Island, minoring in Economics, and aiming to graduate in May 2027.
            I enjoy building meaningful applications that make a real impact,
            and I’m especially curious about game development and emerging
            technologies.
          </p>

          <p className="mb-6 max-w-3xl text-zinc-300">
            Outside of coding, I’m passionate about gaming, basketball, and
            swimming. Gaming inspires my creativity and love for interactive
            design, basketball has taught me the value of teamwork and
            perseverance, and swimming helps me stay disciplined and focused.
            These passions shape how I approach software development combining
            creativity, collaboration, and determination in every project I work
            on.
          </p>
        </div>
      </section>

      {/* Resume (merged with Experience) */}
<section id="resume" className="border-t border-white/10 py-20">
  <div className="mx-auto max-w-6xl px-4">
    <h2 className="mb-6 text-2xl font-bold md:text-3xl">Resume</h2>

    {/* Education */}
    <div className="mb-8">
      <h3 className="mb-3 text-xl font-semibold">Education</h3>
      <p className="mb-1 font-medium text-zinc-200">
        University of Prince Edward Island{" "}
        <span className="text-zinc-400">| Jan 2023 – May 2027</span>
      </p>
      <p className="text-zinc-300">B.S. in Computer Science, Minor in Economics</p>
    </div>

    {/* Certifications */}
    <div className="mb-8">
      <h3 className="mb-3 text-xl font-semibold">Certifications</h3>
      <ul className="list-inside list-disc text-sm text-zinc-400">
        <li>Google Cloud Fundamentals</li>
        <li>Google UX Design</li>
        <li>AI for Professional Development</li>
      </ul>
    </div>

    {/* Download Button */}
    <div className="mb-10">
      <a
        href="/Ayobami_Oluwatosin_Resume.pdf"
        download
        className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-4 py-2 font-medium text-black hover:bg-yellow-400"
      >
       Download Résumé (PDF)
<span aria-hidden="true" className="inline-block">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-1"
  >
    <path d="M12 3v12" />
    <path d="M6 9l6 6 6-6" />
    <path d="M5 21h14" />
  </svg>
</span>

      </a>
    </div>

    {/* Skills */}
    <div className="mb-12">
      <h3 className="mb-3 text-xl font-semibold">Technical Skills</h3>

      {(() => {
        function TechBadge({
          icon,
          label,
        }: {
          icon: { hex: string; path: string };
          label: string;
        }) {
          return (
            <div
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-white/20"
              aria-label={label}
              title={label}
            >
              <svg
                viewBox="0 0 24 24"
                width={20}
                height={20}
                className="shrink-0"
                style={{ color: `#${icon.hex}` }}
                role="img"
                aria-hidden="true"
              >
                <path d={icon.path} fill="currentColor" />
              </svg>
              <span className="text-sm text-zinc-200">{label}</span>
            </div>
          );
        }

        const LANGUAGES = [
          { icon: siPython, label: "Python" },
          { icon: siCplusplus, label: "C++" },
          { icon: siJavascript, label: "JavaScript" },
          { icon: siPostgresql, label: "SQL (PostgreSQL)" },
          { icon: siMongodb, label: "NoSQL (MongoDB)" },
        ];

        const TOOLS = [
          { icon: siNextdotjs, label: "Next.js" },
          { icon: siNodedotjs, label: "Node.js" },
          { icon: siSpring, label: "Spring" },
          { icon: siGit, label: "Git" },
          { icon: siDocker, label: "Docker" },
        ];

        return (
          <>
            <p className="text-zinc-300">
              <span className="font-medium">Languages:</span> Python, Java, C++, JavaScript, SQL, NoSQL
            </p>
            <p className="mt-2 text-zinc-300">
              <span className="font-medium">Frameworks &amp; Tools:</span> Next.js, Spring, Node.js, Git, Docker, AWS
            </p>

            <div className="mt-4">
              <p className="mb-2 text-sm text-zinc-400">Languages & Databases</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {LANGUAGES.map((s) => (
                  <TechBadge key={s.label} icon={s.icon} label={s.label} />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm text-zinc-400">Frameworks & Tools</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {TOOLS.map((s) => (
                  <TechBadge key={s.label} icon={s.icon} label={s.label} />
                ))}
              </div>
            </div>
          </>
        );
      })()}
    </div>

    {/* Experience */}
    <div>
      <h3 className="mb-3 text-xl font-semibold">Experience</h3>

      <div className="mb-8">
        <p className="font-medium text-zinc-200">
          Software Engineer Intern — British Columbia Electronic Library Network (BC ELN)
          <span className="text-zinc-400"> | Jan – Apr 2025</span>
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-400">
          <li>
            Built a <span className="font-medium">Drupal 10</span> module in{" "}
            <span className="font-medium">PHP</span> with
            <span className="font-medium"> JSON</span> APIs to dynamically render community-specific data.
          </li>
          <li>
            Integrated <span className="font-medium">Local Contexts Hub</span> with{" "}
            <span className="font-medium">Islandora</span> repositories; fetched and displayed{" "}
            <span className="font-medium">Traditional Knowledge (TK) Labels</span>.
          </li>
          <li>
            Collaborated directly with the client to distill requirements and deliver an accessible, production-ready module.
          </li>
          <li>
            Simplified complex technical topics into clear, actionable terms for non-technical stakeholders.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


    {/* Portfolio */}
<section id="portfolio" className="py-20 border-t border-white/10">
  <div className="mx-auto max-w-6xl px-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Projects</h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Monopoly Strategy Simulation */}
      <div className="rounded-2xl border border-white/10 overflow-hidden">
        {/* Make the image clickable */}
        <a
          href="https://github.com/astoncodes/MonopolyStrategySim"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Monopoly Strategy Simulation on GitHub"
          className="block group cursor-pointer"
        >
          <div className="relative aspect-[16/9] bg-zinc-800 overflow-hidden">
            <Image
              src="/monopoly.jpeg"
              alt="Monopoly Strategy Simulation"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              quality={95}
              sizes="(min-width:1024px) 560px, (min-width:768px) 50vw, 100vw"
              priority
            />
            {/* subtle hover/focus overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 group-focus-visible:bg-black/10 transition-colors" />
          </div>
        </a>

        <div className="p-6">
          <h3 className="text-lg font-semibold">Monopoly Strategy Simulation</h3>
          <p className="text-sm text-zinc-400 mt-2">
            Java based simulation engine with AI-driven strategies. Ran 60+ simulations
            and applied statistical analysis to evaluate long-term outcomes similar
            to portfolio backtesting.
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/astoncodes/MonopolyStrategySim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 text-yellow-400 hover:text-yellow-300"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Particle Simulator */}
      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <a
          href="https://github.com/astoncodes/ParticleStimulator"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Particle Simulator on GitHub"
          className="block group cursor-pointer"
        >
          <div className="relative aspect-[16/9] bg-zinc-800 overflow-hidden">
            <Image
              src="/partpartd.png"
              alt="Particle Simulator Screenshot"
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
              quality={95}
              sizes="(min-width:1024px) 560px, (min-width:768px) 50vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 group-focus-visible:bg-black/10 transition-colors" />
          </div>
        </a>

        <div className="p-6">
          <h3 className="text-lg font-semibold">Particle Simulator</h3>
          <p className="text-sm text-zinc-400 mt-2">
            Interactive JavaFX physics simulation with 9 unique particle types
            (sand, water, fire, acid, etc.). Modular OOP design makes it easy
            to expand behaviors without breaking the core system.
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/astoncodes/ParticleStimulator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 text-yellow-400 hover:text-yellow-300"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* UNBORED */}
      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <a
          href="https://github.com/astoncodes/UnBored"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open UNBORED on GitHub"
          className="block group cursor-pointer"
        >
          <div className="relative aspect-[16/9] bg-zinc-800 overflow-hidden">
            <Image
              src="/messaging.png"
              alt="UNBORED Messaging App"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              quality={95}
              sizes="(min-width:1024px) 560px, (min-width:768px) 50vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 group-focus-visible:bg-black/10 transition-colors" />
          </div>
        </a>

        <div className="p-6">
          <h3 className="text-lg font-semibold">UNBORED</h3>
          <p className="text-sm text-zinc-400 mt-2">
            Real-time messaging app built with Next.js and Tailwind CSS. Features
            thread-based conversations, optimized rendering with server-side
            rendering, and a mobile-first UI for accessibility.
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/astoncodes/UnBored"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 text-yellow-400 hover:text-yellow-300"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




      
{/* Contact */}
<section id="contact" className="border-t border-white/10 py-20">
  <div className="mx-auto max-w-6xl px-4">
    <h2 className="mb-6 text-2xl font-bold md:text-3xl">Contact</h2>
    <p className="mb-6 max-w-2xl text-zinc-400 leading-relaxed">
      I’d love to hear from you. Send a quick message below or email me directly.
    </p>
    <ContactForm />
  </div>
  </section>
    </main>
  );
}
