// app/layout.tsx
import type { Metadata } from "next";
import "./global.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { AcsbScript } from "@/components/AcsbScript"; // <-- IMPORT IT

export const metadata: Metadata = {
  metadataBase: new URL('https://gardnerplumbingco.com'),
  title: {
    template: '%s | Gardner Plumbing Co.',
    default: 'Gardner Plumbing Co. | Reliable Plumbing Services in Riverside County'
  },
  description: 'Reliable plumbing services, water heater repair, and drain cleaning in Riverside County for over 30 years. Licensed, insured, and available 24/7.',
  keywords: ['plumbing services', 'Riverside County plumber', 'water heater repair', 'drain cleaning', 'emergency plumber', 'Temecula plumber', 'Murrieta plumber'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Gardner Plumbing Co.',
    images: [
      {
        url: '/gardner_logo.webp',
        width: 1200,
        height: 630,
        alt: 'Gardner Plumbing Co. Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "Gardner Plumbing Co.",
    "image": "https://gardnerplumbingco.com/gardner_logo.webp",
    "url": "https://gardnerplumbingco.com",
    "telephone": "+1-951-428-5551",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Temecula",
      "addressRegion": "CA",
      "addressCountry": "US",
      "areaServed": [
        "Temecula", "Murrieta", "Perris", "Menifee", "Canyon Lake",
        "Lake Elsinore", "Corona", "Moreno Valley", "Riverside",
        "Hemet", "San Jacinto", "Wildomar"
      ]
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.4936,
      "longitude": -117.1484
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/gardnerplumbingco",
      "https://www.google.com/search?q=Gardner+Plumbing+Company"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "400",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Reliable plumbing services in Riverside County for over 30 years. Licensed, insured, and available 24/7 for emergency plumbing services.",
    "paymentAccepted": "Cash, Credit Card, Check, Financing Available",
    "currenciesAccepted": "USD",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plumbing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Plumbing Services",
            "description": "24/7 emergency plumbing repair and service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Water Heater Service",
            "description": "Water heater repair, replacement, and installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drain Cleaning",
            "description": "Professional drain cleaning and clog removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Leak Detection",
            "description": "Advanced leak detection and repair services"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>

      {/* Existing ServiceTitan Script */}
      <Script id="servicetitan-dni" strategy="afterInteractive">
        {`
          // ... your servicetitan script
        `}
      </Script>

      {/* --- YOUR NEW SCRIPT (FIXED) --- */}
      <AcsbScript />
    </html>
  );
}