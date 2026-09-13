"use client";

import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    // Set a target launch date (e.g. 14 days from initial visit)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 my-6">
      {timeUnits.map((unit, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center px-3 py-2 sm:px-4 sm:py-3 min-w-[65px] sm:min-w-[80px] rounded-xl border border-purple-500/25 bg-purple-950/40 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all hover:border-purple-400/50"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-white tracking-wider">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-[9px] sm:text-[10px] text-purple-300/70 tracking-widest font-semibold mt-0.5">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
