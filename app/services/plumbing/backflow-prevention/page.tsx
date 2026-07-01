import { BackflowPrevention } from "@/components/BackflowPrevention";

export const metadata = {
  title: "Certified Backflow Testing & Prevention",
  description: "Protect your water supply with certified backflow testing, repair, and installation services in Riverside County. We handle all compliance and paperwork with your local water district.",
  alternates: {
    canonical: '/services/backflow-prevention'
  },
  openGraph: {
    title: "Certified Backflow Testing & Prevention | Gardner Plumbing Co.",
    description: "Certified backflow testing, repair, and installation services. Full compliance assistance.",
    url: '/services/backflow-prevention',
    images: ['/gardner_logo.webp']
  }
};

export default function BackflowPreventionPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <BackflowPrevention />
      </main>
    </div>
  );
}