import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first (smallest), WebP for browsers without AVIF support.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "a.ltrbxd.com" }, // Letterboxd posters
      { protocol: "https", hostname: "i.scdn.co" },    // Spotify album art
    ],
  },
};

export default nextConfig;
