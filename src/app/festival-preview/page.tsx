import { Metadata } from "next";
import { FestivalPreviewDashboard } from "@/features/festival-preview/FestivalPreviewDashboard";

export const metadata: Metadata = {
  title: "Festival Branding Studio | Visual Preview | Keds Technology",
  description:
    "Interactive Visual Preview Studio for Keds Technology Festival Branding System. Experience 12 Indian festivals across 2026 and 2027 annual trending editions.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FestivalPreviewPage() {
  return <FestivalPreviewDashboard />;
}

