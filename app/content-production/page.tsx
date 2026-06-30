import type { Metadata } from "next";
import { DevelopersHubContentPageBody } from "@/components/DevelopersHubContentPageBody";
// CTASection (shared final CTA) draws its visuals from the case-studies styles.
import "../case-studies/case-studies-page.css";
import "./developershub-content-page.css";

export const metadata: Metadata = {
  title: "DevelopersHub Content Production — Edits, Reels, UGC & brand ads",
  description:
    "DevelopersHub Content Production is the in-house content studio at DevelopersHub Corporation. Cinematic long-form, story-led Reels for YouTube & Instagram, and paid-ready UGC + brand ads — produced end-to-end.",
  alternates: { canonical: "/content-production" },
};

export default function DevelopersHubContentPage() {
  return <DevelopersHubContentPageBody />;
}
