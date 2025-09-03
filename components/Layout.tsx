import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function Layout({ children }: { children: ReactNode }) {
  const inter = Inter({ subsets: ["latin"], display: "swap" });
  return (
    <div className="bg-background text-foreground antialiased min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
