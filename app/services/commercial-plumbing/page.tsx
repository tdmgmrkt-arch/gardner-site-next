
import { Plumbingcommercial } from "@/components/Plumbingcommercial";


export const metadata = {
  title: "Commercial Plumbing | Gardner Plumbing Co.",
  description: "Reliable commercial plumbing solutions for businesses and facilities.",
};

export default function PlumbingCommercialPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">

      <main>
        <Plumbingcommercial />
      </main>

    </div>
  );
}