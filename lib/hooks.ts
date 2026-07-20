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
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
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
