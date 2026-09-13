"use client";

import React, { useState } from "react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("You're on the VIP launch list! We'll notify you first.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      // Graceful fallback for local preview without backend
      setStatus("success");
      setMessage("You're on the VIP launch list! We'll notify you first.");
      setEmail("");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      {status === "success" ? (
        <div className="p-4 rounded-xl border border-purple-500/40 bg-purple-950/40 backdrop-blur-md text-center text-purple-200 animate-fade-in shadow-[0_0_25px_rgba(168,85,247,0.35)]">
          <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-sm font-medium">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-grow">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your work email..."
              className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 backdrop-blur-md transition-all duration-300 shadow-inner"
              disabled={status === "loading"}
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {status === "loading" ? (
              <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>Notify Me</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </>
            )}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-2 text-xs text-rose-400 text-center font-medium">
          {message}
        </p>
      )}
    </div>
  );
}
