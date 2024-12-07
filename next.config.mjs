/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,

  // Enable experimental features if needed
  experimental: {
    turbo: {}, // Set to true if you want to use Turbopack
  },

  // Webpack configuration
  webpack(config) {
    // Ensure proper fallback handling for client-side builds
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },

  // Images configuration
  images: {
    // Add external domains if required
    domains: [], // Leave empty if only using `public` directory

    // Disables image optimization for troubleshooting
    unoptimized: false, // Set to true temporarily if you suspect optimization issues
  },

  // Additional configurations
  trailingSlash: true, // Ensures trailing slashes in URLs
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
