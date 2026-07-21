import { Inspection } from "@/components/Inspection";
import Script from "next/script";

export const metadata = {
  title: "65-Point Plumbing Inspection",
  description: "Comprehensive 65-point plumbing inspections to detect issues early and ensure safety. Thorough home inspections in Riverside County.",
  alternates: {
    canonical: '/services/plumbing/65-point-inspection'
  },
  openGraph: {
    title: "65-Point Plumbing Inspection | Gardner Plumbing Co.",
    description: "Comprehensive plumbing inspections to detect issues early and ensure safety.",
    url: '/services/plumbing/65-point-inspection',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data — must mirror visible content in components/Inspection.tsx
const faqs = [
  {
    question: "What is a 65-point plumbing inspection?",
    answer: "It's a comprehensive, top-to-bottom evaluation of your home's entire plumbing system. Our technicians follow a detailed checklist covering over 65 points to assess the health, safety, and efficiency of your pipes, fixtures, and appliances."
  },
  {
    question: "How long does the inspection take?",
    answer: "A typical 65-point inspection takes about 60 to 90 minutes. The duration can vary slightly depending on the size and complexity of your home's plumbing system. We are thorough and take the time needed to do it right."
  },
  {
    question: "Why is a regular plumbing inspection so important?",
    answer: "Proactive inspections help you find small, hidden issues like minor leaks, corrosion, or pressure problems before they turn into major, costly disasters like burst pipes or water damage. It's the best way to maintain your home and save money in the long run."
  },
  {
    question: "How often should I have my plumbing inspected?",
    answer: "We recommend a full plumbing inspection annually. This allows us to catch any developing issues, perform preventative maintenance like a water heater flush, and ensure your system remains in peak condition year after year."
  },
  {
    question: "What do I get after the inspection is complete?",
    answer: "You will receive a detailed report from our technician outlining the health of your plumbing system. We'll discuss any areas of concern, provide clear recommendations for repairs or improvements, and answer all your questions."
  },
  {
    question: "Is there a charge for the 65-point inspection?",
    answer: "Please call our office to inquire about our current offers. We often provide this valuable service at a significant discount or as part of our home maintenance membership plan."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "65-Point Plumbing Inspection", url: "/services/plumbing/65-point-inspection" }
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
  "name": "65-Point Plumbing Inspection",
  "description": "Comprehensive 65-point plumbing inspection covering pipes, fixtures, water heaters, and gas lines. Detailed written report and expert recommendations. Serving Riverside County and neighboring communities.",
  "provider": {
    "@type": "Plumber",
    "name": "Gardner Plumbing Co.",
    "telephone": "+1-951-246-4337",
    "url": "https://gardnerplumbingco.com",
    "hasCredential": "CSLB #1073177"
  },
  "areaServed": serviceAreas,
  "serviceType": "Plumbing Inspection",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$"
  }
};

export default function InspectionPage() {
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
      <Inspection />
    </div>
  );
}
