/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'recoen.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/next-s3-uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
