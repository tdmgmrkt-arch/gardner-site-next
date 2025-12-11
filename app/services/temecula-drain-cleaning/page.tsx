import { TemeculaDrainCleaning } from "@/components/TemeculaDrainCleaning";

export const metadata = {
  title: "Temecula Drain Cleaning | Fast, Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Temecula, CA. Serving Old Town, Redhawk, Harveston & all neighborhoods. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/temecula-drain-cleaning'
  },
  openGraph: {
    title: "Temecula Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning serving all of Temecula. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/temecula-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

export default function TemeculaDrainCleaningPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <TemeculaDrainCleaning />
      </main>
    </div>
  );
}
