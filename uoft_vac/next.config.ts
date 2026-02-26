import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
    ],
  },
};

module.exports = nextConfig;

export default nextConfig;
