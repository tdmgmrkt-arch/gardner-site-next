import { WaterFiltration } from "@/components/WaterFiltration";

export const metadata = {
  title: "Water Filtration Systems | Gardner Plumbing Co.",
  description: "Improve your home's water quality with our professional water filtration installation services.",
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
