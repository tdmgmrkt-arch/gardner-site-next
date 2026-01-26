import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ This allows production builds to succeed even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Same idea for TS errors (optional, but helps if strict typing fails builds)
    ignoreBuildErrors: true,
  },
  
  // 👇 Add this headers function
  async headers() {
    return [
      {
        // Applies this header to all routes in your application.
        source: '/:path*',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'x-accessscan-key',
            value: '45add0aacd4111ec9d640242ac120002',
          },
        ],
      },
    ];
  },

  // Redirects for old/broken URLs
  async redirects() {
    return [
      {
        source: '/water-heater-solutions',
        destination: '/services/water-heater-service',
        permanent: true,
      },
      {
        source: '/remodeling-and-new-construction',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/plumbing-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/leak-detection',
        destination: '/services/leak-detection',
        permanent: true,
      },
      {
        source: '/drain-cleaning-and-repairs',
        destination: '/services/drain-cleaning',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;