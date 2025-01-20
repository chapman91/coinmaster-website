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
    domains: ['www.cyrocoin.xyz'], // Use the full domain
    unoptimized: false, // Set to false to use Next.js image optimization
    formats: ['image/avif', 'image/webp', 'image/png', 'image/jpeg'], // Allow these formats
  },

  // Ensure public folder is served properly
  staticPageGenerationTimeout: 60,

  // Turbo config (if used)
  experimental: {
    turbo: {}, // Enable if needed
  },

  // Make sure Next.js serves static files correctly
  output: 'standalone', // Ensures proper static asset handling

  // Ensure URLs work properly
  trailingSlash: false, // Set to false to avoid unnecessary trailing slashes
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
