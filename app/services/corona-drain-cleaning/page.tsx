import { CoronaDrainCleaning } from "@/components/CoronaDrainCleaning";

export const metadata = {
  title: "Corona Drain Cleaning | Fast Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Corona, CA. Serving Corona Hills, Eagle Glen, South Corona & Historic Downtown. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/corona-drain-cleaning'
  },
  openGraph: {
    title: "Corona Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Corona. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/corona-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

export default function CoronaDrainCleaningPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <CoronaDrainCleaning />
      </main>
    </div>
  );
}
