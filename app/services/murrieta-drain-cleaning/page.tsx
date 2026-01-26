import { MurrietaDrainCleaning } from "@/components/MurrietaDrainCleaning";
import Script from "next/script";

export const metadata = {
  title: "Murrieta Drain Cleaning | Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Murrieta, CA. Serving Greer Ranch, Spencer's Crossing, The Village & all areas. 24/7 emergency service. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/murrieta-drain-cleaning'
  },
  openGraph: {
    title: "Murrieta Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Murrieta. Same-day service, licensed technicians, 30-day guarantee.",
    url: '/services/murrieta-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data for structured data
const faqs = [
  {
    question: "What causes drains to clog in Murrieta homes?",
    answer: "Murrieta's rapidly growing neighborhoods, from Greer Ranch to Spencer's Crossing, often have newer plumbing that still accumulates soap scum, hair, food particles, and grease over time. Many properties in areas like Wildomar Heights and Vintage Hills also deal with tree roots from landscape trees penetrating sewer lines, especially during our dry summer months when roots seek moisture."
  },
  {
    question: "How much does professional drain cleaning cost in Murrieta?",
    answer: "Drain cleaning costs vary based on the severity and location of the blockage. Simple drain snaking typically ranges from $150-$300, while more comprehensive hydro-jetting service runs $350-$600. We provide free estimates and discuss all options before starting work, so you'll know the exact cost for your specific situation."
  },
  {
    question: "Will drain cleaning damage my Murrieta home's plumbing?",
    answer: "No. Professional drain cleaning is safe when performed by licensed technicians. We always start with a camera inspection to assess pipe condition, especially important in neighborhoods with varying home ages like The Village and Copper Canyon. This allows us to select the appropriate cleaning method - whether gentle snaking or more aggressive hydro-jetting - based on your specific pipe material and condition."
  },
  {
    question: "How often should I schedule drain cleaning maintenance?",
    answer: "For most Murrieta homes, annual drain cleaning is ideal preventive maintenance. However, homes with large families, properties on sewer systems (rather than septic), or houses with mature landscaping may benefit from cleaning every 6-8 months. We can assess your specific situation and recommend a maintenance schedule."
  },
  {
    question: "Can you clean main sewer lines or just individual drains?",
    answer: "We handle both. Whether you need a single bathroom sink cleared or your entire main sewer line serviced, our equipment handles jobs of all sizes. Main sewer line cleaning is particularly common in older Murrieta neighborhoods where tree root intrusion affects the line running from your home to the street."
  },
  {
    question: "Do you offer any guarantees on drain cleaning work?",
    answer: "Yes. All our drain cleaning services come with a 30-day guarantee. If the same drain clogs again within 30 days, we'll return to re-clear it at no additional charge. This guarantee reflects our confidence in our thorough cleaning methods and gives you complete peace of mind."
  }
];

// Breadcrumb data
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Murrieta Drain Cleaning", url: "/services/murrieta-drain-cleaning" }
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
  "name": "Murrieta Drain Cleaning",
  "description": "Professional drain cleaning services for residential and commercial properties in Murrieta, CA. Same-day service, 24/7 emergency response.",
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
    "name": "Murrieta",
    "sameAs": "https://en.wikipedia.org/wiki/Murrieta,_California"
  },
  "serviceType": "Drain Cleaning",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$",
    "areaServed": "Murrieta, CA"
  }
};

export default function MurrietaDrainCleaningPage() {
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
        <MurrietaDrainCleaning />
      </main>
    </div>
  );
}
