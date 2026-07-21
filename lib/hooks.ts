"use client";

import { useState, useEffect, useSyncExternalStore } from "react";

function getMediaQuery(): MediaQueryList | undefined {
  if (typeof window === "undefined") return undefined;
  return window.matchMedia("(prefers-reduced-motion: reduce)");
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mq = getMediaQuery();
      if (!mq) return () => {};
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => getMediaQuery()?.matches ?? false,
    () => false
  );
}

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ratios = new Map<string, number>();
    let rafId: number;

    const updateActive = () => {
      let bestId = "";
      let bestRatio = 0;
      for (const [id, ratio] of ratios) {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      }
      setActive(bestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ratios.set(entry.target.id, entry.intersectionRatio);
          } else {
            ratios.delete(entry.target.id);
          }
        }
        if (ratios.size > 0) {
          cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(updateActive);
        }
      },
      { threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], rootMargin: "-80px 0px 0px 0px" }
    );

    const elements = new Map<string, Element>();

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        elements.set(id, el);
        observer.observe(el);
      }
    }

    return () => {
      cancelAnimationFrame(rafId);
      for (const el of elements.values()) {
        observer.unobserve(el);
      }
      observer.disconnect();
    };
  }, [sectionIds]);

  return active;
}

export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return scrollY;
}
