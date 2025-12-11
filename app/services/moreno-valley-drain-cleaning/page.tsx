import { MorenoValleyDrainCleaning } from "@/components/MorenoValleyDrainCleaning";

export const metadata = {
  title: "Moreno Valley Drain Cleaning | Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Moreno Valley, CA. Serving Sunnymead Ranch, Rancho Belago, Towngate & Box Springs. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/moreno-valley-drain-cleaning'
  },
  openGraph: {
    title: "Moreno Valley Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Moreno Valley. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/moreno-valley-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

export default function MorenoValleyDrainCleaningPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <MorenoValleyDrainCleaning />
      </main>
    </div>
  );
}
