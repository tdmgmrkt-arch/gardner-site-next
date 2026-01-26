import { TemeculaDrainCleaning } from "@/components/TemeculaDrainCleaning";
import Script from "next/script";

export const metadata = {
  title: "Temecula Drain Cleaning | Fast, Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Temecula, CA. Serving Old Town, Redhawk, Harveston & all neighborhoods. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/temecula-drain-cleaning'
  },
  openGraph: {
    title: "Temecula Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning serving all of Temecula. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/temecula-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data for structured data
const faqs = [
  {
    question: "Why do drains in Temecula homes clog more frequently?",
    answer: "Temecula's hard water contains high mineral content that creates buildup inside pipes over time. Combined with the area's mature trees (especially in older neighborhoods like Wolf Creek and Harveston), root intrusion is common. Regular professional cleaning prevents these issues from becoming major problems."
  },
  {
    question: "How quickly can you respond to drain emergencies in Temecula?",
    answer: "We typically arrive within 60-90 minutes for emergency drain cleaning calls in Temecula, including neighborhoods like Redhawk, Temeku Hills, and Old Town. Our service vehicles are strategically positioned throughout Southwest Riverside County for rapid response."
  },
  {
    question: "What's the difference between drain snaking and hydro-jetting?",
    answer: "Drain snaking uses a cable to break through clogs mechanically - it's effective for simple blockages. Hydro-jetting uses high-pressure water (up to 4000 PSI) to completely scour pipe walls, removing years of buildup. For Temecula homes with recurring clogs or slow drains, hydro-jetting provides a more thorough, longer-lasting solution."
  },
  {
    question: "Can you clean drains in older Temecula homes without damaging pipes?",
    answer: "Absolutely. We start every job with a video camera inspection to assess pipe condition before choosing the appropriate cleaning method. For older homes in areas like Old Town Temecula, we adjust our techniques and pressure levels to safely clean drains without risking pipe damage."
  },
  {
    question: "Do you service commercial properties in Temecula?",
    answer: "Yes, we provide drain cleaning for restaurants, wineries, retail centers, and office buildings throughout Temecula. We understand commercial properties require minimal disruption, so we offer flexible scheduling including after-hours and weekend service."
  },
  {
    question: "How can I prevent future drain clogs in my Temecula home?",
    answer: "We recommend annual professional drain cleaning as preventive maintenance, especially if you have mature trees on your property. Avoid pouring grease down drains, use drain screens to catch hair and debris, and consider enzyme treatments monthly. Our technicians provide customized prevention plans based on your specific property's needs."
  }
];

// Breadcrumb data
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Temecula Drain Cleaning", url: "/services/temecula-drain-cleaning" }
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
  "name": "Temecula Drain Cleaning",
  "description": "Professional drain cleaning services for residential and commercial properties in Temecula, CA. Same-day service, 24/7 emergency response.",
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
    "name": "Temecula",
    "sameAs": "https://en.wikipedia.org/wiki/Temecula,_California"
  },
  "serviceType": "Drain Cleaning",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$",
    "areaServed": "Temecula, CA"
  }
};

export default function TemeculaDrainCleaningPage() {
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
        <TemeculaDrainCleaning />
      </main>
    </div>
  );
}
