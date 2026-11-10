import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Users2,
  Award,
  ArrowRight,
  Code2,
} from "lucide-react";

export default function AboutCompanySection() {
  const coreValues = [
    {
      title: "Bespoke Engineering",
      desc: "Zero generic templates or copy-paste shortcuts. Every solution is handcrafted to match your precise operational model.",
      icon: Code2,
      accent: "#00D4FF",
    },
    {
      title: "Sub-Second Performance",
      desc: "Architected with modern server rendering, distributed caching, and optimized data pipelines for blazing fast speed.",
      icon: Zap,
      accent: "#7C3AED",
    },
    {
      title: "Radical Transparency",
      desc: "Direct access to lead software architects, weekly sprint reviews, and clear timelines without corporate red tape.",
      icon: ShieldCheck,
      accent: "#10B981",
    },
    {
      title: "Scalable Long-Term Growth",
      desc: "Engineered to effortlessly handle 10x traffic spikes, complex multi-user workflows, and modular future expansion.",
      icon: Target,
      accent: "#EC4899",
    },
  ];

  return (
    <section id="about" className="relative z-20 py-20 md:py-28 border-t border-purple-900/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>About Keds Technology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Architecting the Future of <span className="text-gradient-purple">Digital Technology</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
            Headquartered in Pune, Keds Technology is a full-lifecycle software engineering and digital transformation studio. We partner with ambitious startups and established enterprises to build software that drives real commercial success.
          </p>
        </div>

        {/* 2-Column Company Story & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">

          {/* Left: Who We Are & Mission */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl border border-purple-500/25 bg-[#0D0720]/80 backdrop-blur-xl shadow-lg space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-400/40 text-xs font-medium text-purple-300">
                <span>Our Mission</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Empowering Businesses With Modern Digital Infrastructure
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                We build software that helps companies operate efficiently and scale seamlessly. From automated management systems to high-performance web and mobile applications, we focus on delivering measurable business value.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-purple-500/25 bg-[#0D0720]/80 backdrop-blur-xl shadow-lg space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-400/40 text-xs font-medium text-purple-300">
                <span>Our Philosophy</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Clean Design Meets Robust Engineering
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                We believe great software should be intuitive to use and reliable under scale. We combine modern user experience design with secure, scalable architecture built for long-term growth.
              </p>
            </div>
          </div>

          {/* Right: Key Milestones & Capabilities Card */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-9 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-[#0D0720]/95 via-[#0A0418]/95 to-[#06020E] backdrop-blur-2xl shadow-2xl space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>Why Partner With Keds?</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/60 border border-purple-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      Zero-Compromise Code Quality
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Engineered with comprehensive automated testing and strict quality protocols, ensuring reliable, bug-free production releases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/60 border border-purple-400/40 flex items-center justify-center text-emerald-300 shrink-0">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      Dedicated Agile Engineering Squad
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      You collaborate directly with senior technical architects and UI/UX designers — no account manager middlemen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/60 border border-purple-400/40 flex items-center justify-center text-pink-300 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      Enterprise Security & Ownership
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      100% intellectual property ownership, complete source code handover, NDA protection, and OWASP security standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end text-xs text-zinc-400 border-t border-purple-900/40">
                <Link
                  href="/about"
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreValues.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-6 sm:p-7 rounded-3xl border border-purple-500/20 bg-[#0D0720]/80 hover:bg-[#160B2E] hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-11 h-11 rounded-2xl mb-4 flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{
                      background: `${item.accent}20`,
                      border: `1px solid ${item.accent}45`,
                      color: item.accent,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
