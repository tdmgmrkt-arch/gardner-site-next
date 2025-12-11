import { CanyonLakeDrainCleaning } from "@/components/CanyonLakeDrainCleaning";

export const metadata = {
  title: "Canyon Lake Drain Cleaning | Gated Community Specialists | Gardner Plumbing",
  description: "Expert drain cleaning in Canyon Lake, CA. Serving lakefront & hillside properties, septic & sewer systems. 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/canyon-lake-drain-cleaning'
  },
  openGraph: {
    title: "Canyon Lake Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning for Canyon Lake's gated community. Specialized service for unique property needs.",
    url: '/services/canyon-lake-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

export default function CanyonLakeDrainCleaningPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <CanyonLakeDrainCleaning />
      </main>
    </div>
  );
}
