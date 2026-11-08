export interface TechnologyItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Cloud & DevOps" | "AI & Tools";
  role: string;
  orbitRadius: number; // For the interactive orbit canvas/visual
  speed: number;
  glowColor: string;
}

export const orbitTechnologies = [
  { name: "Next.js", icon: "▲", color: "#FFFFFF", glow: "#7C3AED", angle: 0 },
  { name: "React", icon: "⚛", color: "#61DAFB", glow: "#00D4FF", angle: 40 },
  { name: "Angular", icon: "🅰", color: "#DD0031", glow: "#EF4444", angle: 80 },
  { name: "ASP.NET Core", icon: "⚡", color: "#512BD4", glow: "#9333EA", angle: 120 },
  { name: "Node.js", icon: "🟢", color: "#68A063", glow: "#10B981", angle: 160 },
  { name: "PostgreSQL", icon: "🐘", color: "#336791", glow: "#3B82F6", angle: 200 },
  { name: "MongoDB", icon: "🍃", color: "#47A248", glow: "#10B981", angle: 240 },
  { name: "AWS", icon: "☁", color: "#FF9900", glow: "#F59E0B", angle: 280 },
  { name: "Azure", icon: "🔷", color: "#0078D4", glow: "#00D4FF", angle: 320 }
];

export const allTechnologiesByCategory = [
  {
    category: "Modern Frontend",
    techs: [
      { name: "Next.js 15 (App Router)", proficiency: "Core Mastery" },
      { name: "React 19 & TypeScript", proficiency: "Core Mastery" },
      { name: "Tailwind CSS & Shadcn/UI", proficiency: "Design System" },
      { name: "Angular 18", proficiency: "Enterprise UI" },
      { name: "Framer Motion & Three.js", proficiency: "Interactive 3D" }
    ]
  },
  {
    category: "High-Throughput Backend",
    techs: [
      { name: "ASP.NET Core Web API", proficiency: "Mission-Critical" },
      { name: "Node.js & Express / NestJS", proficiency: "High Concurrency" },
      { name: "Python & FastAPI", proficiency: "AI & Data Pipelines" },
      { name: "GraphQL & gRPC Microservices", proficiency: "Low-Latency" },
      { name: "RabbitMQ & Redis Pub/Sub", proficiency: "Event-Driven" }
    ]
  },
  {
    category: "Robust Data Architecture",
    techs: [
      { name: "PostgreSQL (ACID Compliant)", proficiency: "Relational Core" },
      { name: "MongoDB Atlas", proficiency: "Document Store" },
      { name: "Redis In-Memory Cache", proficiency: "Sub-millisecond" },
      { name: "Pinecone / Vector DBs", proficiency: "AI Embeddings" },
      { name: "Supabase & Prisma ORM", proficiency: "Rapid Scale" }
    ]
  },
  {
    category: "Cloud, DevOps & Security",
    techs: [
      { name: "Amazon Web Services (AWS)", proficiency: "Certified Architect" },
      { name: "Microsoft Azure Cloud", proficiency: "Enterprise Cloud" },
      { name: "Docker & Containerization", proficiency: "Production Standard" },
      { name: "GitHub Actions CI/CD", proficiency: "Automated Testing" },
      { name: "Cloudflare Edge Security", proficiency: "DDoS Mitigation" }
    ]
  }
];
