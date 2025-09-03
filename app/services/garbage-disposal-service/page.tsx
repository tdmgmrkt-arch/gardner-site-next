import { GarbageDisposal } from "@/components/GarbageDisposal";

export const metadata = {
  title: "Garbage Disposal Services | Gardner Plumbing Co.",
  description: "Professional garbage disposal installation and repair services.",
};

export default function GarbageDisposalPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <GarbageDisposal />
      </main>
    </div>
  );
}

