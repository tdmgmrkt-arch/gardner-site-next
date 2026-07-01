import { siteConfig } from "@/lib/site-config"
import { formatRating, formatReviewCount, getGoogleReviews } from "@/lib/google-reviews"
import { cn } from "@/components/ui/utils"

/* Inline Google "G" mark — official brand colors */
function GoogleGMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

type Props = {
  /**
   * "dark"    — full glassmorphism badge with red border accent, for dark hero/section backgrounds (default)
   * "compact" — single-line pill, smaller text, for header top bar use
   */
  variant?: "dark" | "compact"
  className?: string
  /** Optional link target — defaults to Google reviews URL from siteConfig. */
  href?: string
}

/**
 * Server Component. Fetches live Google rating + review count via the
 * Places API (New) with 24h ISR cache. Falls back to siteConfig.googleRatingFallback
 * when the Places API is not configured or returns an error.
 */
export default async function GoogleRatingBadge({
  variant = "dark",
  className,
  href = siteConfig.social.google,
}: Props) {
  const data = await getGoogleReviews()

  const rating =
    formatRating(data.rating) ??
    formatRating(siteConfig.googleRatingFallback.rating)
  const count =
    formatReviewCount(data.userRatingCount) ??
    formatReviewCount(siteConfig.googleRatingFallback.count)

  if (!rating) return null

  const isCompact = variant === "compact"

  const body = isCompact ? (
    /* ── Compact pill — header / nav use (dark glass) ──────────────────── */
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5",
        "bg-white/5 border border-white/15 backdrop-blur-sm shadow-sm",
        "text-white",
        className
      )}
      aria-label={
        count
          ? `Rated ${rating} out of 5 stars from ${count} Google reviews`
          : `Rated ${rating} out of 5 stars on Google`
      }
    >
      <GoogleGMark className="h-4 w-4 shrink-0" />
      <span className="text-xs font-bold text-white font-mono">{rating}</span>
      <span className="text-[#FBBC05] text-xs leading-none" aria-hidden="true">
        ★★★★★
      </span>
      {count && (
        <span className="text-xs text-white/60 font-medium">
          ({count})
        </span>
      )}
    </span>
  ) : (
    /* ── Dark glassmorphism badge — hero / section backgrounds ─────────── */
    <span
      className={cn(
        "inline-flex items-center gap-3 rounded-xl px-5 py-3",
        "bg-gradient-to-r from-red-600/10 to-red-500/10",
        "border border-red-500/30 backdrop-blur-sm shadow-lg",
        "text-white",
        className
      )}
      aria-label={
        count
          ? `Rated ${rating} out of 5 stars from ${count} Google reviews`
          : `Rated ${rating} out of 5 stars on Google`
      }
    >
      <GoogleGMark className="h-6 w-6 shrink-0" />
      <span className="text-sm font-semibold tracking-tight text-white/80">
        Google
      </span>
      <span className="text-xl font-bold font-mono text-white leading-none">{rating}</span>
      <span className="text-[#FBBC05] text-xl tracking-tight leading-none" aria-hidden="true">
        ★★★★★
      </span>
      {count && (
        <span className="text-sm font-medium text-white/60">
          ({count})
        </span>
      )}
    </span>
  )

  if (!href) return body

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-red-500 rounded-xl"
    >
      {body}
    </a>
  )
}
