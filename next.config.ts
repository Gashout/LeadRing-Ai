import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/LeadRing-Ai",
  assetPrefix: "/LeadRing-Ai/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
