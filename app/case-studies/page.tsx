import type { Metadata } from "next";
import { CaseStudiesPageBody } from "@/components/CaseStudiesPageBody";
import "./case-studies-page.css";

export const metadata: Metadata = {
  title: "Case Studies — Client Results in AI, Software & Marketing",
  description:
    "How DevelopersHub Corporation teams have shipped marketing campaigns, content systems, software products, and AI automations that moved the numbers for our clients.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageBody />;
}
