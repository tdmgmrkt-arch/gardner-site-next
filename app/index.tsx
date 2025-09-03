import { Metadata } from "next";
import App from "@/components/App"; // adjust path if App.tsx is in a different folder
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Gardner Plumbing Co.",
  description: "Your trusted plumbing experts in Riverside County.",
};

export default function HomePage() {
  return (
    <div className="bg-background text-foreground antialiased min-h-screen">
      <App />
    </div>
  );
}
