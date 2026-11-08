"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ExternalLink, Activity, Car, Trophy, Building2 } from "lucide-react";

export default function TrustSection() {
  const clients = [
    {
      name: "Ath Elite Sports Club",
      category: "Sports & Facility Management",
      badge: "Court Booking & Membership",
      impact: "Sports Portal",
      href: "/portfolio#ath-elite",
      icon: Trophy,
      glow: "hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,212,255,0.2)]",
    },
    {
      name: "HeartPhysio",
      category: "Healthcare & Patient Care",
      badge: "Clinical Appointments & Tele-Health",
      impact: "Healthcare Web",
      href: "/portfolio#heart-physio",
      icon: Activity,
      glow: "hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)]",
    },
    {
      name: "Bhilare Tour & Travel",
      category: "Travel & Fleet Logistics",
      badge: "Fleet Booking & Route Calculator",
      impact: "Travel Platform",
      href: "/portfolio#bhilare-tour",
      icon: Car,
      glow: "hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]",
    },
  ];

  return (
    <section className="relative z-20 py-16 border-y border-purple-900/20 bg-[#070c1e]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 tracking-wider uppercase mb-1">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Proven Track Record & Trusted Partnerships</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Trusted by High-Velocity Brands & Institutions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            From premier sports facilities and specialized healthcare to multi-fleet travel.
          </p>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client) => {
            const Icon = client.icon;
            return (
              <Link
                key={client.name}
                href={client.href}
                className={`group p-4 sm:p-5 rounded-2xl border border-purple-500/20 bg-[#0B1023]/70 backdrop-blur-md transition-all duration-300 ${client.glow}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-cyan-300 group-hover:border-cyan-400/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-medium text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2.5 py-0.5 rounded-full">
                    {client.impact}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-purple-200 transition-colors flex items-center justify-between">
                  <span>{client.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">{client.category}</p>
                <div className="mt-3 pt-3 border-t border-purple-900/30 flex items-center justify-between text-[11px] text-purple-300/80">
                  <span>{client.badge}</span>
                  <span className="text-zinc-500 group-hover:text-cyan-400 transition-colors">Case Study →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
