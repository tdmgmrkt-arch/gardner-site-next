import { Financing } from "@/components/Financing";

export const metadata = {
  title: "Financing Options",
  description:
    "Explore flexible financing options with Gardner Plumbing Co. We make it easy to afford plumbing repairs, installations, and emergency services with convenient payment plans.",
  alternates: {
    canonical: '/financing'
  },
  openGraph: {
    title: "Financing Options | Gardner Plumbing Co.",
    description: "Flexible financing options for plumbing repairs and installations. Easy payment plans available.",
    url: '/financing',
    images: ['/gardner_logo.webp']
  }
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
