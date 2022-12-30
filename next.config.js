/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,

  productionBrowserSourceMaps: false,
  images: {
    loader: "custom",
  },
};

module.exports = nextConfig;
