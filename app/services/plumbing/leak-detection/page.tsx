import { LeakDetection } from "@/components/LeakDetection";
import Script from "next/script";
import { getGoogleReviews, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Leak Detection Services",
  description: "Accurate leak detection and repair services to protect your home and save water. Advanced technology for hidden leaks in Riverside County.",
  alternates: {
    canonical: '/services/plumbing/leak-detection'
  },
  openGraph: {
    title: "Leak Detection Services | Gardner Plumbing Co.",
    description: "Accurate leak detection and repair services to protect your home and save water.",
    url: '/services/plumbing/leak-detection',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data — must mirror visible content in components/LeakDetection.tsx
const faqs = [
  {
    question: "How do I know if I have a water leak?",
    answer: "Common signs include unexplained high water bills, the sound of running water when fixtures are off, warm spots on floors, wet or damp spots on walls or ceilings, mold or mildew growth, and low water pressure. If you notice any of these signs, call us for a professional leak detection inspection."
  },
  {
    question: "Can you find leaks without damaging my walls or floors?",
    answer: "Yes! We use non-invasive leak detection technology including acoustic sensors, thermal imaging cameras, and electronic detection equipment to pinpoint leaks without unnecessary damage to your property. We only open walls or floors when absolutely necessary for repairs."
  },
  {
    question: "How much can a hidden leak cost me?",
    answer: "A small hidden leak can waste 20-30 gallons per day, adding $50-100 to your monthly water bill. Larger leaks can waste hundreds of gallons daily and cost thousands in water damage if left undetected. Early detection saves both water and money."
  },
  {
    question: "Do you detect slab leaks?",
    answer: "Yes, we specialize in slab leak detection using advanced equipment to locate leaks under concrete foundations. Our technicians are experts at finding and repairing these challenging leaks with minimal disruption to your home."
  },
  {
    question: "How long does leak detection take?",
    answer: "Most residential leak detections take 1-3 hours depending on the property size and leak complexity. We use advanced equipment to quickly pinpoint leak locations, saving you time and minimizing disruption to your day."
  },
  {
    question: "Is leak detection covered by insurance?",
    answer: "Many homeowner's insurance policies cover leak detection and repair when it's related to sudden and accidental water damage. We can provide detailed documentation for your insurance claim and work directly with your insurance company."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Leak Detection", url: "/services/plumbing/leak-detection" }
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
  "name": "Leak Detection Services",
  "description": "Non-invasive water leak detection using acoustic sensors, thermal imaging, and electronic equipment. Specialists in slab leaks, hidden pipe leaks, and emergency leak response across Riverside County and neighboring communities.",
  "provider": {
    "@type": "Plumber",
    "name": "Gardner Plumbing Co.",
    "telephone": "+1-951-246-4337",
    "url": "https://gardnerplumbingco.com",
    "hasCredential": "CSLB #1073177"
  },
  "areaServed": serviceAreas,
  "serviceType": "Leak Detection",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$"
  }
};

export default async function LeakDetectionPage() {
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
        <LeakDetection reviewCount={reviewCount} />
      </main>
    </div>
  );
}
