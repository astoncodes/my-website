import Image from "next/image";
import type { GalleryItem } from "@/data/galleryItems";

/** Crop and tone shared by every full-bleed still. */
export function stillStyle(item: GalleryItem, brightness = 0.8): React.CSSProperties {
  return { objectPosition: item.focus, filter: `brightness(${brightness}) saturate(0.9)` };
}

/** Darkens the top for the header and the bottom for the caption. */
export function StillsShade() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to bottom, rgb(11 11 11 / 0.97), rgb(11 11 11 / 0.86) 8%, rgb(11 11 11 / 0.4) 17%, transparent 30%, transparent 58%, rgb(11 11 11 / 0.95))",
      }}
    />
  );
}

/**
 * Three stills side by side, filling the nearest positioned parent (which
 * should be `isolate` so these sit behind its content). Decorative only.
 */
export default function Stills({ items, brightness = 0.8 }: { items: GalleryItem[]; brightness?: number }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 grid grid-cols-3 gap-[3px]">
      {items.map((item) => (
        <div key={item.id} className="relative overflow-hidden">
          <Image
            src={item.image}
            alt=""
            fill
            priority
            placeholder="blur"
            sizes="34vw"
            className="object-cover"
            style={stillStyle(item, brightness)}
          />
        </div>
      ))}
      <StillsShade />
    </div>
  );
}
