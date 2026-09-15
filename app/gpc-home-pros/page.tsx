import type { Metadata } from "next";
import { NowGpcHomePros, NOW_GPC_FAQS } from "@/components/NowGpcHomePros";

const TITLE = "Gardner Plumbing Co. is Now GPC Home Pros";
const DESCRIPTION =
  "Gardner Plumbing Co. has changed its name to GPC Home Pros. Same family-owned team, same technicians, same phone number (951) 246-4337 — now offering plumbing, HVAC, and electrical services across Riverside County.";

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Gardner Plumbing Co." template,
  // which would otherwise render "...is Now GPC Home Pros | Gardner Plumbing Co."
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/now-gpc-home-pros",
  },
  openGraph: {
    title: `${TITLE} | GPC Home Pros`,
    description: DESCRIPTION,
    url: "/now-gpc-home-pros",
    images: ["/gardner_logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | GPC Home Pros`,
    description: DESCRIPTION,
  },
};

/* ─────────────────────────────────────────────────────
   JSON-LD: WebPage + FAQPage + BreadcrumbList

   The Organization block carries `alternateName` so search
   engines and AI assistants can resolve the old name to the
   new entity. This page is the canonical public record of
   the name change — keep it indexable indefinitely.
   ───────────────────────────────────────────────────── */
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "https://gardnerplumbingco.com/now-gpc-home-pros",
  datePublished: "2026-09-15",
  about: {
    "@type": "Organization",
    "@id": "https://gardnerplumbingco.com/#organization",
    name: "GPC Home Pros",
    alternateName: [
      "Gardner Plumbing Co.",
      "Gardner Plumbing Company",
      "Gardner Plumbing",
    ],
    url: "https://gardnerplumbingco.com",
    telephone: "+1-951-246-4337",
    logo: "https://gardnerplumbingco.com/gardner_logo.webp",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Murrieta",
      addressRegion: "CA",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.facebook.com/people/Gardner-Plumbing-Company/100063665179161/",
      "https://www.instagram.com/gardnerplumbingco/",
      "https://www.yelp.com/biz/gardner-plumbing-company-murrieta-9",
    ],
  },
  breadcrumb: {
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
        name: "Gardner Plumbing Co. is Now GPC Home Pros",
        item: "https://gardnerplumbingco.com/now-gpc-home-pros",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: NOW_GPC_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function NowGpcHomeProsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NowGpcHomePros />
    </>
  );
}
