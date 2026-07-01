import { LakeElsinoreDrainCleaning } from "@/components/LakeElsinoreDrainCleaning";
import Script from "next/script";

export const metadata = {
  title: "Lake Elsinore Drain Cleaning | Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Lake Elsinore, CA. Serving downtown, lakefront properties, Canyon Hills & Rosetta Canyon. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/lake-elsinore-drain-cleaning'
  },
  openGraph: {
    title: "Lake Elsinore Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Lake Elsinore. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/lake-elsinore-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data for structured data
const faqs = [
  {
    question: "Why do Lake Elsinore drain problems differ by neighborhood?",
    answer: "Lake Elsinore presents unique drainage challenges based on location. Downtown Lake Elsinore has older infrastructure with aging pipes that require careful handling. Lakefront properties deal with high water tables and soil moisture affecting drain lines. Newer developments in Canyon Hills and Rosetta Canyon may have different pipe materials and layouts. Our technicians understand these neighborhood-specific issues and adjust our approach accordingly."
  },
  {
    question: "How does lake proximity affect drainage systems?",
    answer: "Properties near the lake face distinctive challenges. Higher groundwater levels can put pressure on drain lines, and soil conditions near the water are more prone to shifting, which can stress pipes. Lakefront homes also tend to have more landscape irrigation, increasing water movement through the soil. We account for these factors when servicing Lake Elsinore waterfront properties, using techniques that address moisture-related drainage issues."
  },
  {
    question: "Can you handle drain issues in older Lake Elsinore homes?",
    answer: "Absolutely. Downtown Lake Elsinore and established neighborhoods contain homes with decades-old plumbing systems. We start with camera inspections to assess pipe condition before selecting cleaning methods. For older pipes, we use gentler techniques that effectively clear blockages without risking damage to aging infrastructure. Our experience with Lake Elsinore's historic properties ensures safe, effective service."
  },
  {
    question: "What causes seasonal drainage problems in Lake Elsinore?",
    answer: "Lake Elsinore experiences distinct seasonal drainage patterns. During dry summer months, soil contracts and tree roots aggressively seek water, often invading sewer lines. Winter rains can wash debris into drain systems and expose weaknesses in pipe joints. Lake level fluctuations throughout the year also affect groundwater and soil conditions near the shore. We recommend preventive maintenance before problem seasons to avoid emergencies."
  },
  {
    question: "Do you service both residential and recreational properties?",
    answer: "Yes, we handle all property types throughout Lake Elsinore. From single-family homes in Rosetta Canyon to lakefront vacation properties and downtown commercial buildings, our team has the experience and equipment to service any drain system. We understand that recreational properties have different usage patterns and may need specialized scheduling, which we accommodate."
  },
  {
    question: "How quickly can you respond to drain emergencies in Lake Elsinore?",
    answer: "We typically arrive within 60-90 minutes for emergency drain calls throughout Lake Elsinore, including Canyon Hills, downtown areas, and lakefront neighborhoods. Our service vehicles are strategically positioned in Southwest Riverside County for rapid response. We provide 24/7 emergency service because we understand that drain backups near the lake or in older downtown properties can't wait for business hours."
  }
];

// Breadcrumb data
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Lake Elsinore Drain Cleaning", url: "/services/lake-elsinore-drain-cleaning" }
];

// Generate FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Generate Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://gardnerplumbingco.com${item.url}`
  }))
};

// Service Schema with Local Business
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Lake Elsinore Drain Cleaning",
  "description": "Professional drain cleaning services for residential and commercial properties in Lake Elsinore, CA. Same-day service, 24/7 emergency response.",
  "provider": {
    "@type": "Plumber",
    "name": "Gardner Plumbing Co.",
    "telephone": "+1-951-428-5551",
    "url": "https://gardnerplumbingco.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Murrieta",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Lake Elsinore",
    "sameAs": "https://en.wikipedia.org/wiki/Lake_Elsinore,_California"
  },
  "serviceType": "Drain Cleaning",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$",
    "areaServed": "Lake Elsinore, CA"
  }
};

export default function LakeElsinoreDrainCleaningPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main>
        <LakeElsinoreDrainCleaning />
      </main>
    </div>
  );
}
