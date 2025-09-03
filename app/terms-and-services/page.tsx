
import { TermsServ } from "@/components/TermsServ";


export const metadata = {
  title: "Customer Reviews | Gardner Plumbing Co.",
  description: "See full reviews and testimonials from our satisfied customers.",
};

export default function FullReviewsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">

      <main>
        <TermsServ />
      </main>

    </div>
  );
}
