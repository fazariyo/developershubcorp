import type { Metadata } from "next";
import { CareersPageBody } from "@/components/CareersPageBody";
import "./careers-page.css";

export const metadata: Metadata = {
  title: "Careers & Tech Internships",
  description:
    "Join DevelopersHub Corporation. Explore our internship tracks across nine specialized fields — web development, AI, marketing, and more — see current hiring status, and review our training modules.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return <CareersPageBody />;
}
