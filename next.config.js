/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Disable Turbopack to avoid runtime errors
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable static exports for better performance
  output: 'standalone',
  // Enable compression
  compress: true,
  // Enable powered by header
  poweredByHeader: false,
  // Enable strict mode
  reactStrictMode: true,
  // Enable TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig 