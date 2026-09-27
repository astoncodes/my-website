import Image from "next/image";
import { WALL_ITEMS } from "@/data/galleryItems";

/**
 * Justified rows: each image's flex-basis and flex-grow scale with its aspect
 * ratio, so every image in a row ends up the same height, uncropped. The
 * filler at the end stops the last row from stretching.
 */
export default function Gallery() {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-6">
      {WALL_ITEMS.map((item) => (
        <figure
          key={item.id}
          className="min-w-0 grow-[calc(var(--r)*100)] basis-[calc(var(--r)*180px)] md:basis-[calc(var(--r)*240px)]"
          style={{ "--r": item.image.width / item.image.height } as React.CSSProperties}
        >
          <Image
            src={item.image}
            alt={item.alt}
            placeholder="blur"
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 40vw, 60vw"
            className="h-auto w-full"
          />
          <figcaption className="mt-2 line-clamp-2 font-display text-[0.8125rem] leading-snug text-muted">
            <span className="text-ink">{item.title}</span>
            {item.detail && ` · ${item.detail}`}
          </figcaption>
        </figure>
      ))}
      <div aria-hidden="true" className="grow-[1000]" />
    </div>
  );
}
