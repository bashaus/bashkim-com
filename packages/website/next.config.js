//@ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  transpilePackages: [
    "@bashkim-com/design-system",
    "@bashkim-com/prismic-dal",
    "@bashkim-com/style-guide",
    "@bashkim-com/prismic-helpers",
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
