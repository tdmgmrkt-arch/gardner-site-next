import { PipingRepiping } from "@/components/PipingRepiping";

export const metadata = {
  title: "Piping & Repiping Services | Gardner Plumbing Co.",
  description: "Expert piping and repiping services to upgrade old plumbing systems.",
};

export default function PipingRepipingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <PipingRepiping />
      </main>
    </div>
  );
}
