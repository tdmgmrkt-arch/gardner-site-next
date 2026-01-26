import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gardnerplumbingco.com';

  // Core pages
  const corePages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about-us', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact-us', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/reviews', priority: 0.6, changeFrequency: 'weekly' as const },
    { url: '/blog', priority: 0.6, changeFrequency: 'weekly' as const },
    { url: '/financing', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/guarantee', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/warranty', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/frequently-asked-questions', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms-and-services', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  // Service pages
  const servicePages = [
    '/services',
    '/services/emergency-service',
    '/services/hydro-jetting',
    '/services/gas-lines',
    '/services/toilet-installation-and-repair',
    '/services/water-filtration-system',
    '/services/water-heater-service',
    '/services/drain-cleaning',
    '/services/commercial-plumbing',
    '/services/piping-and-repiping',
    '/services/garbage-disposal-service',
    '/services/maintenance-plans',
    '/services/sewer-and-septic',
    '/services/leak-detection',
    '/services/moen-flo-installation',
    '/services/65-point-inspection',
    '/services/burst-pipes',
    '/services/water-damage',
    '/services/backups',
    '/services/no-hot-water',
    '/services/backflow-prevention',
    '/services/industrial-plumbing',
  ];

  // City-specific drain cleaning pages
  const cityDrainCleaningPages = [
    '/services/temecula-drain-cleaning',
    '/services/murrieta-drain-cleaning',
    '/services/perris-drain-cleaning',
    '/services/menifee-drain-cleaning',
    '/services/canyon-lake-drain-cleaning',
    '/services/lake-elsinore-drain-cleaning',
    '/services/corona-drain-cleaning',
    '/services/moreno-valley-drain-cleaning',
    '/services/riverside-drain-cleaning',
    '/services/hemet-drain-cleaning',
    '/services/san-jacinto-drain-cleaning',
    '/services/wildomar-drain-cleaning',
  ];

  const currentDate = new Date().toISOString();

  return [
    // Core pages
    ...corePages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),

    // Service pages
    ...servicePages.map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: url === '/services' ? 0.9 : 0.8,
    })),

    // City-specific pages
    ...cityDrainCleaningPages.map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
