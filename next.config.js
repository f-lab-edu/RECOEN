const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    domains: ['recoen.s3.ap-northeast-2.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
  sentry: {
    hideSourceMaps: true,
  },
  webpack: (config) => {
    config.plugins.push(
      new options.webpack.DefinePlugin({
        'process.env.MONGO_URI': JSON.stringify(process.env.MONGO_URI),
      }),
    );
  },
  // env: {
  //   MONGO_URI: process.env.MONGO_URI,
  // },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
