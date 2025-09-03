import { Drain } from "@/components/Drain";

export const metadata = {
  title: "Drain Services | Gardner Plumbing Co.",
  description: "Expert drain cleaning and repair services from Gardner Plumbing Co.",
};

export default function DrainPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <Drain />
      </main>
    </div>
  );
}
