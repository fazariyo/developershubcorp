import type { Metadata } from "next";
import { TermsOfServiceBody } from "@/components/TermsOfServiceBody";
import "../privacy-policy/legal-page.css";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the DevelopersHub Corporation website and engagement of our software, design, marketing, and AI services.",
};

export default function TermsOfServicePage() {
  return <TermsOfServiceBody />;
}
