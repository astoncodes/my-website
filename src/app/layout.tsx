import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayobami Oluwatosin — Software Engineer",
  description: "Portfolio and projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0b0f14] text-zinc-100`}>
        {children}
      </body>
    </html>
  );
}
