import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "127.0.0.1:3000",
    "localhost:3000",
    "192.168.1.3",
    "192.168.1.3:3000",
    "192.168.1.23",
    "192.168.1.23:3000",
  ],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/Boomiga_Resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Boomiga_Resume.pdf"',
          },
          {
            key: "Content-Type",
            value: "application/pdf",
          },
        ],
      },
      {
        source: "/resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Boomiga_Resume.pdf"',
          },
          {
            key: "Content-Type",
            value: "application/pdf",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
