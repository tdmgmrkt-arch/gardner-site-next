import { MenifeeDrainCleaning } from "@/components/MenifeeDrainCleaning";

export const metadata = {
  title: "Menifee Drain Cleaning | Expert Plumbing Service | Gardner Plumbing",
  description: "Professional drain cleaning in Menifee, CA. Serving Sun City, Quail Valley, Heritage Lake & all areas. 24/7 emergency service. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/menifee-drain-cleaning'
  },
  openGraph: {
    title: "Menifee Drain Cleaning | Gardner Plumbing Co.",
    description: "Expert drain cleaning throughout Menifee. Fast response, professional service, 30-day guarantee.",
    url: '/services/menifee-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

export default function MenifeeDrainCleaningPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <MenifeeDrainCleaning />
      </main>
    </div>
  );
}
