//@ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  transpilePackages: [
    "@bashkim-com/design-system",
    "@bashkim-com/prismic-dal",
    "@bashkim-com/prismic-helpers",
    "@bashkim-com/socials",
    "@bashkim-com/style-guide",
  ],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
