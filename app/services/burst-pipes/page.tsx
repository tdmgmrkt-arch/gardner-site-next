import { BurstPipes } from "@/components/BurstPipes";

export const metadata = {
  title: "Emergency Burst Pipe Repair",
  description: "24/7 emergency burst pipe and leak repair services in Riverside County. We offer rapid response to prevent water damage, using advanced leak detection and repair techniques.",
  alternates: {
    canonical: '/services/burst-pipes'
  },
  openGraph: {
    title: "Emergency Burst Pipe Repair | Gardner Plumbing Co.",
    description: "24/7 emergency burst pipe and leak repair services in Riverside County.",
    url: '/services/burst-pipes',
    images: ['/gardner_logo.webp']
  }
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