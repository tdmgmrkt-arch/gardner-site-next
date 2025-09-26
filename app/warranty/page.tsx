import { Warranty } from "@/components/Warranty";

export const metadata = {
  title: "Our Warranty | Gardner Plumbing Co.",
  description:
    "Discover Gardner Plumbing Co.’s warranty coverage. We back our plumbing services with dependable warranties to give you confidence and peace of mind.",
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
