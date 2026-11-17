import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Tailwind v4 runs as a Turbopack loader, so there is no PostCSS config.
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
