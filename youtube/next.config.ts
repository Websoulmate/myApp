import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname, // tells Next.js "this folder is the root"
  },
};

module.exports = nextConfig;
export default nextConfig;
