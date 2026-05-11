import type { Metadata } from "next";
import { CoursesPageBody } from "@/components/CoursesPageBody";
import "./courses-page.css";

export const metadata: Metadata = {
  title: "AI Automation Course",
  description:
    "A 10-week hands-on course that takes you from zero to shipping AI agents, automated workflows, and production integrations. Every graduate joins our internship program at DevelopersHub Corporation.",
};

export default function CoursesPage() {
  return <CoursesPageBody />;
}
