import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/v5.html",
      },
    ];
  },
};

export default nextConfig;
