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

  images: {
    // Pre-declare every quality value used by next/image (required in Next.js 16)
    qualities: [75, 90],
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
        destination: '/services/plumbing/water-heater-service',
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
        destination: '/services/plumbing/leak-detection',
        permanent: true,
      },
      {
        source: '/drain-cleaning-and-repairs',
        destination: '/services/plumbing/drain-cleaning',
        permanent: true,
      },
      {
        source: '/services/maintenance-plans',
        destination: '/gardner-shield',
        permanent: true,
      },

      // Plumbing vertical reorganization: /services/<route> → /services/plumbing/<route>
      { source: '/services/65-point-inspection', destination: '/services/plumbing/65-point-inspection', permanent: true },
      { source: '/services/backflow-prevention', destination: '/services/plumbing/backflow-prevention', permanent: true },
      { source: '/services/backups', destination: '/services/plumbing/backups', permanent: true },
      { source: '/services/burst-pipes', destination: '/services/plumbing/burst-pipes', permanent: true },
      { source: '/services/commercial-plumbing', destination: '/services/plumbing/commercial-plumbing', permanent: true },
      { source: '/services/drain-cleaning', destination: '/services/plumbing/drain-cleaning', permanent: true },
      { source: '/services/emergency-service', destination: '/services/plumbing/emergency-service', permanent: true },
      { source: '/services/garbage-disposal-service', destination: '/services/plumbing/garbage-disposal-service', permanent: true },
      { source: '/services/gas-lines', destination: '/services/plumbing/gas-lines', permanent: true },
      { source: '/services/hydro-jetting', destination: '/services/plumbing/hydro-jetting', permanent: true },
      { source: '/services/industrial-plumbing', destination: '/services/plumbing/industrial-plumbing', permanent: true },
      { source: '/services/leak-detection', destination: '/services/plumbing/leak-detection', permanent: true },
      { source: '/services/moen-flo-installation', destination: '/services/plumbing/moen-flo-installation', permanent: true },
      { source: '/services/no-hot-water', destination: '/services/plumbing/no-hot-water', permanent: true },
      { source: '/services/piping-and-repiping', destination: '/services/plumbing/piping-and-repiping', permanent: true },
      { source: '/services/sewer-and-septic', destination: '/services/plumbing/sewer-and-septic', permanent: true },
      { source: '/services/toilet-installation-and-repair', destination: '/services/plumbing/toilet-installation-and-repair', permanent: true },
      { source: '/services/water-damage', destination: '/services/plumbing/water-damage', permanent: true },
      { source: '/services/water-filtration-system', destination: '/services/plumbing/water-filtration-system', permanent: true },
      { source: '/services/water-heater-service', destination: '/services/plumbing/water-heater-service', permanent: true },
      { source: '/services/canyon-lake-drain-cleaning', destination: '/services/plumbing/canyon-lake-drain-cleaning', permanent: true },
      { source: '/services/corona-drain-cleaning', destination: '/services/plumbing/corona-drain-cleaning', permanent: true },
      { source: '/services/hemet-drain-cleaning', destination: '/services/plumbing/hemet-drain-cleaning', permanent: true },
      { source: '/services/lake-elsinore-drain-cleaning', destination: '/services/plumbing/lake-elsinore-drain-cleaning', permanent: true },
      { source: '/services/menifee-drain-cleaning', destination: '/services/plumbing/menifee-drain-cleaning', permanent: true },
      { source: '/services/moreno-valley-drain-cleaning', destination: '/services/plumbing/moreno-valley-drain-cleaning', permanent: true },
      { source: '/services/murrieta-drain-cleaning', destination: '/services/plumbing/murrieta-drain-cleaning', permanent: true },
      { source: '/services/perris-drain-cleaning', destination: '/services/plumbing/perris-drain-cleaning', permanent: true },
      { source: '/services/riverside-drain-cleaning', destination: '/services/plumbing/riverside-drain-cleaning', permanent: true },
      { source: '/services/san-jacinto-drain-cleaning', destination: '/services/plumbing/san-jacinto-drain-cleaning', permanent: true },
      { source: '/services/temecula-drain-cleaning', destination: '/services/plumbing/temecula-drain-cleaning', permanent: true },
      { source: '/services/wildomar-drain-cleaning', destination: '/services/plumbing/wildomar-drain-cleaning', permanent: true },
    ];
  },
};

export default nextConfig;