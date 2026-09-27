import { Fragment } from "react";

/** "Flask · React · …" that only wraps between items, never inside a name. */
export default function StackLine({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <p className={`font-display text-[0.8125rem] tracking-[0.02em] text-muted ${className}`}>
      {items.map((item, i) => (
        <Fragment key={item}>
          <span className="whitespace-nowrap">
            {item}
            {i < items.length - 1 && " ·"}
          </span>
          {i < items.length - 1 && " "}
        </Fragment>
      ))}
    </p>
  );
}
