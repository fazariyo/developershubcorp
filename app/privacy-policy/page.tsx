import type { Metadata } from "next";
import { PrivacyPolicyBody } from "@/components/PrivacyPolicyBody";
import "./legal-page.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DevelopersHub Corporation collects, uses, stores, and protects information when you visit our website or engage our services.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyBody />;
}
