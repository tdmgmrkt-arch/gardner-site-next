import type { Metadata } from "next";
import Script from "next/script";
import { ServiceAreasPage as ServiceAreas } from "@/components/ServiceAreasPage";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Service Areas — Gardner Plumbing Co. Riverside County",
  description:
    "Gardner Plumbing Co. serves 25 cities across Riverside County and neighboring communities. 30+ years, CSLB #1073177.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    title: "Service Areas — Gardner Plumbing Co. Riverside County",
    description:
      "Gardner Plumbing Co. serves 25 cities across Riverside County and neighboring communities. 30+ years, CSLB #1073177.",
    url: "/service-areas",
    images: [
      {
        url: "/GardnerTechVanTools.webp",
        width: 1200,
        height: 630,
        alt: "Gardner Plumbing Co. technician with service van — serving 25 cities across Riverside County and neighboring communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas — Gardner Plumbing Co. Riverside County",
    description:
      "25 cities served across Riverside County and neighboring communities. CSLB #1073177.",
  },
};

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://gardnerplumbingco.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://gardnerplumbingco.com/about-us",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Service Areas",
      item: "https://gardnerplumbingco.com/service-areas",
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Service Areas — Gardner Plumbing Co. Riverside County",
  description:
    "Gardner Plumbing Co. serves 25 cities across Riverside County and neighboring communities. Licensed under CSLB #1073177 with 30+ years of experience.",
  url: "https://gardnerplumbingco.com/service-areas",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    url: "https://gardnerplumbingco.com",
    name: "Gardner Plumbing Co.",
  },
  breadcrumb: breadcrumbSchema,
  dateModified: "2026-06-30",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Gardner Plumbing Co.",
  image: "https://gardnerplumbingco.com/GardnerTechVanTools.webp",
  url: "https://gardnerplumbingco.com",
  telephone: "+1-951-246-4337",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Murrieta",
    addressRegion: "CA",
    postalCode: "92562",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.4936,
    longitude: -117.1484,
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "CSLB License #1073177",
    recognizedBy: {
      "@type": "Organization",
      name: "Contractors State License Board",
      sameAs: "https://www.cslb.ca.gov",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "900",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: [
    { "@type": "City", name: "Banning", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Beaumont", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Calimesa", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Cathedral City", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Cherry Valley", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Corona", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Eastvale", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Garnet", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Hemet", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Jurupa Valley", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Lake Elsinore", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Menifee", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Mentone", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Moreno Valley", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Murrieta", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "North Palm Springs", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Palm Springs", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Palm Desert", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Pedley", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Perris", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Redlands", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Riverside", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "San Jacinto", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Temecula", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "City", name: "Yucaipa", containedInPlace: { "@type": "State", name: "California" } },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      description: "Emergency service only",
    },
  ],
  sameAs: [
    "https://www.facebook.com/people/Gardner-Plumbing-Company/100063665179161/",
    "https://www.instagram.com/gardnerplumbingco/",
    "https://www.yelp.com/biz/gardner-plumbing-company-murrieta-9",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far does Gardner Plumbing travel from Murrieta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gardner Plumbing Co. regularly travels up to roughly 45 miles from our Murrieta headquarters. That radius covers all 25 cities in our service area, from Eastvale and Corona to the north, Palm Desert to the east, and San Jacinto to the northeast. For exact coverage in your neighborhood, call (951) 246-4337.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve unincorporated Riverside County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unincorporated communities within Riverside County — including Garnet, Pedley, Mentone, and Cherry Valley — fall inside our service area. Dispatchers serve on geography, not city-limit lines.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide emergency plumbing service to Palm Springs and surrounding cities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Gardner Plumbing Co. provides 24/7 emergency dispatch to Palm Springs, North Palm Springs, Cathedral City, Palm Desert, and Garnet. Emergency calls receive the same priority dispatch process regardless of location.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a trip charge for cities farther from Murrieta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Gardner Plumbing Co. does not charge trip fees or service-call fees to any of our 25 service cities. The Gardner Promise includes free in-home estimates and no dispatch fee — regardless of whether the call is in Murrieta or Palm Desert.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve commercial properties across the service area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Gardner Plumbing Co. serves commercial and industrial properties throughout all 25 cities. Commercial plumbing, hydro jetting, backflow prevention, and industrial plumbing services are available across the full service area.",
      },
    },
    {
      "@type": "Question",
      name: "Does Gardner Plumbing serve HOA communities and multi-family properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Gardner Plumbing Co. works with HOAs, property management companies, and multi-family properties throughout Riverside County and neighboring communities. We handle everything from individual unit repairs to common-area plumbing and main-line maintenance.",
      },
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServiceAreasPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="schema-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="schema-local-business-service-areas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="schema-faq-service-areas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />
      <ServiceAreas />
    </>
  );
}
