import React from "react";
import Image from "next/image";

interface ClientBrand {
  id: string;
  name: string;
  category: string;
  logo: string;
  url: string;
  status: "Live" | "Under Development";
  tileBg?: string;
  tileBorder?: string;
}

const clientBrands: ClientBrand[] = [
  {
    id: "bhilare-travels",
    name: "Bhilare Tour & Travels",
    category: "Fleet & Luxury Travel Logistics",
    logo: "/images/clients/square-bhilare.webp",
    url: "https://bhilaretravels.com",
    status: "Live",
    tileBg: "bg-white",
    tileBorder: "border-white/20",
  },
  {
    id: "heart-physio",
    name: "HeartPhysio",
    category: "Specialized Physical Rehabilitation",
    logo: "/images/clients/square-heartphysio.webp",
    url: "https://heartphysio.in",
    status: "Live",
    tileBg: "bg-white",
    tileBorder: "border-white/20",
  },
  {
    id: "ath-elite",
    name: "Ath-Elite Sports Club",
    category: "Multi-Sport Arena & Academy",
    logo: "/images/clients/square-athelite.webp",
    url: "https://ath-lite-sports.vercel.app/",
    status: "Under Development",
    tileBg: "bg-white",
    tileBorder: "border-white/20",
  },
  {
    id: "keds-tech",
    name: "Keds Technology",
    category: "Software Engineering Studio",
    logo: "/images/clients/square-keds.webp",
    url: "/",
    status: "Live",
    tileBg: "bg-[#070210]",
    tileBorder: "border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]",
  },
];

export default function ClientsMarqueeSection() {
  // Duplicating the 4 brands 4 times creates a 16-card seamless infinite horizontal scroll
  const marqueeItems = [
    ...clientBrands,
    ...clientBrands,
    ...clientBrands,
    ...clientBrands,
  ];

  return (
    <section className="relative z-20 py-16 sm:py-20 border-t border-purple-900/25 bg-[#000000] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-purple-500/60" />
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.25)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Our Clients</span>
            </div>
            <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Ambitious <span className="text-gradient-purple">Brands &amp; Businesses</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-lg">
            High-performance digital products engineered and maintained by Keds Technology.
          </p>
        </div>
      </div>

      {/* Marquee Track Container with Gradient Edge Fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left edge shadow fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-transparent z-10" />

        {/* Right edge shadow fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#000000] via-[#000000]/90 to-transparent z-10" />

        {/* CSS GPU-Accelerated Marquee Stream */}
        <div className="animate-marquee-scroll py-3 flex gap-5 sm:gap-6">
          {marqueeItems.map((item, index) => {
            const isExternal = item.url.startsWith("http");
            const isKeds = item.id === "keds-tech";

            return (
              <a
                key={`${item.id}-${index}`}
                href={item.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className={`group w-[190px] sm:w-[220px] p-4 sm:p-5 rounded-3xl border ${
                  isKeds
                    ? "border-purple-500/40 hover:border-purple-300/70 shadow-[0_10px_35px_rgba(168,85,247,0.25)]"
                    : "border-purple-500/25 hover:border-purple-400/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                } bg-[#0D0720]/85 hover:bg-[#150a2b] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center shrink-0 cursor-pointer`}
              >
                {/* Status Badge */}
                <span
                  className={`px-3 py-0.5 rounded-full text-[10px] font-semibold border mb-3 flex items-center gap-1.5 transition-all ${
                    item.status === "Live"
                      ? "bg-emerald-950/80 border-emerald-500/40 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                      : "bg-amber-950/80 border-amber-500/40 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                      item.status === "Live" ? "bg-emerald-400" : "bg-amber-400"
                    }`}
                  />
                  <span>{item.status}</span>
                </span>

                {/* 1:1 Square Logo Tile */}
                <div
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl ${
                    item.tileBg || "bg-white"
                  } p-2.5 shadow-lg border ${
                    item.tileBorder || "border-white/20"
                  } flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105`}
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-contain"
                    unoptimized
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Client Name */}
                <h3 className="mt-3.5 text-xs sm:text-sm font-bold text-white group-hover:text-purple-200 transition-colors truncate max-w-[170px]">
                  {item.name}
                </h3>

                {/* Client Industry / Category */}
                <span className="text-[10px] sm:text-[11px] text-zinc-400 font-light truncate max-w-[170px] mt-0.5">
                  {item.category}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
