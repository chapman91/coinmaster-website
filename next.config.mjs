/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,

  // Webpack configuration
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },

  // Ensure static images load correctly
  images: {
    domains: ['www.cyrocoin.xyz'], // Ensure domain matches
    unoptimized: false, // Keep Next.js image optimization enabled
    formats: ['image/avif', 'image/webp'], // Remove PNG/JPEG to fix error
  },

  // Ensure public folder is served properly
  staticPageGenerationTimeout: 60,

  // Turbo config (if used)
  experimental: {
    turbo: {}, // Enable if needed
  },

  // Make sure Next.js serves static files correctly
  output: 'standalone',

  // Ensure URLs work properly
  trailingSlash: false,
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
