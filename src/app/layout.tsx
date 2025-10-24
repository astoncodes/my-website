// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ayobami Oluwatosin Daniel",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Skip link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-yellow-400 text-black px-3 py-2 rounded"
        >
          Skip to content
        </a>

        {/* Sticky Header */}
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
          <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <Link href="#home" className="font-semibold tracking-tight">
              AYO
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#resume" className="hover:text-white">Resume</a></li>
              <li><a href="#portfolio" className="hover:text-white">Projects</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li>
                <a
                  href="/Daniel's Resume.pdf"
                  download
                  className="rounded-lg px-3 py-1.5 bg-yellow-500 text-black font-medium hover:bg-yellow-400"
                >
                  Download Résumé
                </a>
              </li>
            </ul>

            {/* Mobile: simple menu */}
            <details className="md:hidden">
              <summary className="cursor-pointer list-none">Menu</summary>
              <ul className="absolute right-4 mt-2 w-44 rounded-xl border border-white/10 bg-zinc-900/90 p-2 text-sm">
                <li><a href="#about" className="block px-3 py-2 rounded hover:bg-white/5">About</a></li>
                <li><a href="#portfolio" className="block px-3 py-2 rounded hover:bg-white/5">Projects</a></li>
                <li><a href="#resume" className="block px-3 py-2 rounded hover:bg-white/5">Resume</a></li>
                <li><a href="#contact" className="block px-3 py-2 rounded hover:bg-white/5">Contact</a></li>
                <li>
                  <a
                    href="/Ayobami_Oluwatosin_Resume.pdf"
                    download
                    className="block px-3 py-2 rounded bg-yellow-500 text-black font-medium mt-2 text-center"
                  >
                    Download Résumé
                  </a>
                </li>
              </ul>
            </details>
          </nav>
        </header>

        <main id="main">{children}</main>
      </body>
    </html>
  );
}
