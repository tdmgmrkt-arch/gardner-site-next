import { Inspection } from "@/components/Inspection";


export const metadata = {
  title: "65-Point Plumbing Inspection",
  description: "Comprehensive 65-point plumbing inspections to detect issues early and ensure safety. Thorough home inspections in Riverside County.",
  alternates: {
    canonical: '/services/65-point-inspection'
  },
  openGraph: {
    title: "65-Point Plumbing Inspection | Gardner Plumbing Co.",
    description: "Comprehensive plumbing inspections to detect issues early and ensure safety.",
    url: '/services/65-point-inspection',
    images: ['/gardner_logo.webp']
  }
};

export default function InspectionPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
        <Inspection />
    </div>
  );
}

