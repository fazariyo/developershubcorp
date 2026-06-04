import type { Metadata } from "next";
import { SpecialistsPageBody } from "@/components/SpecialistsPageBody";
import "../about-us/about-page.css";

export const metadata: Metadata = {
  title: "Our Specialists — Growth, Creative, Digital & AI Experts",
  description:
    "Meet the specialist leaders behind DevelopersHub Corporation — Growth Marketing, Creative Production, Digital Products, and AI & Automation, all under one unified roof.",
  alternates: { canonical: "/specialists" },
};

export default function SpecialistsPage() {
  return <SpecialistsPageBody />;
}
