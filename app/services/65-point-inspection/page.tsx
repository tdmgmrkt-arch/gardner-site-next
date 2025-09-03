import { Inspection } from "@/components/Inspection";


export const metadata = {
  title: "Plumbing Inspections | Gardner Plumbing Co.",
  description: "Comprehensive plumbing inspections to detect issues early and ensure safety.",
};

export default function InspectionPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
        <Inspection />
    </div>
  );
}

