import { WaterHeaterPage } from "@/components/WaterHeaterPage"; // 👈 match filename exactly
import { getGoogleReviews, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Water Heater Services",
  description: "Reliable water heater repair, replacement, and maintenance services in Riverside County. Tankless and traditional water heaters.",
  alternates: {
    canonical: '/services/plumbing/water-heater-service'
  },
  openGraph: {
    title: "Water Heater Services | Gardner Plumbing Co.",
    description: "Reliable water heater repair, replacement, and maintenance services.",
    url: '/services/plumbing/water-heater-service',
    images: ['/gardner_logo.webp']
  }
};

export default async function WHServicePage() {
  const reviewData = await getGoogleReviews();
  const reviewCount =
    reviewData.userRatingCount != null
      ? `${formatReviewCount(reviewData.userRatingCount)}+`
      : `${formatReviewCount(siteConfig.googleRatingFallback.count)}+`;

  return (
    <div className="bg-background text-foreground min-h-screen">

      <main>
        <WaterHeaterPage reviewCount={reviewCount} /> {/* 👈 match the component export name */}
      </main>

    </div>
  );
}
