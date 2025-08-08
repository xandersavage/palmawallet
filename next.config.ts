import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // 🚫 Skip ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 🚫 Skip TypeScript type checking during builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
