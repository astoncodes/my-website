import RotatingStills from "@/components/RotatingStills";
import { HERO_LANES } from "@/data/galleryItems";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate h-[64svh] min-h-[400px] max-h-[860px] overflow-hidden md:h-[84svh] md:min-h-[540px]"
    >
      <RotatingStills lanes={HERO_LANES}>
        <h1
          id="hero-heading"
          className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink"
        >
          <span className="sr-only">Daniel Oluwatosin, </span>
          Software engineer
        </h1>
        <p className="mt-1.5 font-display text-[0.8125rem] uppercase tracking-[0.08em] text-muted">
          B.Sc. Computer Science, UPEI · May 2027
        </p>
      </RotatingStills>
    </section>
  );
}
