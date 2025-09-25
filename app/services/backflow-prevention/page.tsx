import { BackflowPrevention } from "@/components/BackflowPrevention";

export const metadata = {
  title: "Certified Backflow Testing & Repair | Gardner Plumbing Co.",
  description: "Protect your water supply with certified backflow testing, repair, and installation services. We handle all compliance and paperwork with your local water district.",
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