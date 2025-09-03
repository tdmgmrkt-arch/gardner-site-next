
import { LeakDetection } from "@/components/LeakDetection";

export const metadata = {
  title: "Leak Detection Services | Gardner Plumbing Co.",
  description: "Accurate leak detection and repair services to protect your home and save water.",
};

export default function LeakDetectionPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <LeakDetection/>
      </main>
    </div>
  );
}
