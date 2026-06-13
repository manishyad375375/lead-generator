import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // standalone output bundles only what's needed — required for Docker/Cloud Run
  output: "standalone",
};

export default nextConfig;
