export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-Time" | "Remote / Hybrid" | "Contract";
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobPositionsData: JobPosition[] = [
  {
    id: "senior-web-architect",
    title: "Senior Full-Stack & Solutions Architect",
    department: "Frontend Engineering",
    location: "Pune / Remote",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Lead the architecture and delivery of flagship client platforms using modern web standards, modular architectures, and scalable microservices.",
    responsibilities: [
      "Architect ultra-fast, accessible web applications with server-driven components",
      "Collaborate closely with UI/UX designers to implement pixel-perfect micro-animations",
      "Benchmark and optimize Core Web Vitals to sustain 95+ performance metrics",
      "Conduct code reviews and mentor junior engineering peers"
    ],
    requirements: [
      "Deep expertise in modern full-stack web architectures and responsive platforms",
      "Proven track record with complex state management, caching, and server actions",
      "Obsession with performance, accessibility, and clean architecture"
    ]
  },
  {
    id: "lead-uiux-designer",
    title: "Lead UI/UX Product Designer",
    department: "Design Studio",
    location: "Pune / Remote",
    type: "Full-Time",
    experience: "2+ Years",
    description: "Shape the visual and interactive identity for high-growth digital brands, creating award-worthy design systems and prototypes.",
    responsibilities: [
      "Craft high-fidelity design components, tokens, and responsive layouts",
      "Conduct user research and translate business workflows into seamless wireframes",
      "Design subtle micro-interactions and interactive prototypes for desktop and mobile"
    ],
    requirements: [
      "A stunning design portfolio showing modern dark-mode, glassmorphism, or high-tech aesthetics",
      "Mastery of modern interface tooling, auto-layout, design tokens, and prototyping",
      "Strong understanding of modern web interface capabilities"
    ]
  },
  {
    id: "backend-systems-engineer",
    title: "Backend & Cloud Systems Engineer",
    department: "Platform Engineering",
    location: "Pune / Remote",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Build robust, scalable APIs and asynchronous task processing pipelines with high-throughput cloud platforms.",
    responsibilities: [
      "Engineer fault-tolerant enterprise APIs with rock-solid security",
      "Design scalable relational database schemas, indexing strategies, and connection pooling",
      "Maintain CI/CD pipelines, containerization, and high-availability cloud deployments"
    ],
    requirements: [
      "Strong background in enterprise backend development and API design",
      "Solid understanding of relational database normalization and query tuning",
      "Experience with cloud infrastructures and distributed microservices"
    ]
  }
];

export const careerPerks = [
  {
    title: "Modern Engineering Stack",
    description: "Work on cloud architectures, intelligent systems, and modern digital platforms without legacy baggage.",
    icon: "Cpu"
  },
  {
    title: "Flexible Hybrid / Remote",
    description: "Focus on output and craftsmanship rather than micromanaged hours. We trust our engineers.",
    icon: "Laptop"
  },
  {
    title: "Competitive Compensation",
    description: "Attractive remuneration benchmarks with performance incentives and high-impact project bonuses.",
    icon: "TrendingUp"
  },
  {
    title: "Fast-Track Career Growth",
    description: "Direct mentorship with founding leadership and opportunity to architect flagship commercial projects.",
    icon: "Rocket"
  }
];
