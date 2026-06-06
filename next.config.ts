import type { NextConfig } from "next";

// The site is served at the root of the custom domain (developershubcorp.com),
// so no basePath/assetPrefix. The GitHub Pages workflow must NOT inject its own
// config (configure-pages `static_site_generator: next` is removed) — otherwise
// `trailingSlash` is dropped and /courses/ etc. 404 on the live site.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
