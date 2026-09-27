import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Section from "@/components/Section";
import Now from "@/components/Now";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import MusicAndFilm from "@/components/MusicAndFilm";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Section id="now" label="Now">
        <Now />
      </Section>
      <Section id="experience" label="Experience">
        <Experience />
      </Section>
      <Section id="projects" label="Projects">
        <Projects />
      </Section>
      <Section id="skills" label="Skills">
        <Skills />
      </Section>
      <Section id="education" label="Education">
        <Education />
      </Section>
      <Section id="music-and-film" label="Music & film">
        <MusicAndFilm />
      </Section>
      <Section id="gallery" label="Gallery">
        <Gallery />
      </Section>
      <Section id="contact" label="Contact">
        <Contact />
      </Section>
    </>
  );
}
