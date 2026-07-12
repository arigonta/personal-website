import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/personal-website",
  assetPrefix: "/personal-website",
  trailingSlash: true,
  // The repository also contains Cloudflare-only worker types that are not
  // part of this static GitHub Pages build.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
