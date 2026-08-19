"use client";

import { useEffect } from "react";

/**
 * Reveals `.dh-reveal` elements as they scroll into view (shared by the course
 * index and the course detail pages). Respects prefers-reduced-motion.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll<HTMLElement>(".dh-reveal");
    if (prefersReduce) {
      els.forEach((el) => el.classList.add("dh-revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("dh-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
