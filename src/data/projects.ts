export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Websites" | "Mobile Apps" | "HRMS" | "CRM" | "ERP";
  tagline: string;
  description: string;
  client: string;
  year: string;
  status: "Live" | "In Active Rollout" | "Enterprise Deployed";
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "ath-elite",
    slug: "ath-elite-sports-club",
    title: "Ath Elite Sports Club",
    category: "Websites",
    tagline: "Premier Sports Management, Membership & Court Booking Digital Ecosystem",
    description: "A state-of-the-art sports club platform engineered for real-time court scheduling, membership tier subscriptions, coaching academy enrollment, and high-performance tournament management.",
    client: "Ath Elite Sports Club",
    year: "2026",
    status: "Live",
    liveUrl: "https://ath-lite-sports.vercel.app/",
    featured: true,
    accentColor: "#00D4FF",
    tags: ["Court Booking Engine", "Membership Portal", "Automated Scheduling", "Real-Time Availability", "Payment Integration"],
    metrics: [],
    challenge: "The sports club relied on manual paper logs and messy phone calls for peak court hours, leading to double-bookings, delayed payments, and unorganized academy registrations.",
    solution: "We engineered an interactive digital web platform with dynamic calendar booking, instant slot reservations, automated payment flows, and parent-coach communication dashboards."
  },
  {
    id: "heart-physio",
    slug: "heart-physio",
    title: "HeartPhysio",
    category: "Websites",
    tagline: "Cardiopulmonary Rehabilitation & Tele-Physiotherapy Care Platform",
    description: "A specialized healthcare portal facilitating patient recovery tracking, digital appointment scheduling with clinical physiotherapists, exercise video prescriptions, and secure health record vaults.",
    client: "HeartPhysio Healthcare",
    year: "2025",
    status: "Live",
    liveUrl: "https://heartphysio.in",
    featured: true,
    accentColor: "#EC4899",
    tags: ["Healthcare Portal", "Tele-Health Care", "Patient EHR Vault", "HIPAA Ready", "Automated Appointments"],
    metrics: [],
    challenge: "Cardiopulmonary patients needed consistent rehabilitation regimens at home, but lacked structured digital guidance, tracking tools, and direct specialist booking.",
    solution: "Developed an accessible, high-contrast, ultra-fast healthcare web portal featuring guided rehabilitation video plans, one-tap doctor consultations, and automatic progress reports."
  },
  {
    id: "bhilare-tour",
    slug: "bhilare-tour-travel",
    title: "Bhilare Tour & Travel",
    category: "Websites",
    tagline: "Fleet Rental, Customized Itinerary & Booking Automation Engine",
    description: "An end-to-end travel logistics platform allowing travelers to explore curated tour packages, calculate inter-city cab fares dynamically, reserve luxury coaches, and get instant booking confirmations.",
    client: "Bhilare Tour & Travel",
    year: "2025",
    status: "Live",
    liveUrl: "https://bhilare-tour-travel.vercel.app/",
    featured: true,
    accentColor: "#F59E0B",
    tags: ["Fleet Management", "Automated Pricing", "Tour Itineraries", "Fare Calculator", "Instant Notifications"],
    metrics: [],
    challenge: "Manual quoting for customized travel packages and cab rentals was costing hours each day and losing high-intent leads to fast-moving competitors.",
    solution: "Created an automated pricing engine connected directly to customer communication channels, allowing travelers to select route, vehicle tier, and passengers for instant quotes."
  }
];
