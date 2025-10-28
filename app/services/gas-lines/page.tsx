import { GasLine } from "@/components/GasLine";

export const metadata = {
  title: "Gas Line Services",
  description: "Safe and reliable gas line installation and repair services. Licensed gas line experts in Riverside County.",
  alternates: {
    canonical: '/services/gas-lines'
  },
  openGraph: {
    title: "Gas Line Services | Gardner Plumbing Co.",
    description: "Safe and reliable gas line installation and repair services.",
    url: '/services/gas-lines',
    images: ['/gardner_logo.webp']
  }
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
