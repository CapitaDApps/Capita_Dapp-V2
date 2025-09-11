import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://51.21.150.169:3000/api/v1/:path*",
      },
    ];
  },
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
