"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor clicks
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          lenis.scrollTo(el as HTMLElement, { offset: -80 });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
