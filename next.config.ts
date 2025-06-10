import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'cdn.jsdelivr.net'],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  webpack(config) {
    // Support SVG (aviable )
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
