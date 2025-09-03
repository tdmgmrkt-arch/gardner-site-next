
import App from "@/components/App";

export const metadata = {
  title: "Gardner Plumbing Co.",
  description: "Reliable plumbing services in Riverside County for over 30 years.",
};

export default function HomePage() {
  return (
    <div className="bg-background text-foreground antialiased min-h-screen">

      <main>
        <App />
      </main>

    </div>
  );
}
