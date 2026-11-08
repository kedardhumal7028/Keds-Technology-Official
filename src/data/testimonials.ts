export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  project: string;
  rating: number;
  review: string;
  avatarText: string;
  highlight: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Dr. Vikram Joshi",
    role: "Founding Director",
    company: "HeartPhysio Healthcare",
    project: "HeartPhysio Healthcare Portal",
    rating: 5,
    review: "Keds Technology completely revolutionized our digital patient care. Their engineers didn't just write code; they understood the clinical nuances of cardiopulmonary rehabilitation. The portal is blazing fast, and our patient adherence surged by over 80%. Exceptional craftsmanship.",
    avatarText: "VJ",
    highlight: "80%+ surge in patient adherence"
  },
  {
    id: "test-2",
    name: "Sanjay Bhilare",
    role: "Managing Director",
    company: "Bhilare Tour & Travel",
    project: "Fleet & Tour Automation Engine",
    rating: 5,
    review: "Before working with Keds Technology, our team lost countless hours typing manual quotes and handling frantic phone queries. The automated fare calculator and direct WhatsApp integration multiplied our enquiries fourfold in just 60 days. They are our permanent tech partners.",
    avatarText: "SB",
    highlight: "4x organic enquiry growth"
  },
  {
    id: "test-3",
    name: "Pratik Deshmukh",
    role: "Operations Head",
    company: "Ath Elite Sports Club",
    project: "Sports Management & Booking Portal",
    rating: 5,
    review: "The visual aesthetic that Keds Technology delivered blew our club members away. It has the polish of an Apple product. The court booking system runs flawlessly during peak evening traffic with zero double-bookings. I highly recommend them to anyone who wants world-class digital products.",
    avatarText: "PD",
    highlight: "Apple-level polish & zero downtime"
  },
  {
    id: "test-5",
    name: "Aditi Kulkarni",
    role: "Chief Marketing Officer",
    company: "Apex Enterprise Solutions",
    project: "Digital Transformation & CRM",
    rating: 5,
    review: "From UI/UX wireframes to final production deployment, Keds Technology delivered exactly what we needed. Their team is proactive, responsive, and committed to high performance.",
    avatarText: "AK",
    highlight: "Proactive, responsive execution"
  }
];
