import { RiversideDrainCleaning } from "@/components/RiversideDrainCleaning";

export const metadata = {
  title: "Riverside Drain Cleaning | Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Riverside, CA. Serving Downtown, Orangecrest, La Sierra & Canyon Crest. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/riverside-drain-cleaning'
  },
  openGraph: {
    title: "Riverside Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Riverside. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/riverside-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

export default function RiversideDrainCleaningPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <RiversideDrainCleaning />
      </main>
    </div>
  );
}
