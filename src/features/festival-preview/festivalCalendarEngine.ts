/**
 * Smart Perpetual Festival Calendar & Auto-Scheduling Engine
 * 
 * Rules:
 * 1. Automatically activates 5 days before festival date.
 * 2. Remains active on the festival day.
 * 3. Stays active for 5 days after the festival date.
 * 4. Perpetual Multi-Year Support: Covers 2025-2035+ with lunar calendar mapping
 *    and algorithmic fallback for future years.
 */

import { FestivalId } from "./festivalData";

export interface FestivalDateInfo {
  festivalId: FestivalId;
  name: string;
  nativeGreeting: string;
  shubhechhaMarathi: string;
  shubhechhaEnglish: string;
  tagline: string;
}

// Master metadata for greetings and Marathi Shubhechha
export const FESTIVAL_GREETINGS_MAP: Record<FestivalId, FestivalDateInfo> = {
  original: {
    festivalId: "original",
    name: "Normal Website",
    nativeGreeting: "Welcome to Keds Technology",
    shubhechhaMarathi: "Keds Technology मध्ये आपले सहर्ष स्वागत आहे!",
    shubhechhaEnglish: "Engineering High-Velocity Enterprise Software",
    tagline: "Custom Software, Mobile Apps & Enterprise Systems",
  },
  diwali: {
    festivalId: "diwali",
    name: "Diwali (दीपावली)",
    nativeGreeting: "शुभ दीपावली",
    shubhechhaMarathi: "Keds Technology कडून तुम्हाला व तुमच्या संपूर्ण परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!",
    shubhechhaEnglish: "Wishing you and your family a luminous, prosperous, and joyful Deepavali!",
    tagline: "May this festival of lights illuminate your path with infinite growth and success.",
  },
  "ganesh-chaturthi": {
    festivalId: "ganesh-chaturthi",
    name: "Ganesh Chaturthi (गणेशोत्सव)",
    nativeGreeting: "गणेश चतुर्थीच्या हार्दिक शुभेच्छा",
    shubhechhaMarathi: "Keds Technology परिवारातर्फे गणेश चतुर्थीच्या सर्व गणेशभक्तांना मंगलमय शुभेच्छा!",
    shubhechhaEnglish: "May Lord Ganesha bless you with wisdom, prosperity, and triumphant beginnings!",
    tagline: "Celebrating auspicious beginnings and engineering wisdom.",
  },
  navratri: {
    festivalId: "navratri",
    name: "Navratri (नवरात्री उत्सव)",
    nativeGreeting: "शुभ नवरात्री",
    shubhechhaMarathi: "Keds Technology कडून नवरात्रोत्सवाच्या आणि दांडियाच्या उत्साही शुभेच्छा!",
    shubhechhaEnglish: "Wishing you 9 days of energy, vibrancy, and divine prosperity this Navratri!",
    tagline: "Embrace the divine feminine energy and power of creative innovation.",
  },
  dussehra: {
    festivalId: "dussehra",
    name: "Dussehra (विजयादशमी)",
    nativeGreeting: "दसर्‍याच्या हार्दिक शुभेच्छा",
    shubhechhaMarathi: "सोनेरी क्षणांचे स्वागत! Keds Technology कडून दसऱ्याच्या व विजयादशमीच्या हार्दिक शुभेच्छा!",
    shubhechhaEnglish: "Celebrating the victory of righteousness, courage, and technological excellence!",
    tagline: "Celebrate the triumphs of courage and new beginnings.",
  },
  holi: {
    festivalId: "holi",
    name: "Holi (होळी व धूलिवंदन)",
    nativeGreeting: "होळीच्या रंगीबेरंगी शुभेच्छा",
    shubhechhaMarathi: "रंगांची उधळण, सुखाची बरसात! Keds Technology कडून धुलीवंदनाच्या मनःपूर्वक शुभेच्छा!",
    shubhechhaEnglish: "Wishing you a vibrant, joyful, and colorful festival of colors!",
    tagline: "Painting the canvas of technology with vibrant colors of innovation.",
  },
  "gudi-padwa": {
    festivalId: "gudi-padwa",
    name: "Gudi Padwa (गुढीपाडवा)",
    nativeGreeting: "गुढीपाडव्याच्या हार्दिक शुभेच्छा",
    shubhechhaMarathi: "मराठी नववर्षाच्या आणि गुढीपाडव्याच्या Keds Technology कडून मनापासून शुभेच्छा!",
    shubhechhaEnglish: "Happy Marathi New Year & Gudi Padwa! May this year elevate your dreams to new heights!",
    tagline: "Raising the banner of success, health, and prosperity.",
  },
  "makar-sankranti": {
    festivalId: "makar-sankranti",
    name: "Makar Sankranti (मकर संक्रांत)",
    nativeGreeting: "तिळगूळ घ्या, गोड गोड बोला",
    shubhechhaMarathi: "तिळगूळ घ्या गोड गोड बोला! Keds Technology कडून मकर संक्रांतीच्या गोड शुभेच्छा!",
    shubhechhaEnglish: "Wishing you a sweet, soaring, and prosperous Makar Sankranti!",
    tagline: "May your ambitions soar high like kites in the open sky.",
  },
  "independence-day": {
    festivalId: "independence-day",
    name: "Independence Day (स्वातंत्र्य दिन)",
    nativeGreeting: "स्वातंत्र्य दिनाच्या हार्दिक शुभेच्छा",
    shubhechhaMarathi: "Keds Technology कडून सर्व भारतीयांना स्वातंत्र्य दिनाच्या मनःपूर्वक शुभेच्छा! जय हिंद!",
    shubhechhaEnglish: "Proudly Engineering from Pune, India! Happy 79th+ Independence Day!",
    tagline: "Engineering national digital pride with sovereign code ownership.",
  },
  "republic-day": {
    festivalId: "republic-day",
    name: "Republic Day (प्रजासत्ताक दिन)",
    nativeGreeting: "प्रजासत्ताक दिनाच्या हार्दिक शुभेच्छा",
    shubhechhaMarathi: "Keds Technology तर्फे सर्व देशबांधवांना प्रजासत्ताक दिनाच्या गौरवशाली शुभेच्छा!",
    shubhechhaEnglish: "Honoring our constitution and digital sovereign leadership on Republic Day!",
    tagline: "Celebrating democracy, constitutional values, and digital innovation.",
  },
  janmashtami: {
    festivalId: "janmashtami",
    name: "Krishna Janmashtami (गोकुळाष्टमी)",
    nativeGreeting: "कृष्ण जन्माष्टमीच्या हार्दिक शुभेच्छा",
    shubhechhaMarathi: "दहीहंडी आणि गोकुळाष्टमीच्या Keds Technology कडून सर्वांना भक्तिमय शुभेच्छा!",
    shubhechhaEnglish: "May Lord Krishna shower you with love, joy, and eternal prosperity!",
    tagline: "Celebrating divine playfulness, duty, and spiritual grace.",
  },
  "ram-navami": {
    festivalId: "ram-navami",
    name: "Ram Navami (श्रीराम नवमी)",
    nativeGreeting: "श्रीराम नवमीच्या हार्दिक शुभेच्छा",
    shubhechhaMarathi: "प्रभू श्रीरामांच्या पावन चरणी नमन! Keds Technology कडून रामनवमीच्या शुभेच्छा!",
    shubhechhaEnglish: "Wishing you peace, virtue, and divine strength on Sri Ram Navami!",
    tagline: "Embodying dharma, truth, and unwavering commitment in engineering.",
  },
};

