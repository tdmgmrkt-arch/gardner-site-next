
import { AllFaq } from "@/components/AllFaq";


export const metadata = {
  title: "Frequently Asked Questions",
  description: "Frequently asked questions about Gardner Plumbing Co.'s services in Riverside County. Get answers to common plumbing questions.",
  alternates: {
    canonical: '/frequently-asked-questions'
  },
  openGraph: {
    title: "Frequently Asked Questions | Gardner Plumbing Co.",
    description: "Get answers to common plumbing questions from Gardner Plumbing Co.",
    url: '/frequently-asked-questions',
    images: ['/gardner_logo.webp']
  }
};

export default function FaqPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
     
      <main>
        <AllFaq />
      </main>

    </div>
  );
}
