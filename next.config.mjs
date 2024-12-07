/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,
  // Disable Turbopack temporarily if needed
  experimental: {
    turbo: false, // Set to true if using Turbopack
  },
  // Webpack configuration
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
  // Image domain configuration
  images: {
    domains: ['cyrocoin.xyz'], // Ensure all domains are listed
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
