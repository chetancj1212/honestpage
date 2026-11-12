import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/Honest.exe",
        destination: "https://drive.google.com/drive/folders/1m3sY6kfQ4VsKNRh_VRIDjmfaZD9dvJTi",
        permanent: false,
      },
      {
        source: "/honest.exe",
        destination: "https://drive.google.com/drive/folders/1m3sY6kfQ4VsKNRh_VRIDjmfaZD9dvJTi",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
