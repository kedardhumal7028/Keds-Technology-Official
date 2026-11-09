import React from "react";
import type { Metadata } from "next";
import OngoingProjectsClient from "@/components/OngoingProjectsClient";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Project Roadmap & Active Sprints | Keds Technology",
  description:
    "Follow Keds Technology's structured 5-stage engineering lifecycle from discovery and UI/UX design to sprint development, quality assurance, and production deployment.",
  keywords: [
    "Keds Technology Roadmap",
    "Software Development Lifecycle",
    "Agile Sprint Delivery",
    "Project Milestones",
  ],
  alternates: {
    canonical: "https://kedstechnology.com/ongoing-projects",
  },
};

export default function OngoingProjectsPage() {
  return (
    <main className="w-full pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Active Engineering Sprints</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Ongoing <span className="text-gradient-purple">Project Roadmap</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Transparent milestones. Track our development stages across discovery, UI/UX design, development, quality testing, and production deployment.
          </p>
        </div>

        <OngoingProjectsClient />
      </div>
    </main>
  );
}
