import { MaintenanceAgreement } from "@/components/MaintenanceAgreement";

export const metadata = {
  title: "Plumbing Maintenance Plans",
  description: "Protect your home with our affordable plumbing maintenance agreements. Preventive care for Riverside County homes and businesses.",
  alternates: {
    canonical: '/services/maintenance-plans'
  },
  openGraph: {
    title: "Plumbing Maintenance Plans | Gardner Plumbing Co.",
    description: "Protect your home with our affordable plumbing maintenance agreements.",
    url: '/services/maintenance-plans',
    images: ['/gardner_logo.webp']
  }
};

export default function MaintenancePlansPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <MaintenanceAgreement />
      </main>
    </div>
  );
}
