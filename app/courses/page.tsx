import type { Metadata } from "next";
import { CoursesIndexBody } from "@/components/CoursesIndexBody";
import "./courses-index.css";

export const metadata: Metadata = {
  title: "Courses — AI Automation, The Art of Selling & AI Content Generation",
  description:
    "Cohort-based, hands-on courses from DevelopersHub Corporation: AI Automation, The Art of Selling, and AI Content Generation. Every graduate joins our internship program.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return <CoursesIndexBody />;
}
