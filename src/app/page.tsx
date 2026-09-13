"use client";

import React, { useState } from "react";
import NeonAtmosphere from "@/components/NeonAtmosphere";
import ParticleCanvas from "@/components/ParticleCanvas";
import KedsLogo from "@/components/KedsLogo";
import NotifyForm from "@/components/NotifyForm";
import Link from "next/link";

export default function ComingSoonPage() {
  const [showNotifyModal, setShowNotifyModal] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#05020c] text-white selection:bg-purple-600 selection:text-white">
      {/* 1. Modern IT Tech Environment (Digital Grid + Purple Aurora Flow) */}
      <NeonAtmosphere />

      {/* 2. Floating Tech Particle / Network Dust Canvas */}
      <ParticleCanvas />

      {/* 3. Minimalist Header */}
      <header className="relative z-20 w-full px-6 py-6 flex items-center justify-between max-w-7xl mx-auto">
        {/* Updated Badge: "Official Website" as requested */}
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-purple-500/25 bg-purple-950/30 backdrop-blur-md text-xs text-purple-200 tracking-wide shadow-[0_0_12px_rgba(168,85,247,0.15)]">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#c084fc]" />
          <span className="font-medium">Official Website</span>
        </div>

        {/* Discreet Nav */}
        <nav className="flex items-center gap-6 text-xs tracking-widest text-purple-300/60 font-medium">
          <Link
            href="/about"
            className="hover:text-white transition-colors duration-200"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="hover:text-white transition-colors duration-200"
          >
            CONTACT
          </Link>
        </nav>
      </header>

      {/* 4. Center Hero Section */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 text-center max-w-4xl mx-auto w-full my-auto py-12">
        {/* Keds Technology Logo: Pure Transparent Vector, NO Black Box */}
        <div className="transition-transform duration-500 hover:scale-[1.01]">
          <KedsLogo size="large" showTagline={true} />
        </div>

        {/* Coming Soon Headline & Subtitle */}
        <div className="mt-12 sm:mt-16 md:mt-20 space-y-3.5">
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.42em] text-white"
            style={{
              textShadow:
                "0 0 20px rgba(255, 255, 255, 0.35), 0 0 35px rgba(168, 85, 247, 0.6)",
            }}
          >
            WEBSITE COMING SOON
          </h1>
          <p
            className="text-sm sm:text-base md:text-xl font-light text-purple-200/85 tracking-wide"
            style={{
              textShadow: "0 0 12px rgba(192, 132, 252, 0.35)",
            }}
          >
            Something new is taking shape.
          </p>
        </div>

        {/* Action Button: Get Notified */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center">
          <button
            onClick={() => setShowNotifyModal(true)}
            className="px-6 py-3 rounded-full border border-purple-500/40 bg-purple-950/40 hover:bg-purple-900/60 text-xs sm:text-sm font-medium tracking-wider text-purple-200 hover:text-white backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] cursor-pointer flex items-center gap-2.5 active:scale-95"
          >
            <svg
              className="w-4 h-4 text-purple-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span>Notify Me When Ready</span>
          </button>
        </div>
      </main>

      {/* 5. Clean Footer (No Social Media Icons) */}
      <footer className="relative z-20 w-full px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-7xl mx-auto text-xs text-purple-400/50 border-t border-purple-900/20">
        <p>© {new Date().getFullYear()} Keds Technology. All rights reserved.</p>
        <p className="tracking-widest text-[11px] uppercase">Innovate • Build • Scale</p>
      </footer>

      {/* 6. High-Tech Modal for "Notify Me" */}
      {showNotifyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl border border-purple-500/40 bg-[#0c051a]/95 shadow-[0_0_50px_rgba(168,85,247,0.4)]">
            <button
              onClick={() => setShowNotifyModal(false)}
              className="absolute top-4 right-4 text-purple-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/30 text-[11px] text-purple-300 font-medium tracking-wider mb-3 uppercase">
                Early Access
              </span>
              <h3 className="text-xl font-bold text-white">Get Notified First</h3>
              <p className="mt-1 text-xs text-purple-300/70">
                Be the first to experience the full Keds Technology platform.
              </p>
            </div>

            <NotifyForm />
          </div>
        </div>
      )}
    </div>
  );
}
