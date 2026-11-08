"use client";

import React, { useState, useEffect } from "react";
import { testimonialsData } from "@/data/testimonials";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const current = testimonialsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section className="relative z-20 py-24 md:py-32 bg-[#060a1d]/60 border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Client Endorsements & Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Trusted by the Leaders <span className="text-gradient-purple">We Build For</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Real feedback from founders, managing directors, and operations heads who trusted Keds Technology with their flagship software.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl border border-purple-500/30 bg-[#0B1023]/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        >
          {/* Top Row: Quote Icon & Star Ratings */}
          <div className="flex items-center justify-between mb-8">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-300">
              <Quote className="w-6 h-6 rotate-180" />
            </div>

            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          <p className="text-lg sm:text-2xl text-white font-light leading-relaxed italic mb-8">
            "{current.review}"
          </p>

          {/* Highlight Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-xs font-semibold text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Key Result: {current.highlight}</span>
            </span>
          </div>

          {/* Bottom Author Row & Navigation */}
          <div className="pt-6 border-t border-purple-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                {current.avatarText}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  {current.name}
                </h4>
                <p className="text-xs text-zinc-400">
                  {current.role} • <span className="text-purple-300 font-medium">{current.company}</span>
                </p>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  Project: {current.project}
                </p>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-3 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-200 hover:text-white hover:bg-purple-800/60 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-3 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-200 hover:text-white hover:bg-purple-800/60 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? "w-8 bg-cyan-400" : "w-2 bg-purple-900/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
