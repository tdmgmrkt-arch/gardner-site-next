import App from "@/components/App";

export const metadata = {
  title: "Gardner Plumbing Co. | Reliable Plumbing Services in Riverside County",
  description: "Reliable plumbing services, water heater repair, and drain cleaning in Riverside County for over 30 years. Contact us for a free estimate!",
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