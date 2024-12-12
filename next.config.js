/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "build",
  images: {
    unoptimized: true,
    domains: ["placeholder.com"], // Add any domains you'll be loading images from
  },
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.crashify.de/:path*", // Proxy API requests to your backend
      },
    ];
  },
};

module.exports = nextConfig;
