import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: '/Portfolio', // Replace 'Portfolio' with your repository name
  assetPrefix: '/Portfolio/', // Replace 'Portfolio' with your repository name
  images: {
    unoptimized: true,
    domains: ['drive.google.com', 'lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;