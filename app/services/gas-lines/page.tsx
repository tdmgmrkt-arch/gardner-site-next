import { GasLine } from "@/components/GasLine";

export const metadata = {
  title: "Gas Line Services | Gardner Plumbing Co.",
  description: "Safe and reliable gas line installation and repair services.",
};

export default function GasLinePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <GasLine />
      </main>
    </div>
  );
}