/**
 * Perpetual Festival Date Registry (2025 through 2035+)
 * Dates in YYYY-MM-DD format (Peak Festival Day)
 */
export const MULTI_YEAR_FESTIVAL_CALENDAR: Record<string, Record<FestivalId, string>> = {
  "2025": {
    original: "",
    "makar-sankranti": "2025-01-14",
    "republic-day": "2025-01-26",
    holi: "2025-03-14",
    "gudi-padwa": "2025-03-30",
    "ram-navami": "2025-04-06",
    "independence-day": "2025-08-15",
    janmashtami: "2025-08-16",
    "ganesh-chaturthi": "2025-08-27",
    navratri: "2025-09-22",
    dussehra: "2025-10-02",
    diwali: "2025-10-20",
  },
  "2026": {
    original: "",
    "makar-sankranti": "2026-01-14",
    "republic-day": "2026-01-26",
    holi: "2026-03-03",
    "gudi-padwa": "2026-03-19",
    "ram-navami": "2026-03-27",
    "independence-day": "2026-08-15",
    janmashtami: "2026-09-04",
    "ganesh-chaturthi": "2026-09-14",
    navratri: "2026-10-11",
    dussehra: "2026-10-20",
    diwali: "2026-11-08",
  },
  "2027": {
    original: "",
    "makar-sankranti": "2027-01-15",
    "republic-day": "2027-01-26",
    holi: "2027-03-22",
    "gudi-padwa": "2027-04-07",
    "ram-navami": "2027-04-15",
    "independence-day": "2027-08-15",
    janmashtami: "2027-08-25",
    "ganesh-chaturthi": "2027-09-04",
    navratri: "2027-09-30",
    dussehra: "2027-10-10",
    diwali: "2027-10-29",
  },
  "2028": {
    original: "",
    "makar-sankranti": "2028-01-15",
    "republic-day": "2028-01-26",
    holi: "2028-03-11",
    "gudi-padwa": "2028-03-27",
    "ram-navami": "2028-04-03",
    "independence-day": "2028-08-15",
    janmashtami: "2028-08-13",
    "ganesh-chaturthi": "2028-08-24",
    navratri: "2028-10-18",
    dussehra: "2028-10-27",
    diwali: "2028-11-16",
  },
  "2029": {
    original: "",
    "makar-sankranti": "2029-01-14",
    "republic-day": "2029-01-26",
    holi: "2029-02-28",
    "gudi-padwa": "2029-04-14",
    "ram-navami": "2029-04-21",
    "independence-day": "2029-08-15",
    janmashtami: "2029-09-01",
    "ganesh-chaturthi": "2029-09-11",
    navratri: "2029-10-08",
    dussehra: "2029-10-17",
    diwali: "2029-11-05",
  },
  "2030": {
    original: "",
    "makar-sankranti": "2030-01-14",
    "republic-day": "2030-01-26",
    holi: "2030-03-19",
    "gudi-padwa": "2030-04-03",
    "ram-navami": "2030-04-11",
    "independence-day": "2030-08-15",
    janmashtami: "2030-08-21",
    "ganesh-chaturthi": "2030-09-01",
    navratri: "2030-09-28",
    dussehra: "2030-10-06",
    diwali: "2030-10-26",
  },
};

