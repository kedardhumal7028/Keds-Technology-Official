export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  features: string[];
  techStack: string[];
  metrics: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    slug: "website-development",
    title: "Website Development",
    shortDesc: "Fast, responsive websites built for performance and growth.",
    fullDesc: "We craft blazing-fast, SEO-optimized digital experiences tailored to scale. From marketing platforms to complex web portals, we ensure sub-second loads and conversion-driven design.",
    iconName: "Globe",
    badge: "Core Flagship",
    features: [
      "95+ Lighthouse Score Guarantee",
      "Modern Responsive Layouts",
      "Full SEO & Core Web Vitals Optimization"
    ],
    techStack: ["Next.js", "React", "Node.js"],
    metrics: "< 0.8s First Contentful Paint"
  },
  {
    id: "mobile-dev",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc: "Native & cross-platform apps for iOS and Android.",
    fullDesc: "Reach millions across mobile ecosystems. We deliver high-reliability mobile apps with biometrics, push notifications, offline storage, and responsive gesture-based navigation.",
    iconName: "Smartphone",
    badge: "Mobile Ecosystems",
    features: [
      "Cross-Platform Native Architecture",
      "Secure Biometrics & Payment Gateway",
      "Complete Store Release & Deployment"
    ],
    techStack: ["React Native", "Flutter", "Firebase"],
    metrics: "4.9★ Average Store Rating"
  },
  {
    id: "hrms",
    slug: "hrms-solutions",
    title: "HRMS Solutions",
    shortDesc: "Automate payroll, attendance, and employee management.",
    fullDesc: "Streamline workforce operations with enterprise-grade HRMS. Includes biometric attendance sync, statutory compliance, employee self-service portals, and performance tracking.",
    iconName: "Users",
    badge: "Enterprise Suite",
    features: [
      "Automated Multi-tier Payroll Engine",
      "Biometric & Geofenced Attendance",
      "Statutory Compliance & Tax Analytics"
    ],
    techStack: ["React", "Node.js", "PostgreSQL"],
    metrics: "70% Admin Time Saved"
  },
  {
    id: "crm",
    slug: "crm-systems",
    title: "CRM Systems",
    shortDesc: "Turn leads into loyal clients with smart sales automation.",
    fullDesc: "Empower your sales teams with omnichannel communications, automated lead scoring, visual deal pipelines, and deep revenue forecasting dashboards.",
    iconName: "BarChart3",
    badge: "Sales & Growth",
    features: [
      "Visual Pipeline & Deal Automation",
      "Omnichannel Lead Ingestion",
      "Predictive Revenue Analytics"
    ],
    techStack: ["React", "Node.js", "MongoDB"],
    metrics: "3.2x Lead Conversion Lift"
  },
  {
    id: "erp",
    slug: "erp-systems",
    title: "ERP Systems",
    shortDesc: "Unify inventory, finance, and supply chain in one system.",
    fullDesc: "Say goodbye to data silos. Our ERP systems provide real-time visibility across production, warehouse logistics, invoices, and purchase orders with executive reporting.",
    iconName: "Layers",
    badge: "Mission Critical",
    features: [
      "Multi-Warehouse Inventory & Barcoding",
      "Automated Procurement Workflows",
      "Integrated Invoicing & Ledger Accounting"
    ],
    techStack: ["React", "Node.js", "MySQL"],
    metrics: "99.99% Data Consistency"
  },
  {
    id: "custom-software",
    slug: "custom-software",
    title: "Custom Software",
    shortDesc: "Tailored software built exactly for your business needs.",
    fullDesc: "When off-the-shelf software fails, we build robust, scalable architectures engineered specifically for your domain with zero technical debt and elastic scaling.",
    iconName: "Code2",
    badge: "Tailored Architecture",
    features: [
      "Domain-Driven Modular Architecture",
      "High-Grade Encryption & Role-based Access",
      "Zero-downtime Deployment Pipelines"
    ],
    techStack: ["React", "Node.js", "Cloud"],
    metrics: "100% Custom Tailored"
  },
  {
    id: "ui-ux",
    slug: "ui-ux-design",
    title: "UI/UX Product Design",
    shortDesc: "Beautiful, intuitive designs that users love to interact with.",
    fullDesc: "We craft digital experiences that drive product metrics. From user research and wireframing to design tokens and micro-interactions that elevate your brand.",
    iconName: "Palette",
    badge: "Award-Class",
    features: [
      "High-Fidelity Interactive Prototypes",
      "Design Systems & Token Libraries",
      "UX Research & Usability Testing"
    ],
    techStack: ["Figma", "Adobe XD", "Framer"],
    metrics: "Top 1% Visual Standard"
  },
  {
    id: "maintenance",
    slug: "maintenance-devops",
    title: "Maintenance & DevOps",
    shortDesc: "24/7 monitoring, patching, and cloud reliability management.",
    fullDesc: "Keep your critical applications running. We provide SLA-backed maintenance, automated rollbacks, security audits, database optimization, and performance tuning.",
    iconName: "ShieldCheck",
    badge: "24/7 SLA",
    features: [
      "24/7 Uptime Monitoring & Instant Alerts",
      "Automated Encrypted Backups & Recovery",
      "Zero-Downtime Rolling Deployments"
    ],
    techStack: ["Docker", "AWS", "CI/CD"],
    metrics: "99.95% Guaranteed Uptime"
  },
  {
    id: "api-integration",
    slug: "api-integration",
    title: "API Integration",
    shortDesc: "Connect payment gateways, legacy systems, and cloud APIs seamlessly.",
    fullDesc: "Connect your ecosystem seamlessly. We integrate payment gateways, messaging engines, biometric hardware, ERP connectors, and logistics APIs with rock-solid fault tolerance.",
    iconName: "Cpu",
    badge: "Connected Systems",
    features: [
      "Payment Gateway Integrations",
      "Webhook Handlers & Retry Pipelines",
      "Rate Limiting, Caching & Token Security"
    ],
    techStack: ["REST", "GraphQL", "Webhooks"],
    metrics: "< 50ms Processing Latency"
  },
  {
    id: "cloud-ai",
    slug: "cloud-solutions",
    title: "Cloud & AI Solutions",
    shortDesc: "Scalable cloud infrastructure paired with AI-powered automation.",
    fullDesc: "Harness modern cloud and enterprise intelligence. We architect cost-efficient cloud setups, semantic search, intelligent assistants, and document automation pipelines.",
    iconName: "Sparkles",
    badge: "Next-Gen AI",
    features: [
      "High-Availability Cloud Deployments",
      "Enterprise Workflow Automation",
      "Cost Optimization & Elastic Auto-Scaling"
    ],
    techStack: ["AWS", "GCP", "OpenAI"],
    metrics: "Up to 45% Cloud Cost Reduction"
  }
];
