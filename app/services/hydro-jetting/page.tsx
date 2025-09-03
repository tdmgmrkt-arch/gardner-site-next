import { Hydro } from "@/components/Hydro";

export const metadata = {
  title: "Hydro Jetting Services | Gardner Plumbing Co.",
  description: "Powerful hydro jetting services to clear tough clogs and restore your pipes.",
};

export default function HydroPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <Hydro />
      </main>
    </div>
  );
}

