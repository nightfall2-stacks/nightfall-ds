/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: false,
  },
  poweredByHeader: false,
  typescript: {
    // Ensures the build succeeds even if there are type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ensures the build succeeds even if there are lint errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
