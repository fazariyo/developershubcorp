import type { Metadata } from "next";
import { ServicesPageBody } from "@/components/ServicesPageBody";
import "../case-studies/case-studies-page.css";
import "./services-page.css";

export const metadata: Metadata = {
  title: "Digital Agency Services — AI Automation, Software Development, Marketing & Creative",
  description:
    "Explore DevelopersHub Corporation's services: AI automation, custom software & web development, mobile apps, growth marketing, and creative production — four disciplines working as one digital department.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesPageBody />;
}
