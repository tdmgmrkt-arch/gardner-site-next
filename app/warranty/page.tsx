import { Warranty } from "@/components/Warranty";

export const metadata = {
  title: "Our Warranty Coverage",
  description:
    "Discover Gardner Plumbing Co.'s warranty coverage. We back our plumbing services with dependable warranties to give you confidence and peace of mind.",
  alternates: {
    canonical: '/warranty'
  },
  openGraph: {
    title: "Our Warranty Coverage | Gardner Plumbing Co.",
    description: "Dependable warranty coverage on all plumbing services for peace of mind.",
    url: '/warranty',
    images: ['/gardner_logo.webp']
  }
};

export default function OurWarrantyPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <Warranty />
      </main>
    </div>
  );
}
