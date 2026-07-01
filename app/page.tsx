import App from "@/components/App";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";
import { getGoogleReviews, formatRating, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Gardner Plumbing Co. | Reliable Plumbing Services in Riverside County",
  description: "Reliable plumbing services, water heater repair, and drain cleaning in Riverside County for over 30 years. Contact us for a free estimate!",
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: "Gardner Plumbing Co. | Reliable Plumbing Services in Riverside County",
    description: "Reliable plumbing services, water heater repair, and drain cleaning in Riverside County for over 30 years. Contact us for a free estimate!",
    url: '/',
    images: ['/gardner_logo.webp']
  }
};

export default async function HomePage() {
  const data = await getGoogleReviews();
  const ratingLabel =
    formatRating(data.rating) ?? formatRating(siteConfig.googleRatingFallback.rating) ?? "4.9";
  const reviewCount =
    formatReviewCount(data.userRatingCount) ??
    formatReviewCount(siteConfig.googleRatingFallback.count) ??
    "900+";

  return (
    <div className="bg-background text-foreground antialiased min-h-screen">
      <main>
        <App reviewCount={reviewCount} ratingLabel={ratingLabel} />
      </main>
    </div>
  );
}