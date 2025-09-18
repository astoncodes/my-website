import Image from "next/image";
import {
  siPython, siCplusplus, siJavascript,
  siPostgresql, siMongodb,
  siNodedotjs, siNextdotjs, siSpring, siGit, siDocker,
} from "simple-icons";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm text-zinc-400">Software Engineer</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2">
            Ayobami Oluwatosin Daniel
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            I enjoy building meaningful applications that make a real impact.
            I am also passionate about learning new technologies and exploring
            game development as I grow my skills across the stack.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#portfolio" className="rounded-xl px-4 py-2 bg-yellow-500 text-black font-medium">
              View Portfolio
            </a>
            <a href="#contact" className="rounded-xl px-4 py-2 border border-white/20">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me</h2>

          <p className="max-w-3xl text-zinc-300 mb-6">
            I’m a Computer Science student at the University of Prince Edward Island
            (B.S. in Computer Science with a Minor in Economics, graduating May 2027).
            I enjoy building meaningful applications that make a real impact, and I’m
            especially curious about game development and exploring new technologies.
          </p>

          <p className="max-w-3xl text-zinc-300 mb-6">
            Outside of coding, I’m passionate about <span className="font-semibold">gaming, basketball,
            and swimming</span>. Gaming fuels my creativity and interest in interactive
            design, basketball has taught me teamwork and perseverance, and swimming
            helps me stay disciplined and focused. These hobbies shape how I approach
            software development—balancing creativity, collaboration, and persistence
            in every project I take on.
          </p>
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
            Java-based simulation engine with AI-driven strategies. Ran 60+ simulations
            and applied statistical analysis to evaluate long-term outcomes — similar
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


      {/* Resume */}
      <section id="resume" className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Resume</h2>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <p className="text-zinc-200 font-medium">
              University of Prince Edward Island <span className="text-zinc-400">| Jan 2023 – May 2027</span>
            </p>
            <p className="text-zinc-300">B.S. in Computer Science, Minor in Economics</p>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Certifications</h3>
            <ul className="list-disc list-inside text-zinc-400 text-sm">
              <li>Google Cloud Fundamentals</li>
              <li>Google UX Design</li>
              <li>AI for Professional Development</li>
            </ul>
          </div>

         {/* Skills */}
<div className="mb-8">
  <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>

  {/* Tiny helper to render a colored SVG icon + label */}
  {(() => {
    function TechBadge({ icon, label }: { icon: { hex: string; path: string }; label: string }) {
      return (
        <div
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:border-white/20 transition"
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
        {/* Optional: keep your text lines */}
        <p className="text-zinc-300">
          <span className="font-medium">Languages:</span> Python, Java, C++, JavaScript, SQL, NoSQL
        </p>
        <p className="text-zinc-300 mt-2">
          <span className="font-medium">Frameworks &amp; Tools:</span> Next.js, Spring, Node.js, Git, Docker, AWS
        </p>

        {/* Logos: Languages */}
        <div className="mt-4">
          <p className="text-sm text-zinc-400 mb-2">Languages & Databases</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {LANGUAGES.map((s) => (
              <TechBadge key={s.label} icon={s.icon} label={s.label} />
            ))}
          </div>
        </div>

        {/* Logos: Frameworks & Tools */}
        <div className="mt-6">
          <p className="text-sm text-zinc-400 mb-2">Frameworks & Tools</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
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
<div className="mb-8">
  <h3 className="text-xl font-semibold mb-3">Experience</h3>

  <p className="text-zinc-200 font-medium">
    Software Engineer Intern — British Columbia Electronic Library Network (BC ELN)
    <span className="text-zinc-400"> | Jan – Apr 2025</span>
  </p>

  <ul className="list-disc list-inside text-zinc-400 mt-2 text-sm space-y-1">
    <li>
      Built a <span className="font-medium">Drupal 10</span> module in <span className="font-medium">PHP</span> with
      <span className="font-medium"> JSON</span> APIs to dynamically render community-specific data.
    </li>
    <li>
      Integrated <span className="font-medium">Local Contexts Hub</span> with <span className="font-medium">Islandora</span> repositories; fetched and displayed
      <span className="font-medium"> Traditional Knowledge (TK) Labels</span>.
    </li>
    <li>
      Collaborated directly with the client to distill requirements and deliver an accessible, production-ready module.
    </li>
    <li>
      Simplified complex technical topics into clear, actionable terms for non-technical stakeholders.
    </li>
  </ul>
</div>


          {/* Projects */}
          
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
          <p className="text-zinc-400">Form coming soon. For now: your.email@domain.com</p>
        </div>
      </section>
    </main>
  );
}
