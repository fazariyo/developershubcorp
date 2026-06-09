"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Client-side redirect stub. The /specialists page was removed and its links
// now point to /contact, but old bookmarks / inbound links still hit this URL.
// On a static export there is no server redirect, so forward in the browser.
const TARGET = "/contact";

export function SpecialistsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(TARGET);
  }, [router]);

  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <p>Redirecting you to our contact form…</p>
      <a href={TARGET}>Continue to the contact form</a>
    </main>
  );
}
