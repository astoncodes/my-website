"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyButton({ value, what }: { value: string; what: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2500);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="-my-2 min-h-11 cursor-pointer font-display text-[0.8125rem] text-muted transition-colors duration-150 hover:text-ink"
    >
      <span aria-live="polite">
        {state === "copied" ? "Copied" : state === "failed" ? "Couldn't copy" : "Copy"}
        {state === "idle" && <span className="sr-only"> {what}</span>}
      </span>
    </button>
  );
}
