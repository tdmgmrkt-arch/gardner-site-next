import { HemetDrainCleaning } from "@/components/HemetDrainCleaning";

export const metadata = {
  title: "Hemet Drain Cleaning | Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Hemet, CA. Serving Seven Hills, Diamond Valley, Valle Vista & Florida Avenue. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/hemet-drain-cleaning'
  },
  openGraph: {
    title: "Hemet Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Hemet. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/hemet-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

export default function HemetDrainCleaningPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <HemetDrainCleaning />
      </main>
    </div>
  );
}
