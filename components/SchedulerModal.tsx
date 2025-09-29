"use client";

import { useState, useLayoutEffect } from "react";
import { Modal } from "./Modal";
import Image from "next/image";
import { Button } from "./ui/button";


export function SchedulerModal() {
  const [open, setOpen] = useState(false);

  // Scroll to top only on desktop when opening
  useLayoutEffect(() => {
    if (open && window.innerWidth > 768) {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "instant" as ScrollBehavior,
        });
      }, 0);
    }
  }, [open]);

  return (
    <>
      {/* Trigger button */}
      <Button
        size="lg"
        onClick={() => setOpen(true)}
        className="min-w-[220px] w-full justify-center sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg border border-blue-400/20 group"
      >
        <span className="flex items-center justify-center gap-3">
          📅 Book Online
        </span>
      </Button>

      {/* Popup */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col h-[750px] w-full mt-16 sm:mt-0">
          <div className="text-center py-4 bg-gray-900">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Book Online
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-1">
              Pick a convenient time that works best for you.
            </p>
            <div className="mt-3 border-b border-black-600/40 w-3/4 mx-auto"></div>
          </div>

          <div className="flex-1 overflow-hidden">
            <iframe
              src="https://scheduler.servicetitan.com/book/eyJicmFuZElkIjoiYnJhbmRfdnV4OWZuNTR1b2Z2cjF6a2RremZyOWh0Iiwic2NoZWR1bGVySWQiOiJzY2hlZF9zcTh5ZHpxczY0ODh0eTRid2s1ZzFhaHgifQ%3D%3D"
              className="w-full h-full"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      </Modal>
    </>
  );
}
