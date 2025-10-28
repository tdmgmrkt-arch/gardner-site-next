import { ToiletRep } from "@/components/ToiletRep";

export const metadata = {
  title: "Toilet Repair & Installation",
  description: "Expert toilet repair and installation services for homes and businesses in Riverside County.",
  alternates: {
    canonical: '/services/toilet-installation-and-repair'
  },
  openGraph: {
    title: "Toilet Repair & Installation | Gardner Plumbing Co.",
    description: "Expert toilet repair and installation services for homes and businesses in Riverside County.",
    url: '/services/toilet-installation-and-repair',
    images: ['/gardner_logo.webp']
  }
};

export default function ToiletRepPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <ToiletRep />
      </main>
    </div>
  );
}

