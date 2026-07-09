import type { Metadata } from "next";
import { Anton, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import CommandPalette from "@/components/CommandPalette";
import SignalDock from "@/components/SignalDock";
import SystemStatusFooter from "@/components/SystemStatusFooter";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Daniel Oluwatosin — Software Engineer",
  description:
    "Daniel Oluwatosin — Toronto-based software engineer building full-stack products, data platforms, and game systems. Part portfolio, part art archive, part music/film signal feed.",
  icons: {
    icon: [{ url: "/ayo.ico", sizes: "any" }, { url: "/ayo.ico", type: "image/x-icon" }],
    shortcut: "/ayo.ico",
    apple: "/ayo.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="mono sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-3 focus:py-2 focus:text-sm"
          style={{ background: "var(--blue-deep)", color: "var(--beige)" }}
        >
          Skip to content
        </a>

        <Nav />

        <main id="main">{children}</main>

        <SystemStatusFooter />
        <CommandPalette />
        <SignalDock />
      </body>
    </html>
  );
}
