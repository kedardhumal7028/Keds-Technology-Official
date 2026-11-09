"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ConsultationModal from "./ConsultationModal";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Trophy,
  Activity,
  Bus,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

interface SlideData {
  id: string;
  tabLabel: string;
  tabIcon: any;
  liveUrl: string;
  domain: string;
  badge: string;
  tagline: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  accentGlow: string;
  accentBorder: string;
  accentColor: string;
  clientName: string;
  category: string;
  serviceCategory: string;
  stats: {
    value: string;
    label: string;
  }[];
  techPills: string[];
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState("Ath-Elite Sports Platform");

  const slides: SlideData[] = [
    {
      id: "ath-elite-sports",
      tabLabel: "Ath-Elite Sports Club",
      tabIcon: Trophy,
      liveUrl: "https://ath-lite-sports.vercel.app/",
      domain: "ath-lite-sports.vercel.app",
      badge: "LIVE SPORTS ENTERPRISE • PUNE",
      tagline: "Play. Train. Achieve.",
      headlinePrefix: "Engineering Pune's Premier",
      headlineHighlight: "Multi-Sport Complex",
      headlineSuffix: "& Arena Booking System.",
      description:
        "Custom-built web ecosystem for Ath-Elite Sports Club featuring live multi-sport court reservations (Badminton, Pickleball, Turf), membership subscriptions, academy coaching schedules, and parent-athlete portals.",
      imageSrc: "/images/showcase-ath-elite.jpg",
      imageAlt: "Ath-Elite Sports Club Live Web Platform",
      accentGlow: "from-cyan-500/25 via-purple-600/15 to-transparent",
      accentBorder: "border-cyan-400/40",
      accentColor: "#00d4ff",
      clientName: "Ath-Elite Sports Club",
      category: "Sports Arena & Court Booking Engine",
      serviceCategory: "Sports Club Web Application",
      stats: [
        { value: "1,200+", label: "Active Athletes" },
        { value: "7+ Arenas", label: "Badminton & Turf" },
        { value: "0.6s", label: "Sub-Second Speed" },
      ],
      techPills: ["Court Booking", "Membership Engine", "Coach Portal"],
    },
    {
      id: "heart-physio",
      tabLabel: "HeartPhysio Healthcare",
      tabIcon: Activity,
      liveUrl: "https://heartphysio.in",
      domain: "heartphysio.in",
      badge: "CLINICAL TELE-HEALTHCARE • LIVE",
      tagline: "Move Better. Live Better.",
      headlinePrefix: "Powering Clinical",
      headlineHighlight: "Physiotherapy & Rehab",
      headlineSuffix: "Patient Portals.",
      description:
        "Full-stack digital healthcare platform for HeartPhysio featuring streamlined tele-rehab appointment scheduling, personalized exercise prescriptions, clinical recovery tracking across Sports, Ortho & Women's Health.",
      imageSrc: "/images/showcase-heartphysio.jpg",
      imageAlt: "HeartPhysio Tele-Rehabilitation Web Platform",
      accentGlow: "from-pink-500/25 via-purple-600/15 to-transparent",
      accentBorder: "border-pink-400/40",
      accentColor: "#ec4899",
      clientName: "HeartPhysio",
      category: "Clinical Tele-Rehab & Healthcare Platform",
      serviceCategory: "Healthcare & Tele-Rehab Portal",
      stats: [
        { value: "50+", label: "Happy Patients" },
        { value: "5 Clinical", label: "Specialties Covered" },
        { value: "98%", label: "Recovery Rating" },
      ],
      techPills: ["Tele-Rehab", "Online Booking", "Clinical EHR"],
    },
    {
      id: "bhilare-travels",
      tabLabel: "Bhilare Tour & Travels",
      tabIcon: Bus,
      liveUrl: "https://bhilare-tour-travel.vercel.app/",
      domain: "bhilare-tour-travel.vercel.app",
      badge: "LUXURY FLEET & TOUR LOGISTICS • EST. 1996",
      tagline: "The Never Ending Legacy Since 1996",
      headlinePrefix: "Scaling Pune's Leading",
      headlineHighlight: "Luxury Bus & Fleet",
      headlineSuffix: "Rental Engine.",
      description:
        "Engineered for Bhilare Tour & Travels — luxury 12–20 seater Tempo Travellers, Force Urbania & 26–50 seater mini-bus rental booking platform with automated WhatsApp quote calculation and outstation packages.",
      imageSrc: "/images/showcase-bhilare-travels.jpg",
      imageAlt: "Bhilare Tour & Travels Live Booking Portal",
      accentGlow: "from-amber-500/25 via-purple-600/15 to-transparent",
      accentBorder: "border-amber-400/40",
      accentColor: "#f59e0b",
      clientName: "Bhilare Tour & Travels",
      category: "Fleet Logistics & Tour Booking Engine",
      serviceCategory: "Travel & Fleet Booking Engine",
      stats: [
        { value: "28+ Yrs", label: "Pune Travel Legacy" },
        { value: "50,000+", label: "Happy Passengers" },
        { value: "100%", label: "Sanitized Fleet" },
      ],
      techPills: ["Urbania & Tempo Fleet", "Instant WhatsApp API", "Inter-city Tours"],
    },
  ];

