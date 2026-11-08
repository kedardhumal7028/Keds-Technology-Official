export interface FacilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  accent: string;
  highlights: string[];
}

export const facilitiesData: FacilityItem[] = [
  {
    id: "sec-dev",
    title: "Secure Development",
    subtitle: "Zero-Trust Engineering & Encryption",
    description: "Every line of code complies with OWASP Top 10 security standards, automated static code analysis (SAST), end-to-end payload encryption, and strict role-based access control.",
    icon: "ShieldAlert",
    accent: "#7C3AED",
    highlights: ["SOC2 & ISO 27001 Alignment", "Encrypted Data at Rest & in Transit", "Regular Penetration Testing"]
  },
  {
    id: "cloud-infra",
    title: "Cloud Infrastructure",
    subtitle: "Resilient Multi-Region Cloud Foundations",
    description: "Engineered on enterprise AWS & Microsoft Azure networks with auto-scaling compute groups, elastic load balancers, multi-AZ redundancy, and automated failover.",
    icon: "Server",
    accent: "#00D4FF",
    highlights: ["99.95% Guaranteed Uptime", "Automated Hourly Encrypted Backups", "Sub-50ms Global Edge CDN Delivery"]
  },
  {
    id: "agile-flow",
    title: "Agile Workflow",
    subtitle: "2-Week Sprints & Radical Transparency",
    description: "Experience transparent product development with bi-weekly sprint demos, shared staging environments, interactive Jira/Linear tracking, and live Slack/WhatsApp engineering channels.",
    icon: "Workflow",
    accent: "#9333EA",
    highlights: ["Sprint Reviews & Working Demos", "Live Staging URLs for Testing", "Iterative Continuous Feedback"]
  },
  {
    id: "testing-qa",
    title: "Automated QA & Testing",
    subtitle: "Zero-Regression CI/CD Pipelines",
    description: "Robust automated test suites including Playwright E2E browser tests, Jest unit validations, API contract checking, and multi-device cross-browser compatibility checks.",
    icon: "CheckCircle2",
    accent: "#10B981",
    highlights: ["Automated Regression Testing", "Cross-Browser & Mobile Matrix", "Stress & Concurrency Load Testing"]
  },
  {
    id: "tech-support",
    title: "24/7 Technical Support",
    subtitle: "Always-On Telemetry & Rapid Incident Response",
    description: "Our dedicated support engineers monitor application health around the clock with Datadog and Sentry telemetry, guaranteeing sub-15-minute response times for critical incidents.",
    icon: "Headphones",
    accent: "#F59E0B",
    highlights: ["15-Minute Priority SLA", "Proactive Exception Monitoring", "Continuous Security Patches"]
  },
  {
    id: "dedicated-team",
    title: "Dedicated Engineering Squad",
    subtitle: "Senior Full-Stack Specialists Dedicated to You",
    description: "Direct access to senior software architects, UI/UX designers, and full-stack developers who treat your business mission as their own without intermediary layers.",
    icon: "Users2",
    accent: "#EC4899",
    highlights: ["Direct Senior Architect Access", "No Junior Hand-offs", "Seamless Team Collaboration"]
  }
];
