import type { Metadata } from "next";
import { CareersPageBody } from "@/components/CareersPageBody";
import "./careers-page.css";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join DevelopersHub Corporation. Explore our internship tracks across nine specialized fields, see current hiring status, and review our training modules.",
};

export default function CareersPage() {
  return <CareersPageBody />;
}
