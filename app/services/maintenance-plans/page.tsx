import { MaintenanceAgreement } from "@/components/MaintenanceAgreement";

export const metadata = {
  title: "Plumbing Maintenance Agreements | Gardner Plumbing Co.",
  description: "Protect your home with our affordable plumbing maintenance agreements.",
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
