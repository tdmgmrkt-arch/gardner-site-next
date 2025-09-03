import { ToiletRep } from "@/components/ToiletRep";

export const metadata = {
  title: "Toilet Repair & Installation | Gardner Plumbing Co.",
  description: "Expert toilet repair and installation services for homes and businesses in Riverside County.",
};

export default function ToiletRepPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <ToiletRep />
      </main>
    </div>
  );
}

