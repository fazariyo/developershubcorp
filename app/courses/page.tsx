import type { Metadata } from "next";
import { CoursesPageBody } from "@/components/CoursesPageBody";
import "./courses-page.css";

export const metadata: Metadata = {
  title: "AI Automation Course — Learn to Build AI Agents & Workflows",
  description:
    "A 10-week hands-on AI automation course that takes you from zero to shipping AI agents, automated workflows, and production integrations. Every graduate joins our internship program at DevelopersHub Corporation.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return <CoursesPageBody />;
}
