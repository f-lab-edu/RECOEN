const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    externalResolver: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    domains: ['recoen.s3.ap-northeast-2.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
  sentry: {
    hideSourceMaps: false,
  },
};

const sentryWebpackPluginOptions = {
  silent: false,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
