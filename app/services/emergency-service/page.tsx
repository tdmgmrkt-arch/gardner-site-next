import { Emergency } from "@/components/Emergency";


export const metadata = {
  title: "24/7 Emergency Plumbing | Gardner Plumbing Co.",
  description: "Round-the-clock emergency plumbing services from Gardner Plumbing Co.",
};

export default function EmergencyPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
    
      <main>
        <Emergency />
      </main>
      
    </div>
  );
}
