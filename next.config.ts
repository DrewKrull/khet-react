import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  // basePath: "/khet",
  allowedDevOrigins: ["192.168.86.*"],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete
    // even if your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
