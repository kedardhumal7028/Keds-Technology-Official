import React from "react";
import type { Metadata } from "next";
import PortfolioGallery from "@/components/PortfolioGallery";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Real-World Web & App Deployments",
  description:
    "Explore successful software development projects and live production web platforms engineered by Keds Technology, including sports club platforms, healthcare systems, and travel booking engines.",
  keywords: [
    "Keds Technology Portfolio",
    "Web Development Projects",
    "App Development Case Studies",
    "Keds Technology Live Apps",
    "Custom Software Case Studies",
    "Pune Web Development Company",
  ],
  alternates: {
    canonical: "https://kedstechnology.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="w-full pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Case Studies &amp; Production Deployments</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our <span className="text-gradient-purple">Portfolio</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Discover how Keds Technology engineers mission-critical web platforms, healthcare systems, and travel logistics engines.
          </p>
        </div>

        {/* Filterable Portfolio Gallery */}
        <PortfolioGallery />
      </div>
    </main>
  );
}
