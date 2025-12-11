import { WildomarDrainCleaning } from "@/components/WildomarDrainCleaning";

export const metadata = {
  title: "Wildomar Drain Cleaning | Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Wildomar, CA. Serving Windsong Valley, Trilogy & I-15 corridor areas. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/wildomar-drain-cleaning'
  },
  openGraph: {
    title: "Wildomar Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Wildomar. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/wildomar-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

export default function WildomarDrainCleaningPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <WildomarDrainCleaning />
      </main>
    </div>
  );
}
