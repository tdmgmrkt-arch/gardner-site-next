
import { Plumbingcommercial } from "@/components/Plumbingcommercial";


export const metadata = {
  title: "Commercial Plumbing Services",
  description: "Reliable commercial plumbing solutions for businesses and facilities in Riverside County. Professional service for offices, restaurants, and more.",
  alternates: {
    canonical: '/services/commercial-plumbing'
  },
  openGraph: {
    title: "Commercial Plumbing Services | Gardner Plumbing Co.",
    description: "Reliable commercial plumbing solutions for businesses and facilities.",
    url: '/services/commercial-plumbing',
    images: ['/gardner_logo.webp']
  }
};

export default function PlumbingCommercialPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">

      <main>
        <Plumbingcommercial />
      </main>

    </div>
  );
}