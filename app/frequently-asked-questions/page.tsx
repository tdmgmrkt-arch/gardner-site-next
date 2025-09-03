
import { AllFaq } from "@/components/AllFaq";


export const metadata = {
  title: "FAQs | Gardner Plumbing Co.",
  description: "Frequently asked questions about Gardner Plumbing Co.'s services.",
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
