"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Globe,
  Smartphone,
  Users,
  BarChart3,
  Layers,
  Code2,
  Palette,
  Cpu,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Terminal,
} from "lucide-react";

const ConsultationModal = dynamic(() => import("./ConsultationModal"), {
  ssr: false,
});

export default function OurExpertiseSection() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeService, setActiveService] = useState("Website Development");

  const services = [
    {
      id: "web-dev",
      title: "Website Development",
      badge: "Web Platforms",
      desc: "Fast, responsive websites built with modern frameworks, clean layouts, and search engine optimization.",
      features: ["Fast Page Load Speed", "SEO & Mobile Optimization", "Custom Dynamic Portals", "Secure Architecture"],
      icon: Globe,
      accentColor: "#00D4FF",
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      badge: "Mobile Apps",
      desc: "Intuitive iOS and Android mobile apps designed for seamless user experience and reliable performance.",
      features: ["iOS & Android Apps", "Offline Functionality", "Secure Authentication", "Push Notifications"],
      icon: Smartphone,
      accentColor: "#7C3AED",
    },
    {
      id: "hrms",
      title: "HRMS Solutions",
      badge: "Workforce",
      desc: "Complete workforce management platform automating attendance, payroll, leave tracking, and compliance.",
      features: ["Automated Payroll Engine", "Biometric & Mobile Clock-in", "Leave & Shift Tracking", "Statutory Compliance"],
      icon: Users,
      accentColor: "#10B981",
    },
    {
      id: "crm",
      title: "CRM Systems",
      badge: "Sales & Clients",
      desc: "Lead and customer relationship management to streamline sales pipelines and improve customer retention.",
      features: ["Lead Tracking & Pipelines", "WhatsApp & Email Sync", "Deal Stage Management", "Sales Reports & Analytics"],
      icon: BarChart3,
      accentColor: "#F59E0B",
    },
    {
      id: "erp",
      title: "ERP Systems",
      badge: "Enterprise",
      desc: "Integrated enterprise system uniting inventory, procurement, invoicing, and supply chain operations.",
      features: ["Inventory & Stock Tracking", "Purchase Order Workflows", "Invoicing & Financial Reports", "Warehouse Management"],
      icon: Layers,
      accentColor: "#EC4899",
    },
    {
      id: "custom-software",
      title: "Custom Software",
      badge: "Tailored Software",
      desc: "Tailored software solutions engineered to address your unique business workflows and operational needs.",
      features: ["Custom Business Workflows", "Secure Database Design", "Third-Party API Integration", "100% Code Ownership"],
      icon: Code2,
      accentColor: "#8B5CF6",
    },
    {
      id: "ui-ux",
      title: "UI/UX Product Design",
      badge: "Design Systems",
      desc: "User-centered interface design focused on simplicity, visual elegance, and seamless user journeys.",
      features: ["Interactive Prototypes", "Modern Design Systems", "User Journey Mapping", "Responsive UI Design"],
      icon: Palette,
      accentColor: "#06B6D4",
    },
    {
      id: "cloud-ai",
      title: "Cloud & AI Solutions",
      badge: "Automation",
      desc: "Reliable cloud infrastructure, smart automations, and data intelligence to modernize business operations.",
      features: ["Scalable Cloud Setup", "Workflow Automation", "Data & Document Processing", "24/7 System Monitoring"],
      icon: Cpu,
      accentColor: "#3B82F6",
    },
  ];

  const handleOpenConsultation = (serviceTitle: string) => {
    setActiveService(serviceTitle);
    setIsConsultationOpen(true);
  };

  return (
    <section id="expertise" className="relative z-20 py-20 md:py-28 border-t border-purple-900/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Our Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="text-gradient-purple">Expertise &amp; Services</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
            From custom website development and mobile apps to enterprise HRMS, CRM, and ERP systems — explore the full spectrum of software solutions engineered by Keds Technology.
          </p>
        </div>

        {/* Services Grid (Clean, Responsive, Premium Glass) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative p-6 sm:p-7 rounded-3xl border border-purple-500/25 bg-[#0D0720]/80 hover:bg-[#160B2E] hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Title in Single Horizontal Line */}
                  <div className="flex items-center gap-3.5 mb-3.5 min-h-[54px]">
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-lg"
                      style={{
                        background: `${service.accentColor}20`,
                        border: `1px solid ${service.accentColor}50`,
                        color: service.accentColor,
                      }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-semibold text-purple-400 uppercase tracking-wider block mb-0.5">
                        {service.badge}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description / Subtitle with uniform height so all cards align perfectly */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light min-h-[64px] sm:min-h-[70px]">
                    {service.desc}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="mt-4 pt-3 border-t border-purple-900/30 space-y-1.5">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-3 border-t border-purple-900/30 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenConsultation(service.title)}
                    className="text-xs font-semibold text-cyan-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>


                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Banner at bottom of Services */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-950/60 via-[#0D0720]/90 to-purple-950/60 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Need a Custom Solution Tailored to Your Business?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-light">
              Talk directly with our lead solution architects. No obligation, guaranteed actionable roadmap.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all cursor-pointer"
            >
              Get In Touch Now
            </a>
            <Link
              href="/services"
              className="px-5 py-3 rounded-full border border-purple-500/30 hover:border-purple-400 bg-purple-950/30 text-zinc-200 hover:text-white text-xs sm:text-sm font-medium transition-all"
            >
              View Detailed Specs →
            </Link>
          </div>
        </div>

      </div>

      {/* Consultation Modal - loaded on demand */}
      {isConsultationOpen && (
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          defaultService={activeService}
        />
      )}
    </section>
  );
}
