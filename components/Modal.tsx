"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";
import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  // ✅ render modal directly into <body>
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-start sm:items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full mx-4 mt-10 sm:mt-0 max-h-[90vh] overflow-y-auto animate-scaleIn">
        {/* Gradient strip */}
        <div className="w-full h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-blue-500"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold transition-colors"
          aria-label="Close"
        >
          ×
        </button>

        {/* Modal content */}
        <div className="p-4 sm:p-8">{children}</div>
      </div>
    </div>,
    document.body
  );
}
