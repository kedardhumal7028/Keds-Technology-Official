"use client";

import React, { useEffect, useState } from "react";
import { evaluateFestivalWindow } from "./festivalCalendarEngine";
import { FestivalGreetingModal } from "./FestivalGreetingModal";
import { FESTIVALS_MAP, FESTIVAL_LIST, FestivalThemeConfig, YearEdition } from "./festivalData";

export function HomeFestivalPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFestival, setActiveFestival] = useState<FestivalThemeConfig | null>(null);
  const [activeYear, setActiveYear] = useState<YearEdition>("2026");

  useEffect(() => {
    // Check today's date against the +/- 5 days festival calendar
    const result = evaluateFestivalWindow(new Date());

    if (result.isFestivalActive && result.festivalId !== "original") {
      const festConfig = FESTIVALS_MAP[result.festivalId] || FESTIVAL_LIST[1];
      setActiveFestival(festConfig);
      if (result.year === "2026" || result.year === "2027") {
        setActiveYear(result.year as YearEdition);
      }

      // Check if user already dismissed today in this session
      const dismissedKey = `keds_fest_dismissed_${result.festivalId}_${result.year}`;
      const isDismissed = sessionStorage.getItem(dismissedKey);

      if (!isDismissed) {
        // Automatically pop up on homepage visit!
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 600); // 600ms elegant delay after page loads
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (activeFestival) {
      sessionStorage.setItem(`keds_fest_dismissed_${activeFestival.id}_${activeYear}`, "true");
    }
  };

  if (!activeFestival || !isOpen) return null;

  return (
    <FestivalGreetingModal
      festival={activeFestival}
      year={activeYear}
      isOpen={isOpen}
      onClose={handleClose}
    />
  );
}

export default HomeFestivalPopup;