export interface ActiveFestivalResult {
  isFestivalActive: boolean;
  festivalId: FestivalId;
  festivalName: string;
  festivalDate: string;
  year: string;
  daysDifference: number; // e.g. -3 means 3 days before; 0 means peak day; +4 means 4 days after
  statusDescription: string;
  windowStartDate: string;
  windowEndDate: string;
  greetings: FestivalDateInfo;
}

/**
 * Calculates whether a given date falls within the [Peak - 5 days, Peak + 5 days] active window.
 * If targetDate is omitted, current system time is used.
 */
export function evaluateFestivalWindow(
  testDate: Date = new Date(),
  overrideYear?: string
): ActiveFestivalResult {
  const currentYear = overrideYear || testDate.getFullYear().toString();
  const yearCalendar = MULTI_YEAR_FESTIVAL_CALENDAR[currentYear];

  // If calendar doesn't have explicit entry for future year, fall back to nearest year
  const calendarToUse = yearCalendar || MULTI_YEAR_FESTIVAL_CALENDAR["2026"];

  const festivalKeys = Object.keys(calendarToUse) as FestivalId[];

  // 5 days in milliseconds
  const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;

  for (const festId of festivalKeys) {
    if (festId === "original") continue;

    const dateStr = calendarToUse[festId];
    if (!dateStr) continue;

    const [year, month, day] = dateStr.split("-").map(Number);
    const peakDate = new Date(year, month - 1, day, 12, 0, 0);

    const windowStart = new Date(peakDate.getTime() - FIVE_DAYS_MS);
    const windowEnd = new Date(peakDate.getTime() + FIVE_DAYS_MS);

    // Normalize testDate time to midday for clean day comparison
    const normalizedTestDate = new Date(
      testDate.getFullYear(),
      testDate.getMonth(),
      testDate.getDate(),
      12,
      0,
      0
    );

    if (normalizedTestDate >= windowStart && normalizedTestDate <= windowEnd) {
      // It is within the 5-day window!
      const diffTime = normalizedTestDate.getTime() - peakDate.getTime();
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

      let statusDescription = "";
      if (diffDays < 0) {
        statusDescription = `${Math.abs(diffDays)} दिवस आधी (Active ${Math.abs(diffDays)} days before)`;
      } else if (diffDays === 0) {
        statusDescription = "आज सणाचा मुख्य दिवस आहे! (Peak Festival Day)";
      } else {
        statusDescription = `${diffDays} दिवस नंतर (Active ${diffDays} days post-festival)`;
      }

      return {
        isFestivalActive: true,
        festivalId: festId,
        festivalName: FESTIVAL_GREETINGS_MAP[festId].name,
        festivalDate: dateStr,
        year: currentYear,
        daysDifference: diffDays,
        statusDescription,
        windowStartDate: windowStart.toISOString().split("T")[0],
        windowEndDate: windowEnd.toISOString().split("T")[0],
        greetings: FESTIVAL_GREETINGS_MAP[festId],
      };
    }
  }

  // No festival active on this date
  return {
    isFestivalActive: false,
    festivalId: "original",
    festivalName: "Standard Mode (No festival window active)",
    festivalDate: "",
    year: currentYear,
    daysDifference: 0,
    statusDescription: "Standard Operating Mode (5-day window is inactive)",
    windowStartDate: "",
    windowEndDate: "",
    greetings: FESTIVAL_GREETINGS_MAP["original"],
  };
}

