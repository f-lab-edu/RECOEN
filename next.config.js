const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    domains: ['recoen.s3.ap-northeast-2.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
