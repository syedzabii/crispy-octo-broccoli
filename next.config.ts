import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
};

export default nextConfig;
