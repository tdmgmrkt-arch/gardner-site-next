/**
 * Server Component wrapper for Header.
 *
 * Fetches live Google review data (24h ISR cache) and passes
 * the rating label + compact badge node down to the Header client
 * component as props, keeping all Header client state untouched.
 */
import { Header } from "@/components/Header"
import GoogleRatingBadge from "@/components/GoogleRatingBadge"
import { getGoogleReviews, formatRating } from "@/lib/google-reviews"
import { siteConfig } from "@/lib/site-config"

export default async function HeaderShell() {
  const data = await getGoogleReviews()
  const ratingLabel =
    formatRating(data.rating) ??
    formatRating(siteConfig.googleRatingFallback.rating) ??
    "4.9"

  return (
    <Header
      ratingLabel={ratingLabel}
      ratingBadge={<GoogleRatingBadge variant="compact" />}
    />
  )
}
