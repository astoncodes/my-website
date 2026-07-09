import { LINKS } from "@/data/links";

// Evaluated at build time — "LAST UPDATED" = last deploy.
const BUILD_DATE = new Date().toISOString().slice(0, 10);

const STATUS_ITEMS = [
  { label: "SITE STATUS", value: "ONLINE", tone: "var(--toxic)" },
  { label: "LAST UPDATED", value: BUILD_DATE, tone: "var(--text-2)" },
  { label: "STACK", value: "NEXT.JS · TYPESCRIPT · TAILWIND", tone: "var(--text-2)" },
  { label: "LOCATION", value: "TORONTO, ON", tone: "var(--blue)" },
  { label: "SIGNAL", value: "OPEN TO OPPORTUNITIES", tone: "var(--alert)" },
];

export default function SystemStatusFooter() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STATUS_ITEMS.map((item) => (
            <div key={item.label}>
              <p className="hud-label mb-1">{item.label}</p>
              <p className="mono text-[0.72rem] tracking-wider" style={{ color: item.tone }}>
                {item.label === "SITE STATUS" && (
                  <span
                    className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle"
                    style={{ background: "var(--toxic)", boxShadow: "0 0 6px var(--toxic)" }}
                    aria-hidden="true"
                  />
                )}
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 flex flex-col items-start justify-between gap-3 border-t pt-6 sm:flex-row sm:items-center"
          style={{ borderColor: "var(--line)" }}
        >
          <p className="mono text-[0.68rem]" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} {LINKS.name} — SIGNAL OS v3.0
          </p>
          <p className="mono text-[0.68rem]" style={{ color: "var(--muted)" }}>
            PRESS <span style={{ color: "var(--blue)" }}>⌘K</span> FOR COMMAND PALETTE
          </p>
        </div>
      </div>
    </footer>
  );
}
