import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  assetPrefix: "/uoft_vac/",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
