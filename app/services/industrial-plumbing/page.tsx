import { IndustrialPlumbing } from "@/components/IndustrialPlumbing";

export const metadata = {
  title: "Industrial Plumbing & Process Piping",
  description: "Specialized industrial plumbing services for manufacturing, warehouses, and processing facilities in Riverside County. Safety-focused solutions for process piping, utility lines, and shutdowns.",
  alternates: {
    canonical: '/services/industrial-plumbing'
  },
  openGraph: {
    title: "Industrial Plumbing & Process Piping | Gardner Plumbing Co.",
    description: "Specialized industrial plumbing services for manufacturing and processing facilities.",
    url: '/services/industrial-plumbing',
    images: ['/gardner_logo.webp']
  }
};

export default function IndustrialPlumbingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <IndustrialPlumbing />
      </main>
    </div>
  );
}