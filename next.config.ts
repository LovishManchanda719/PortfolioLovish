import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Required for static export (Next.js 13+)
  basePath: '/PortfolioLovish', // GitHub repo name
  assetPrefix: '/PortfolioLovish/', // Ensures correct asset loading
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js Image Optimization
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
