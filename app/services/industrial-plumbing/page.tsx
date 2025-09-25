import { IndustrialPlumbing } from "@/components/IndustrialPlumbing";

export const metadata = {
  title: "Industrial Plumbing & Process Piping | Gardner Plumbing Co.",
  description: "Specialized industrial plumbing services for manufacturing, warehouses, and processing facilities. Safety-focused solutions for process piping, utility lines, and shutdowns.",
};

export default function IndustrialPlumbingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <IndustrialPlumbing />
      </main>
    </div>
  );
}