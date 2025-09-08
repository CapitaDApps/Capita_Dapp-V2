import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "campaign-images-data.s3.amazonaws.com",
        protocol: "https",
      },
      {
        hostname: "campaign-images-data.s3.eu-north-1.amazonaws.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
