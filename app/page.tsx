import App from "@/components/App";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";
import { getGoogleReviews, formatRating, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Gardner Plumbing Co. | Reliable Plumbing Services in Riverside County",
  description: "Family-owned plumbing in Riverside County for 30+ years. Written estimates, no trip fees, clean visits, and a 30-day guarantee — or we come back free.",
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: "Gardner Plumbing Co. | Reliable Plumbing Services in Riverside County",
    description: "Family-owned plumbing in Riverside County for 30+ years. Written estimates, no trip fees, clean visits, and a 30-day guarantee — or we come back free.",
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