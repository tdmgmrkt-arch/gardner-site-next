import { CanyonLakeDrainCleaning } from "@/components/CanyonLakeDrainCleaning";
import Script from "next/script";

export const metadata = {
  title: "Canyon Lake Drain Cleaning | Gated Community Specialists | Gardner Plumbing",
  description: "Expert drain cleaning in Canyon Lake, CA. Serving lakefront & hillside properties, septic & sewer systems. 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/canyon-lake-drain-cleaning'
  },
  openGraph: {
    title: "Canyon Lake Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning for Canyon Lake's gated community. Specialized service for unique property needs.",
    url: '/services/canyon-lake-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data for structured data
const faqs = [
  {
    question: "Why do Canyon Lake homes have unique drain challenges?",
    answer: "Canyon Lake's gated community features a mix of lakefront properties, hillside homes, and properties on septic systems rather than city sewer. Lakefront homes often deal with additional moisture and soil movement affecting drain lines, while hillside properties face challenges from slopes and landscaping. Many homes also have older plumbing systems that require specialized knowledge to service properly."
  },
  {
    question: "Do you service both city sewer and septic systems in Canyon Lake?",
    answer: "Yes. We're experienced with both Canyon Lake's city sewer connections and the many properties on private septic systems. Our technicians understand the different requirements and regulations for each system type. We can safely clean drains connected to septic systems without damaging the delicate bacterial balance necessary for proper septic function."
  },
  {
    question: "How do you access homes in Canyon Lake's gated community?",
    answer: "We work with Canyon Lake homeowners to arrange access through the gate. When you schedule service, we'll coordinate arrival times and gate entry procedures. For emergency calls, you can provide temporary gate access codes, or we can meet you at the gate entrance. We're familiar with the community's access requirements and make the process smooth."
  },
  {
    question: "Can tree roots from lakeside landscaping damage my drains?",
    answer: "Absolutely. Canyon Lake's lush landscaping, especially mature trees near the lake and throughout hillside properties, often send roots into sewer lines searching for water. These roots can completely block pipes over time. Our video camera inspections identify root intrusions, and hydro-jetting services can cut through and remove roots while thoroughly cleaning your pipes."
  },
  {
    question: "What's included in your drain cleaning service?",
    answer: "Our comprehensive drain cleaning includes initial assessment and problem diagnosis, video camera inspection when needed, selection of appropriate cleaning method (snaking or hydro-jetting), complete blockage removal, verification that water flows properly, cleanup of work area, and detailed explanation of what we found and any preventive recommendations. Everything is included in our upfront price quote."
  },
  {
    question: "How often should Canyon Lake homeowners schedule drain cleaning?",
    answer: "We recommend annual drain cleaning for most Canyon Lake homes, especially properties with mature landscaping, older plumbing systems, or those on septic systems. Lakefront properties may benefit from twice-yearly service due to increased moisture and tree root activity. Regular maintenance prevents emergency situations and extends the life of your plumbing infrastructure."
  }
];

// Breadcrumb data
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Canyon Lake Drain Cleaning", url: "/services/canyon-lake-drain-cleaning" }
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
  "name": "Canyon Lake Drain Cleaning",
  "description": "Professional drain cleaning services for residential and commercial properties in Canyon Lake, CA. Same-day service, 24/7 emergency response.",
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
    "name": "Canyon Lake",
    "sameAs": "https://en.wikipedia.org/wiki/Canyon_Lake,_California"
  },
  "serviceType": "Drain Cleaning",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$",
    "areaServed": "Canyon Lake, CA"
  }
};

export default function CanyonLakeDrainCleaningPage() {
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
        <CanyonLakeDrainCleaning />
      </main>
    </div>
  );
}
