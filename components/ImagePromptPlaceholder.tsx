"use client";

import { useState } from "react";

export interface ImagePromptPlaceholderProps {
  slot: "hero" | "before-after";
  aspectRatio: string;
  targetWidth: number;
  targetHeight: number;
  targetFileName: string;
  prompt: string;
  negativePrompt?: string;
  referenceImageNote?: string;
  altText: string;
  className?: string;
}

export function ImagePromptPlaceholder({
  slot,
  targetWidth,
  targetHeight,
  targetFileName,
  prompt,
  negativePrompt,
  referenceImageNote,
  altText,
  className = "",
}: ImagePromptPlaceholderProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  async function handleCopy() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(prompt);
      } else {
        const ta = document.createElement("textarea");
        ta.value = prompt;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        if (!ok) throw new Error("execCommand copy returned false");
      }
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 2000);
    } catch (err) {
      console.error("ImagePromptPlaceholder: failed to copy prompt", err);
      setCopyState("failed");
      setTimeout(() => setCopyState("idle"), 2500);
    }
  }

  return (
    <div
      className={`relative overflow-hidden border-2 border-dashed border-red-500/60 bg-black/70 flex flex-col ${className}`}
      role="img"
      aria-label={altText}
    >
      {/* Top label bar */}
      <div className="flex items-start justify-between gap-2 p-3 bg-red-950/60 border-b border-red-500/40 flex-shrink-0">
        <div className="min-w-0">
          <div className="text-red-400 font-bold text-xs uppercase tracking-wider mb-0.5">
            IMAGE PLACEHOLDER — {slot === "hero" ? "HERO" : "BEFORE / AFTER"}
          </div>
          <div className="text-gray-400 text-xs font-mono">
            {targetWidth} × {targetHeight}px &nbsp;|&nbsp;
            <span className="text-yellow-400">/public/{targetFileName}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className={`flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-colors duration-200 min-h-[28px] ${
            copyState === "failed"
              ? "bg-yellow-600 hover:bg-yellow-500"
              : copyState === "copied"
                ? "bg-green-600 hover:bg-green-500"
                : "bg-red-600/80 hover:bg-red-500"
          }`}
          aria-label="Copy prompt to clipboard"
        >
          {copyState === "copied"
            ? "Copied!"
            : copyState === "failed"
              ? "Select prompt below ↓"
              : "Copy prompt"}
        </button>
      </div>

      {/* Prompt block — scrollable center */}
      <div className="flex-1 overflow-y-auto min-h-0 p-3">
        <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
          Prompt
        </div>
        <pre
          tabIndex={0}
          className="whitespace-pre-wrap text-xs bg-black/40 text-gray-200 p-4 rounded-lg font-mono leading-relaxed select-all cursor-text focus:outline-none focus:ring-2 focus:ring-red-500/60"
        >
          {prompt}
        </pre>
      </div>

      {/* Meta row — negative prompt, reference note, alt text */}
      <div className="flex-shrink-0 border-t border-white/10 px-3 py-2 space-y-1">
        {negativePrompt && (
          <div className="text-xs text-gray-500">
            <span className="text-gray-400 font-semibold">Negative: </span>
            {negativePrompt}
          </div>
        )}
        {referenceImageNote && (
          <div className="text-xs text-blue-400/80">
            <span className="font-semibold">Ref image: </span>
            {referenceImageNote}
          </div>
        )}
        <div className="text-xs text-gray-500">
          <span className="text-gray-400 font-semibold">Alt text: </span>
          {altText}
        </div>
      </div>
    </div>
  );
}
