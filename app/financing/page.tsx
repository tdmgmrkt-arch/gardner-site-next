import { Financing } from "@/components/Financing";

export const metadata = {
  title: "Financing | Gardner Plumbing Co.",
  description:
    "Explore flexible financing options with Gardner Plumbing Co. We make it easy to afford plumbing repairs, installations, and emergency services with convenient payment plans.",
};

export default function FinancingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <Financing />
      </main>
    </div>
  );
}
