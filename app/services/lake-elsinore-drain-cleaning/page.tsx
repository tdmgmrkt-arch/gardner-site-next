import { LakeElsinoreDrainCleaning } from "@/components/LakeElsinoreDrainCleaning";

export const metadata = {
  title: "Lake Elsinore Drain Cleaning | Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Lake Elsinore, CA. Serving downtown, lakefront properties, Canyon Hills & Rosetta Canyon. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/lake-elsinore-drain-cleaning'
  },
  openGraph: {
    title: "Lake Elsinore Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Lake Elsinore. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/lake-elsinore-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

export default function LakeElsinoreDrainCleaningPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <LakeElsinoreDrainCleaning />
      </main>
    </div>
  );
}
