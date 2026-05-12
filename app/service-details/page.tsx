"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SERVICE_MAP: Record<string, string> = {
  marketing: "/growth-marketing",
  creative: "/creative-production",
  digital: "/digital-products",
  ai: "/ai-automation",
};

function Redirector() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const service = params.get("service");
    const dest = (service && SERVICE_MAP[service]) || "/services";
    router.replace(dest);
  }, [router, params]);

  return <p style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>Redirecting…</p>;
}

export default function Page() {
  return (
    <Suspense fallback={<p style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>Redirecting…</p>}>
      <Redirector />
    </Suspense>
  );
}
