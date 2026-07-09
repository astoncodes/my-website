"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LINKS } from "@/data/links";

type Command = {
  id: string;
  label: string;
  hint: string;
  action: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const commands: Command[] = [
    { id: "projects", label: "View Projects", hint: "JUMP", action: () => document.getElementById("projects")?.scrollIntoView() },
    { id: "resume", label: "View Resume", hint: "FILE", action: () => window.open(LINKS.resume, "_blank") },
    { id: "contact", label: "Contact", hint: "JUMP", action: () => document.getElementById("contact")?.scrollIntoView() },
    { id: "github", label: "Open GitHub", hint: "LINK", action: () => window.open(LINKS.github, "_blank") },
    { id: "linkedin", label: "Open LinkedIn", hint: "LINK", action: () => window.open(LINKS.linkedin, "_blank") },
    { id: "spotify", label: "Open Spotify", hint: "LINK", action: () => window.open(LINKS.spotify, "_blank") },
    { id: "letterboxd", label: "Open Letterboxd", hint: "LINK", action: () => window.open(LINKS.letterboxd, "_blank") },
  ];

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") close();
    };
    const onOpenEvent = () => setOpen(true);
    document.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpenEvent);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpenEvent);
    };
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const run = (cmd: Command) => {
    close();
    cmd.action();
  };

  return (
    // Keyboard-initiated: opens instantly, no entrance animation.
    <div className="overlay-backdrop flex items-start justify-center pt-[18vh]" onClick={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="dossier w-full max-w-lg"
        style={{ background: "var(--bg-2)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b px-4 py-3" style={{ borderColor: "var(--line)" }}>
          <span className="mono text-xs" style={{ color: "var(--toxic)" }} aria-hidden="true">{">"}</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActive(0); }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
              if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
              if (e.key === "Enter" && filtered[active]) run(filtered[active]);
            }}
            placeholder="TYPE A COMMAND..."
            className="mono w-full bg-transparent text-sm outline-none"
            style={{ color: "var(--text)" }}
            aria-label="Search commands"
          />
          <span className="hud-label shrink-0">ESC</span>
        </div>

        <ul role="listbox" aria-label="Commands" className="max-h-80 overflow-y-auto py-1">
          {filtered.length === 0 && (
            <li className="mono px-4 py-3 text-xs" style={{ color: "var(--muted)" }}>
              NO SIGNAL — command not found.
            </li>
          )}
          {filtered.map((cmd, i) => (
            <li key={cmd.id} role="option" aria-selected={i === active}>
              <button
                className="mono flex w-full cursor-pointer items-center justify-between px-4 py-2.5 text-left text-[0.8rem]"
                style={{
                  background: i === active ? "var(--surface-2)" : "transparent",
                  color: i === active ? "var(--beige)" : "var(--text-2)",
                  borderLeft: `2px solid ${i === active ? "var(--blue)" : "transparent"}`,
                }}
                onMouseEnter={() => setActive(i)}
                onClick={() => run(cmd)}
              >
                {cmd.label}
                <span className="hud-label">{cmd.hint}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
