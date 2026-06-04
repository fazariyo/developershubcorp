import type { Metadata } from "next";
import { AboutPageBody } from "@/components/AboutPageBody";
import "./about-page.css";

export const metadata: Metadata = {
  title: "About Us — Full-Service Digital Agency",
  description:
    "DevelopersHub Corporation unifies growth marketing, creative production, software development, and AI automation under one roof so growing businesses can scale without juggling five different agencies.",
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  return <AboutPageBody />;
}
