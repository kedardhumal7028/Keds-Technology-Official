export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Websites" | "Mobile Apps" | "HRMS" | "CRM" | "ERP";
  tagline: string;
  description: string;
  client: string;
  year: string;
  status: "Live" | "In Testing / Staging" | "In Active Rollout" | "Enterprise Deployed";
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
    id: "bhilare-travels",
    slug: "bhilare-travels",
    title: "Bhilare Tour & Travels",
    category: "Websites",
    tagline: "Vehicle Rental, Luxury Tempo Travellers & Group Tour Logistics Platform",
    description: "Official web portal for Bhilare Tour & Travels (Pune, Maharashtra). Backed by a 28-year transportation legacy, the platform features fleet booking for tempo travellers, luxury mini-buses, executive coaches, dynamic inter-city route pricing, and 24/7 client booking management.",
    client: "Bhilare Tour & Travels",
    year: "2025",
    status: "Live",
    liveUrl: "https://bhilaretravels.com",
    featured: true,
    accentColor: "#F59E0B",
    tags: ["Fleet Booking Engine", "Luxury Tempo Travellers", "Dynamic Route Pricing", "Tour Itineraries", "24/7 Booking Support"],
    metrics: [
      { label: "Industry Legacy", value: "28+ Years" },
      { label: "Service Radius", value: "Maharashtra" },
    ],
    challenge: "Handling manual inquiries across phone and WhatsApp for tempo traveller rentals, corporate outings, and outstation family trips caused quoting delays and lost booking opportunities during peak seasons.",
    solution: "We engineered a clean, high-performance web platform featuring comprehensive fleet showcases (13 to 26 seater tempo travellers, luxury buses), dynamic trip inquiries, transparent pricing, and direct WhatsApp booking confirmation."
  },
  {
    id: "heart-physio",
    slug: "heart-physio",
    title: "HeartPhysio",
    category: "Websites",
    tagline: "Digital Physiotherapy, Specialized Rehabilitation & Patient Care Portal",
    description: "Official healthcare platform for HeartPhysio, connecting patients with specialized clinical physiotherapy. Covers orthopedic care, cardiopulmonary rehabilitation, sports injury recovery, post-surgical rehabilitation, women's health, and therapeutic yoga, with support for clinic visits, online video sessions, and home-care dispatch.",
    client: "HeartPhysio",
    year: "2025",
    status: "Live",
    liveUrl: "https://heartphysio.in",
    featured: true,
    accentColor: "#EC4899",
    tags: ["Tele-Physiotherapy", "Home Care Dispatch", "Online Appointment Engine", "Patient Rehabilitation", "Specialist Consultation"],
    metrics: [
      { label: "Care Channels", value: "Clinic + Home" },
      { label: "Specialties", value: "7+ Domains" },
    ],
    challenge: "Patients recovering from cardiac events, joint surgeries, or chronic pain required timely specialist guidance, flexible consultation modes (home visits vs online), and frictionless appointment scheduling.",
    solution: "Developed an accessible, mobile-first patient portal enabling one-click consultation bookings, digital service discovery across specialized therapies, and direct patient-therapist coordination."
  },
  {
    id: "ath-elite",
    slug: "ath-elite-sports-club",
    title: "Ath-Elite Sports Club",
    category: "Websites",
    tagline: "Premier Sports Academy, Court Scheduling & Digital Membership Ecosystem",
    description: "Custom web platform engineered for Ath-Elite Sports Club located in Mundhwa / Koregaon Park Annexe, Pune. Supports real-time court and turf booking across Tennis, Pickleball, Football turf, Badminton, Squash, and Swimming, along with coaching academy enrollments and digital membership subscriptions. Currently in active client staging on Vercel preview ahead of official domain release.",
    client: "Ath-Elite Sports Club",
    year: "2026",
    status: "In Testing / Staging",
    liveUrl: "https://ath-lite-sports.vercel.app/",
    featured: true,
    accentColor: "#00D4FF",
    tags: ["Court Booking Engine", "Multi-Sport Scheduling", "Academy Enrollment", "Membership Portal", "Staging Preview"],
    metrics: [
      { label: "Sports Covered", value: "6+ Arenas" },
      { label: "Stage", value: "Testing & Staging" },
    ],
    challenge: "Ath-Elite manages high-demand multisport courts (tennis, pickleball, football turf, squash, pool) requiring synchronized slot scheduling, parent-coach coordination for youth academies, and membership tracking without double-booking.",
    solution: "Engineered a responsive, high-speed digital web app with dynamic court reservation calendars, academy fee management, coach schedules, and automated instant confirmations."
  }
];
