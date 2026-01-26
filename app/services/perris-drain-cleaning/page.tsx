import { PerrisDrainCleaning } from "@/components/PerrisDrainCleaning";
import Script from "next/script";

export const metadata = {
  title: "Perris Drain Cleaning | Professional Plumbing Services | Gardner Plumbing",
  description: "Expert drain cleaning in Perris, CA. Fast response, advanced equipment, 24/7 emergency service. Same-day appointments available. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/perris-drain-cleaning'
  },
  openGraph: {
    title: "Perris Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Perris. 30+ years experience, licensed technicians, guaranteed results.",
    url: '/services/perris-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data for structured data
const faqs = [
  {
    question: "Why are drain clogs so common in Perris?",
    answer: "Perris sits in an area with naturally high mineral content in the water supply, which causes significant scale buildup inside pipes. Many older neighborhoods in Perris also have aging cast iron or clay sewer pipes that are prone to root intrusion and deterioration. The combination of hard water deposits and older infrastructure makes regular drain maintenance essential for Perris homeowners."
  },
  {
    question: "What areas of Perris do you serve for drain cleaning?",
    answer: "We provide drain cleaning throughout all of Perris, including established neighborhoods near Perris Boulevard, newer developments off the 215 freeway, properties around Perris Lake, and rural areas on the city's outskirts. We're familiar with the unique plumbing challenges in different parts of Perris and arrive prepared with the right equipment for your specific location."
  },
  {
    question: "How long does professional drain cleaning take?",
    answer: "Simple drain cleaning typically takes 30-60 minutes. More complex jobs involving main sewer lines or severe blockages may require 2-3 hours, especially if we need to perform a video inspection first. We'll provide a time estimate when we assess your specific situation. Most Perris homeowners find we complete their drain cleaning faster than expected."
  },
  {
    question: "Should I try chemical drain cleaners before calling?",
    answer: "We strongly advise against chemical drain cleaners. They rarely solve the underlying problem and often damage pipes, especially in older Perris homes with metal piping. The chemicals can also create dangerous fumes and make our work more hazardous. Professional drain cleaning is safer, more effective, and actually costs less than repeatedly buying chemical products that don't work."
  },
  {
    question: "What if my drain clogs again after you clean it?",
    answer: "All our drain cleaning services include a 30-day warranty. If the same drain clogs within 30 days, we'll return to re-clear it at no charge. This rarely happens because we thoroughly clean drains rather than just punching holes through blockages. However, the guarantee provides complete peace of mind for Perris homeowners."
  },
  {
    question: "Can drain cleaning prevent future plumbing problems?",
    answer: "Absolutely. Regular professional drain cleaning removes buildup before it causes complete blockages, prevents sewage backups that lead to water damage, identifies developing problems through camera inspection, and extends the life of your plumbing system. Many Perris homeowners save thousands in avoided emergency repairs through annual preventive drain cleaning."
  }
];

// Breadcrumb data
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Perris Drain Cleaning", url: "/services/perris-drain-cleaning" }
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
  "name": "Perris Drain Cleaning",
  "description": "Professional drain cleaning services for residential and commercial properties in Perris, CA. Same-day service, 24/7 emergency response.",
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
    "name": "Perris",
    "sameAs": "https://en.wikipedia.org/wiki/Perris,_California"
  },
  "serviceType": "Drain Cleaning",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$",
    "areaServed": "Perris, CA"
  }
};

export default function PerrisDrainCleaningPage() {
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
        <PerrisDrainCleaning />
      </main>
    </div>
  );
}
