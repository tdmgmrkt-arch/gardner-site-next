
import { LeakDetection } from "@/components/LeakDetection";

export const metadata = {
  title: "Leak Detection Services",
  description: "Accurate leak detection and repair services to protect your home and save water. Advanced technology for hidden leaks in Riverside County.",
  alternates: {
    canonical: '/services/leak-detection'
  },
  openGraph: {
    title: "Leak Detection Services | Gardner Plumbing Co.",
    description: "Accurate leak detection and repair services to protect your home and save water.",
    url: '/services/leak-detection',
    images: ['/gardner_logo.webp']
  }
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
