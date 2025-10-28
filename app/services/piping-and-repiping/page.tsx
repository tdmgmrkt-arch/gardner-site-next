import { PipingRepiping } from "@/components/PipingRepiping";

export const metadata = {
  title: "Piping & Repiping Services",
  description: "Expert piping and repiping services to upgrade old plumbing systems in Riverside County. Copper, PEX, and PVC pipe installation.",
  alternates: {
    canonical: '/services/piping-and-repiping'
  },
  openGraph: {
    title: "Piping & Repiping Services | Gardner Plumbing Co.",
    description: "Expert piping and repiping services to upgrade old plumbing systems.",
    url: '/services/piping-and-repiping',
    images: ['/gardner_logo.webp']
  }
};

export default function PipingRepipingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <PipingRepiping />
      </main>
    </div>
  );
}
