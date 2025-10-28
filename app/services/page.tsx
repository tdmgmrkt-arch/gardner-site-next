import { ServicesFull } from "@/components/ServicesFull";

export const metadata = {
  title: "Complete Plumbing Services",
  description: "Full-service plumbing solutions tailored to your needs. Emergency repairs, installations, and maintenance in Riverside County.",
  alternates: {
    canonical: '/services'
  },
  openGraph: {
    title: "Complete Plumbing Services | Gardner Plumbing Co.",
    description: "Full-service plumbing solutions tailored to your needs.",
    url: '/services',
    images: ['/gardner_logo.webp']
  }
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <ServicesFull />
      </main>
    </div>
  );
}
