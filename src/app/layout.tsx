// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Ayobami Daniel — Software Engineer",
  description: "Portfolio of Ayobami Oluwatosin Daniel, Software Engineer & CS student at UPEI.",
  icons: {
    icon: [
      { url: "/ayo.ico", sizes: "any" },
      { url: "/ayo.ico", type: "image/x-icon" },
    ],
    shortcut: "/ayo.ico",
    apple: "/ayo.ico",
  },
};

const NAV_LINKS = [
  { href: "#about",     label: "About"    },
  { href: "#resume",    label: "Resume"   },
  { href: "#portfolio", label: "Projects" },
  { href: "#contact",   label: "Contact"  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'light') {
                  document.documentElement.classList.add('light');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-[--accent-lime] focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>

        <header className="sticky top-0 z-50 theme-header">
          <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
            <Link
              href="#home"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em", fontWeight: 800, fontSize: "1.1rem" }}
            >
              <span style={{ color: "var(--accent-lime)" }}>A</span>YO
            </Link>

            <ul className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="nav-link rounded-lg px-3 py-2 text-sm">
                    {label}
                  </a>
                </li>
              ))}
              <li className="ml-2"><ThemeToggle /></li>
              <li className="ml-1">
                <a href="/Daniel's Resume.pdf" download className="btn-primary text-sm">
                  Download Résumé
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <MobileNav links={NAV_LINKS} />
            </div>
          </nav>
        </header>

        <main id="main" style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>

        <footer className="py-10 theme-footer">
          <div className="mx-auto max-w-6xl px-5">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.04em" }}>
                <span style={{ color: "var(--accent-lime)" }}>A</span>YO
              </span>
              <div className="flex items-center gap-6">
                <a href="https://github.com/astoncodes" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                <a href="https://linkedin.com/in/ayobami-daniel" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                <a href="#contact" className="footer-link">Contact</a>
              </div>
              <p className="footer-link text-center">© {new Date().getFullYear()} Ayobami Daniel</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
