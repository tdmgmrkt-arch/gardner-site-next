import { MurrietaDrainCleaning } from "@/components/MurrietaDrainCleaning";

export const metadata = {
  title: "Murrieta Drain Cleaning | Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Murrieta, CA. Serving Greer Ranch, Spencer's Crossing, The Village & all areas. 24/7 emergency service. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/murrieta-drain-cleaning'
  },
  openGraph: {
    title: "Murrieta Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Murrieta. Same-day service, licensed technicians, 30-day guarantee.",
    url: '/services/murrieta-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

export default function MurrietaDrainCleaningPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <MurrietaDrainCleaning />
      </main>
    </div>
  );
}
