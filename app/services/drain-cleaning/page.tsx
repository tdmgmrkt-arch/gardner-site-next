import { Drain } from "@/components/Drain";

export const metadata = {
  title: "Drain Cleaning Services",
  description: "Expert drain cleaning and repair services from Gardner Plumbing Co. Fast, reliable drain solutions in Riverside County.",
  alternates: {
    canonical: '/services/drain-cleaning'
  },
  openGraph: {
    title: "Drain Cleaning Services | Gardner Plumbing Co.",
    description: "Expert drain cleaning and repair services from Gardner Plumbing Co.",
    url: '/services/drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

export default function DrainPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <Drain />
      </main>
    </div>
  );
}
