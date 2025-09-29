"use client";

import { Button } from "./ui/button";
import { useCallback } from "react";

export function SchedulerModal() {
  const openScheduler = useCallback(() => {
    if (typeof window === "undefined") return;

    let attempts = 0;
    const maxAttempts = 10; // stop after ~5s

    const checkScheduler = setInterval(() => {
      attempts++;

      if ((window as any)._scheduler) {
        clearInterval(checkScheduler);
        console.log("✅ ServiceTitan scheduler ready, opening...");
        (window as any)._scheduler.show({
          schedulerId: "sched_sq8ydzqs6488ty4bwk5g1ahx",
        });
      } else if (attempts >= maxAttempts) {
        clearInterval(checkScheduler);
        console.error("❌ Scheduler not available after waiting");
        alert("Scheduler is still loading. Please try again in a moment.");
      } else {
        console.log("⏳ Waiting for scheduler...");
      }
    }, 500);
  }, []);

  return (
    <Button
      size="lg"
      onClick={openScheduler}
      className="min-w-[220px] w-full justify-center sm:w-auto bg-gradient-to-r 
                 from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 
                 text-white font-bold px-8 py-4 rounded-xl shadow-lg 
                 border border-blue-400/20 group"
    >
      <span className="flex items-center justify-center gap-3">
        📅 Book Online
      </span>
    </Button>
  );
}
