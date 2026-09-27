import type { Metadata, Viewport } from "next";
import { Jost, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jost",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-source-serif",
  display: "swap",
});

const title = "Daniel Oluwatosin — Software Engineer";
const description =
  "Daniel Oluwatosin is a software engineer and computer science student at the University of Prince Edward Island, most recently a software engineer intern at Mackenzie Investments.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayotosin.com"),
  title: { default: title, template: "%s — Daniel Oluwatosin" },
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Daniel Oluwatosin",
    locale: "en_CA",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  // Icons and the link-preview image come from the icon.png, apple-icon.png,
  // favicon.ico and opengraph-image.png files in this folder.
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${sourceSerif.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only font-display text-sm focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
