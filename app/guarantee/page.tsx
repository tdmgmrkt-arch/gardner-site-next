import { OurGuarantee } from "@/components/OurGuarantee";

export const metadata = {
  title: "Our Guarantee | Gardner Plumbing Co.",
  description:
    "At Gardner Plumbing Co., we stand behind our work. Our guarantee ensures quality craftsmanship, reliable service, and customer satisfaction on every plumbing job.",
};

export default function GuaranteePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <OurGuarantee />
      </main>
    </div>
  );
}
