
import { WaterHeaterPage } from "@/components/WaterHeaterPage"; // 👈 match filename exactly

export const metadata = {
  title: "Water Heater Services | Gardner Plumbing Co.",
  description: "Reliable water heater repair, replacement, and maintenance services.",
};

export default function WHServicePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">

      <main>
        <WaterHeaterPage /> {/* 👈 match the component export name */}
      </main>

    </div>
  );
}
