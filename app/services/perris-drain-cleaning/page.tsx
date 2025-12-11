import { PerrisDrainCleaning } from "@/components/PerrisDrainCleaning";

export const metadata = {
  title: "Perris Drain Cleaning | Professional Plumbing Services | Gardner Plumbing",
  description: "Expert drain cleaning in Perris, CA. Fast response, advanced equipment, 24/7 emergency service. Same-day appointments available. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/perris-drain-cleaning'
  },
  openGraph: {
    title: "Perris Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Perris. 30+ years experience, licensed technicians, guaranteed results.",
    url: '/services/perris-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

export default function PerrisDrainCleaningPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <PerrisDrainCleaning />
      </main>
    </div>
  );
}
