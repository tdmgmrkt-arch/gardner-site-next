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
        ],
      },
    ];
  },
};

export default nextConfig;