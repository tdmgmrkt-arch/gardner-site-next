import { SewerSeptic } from "@/components/SewerSeptic";

export const metadata = {
  title: "Sewer & Septic Services",
  description: "Comprehensive sewer line and septic system services for your home or business in Riverside County. Repairs, cleaning, and inspections.",
  alternates: {
    canonical: '/services/sewer-and-septic'
  },
  openGraph: {
    title: "Sewer & Septic Services | Gardner Plumbing Co.",
    description: "Comprehensive sewer line and septic system services for your home or business.",
    url: '/services/sewer-and-septic',
    images: ['/gardner_logo.webp']
  }
};

export default function SewerAndSepticPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <SewerSeptic />
      </main>
    </div>
  );
}
