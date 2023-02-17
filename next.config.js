const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
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
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.DefinePlugin({
        'process.env.MONGO_URI': JSON.stringify(process.env.MONGO_URI),
      }),
    );

    return config;
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withPlugins(
  [withBundleAnalyzer],
  withSentryConfig(nextConfig, sentryWebpackPluginOptions),
);
