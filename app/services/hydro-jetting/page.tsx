import { Hydro } from "@/components/Hydro";

export const metadata = {
  title: "Hydro Jetting Services",
  description: "Powerful hydro jetting services to clear tough clogs and restore your pipes. Advanced drain cleaning in Riverside County.",
  alternates: {
    canonical: '/services/hydro-jetting'
  },
  openGraph: {
    title: "Hydro Jetting Services | Gardner Plumbing Co.",
    description: "Powerful hydro jetting services to clear tough clogs and restore your pipes.",
    url: '/services/hydro-jetting',
    images: ['/gardner_logo.webp']
  }
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

