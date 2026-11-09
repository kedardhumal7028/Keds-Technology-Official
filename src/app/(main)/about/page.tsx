import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import KedsLogo from "@/components/KedsLogo";
import { Sparkles, Target, Eye, Gem, Shield, HeartHandshake, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Custom Software & Web Development Company",
  description:
    "Learn about Keds Technology - a premier software development and digital transformation company in Pune, India. Discover our mission, engineering philosophy, and commitment to building world-class websites and applications.",
  keywords: [
    "About Keds Technology",
    "Keds Technology",
    "Keds",
    "Technology",
    "Software Company Pune",
    "IT Engineering Firm",
    "Web Development Team",
  ],
  alternates: {
    canonical: "https://kedstechnology.com/about",
  },
};

export default function AboutPage() {
  const milestones = [
    {
      year: "Phase I",
      title: "Founding & Core Engineering R&D",
      desc: "Keds Technology was established with a singular vision: replacing cookie-cutter templates with bespoke, performance-obsessed software architectures.",
    },
    {
      year: "Phase II",
      title: "Healthcare & Logistics Expansion",
      desc: "Successfully deployed HeartPhysio's clinical tele-rehabilitation platform and Bhilare Tour's automated fleet logistics engine.",
    },
    {
      year: "Phase III",
      title: "Sports Tech & Enterprise Systems",
      desc: "Architected the Ath Elite Sports Club tournament and booking platform, alongside multi-plant manufacturing ERP engines.",
    },
    {
      year: "Phase IV",
      title: "AI Integration & Global Scale",
      desc: "Pioneering LLM-driven internal automation, predictive HRMS analytics, and resilient serverless cloud platforms.",
    },
  ];

  return (
    <main className="w-full pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Innovate • Build • Scale</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            We Are <span className="text-gradient-purple">Keds Technology</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            A senior digital product studio engineering high-performance software that helps modern businesses outpace their competition.
          </p>
        </div>

        {/* Master Story Box */}
        <div className="p-8 sm:p-12 rounded-3xl border border-purple-500/30 bg-[#0D0720]/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] mb-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The Keds Story: Eliminating Mediocrity in Software
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              We started Keds Technology after seeing dozens of growing companies hit a wall. Founders and CTOs were frustrated with two extremes: overpriced traditional consultancies that moved like molasses, or cheap agencies that handed off fragile templates riddled with bugs and layout shifts.
            </p>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              We built an agile squad of senior product designers and full-stack engineers. When you partner with Keds, you don't get handed off to junior interns. You work directly with architects who know modern web performance, scalable database architecture, cloud telemetry, and high-conversion UX inside and out.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-purple-900/30">
              <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 text-center">
                <div className="text-lg sm:text-xl font-bold text-white">Modern Stack</div>
                <div className="text-xs text-purple-300 mt-1">Fast &amp; Responsive Web &amp; Apps</div>
              </div>
              <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 text-center">
                <div className="text-lg sm:text-xl font-bold text-purple-300">100% Ownership</div>
                <div className="text-xs text-purple-300 mt-1">Full Source Code &amp; IP Handover</div>
              </div>
              <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 text-center">
                <div className="text-lg sm:text-xl font-bold text-fuchsia-300">Direct Access</div>
                <div className="text-xs text-purple-300 mt-1">Direct Technical Collaboration</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-3xl border border-purple-500/25 bg-[#0D0720]/80 backdrop-blur-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-300">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              To engineer digital products and operational backbones that eliminate administrative overhead, scale effortlessly during traffic spikes, and generate measurable commercial upside for every partner.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-purple-500/25 bg-[#0D0720]/80 backdrop-blur-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-fuchsia-300">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              To be recognized globally as the pinnacle of software craftsmanship — an elite team where Apple-grade design meets enterprise-grade resilience.
            </p>
          </div>
        </div>

        {/* Company Journey Roadmap */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The Evolution of Keds Technology
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              A track record of continuous innovation and customer-centric software delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={m.year}
                className="p-6 rounded-3xl border border-purple-500/20 bg-[#0D0720]/80 backdrop-blur-md space-y-3"
              >
                <div className="text-xs text-purple-300 font-semibold px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 w-fit">
                  {m.year}
                </div>
                <h3 className="text-base font-bold text-white">{m.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl border border-purple-500/40 bg-gradient-to-r from-purple-950/40 via-[#0D0720] to-purple-950/40 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Ready to elevate your digital presence?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Speak with our senior architects today and get a complimentary technical assessment.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold text-xs sm:text-sm shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
