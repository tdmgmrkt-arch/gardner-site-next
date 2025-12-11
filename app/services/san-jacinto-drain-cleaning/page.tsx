import { SanJacintoDrainCleaning } from "@/components/SanJacintoDrainCleaning";

export const metadata = {
  title: "San Jacinto Drain Cleaning | Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in San Jacinto, CA. Serving valley-wide areas, Soboba Springs & all neighborhoods. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/san-jacinto-drain-cleaning'
  },
  openGraph: {
    title: "San Jacinto Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout San Jacinto. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/san-jacinto-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

export default function SanJacintoDrainCleaningPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <SanJacintoDrainCleaning />
      </main>
    </div>
  );
}
