export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm text-zinc-400">Software Engineer</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2">
            Oluwatosin Ayobami
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

     <section id="about" className="py-20 border-t border-white/10">
  <div className="mx-auto max-w-6xl px-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me</h2>

    <p className="max-w-3xl text-zinc-300 mb-6">
      I’m a Computer Science student at the University of Prince Edward Island 
      (B.S. in Computer Science with a Minor in Economics, expected May 2027). 
      I enjoy building meaningful applications that make a real impact, and I’m 
      especially curious about game development and exploring new technologies.
    </p>

    <p className="max-w-3xl text-zinc-300 mb-6">
      Outside of coding, I’m passionate about <span className="font-semibold">gaming, basketball, 
      and swimming</span>. Gaming fuels my creativity and interest in interactive 
      design, basketball has taught me teamwork and perseverance, and swimming 
      helps me stay disciplined and focused. These hobbies shape how I approach 
      software development balancing creativity, collaboration, and persistence 
      in every project I take on.
    </p>
  </div>
</section>


      <section id="portfolio" className="py-20 border-t border-white/10">
  <div className="mx-auto max-w-6xl px-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Projects</h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Monopoly Strategy Simulation */}
      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <div className="w-full h-48 bg-zinc-800 flex items-center justify-center text-zinc-500 text-sm">
          {/* Replace with <img src="/projects/monopoly.png" alt="Monopoly Strategy Simulation" /> later */}
          Project Image Here
        </div>
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
        <div className="w-full h-48 bg-zinc-800 flex items-center justify-center text-zinc-500 text-sm">
          {/* Replace with <img src="/projects/particle.png" alt="Particle Simulator" /> later */}
          Project Image Here
        </div>
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
        <div className="w-full h-48 bg-zinc-800 flex items-center justify-center text-zinc-500 text-sm">
          {/* Replace with <img src="/projects/unbored.png" alt="UNBORED Messaging App" /> later */}
          Project Image Here
        </div>
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
      <p className="text-zinc-300">
        <span className="font-medium">Languages:</span> Python, Java, C++, JavaScript, SQL, NoSQL  
      </p>
      <p className="text-zinc-300 mt-2">
        <span className="font-medium">Frameworks & Tools:</span> Next.js, Spring, Node.js, Git, Docker, AWS  
      </p>
    </div>

    {/* Experience */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">Experience</h3>
      <p className="text-zinc-200 font-medium">
        Software Engineer Intern – BC Electronic Library Network 
        <span className="text-zinc-400"> | Jan – Apr 2025</span>
      </p>
      <ul className="list-disc list-inside text-zinc-400 mt-2 text-sm">
        <li>Built and integrated custom Drupal 10 modules with APIs for digital repositories.</li>
        <li>Collaborated with clients to design user-centered solutions for cultural data access.</li>
      </ul>
    </div>

    {/* Projects */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Selected Projects</h3>

      <div className="mb-5">
        <p className="text-zinc-200 font-medium">Monopoly Strategy Simulation | Java</p>
        <p className="text-zinc-400 text-sm">
          Simulation engine with AI-driven strategies; 60+ runs analyzed for long-term outcomes.
        </p>
      </div>

      <div className="mb-5">
        <p className="text-zinc-200 font-medium">Particle Simulator | Java, JavaFX</p>
        <p className="text-zinc-400 text-sm">
          Interactive physics simulation with modular OOP design for expandable particle behaviors.
        </p>
      </div>

      <div className="mb-5">
        <p className="text-zinc-200 font-medium">UNBORED | Next.js, Tailwind</p>
        <p className="text-zinc-400 text-sm">
          Real-time messaging app with thread-based navigation, optimized performance, and mobile-first UI.
        </p>
      </div>
    </div>
  </div>
</section>


      <section id="contact" className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
          <p className="text-zinc-400">Form coming soon. For now: your.email@domain.com</p>
        </div>
      </section>
    </main>
  );
}
