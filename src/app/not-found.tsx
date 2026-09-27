import type { Metadata } from "next";
import Link from "next/link";
import Stills from "@/components/Stills";
import { GALLERY_ITEMS } from "@/data/galleryItems";

export const metadata: Metadata = { title: "Page not found" };

const STILL_IDS = ["terminal-dogma", "pluto-gesicht", "scott-pilgrim-poster"];
const STILLS = GALLERY_ITEMS.filter((i) => STILL_IDS.includes(i.id));

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden"
    >
      <Stills items={STILLS} brightness={0.5} />

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-10 sm:pb-24">
        <p className="label">Error 404</p>
        <h1
          id="not-found-heading"
          className="mt-3 font-display text-3xl font-medium uppercase tracking-[0.06em] text-ink sm:text-5xl"
        >
          Page not found
        </h1>
        <p className="mt-4 max-w-[40ch] text-lg">This page doesn&apos;t exist or has moved.</p>
        <Link href="/" className="btn btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </section>
  );
}
