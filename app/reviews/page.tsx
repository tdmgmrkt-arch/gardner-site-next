
import { FullReviews } from "@/components/FullReviews";
import { StoryTestimonials } from "@/components/StoryTestimonials";
import { FinalCallCta } from "@/components/FinalCallCta";

export const metadata = {
  title: "Customer Reviews",
  description: "See full reviews and testimonials from our satisfied customers in Riverside County. 4.9★ rated plumber with 900+ Google reviews.",
  alternates: {
    canonical: '/reviews'
  },
  openGraph: {
    title: "Customer Reviews | Gardner Plumbing Co.",
    description: "See full reviews and testimonials from our satisfied customers across Riverside County. 4.9★ rated on Google.",
    url: '/reviews',
    images: ['/gardner_logo.webp']
  }
};

export default function FullReviewsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        {/* FullReviews is a server component — fetches live Google data internally */}
        <FullReviews />
        <StoryTestimonials />
        <FinalCallCta
          heading="Ready to Become Our Next 5-Star Review?"
          subheading="Join the 900+ Riverside County homeowners who trust Gardner Plumbing Co. Call now or request a free estimate online."
        />
      </main>
    </div>
  );
}
