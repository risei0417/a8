/** @type {import('next').NextConfig} */

const nextConfig = {
  crossOrigin: "anonymous",
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
