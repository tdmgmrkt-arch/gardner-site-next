import { WaterFiltration } from "@/components/WaterFiltration";

export const metadata = {
  title: "Water Filtration Systems",
  description: "Improve your home's water quality with our professional water filtration installation services in Riverside County.",
  alternates: {
    canonical: '/services/water-filtration-system'
  },
  openGraph: {
    title: "Water Filtration Systems | Gardner Plumbing Co.",
    description: "Improve your home's water quality with our professional water filtration installation services.",
    url: '/services/water-filtration-system',
    images: ['/gardner_logo.webp']
  }
};

export default function WaterFiltrationPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <WaterFiltration />
      </main>
    </div>
  );
}
