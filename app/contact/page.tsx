import type { Metadata } from "next";
import { ContactPageBody } from "@/components/ContactPageBody";
import "./contact-page.css";

export const metadata: Metadata = {
  title: "Contact Us — Free Consultation",
  description:
    "Tell us about your goals and which parts of your digital department you want to consolidate. A DevelopersHub Corporation partner will reply within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactPageBody />;
}
