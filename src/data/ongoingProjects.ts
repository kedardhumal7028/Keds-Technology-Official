export type StageType = "Discovery" | "Design" | "Development" | "Testing" | "Launch";

export interface RoadmapStage {
  name: StageType;
  stepNumber: number;
  status: "completed" | "in-progress" | "upcoming";
  details: string;
}

export interface OngoingProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  currentStage: StageType;
  completionPercent: number;
  targetLaunch: string;
  leadArchitect: string;
  synopsis: string;
  stages: RoadmapStage[];
  deliverablesInThisSprint: string[];
}

export const ongoingProjectsData: OngoingProjectItem[] = [
  {
    id: "ath-elite-phase2",
    title: "Ath Elite Sports Club – Mobile App & Tournament Engine (Phase 2)",
    client: "Ath Elite Sports Club",
    category: "Mobile Platform & Real-Time Engine",
    currentStage: "Development",
    completionPercent: 68,
    targetLaunch: "Q4 2026",
    leadArchitect: "Keds Core Team",
    synopsis: "Following the successful launch of the web portal, Ath Elite is now expanding with a dedicated cross-platform mobile companion app featuring live tournament brackets, push notifications for match schedules, and QR-based turf access control.",
    stages: [
      {
        name: "Discovery",
        stepNumber: 1,
        status: "completed",
        details: "Gathered tournament rules, coach management requirements, and QR scanner hardware specifications."
      },
      {
        name: "Design",
        stepNumber: 2,
        status: "completed",
        details: "Mobile UI/UX design system finalized with dark/neon athletic theme, tested with 50 test athletes."
      },
      {
        name: "Development",
        stepNumber: 3,
        status: "in-progress",
        details: "Active sprint: Building real-time live bracket updates, member digital wallet, and coach rating module."
      },
      {
        name: "Testing",
        stepNumber: 4,
        status: "upcoming",
        details: "Field load-testing on 500 concurrent tournament participants with multi-court push alerts."
      },
      {
        name: "Launch",
        stepNumber: 5,
        status: "upcoming",
        details: "Phased rollout on application store channels alongside on-site club kiosks."
      }
    ],
    deliverablesInThisSprint: [
      "Dynamic Bracket Elimination Algorithm",
      "QR Code Generator for Entry Gates",
      "Coach & Referee Scoring Dashboard"
    ]
  },
  {
    id: "ai-hrms-v2",
    title: "Intelligent Workforce & Automated Payroll Platform (v2)",
    client: "Enterprise HR Client",
    category: "HRMS & Workflow Automation",
    currentStage: "Testing",
    completionPercent: 88,
    targetLaunch: "November 2026",
    leadArchitect: "Keds Engineering Team",
    synopsis: "An upgrade introducing automated attendance audits, streamlined employee onboarding, and predictive leave analytics for enterprise clients.",
    stages: [
      {
        name: "Discovery",
        stepNumber: 1,
        status: "completed",
        details: "Defined compliance regulations for 4 different state industrial acts and employee query taxonomy."
      },
      {
        name: "Design",
        stepNumber: 2,
        status: "completed",
        details: "Designed conversational UI cards and executive summary analytics widgets."
      },
      {
        name: "Development",
        stepNumber: 3,
        status: "completed",
        details: "Integrated custom intelligence models for enterprise HR documentation and biometric anomaly detectors."
      },
      {
        name: "Testing",
        stepNumber: 4,
        status: "in-progress",
        details: "Simulating salary payout calculations across 3,000 edge cases with zero discrepancy tolerance."
      },
      {
        name: "Launch",
        stepNumber: 5,
        status: "upcoming",
        details: "Seamless zero-downtime hot swap migration for all existing clients."
      }
    ],
    deliverablesInThisSprint: [
      "Statutory Tax Calculation Automated Verification",
      "Employee Shift Swap Workflow Validation",
      "Penetration Testing & Security Audit"
    ]
  },
  {
    id: "bhilare-gps-engine",
    title: "Bhilare Tour – Live Fleet GPS Telemetry & Driver Dispatch",
    client: "Bhilare Tour & Travel",
    category: "Logistics Architecture & Dispatch",
    currentStage: "Development",
    completionPercent: 54,
    targetLaunch: "December 2026",
    leadArchitect: "Keds Mobile & Cloud Team",
    synopsis: "Equipping 85+ luxury coaches and inter-city cabs with hardware sensors connected via real-time data pipelines for live ETA tracking, fuel optimization, and automated customer trip link sharing.",
    stages: [
      {
        name: "Discovery",
        stepNumber: 1,
        status: "completed",
        details: "Selected hardware sensors, connectivity providers, and mapped critical highway corridors."
      },
      {
        name: "Design",
        stepNumber: 2,
        status: "completed",
        details: "Designed live radar map interface for the operations central command control room."
      },
      {
        name: "Development",
        stepNumber: 3,
        status: "in-progress",
        details: "Implementing high-throughput data pipelines ingesting continuous location telemetry."
      },
      {
        name: "Testing",
        stepNumber: 4,
        status: "upcoming",
        details: "Real-world test drives across Western Ghats ghat sections to test intermittent network failover."
      },
      {
        name: "Launch",
        stepNumber: 5,
        status: "upcoming",
        details: "Full deployment across all corporate and luxury tourist fleet vehicles."
      }
    ],
    deliverablesInThisSprint: [
      "Real-time Map Clustering Engine",
      "Customer Live Trip Tracking URL Generator",
      "Geofence Alert Notifications"
    ]
  }
];
