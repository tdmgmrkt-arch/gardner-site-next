import { BurstPipes } from "@/components/BurstPipes";
import Script from "next/script";
import { getGoogleReviews, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Emergency Burst Pipe Repair",
  description: "24/7 emergency burst pipe and leak repair services in Riverside County. We offer rapid response to prevent water damage, using advanced leak detection and repair techniques.",
  alternates: {
    canonical: '/services/plumbing/burst-pipes'
  },
  openGraph: {
    title: "Emergency Burst Pipe Repair | Gardner Plumbing Co.",
    description: "24/7 emergency burst pipe and leak repair services in Riverside County.",
    url: '/services/plumbing/burst-pipes',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data — must mirror visible content in components/BurstPipes.tsx
const faqs = [
  {
    question: "What's the first thing I should do if a pipe bursts?",
    answer: "Immediately locate and shut off your home's main water valve to stop the flow of water. Then, call us right away for emergency service. If the leak is near electrical outlets, turn off the power at the breaker box as a safety precaution."
  },
  {
    question: "How do you find leaks that are hidden behind walls?",
    answer: "We use advanced, non-invasive leak detection equipment, including acoustic sensors and thermal imaging cameras. This technology allows us to pinpoint the exact location of the leak with minimal damage to your property."
  },
  {
    question: "How long does a pipe repair take?",
    answer: "Most common pipe repairs can be completed within 1 to 3 hours. More complex situations, like a main line break under a slab, may take longer. We always aim to work as quickly and efficiently as possible to minimize disruption."
  },
  {
    question: "Can you fix the water damage as well?",
    answer: "Yes, we are a full-service provider. Our team can handle both the immediate pipe repair and the subsequent water damage restoration, including water extraction, structural drying, and sanitization to prevent mold growth."
  },
  {
    question: "How can I prevent my pipes from bursting in the future?",
    answer: "Regular plumbing inspections can identify corroded or weak pipes before they fail. For cold weather, insulating exposed pipes in basements, crawlspaces, and attics is the most effective way to prevent freezing and bursting."
  },
  {
    question: "Do you offer repiping services for old homes?",
    answer: "Absolutely. If you have an older home with galvanized or polybutylene pipes, we offer complete whole-home repiping services using modern, durable materials like copper and PEX to ensure a reliable, long-lasting plumbing system."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Emergency Burst Pipe Repair", url: "/services/plumbing/burst-pipes" }
];

const serviceAreas = [
  "Banning, CA", "Beaumont, CA", "Calimesa, CA", "Cathedral City, CA",
  "Cherry Valley, CA", "Corona, CA", "Eastvale, CA", "Garnet, CA",
  "Hemet, CA", "Jurupa Valley, CA", "Lake Elsinore, CA", "Menifee, CA",
  "Mentone, CA", "Moreno Valley, CA", "Murrieta, CA", "North Palm Springs, CA",
  "Palm Springs, CA", "Palm Desert, CA", "Pedley, CA", "Perris, CA",
  "Redlands, CA", "Riverside, CA", "San Jacinto, CA", "Temecula, CA", "Yucaipa, CA"
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Emergency Burst Pipe Repair",
  "description": "24/7 emergency burst pipe repair, leak detection, slab leak repair, frozen pipe thawing, and whole-home repiping for residential and commercial properties across Riverside County and neighboring communities.",
  "provider": {
    "@type": "Plumber",
    "name": "Gardner Plumbing Co.",
    "telephone": "+1-951-246-4337",
    "url": "https://gardnerplumbingco.com",
    "hasCredential": "CSLB #1073177"
  },
  "areaServed": serviceAreas,
  "serviceType": "Emergency Burst Pipe Repair",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$"
  }
};

export default async function BurstPipesPage() {
  const reviewData = await getGoogleReviews();
  const reviewCount =
    reviewData.userRatingCount != null
      ? `${formatReviewCount(reviewData.userRatingCount)}+`
      : `${formatReviewCount(siteConfig.googleRatingFallback.count)}+`;

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
        <BurstPipes reviewCount={reviewCount} />
      </main>
    </div>
  );
}
