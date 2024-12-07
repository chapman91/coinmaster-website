/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,
  // Enable experimental Turbopack or Webpack as needed
  experimental: {
    turbo: false, // Set to true to enable Turbopack
  },
  // Configure Webpack fallback (if Turbopack is off)
  webpack(config) {
    // Ensure Turbopack's [turbopack]_runtime.js is handled properly
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
  // Any additional configuration
  images: {
    domains: ['your-image-domain.com'], // Replace with allowed image domains
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