  // Auto-slide effect every 6.5s
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const slide = slides[currentSlide];
  const CurrentIcon = slide.tabIcon;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const openConsultation = (service: string) => {
    setConsultationService(service);
    setIsConsultationOpen(true);
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative z-20 w-full min-h-[calc(100dvh-5rem)] flex flex-col justify-center pt-20 sm:pt-24 pb-8 sm:pb-10 overflow-hidden"
    >
      {/* Background Dynamic Aurora Spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] lg:w-[1200px] h-[380px] sm:h-[480px] pointer-events-none opacity-40 blur-[130px] transition-all duration-1000"
        style={{
          background:
            currentSlide === 0
              ? "radial-gradient(ellipse at center, rgba(0, 212, 255, 0.35) 0%, rgba(124, 58, 237, 0.25) 50%, transparent 75%)"
              : currentSlide === 1
              ? "radial-gradient(ellipse at center, rgba(236, 72, 153, 0.35) 0%, rgba(124, 58, 237, 0.22) 50%, transparent 75%)"
              : "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.35) 0%, rgba(124, 58, 237, 0.22) 50%, transparent 75%)",
        }}
      />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        {/* Client Selector Tabs (Compact, fits beautifully on screen) */}
        <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4 overflow-x-auto no-scrollbar pb-1">
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => {
              const TabIcon = s.tabIcon;
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-purple-900/60 border border-purple-400/50 text-white shadow-[0_0_20px_rgba(124,58,237,0.35)]"
                      : "bg-[#0D0720]/60 border border-white/[0.08] text-zinc-400 hover:text-zinc-200 hover:bg-[#121833]"
                  }`}
                >
                  <TabIcon
                    className={`w-3.5 h-3.5 ${
                      isActive ? "text-cyan-400" : "text-zinc-500"
                    }`}
                  />
                  <span>{s.tabLabel}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Slide Arrow Controls */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-400">
              0{currentSlide + 1} / 0{slides.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous client project"
              className="p-1.5 sm:p-2 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-200 hover:text-white hover:bg-purple-800/60 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next client project"
              className="p-1.5 sm:p-2 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-200 hover:text-white hover:bg-purple-800/60 transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Showcase Card — Sized to fit screen without vertical overflow */}
        <div className="relative rounded-3xl border border-white/[0.08] bg-[#070b1a]/85 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] p-5 sm:p-7 md:p-8 lg:p-10 transition-all duration-700 overflow-hidden">
          
          {/* Top Micro-Header: Live Status & Category */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/[0.06]">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified Live Client Deployment</span>
              </span>
              <span className="hidden sm:inline-block text-xs font-mono text-purple-300/80">
                • {slide.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={slide.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/30 text-[11px] font-mono text-cyan-300 hover:text-white transition-colors"
              >
                <span>{slide.domain}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 2-Column Responsive Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Column: Headlines, Description, Stats & CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/30 text-xs text-purple-200">
                <CurrentIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-medium tracking-wide">{slide.tagline}</span>
              </div>

              {/* Responsive Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-white leading-[1.15]">
                {slide.headlinePrefix}{" "}
                <span className="text-gradient-purple">
                  {slide.headlineHighlight}
                </span>{" "}
                {slide.headlineSuffix}
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-light leading-relaxed max-w-xl">
                {slide.description}
              </p>

              {/* Live Client Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 py-1">
                {slide.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-2 sm:p-3 rounded-2xl bg-purple-950/25 border border-purple-500/20 text-center sm:text-left"
                  >
                    <div className="text-base sm:text-lg md:text-xl font-extrabold font-mono text-white">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-purple-300/80 truncate">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={slide.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95 group"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  onClick={() => openConsultation(slide.serviceCategory)}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/10 hover:border-purple-400/50 bg-[#0d0d14]/70 hover:bg-[#141420] text-zinc-200 hover:text-white text-xs sm:text-sm font-medium backdrop-blur-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Build Similar Tech</span>
                </button>
              </div>
            </div>

            {/* Right Column: Visual Browser Preview Mockup */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative rounded-2xl sm:rounded-3xl border border-purple-500/30 bg-[#040714] shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden group">
                
                {/* Simulated Browser Bar */}
                <div className="px-3 sm:px-4 py-2 bg-[#070b1a] border-b border-purple-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-3 py-0.5 rounded-full bg-[#03050c] text-[10px] font-mono text-zinc-400 flex items-center gap-1 max-w-[190px] truncate">
                    <span className="text-emerald-400">🔒</span>
                    <span className="truncate">{slide.domain}</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400">100% SLA</span>
                </div>

                {/* Screenshot Image Container */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black/60">
                  <Image
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Shade on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-transparent to-transparent opacity-60" />

                  {/* Floating Action Pill over Image */}
                  <a
                    href={slide.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-[#070b1a]/90 backdrop-blur-md border border-purple-500/40 text-xs font-medium text-white hover:text-cyan-300 hover:border-cyan-400/50 shadow-lg flex items-center gap-1.5 transition-all opacity-95 group-hover:opacity-100"
                  >
                    <span>Launch {slide.clientName}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  </a>
                </div>

                {/* Bottom Tech Pills Footer */}
                <div className="p-3 bg-[#070b1a]/95 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {slide.techPills.map((pill, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono text-purple-300 bg-purple-950/40 border border-purple-500/30 px-2 py-0.5 rounded-md"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>In Production</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Indicators & Navigation Strip */}
          <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Switch to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? "w-8 bg-gradient-to-r from-purple-500 to-cyan-400"
                      : "w-2 bg-purple-900/50 hover:bg-purple-700/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-zinc-400">
                Click any tab or arrow to inspect live platforms
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={consultationService}
      />
    </section>
  );
}
