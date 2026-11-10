"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloating() {
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const prefilledMessage = encodeURIComponent(
    "Hi Keds Technology, I want to discuss a project."
  );
  const whatsappUrl = `https://wa.me/919511273939?text=${prefilledMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl border border-purple-500/30 bg-[#0D0720]/95 backdrop-blur-xl text-xs text-white shadow-[0_10px_25px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chat with Senior Architect</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
            className="text-zinc-400 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Keds Technology on WhatsApp"
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400/20 pointer-events-none" />
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
}
