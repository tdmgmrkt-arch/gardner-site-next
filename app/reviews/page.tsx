
import { FullReviews } from "@/components/FullReviews";


export const metadata = {
  title: "Customer Reviews",
  description: "See full reviews and testimonials from our satisfied customers in Riverside County. 5-star rated plumber with 600+ Reviews.",
  alternates: {
    canonical: '/reviews'
  },
  openGraph: {
    title: "Customer Reviews | Gardner Plumbing Co.",
    description: "See full reviews and testimonials from our satisfied customers. 5-star rated service.",
    url: '/reviews',
    images: ['/gardner_logo.webp']
  }
};

export default function FullReviewsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">

      <main>
        <FullReviews />
      </main>

    </div>
  );
}
