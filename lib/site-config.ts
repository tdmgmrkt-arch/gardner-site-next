/**
 * Site-wide configuration constants for Gardner Plumbing Co.
 *
 * Fallback rating/count used by GoogleRatingBadge when the Places API
 * is not configured (local dev without env vars, or API error).
 */
export const siteConfig = {
  googleRatingFallback: {
    rating: 4.9,
    count: 900,
  },
  social: {
    /** Direct link to Gardner Plumbing's Google reviews panel */
    google:
      "https://www.google.com/search?q=Gardner+Plumbing+Company+Reviews#lrd=ChIJJbI_CQ-d3IARD-2Dv6Lmh-8,1",
    facebook:
      "https://www.facebook.com/people/Gardner-Plumbing-Company/100063665179161/",
    instagram: "https://www.instagram.com/gardnerplumbingco/",
    yelp: "https://www.yelp.com/biz/gardner-plumbing-company-murrieta-9",
  },
}
