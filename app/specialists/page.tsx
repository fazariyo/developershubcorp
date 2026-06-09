import type { Metadata } from "next";
import { SpecialistsRedirect } from "@/components/SpecialistsRedirect";

// The Specialists page was removed; this stub redirects old /specialists links
// to the contact form. Kept out of the index so search engines drop the URL.
export const metadata: Metadata = {
  title: "Redirecting…",
  robots: { index: false, follow: false },
  alternates: { canonical: "/contact" },
};

export default function SpecialistsRedirectPage() {
  return <SpecialistsRedirect />;
}
