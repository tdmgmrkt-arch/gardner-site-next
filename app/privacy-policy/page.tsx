import { Header } from "@/components/Header";
import { PrivPol } from "@/components/PrivPol";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Customer Reviews | Gardner Plumbing Co.",
  description: "See full reviews and testimonials from our satisfied customers.",
};

export default function FullReviewsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main>
        <PrivPol />
      </main>
      <Footer />
    </div>
  );
}
