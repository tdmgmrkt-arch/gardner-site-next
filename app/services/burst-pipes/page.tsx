import { BurstPipes } from "@/components/BurstPipes";

export const metadata = {
  title: "Emergency Burst Pipe Repair | Gardner Plumbing Co.",
  description: "24/7 emergency burst pipe and leak repair services in Riverside County. We offer rapid response to prevent water damage, using advanced leak detection and repair techniques.",
};

export default function BurstPipesPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <BurstPipes />
      </main>
    </div>
  );
}