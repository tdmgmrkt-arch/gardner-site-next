import { WildomarDrainCleaning } from "@/components/WildomarDrainCleaning";
import Script from "next/script";

export const metadata = {
  title: "Wildomar Drain Cleaning | Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Wildomar, CA. Serving Windsong Valley, Trilogy & I-15 corridor areas. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/wildomar-drain-cleaning'
  },
  openGraph: {
    title: "Wildomar Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Wildomar. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/wildomar-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data for structured data
const faqs = [
  {
    question: "Why should newer homes in Wildomar need drain cleaning?",
    answer: "Wildomar has experienced significant residential growth over recent years, with many homes built within the last decade. While newer plumbing systems are generally more reliable than older infrastructure, they still benefit from preventive drain maintenance for several reasons. New construction can leave debris like concrete, drywall, or grout in drain lines that surfaces over time. Post-construction settling can shift pipes slightly, creating low spots where debris accumulates. Families moving into new homes may not yet understand their system's limitations. Establishing preventive maintenance habits early prevents problems from developing and extends your plumbing system's lifespan significantly."
  },
  {
    question: "What preventive maintenance do you recommend for Wildomar homes?",
    answer: "Preventive maintenance is particularly valuable in Wildomar's newer developments because it establishes good practices early and prevents problems before they start. We recommend annual drain cleaning for most family homes, with the first service occurring within your home's first year to remove any construction debris and verify everything installed correctly. For larger families or homes with heavy usage, consider service twice yearly. Video camera inspections every few years document your system's condition and identify any developing issues early. Avoid chemical drain cleaners that can damage modern PVC pipes. Simple practices like using drain screens and avoiding grease disposal prevent many common problems. Preventive maintenance costs far less than emergency repairs."
  },
  {
    question: "Do you provide family-friendly service for Wildomar households?",
    answer: "Absolutely. Wildomar's character is predominantly family-oriented, and we've developed service approaches that respect busy family schedules and household routines. We offer flexible scheduling including evenings and weekends to accommodate working parents. Our technicians work efficiently to minimize disruption to your family's daily activities. We communicate clearly with homeowners about what we're doing and why, and we're happy to answer children's questions about how plumbing works. We respect your home by wearing shoe covers and cleaning up thoroughly after service. Our goal is making drain service as stress-free as possible for Wildomar families."
  },
  {
    question: "How quickly can you respond to calls in Wildomar's growing areas?",
    answer: "We maintain excellent response times throughout Wildomar despite the city's ongoing expansion and growth. Our service area includes all of Wildomar from established neighborhoods like Windsong Valley to newer developments throughout the I-15 corridor and Trilogy community. We typically arrive within 60-90 minutes for emergency calls anywhere in Wildomar. For scheduled maintenance appointments, we offer flexible timing that works with your family's schedule. As Wildomar continues growing, we're committed to maintaining our service quality and response times throughout the entire community. Our strategic positioning in Southwest Riverside County allows us to serve Wildomar efficiently."
  },
  {
    question: "What drain issues are most common in Wildomar's modern homes?",
    answer: "While Wildomar's newer construction experiences fewer drain problems than older communities, certain issues are still common. Construction debris from building can lodge in pipes and surface months or years later. Families with young children sometimes deal with toys or other items accidentally flushed. Modern low-flow toilets, while water-efficient, sometimes struggle with certain materials. Hair accumulation in shower drains affects homes regardless of age. Kitchen grease disposal remains a problem even in new homes. Landscaping installation can disturb buried drain lines. The good news is that modern PVC plumbing responds very well to professional cleaning, and problems caught early are usually simple to resolve."
  },
  {
    question: "Do you service the entire Wildomar expansion area?",
    answer: "Yes, we provide comprehensive coverage throughout all of Wildomar's residential areas including established neighborhoods and newer expansion zones. As Wildomar has grown along the I-15 corridor, we've maintained service to all areas including Windsong Valley, Trilogy, and newer developments throughout the city. We understand that rapid growth sometimes means infrastructure is still catching up with population, and we're committed to serving Wildomar residents regardless of where you're located. Whether your home is in an established neighborhood or a brand-new development, you receive the same professional drain cleaning service. Many Wildomar families have used our services since moving in and refer neighbors and friends."
  }
];

// Breadcrumb data
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Wildomar Drain Cleaning", url: "/services/wildomar-drain-cleaning" }
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
  "name": "Wildomar Drain Cleaning",
  "description": "Professional drain cleaning services for residential and commercial properties in Wildomar, CA. Same-day service, 24/7 emergency response.",
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
    "name": "Wildomar",
    "sameAs": "https://en.wikipedia.org/wiki/Wildomar,_California"
  },
  "serviceType": "Drain Cleaning",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$",
    "areaServed": "Wildomar, CA"
  }
};

export default function WildomarDrainCleaningPage() {
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
        <WildomarDrainCleaning />
      </main>
    </div>
  );
}
