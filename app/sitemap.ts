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
    { url: '/clean-visit-promise', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/warranty', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/frequently-asked-questions', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/transparent-pricing', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/gardner-shield', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms-and-services', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  // Service pages
  const servicePages = [
    '/services',
    '/services/plumbing/emergency-service',
    '/services/plumbing/hydro-jetting',
    '/services/plumbing/gas-lines',
    '/services/plumbing/toilet-installation-and-repair',
    '/services/plumbing/water-filtration-system',
    '/services/plumbing/water-heater-service',
    '/services/plumbing/drain-cleaning',
    '/services/plumbing/commercial-plumbing',
    '/services/plumbing/piping-and-repiping',
    '/services/plumbing/garbage-disposal-service',
    '/services/plumbing/sewer-and-septic',
    '/services/plumbing/leak-detection',
    '/services/plumbing/moen-flo-installation',
    '/services/plumbing/65-point-inspection',
    '/services/plumbing/burst-pipes',
    '/services/plumbing/water-damage',
    '/services/plumbing/backups',
    '/services/plumbing/no-hot-water',
    '/services/plumbing/backflow-prevention',
    '/services/plumbing/industrial-plumbing',
  ];

  // City-specific drain cleaning pages
  const cityDrainCleaningPages = [
    '/services/plumbing/temecula-drain-cleaning',
    '/services/plumbing/murrieta-drain-cleaning',
    '/services/plumbing/perris-drain-cleaning',
    '/services/plumbing/menifee-drain-cleaning',
    '/services/plumbing/canyon-lake-drain-cleaning',
    '/services/plumbing/lake-elsinore-drain-cleaning',
    '/services/plumbing/corona-drain-cleaning',
    '/services/plumbing/moreno-valley-drain-cleaning',
    '/services/plumbing/riverside-drain-cleaning',
    '/services/plumbing/hemet-drain-cleaning',
    '/services/plumbing/san-jacinto-drain-cleaning',
    '/services/plumbing/wildomar-drain-cleaning',
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
