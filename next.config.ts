import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Static site for github pages
  output: "export",
  // Disable SSR since github pages static only
  images: {
    unoptimized: true,
  },
  // Enable trailing slash for GitHub Pages compatibility
  trailingSlash: true,

};

export default nextConfig;
