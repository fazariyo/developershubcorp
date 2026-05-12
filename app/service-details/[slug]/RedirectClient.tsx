"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function RedirectClient({ destination }: { destination: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(destination);
  }, [router, destination]);

  return (
    <p style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>Redirecting…</p>
  );
}
