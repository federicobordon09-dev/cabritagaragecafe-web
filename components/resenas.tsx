"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { REVIEWS } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";
import { defaultTransition } from "@/lib/animations";

export function Resenas() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const maxIndex = REVIEWS.length - 1;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  };

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const review = REVIEWS[index];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 60 : -60,
      opacity: 0,
    }),
  };

  return (
    <section id="resenas" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <SectionWrapper className="text-center mb-16">
          <p className="text-sm font-semibold text-mustard uppercase tracking-widest mb-4">
            Lo que dicen
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-brown leading-[1.15]">
            <span className="text-mustard">4.8★</span> en Google{" "}
            <br className="md:hidden" />
            con 302 reseñas
          </h2>
        </SectionWrapper>

        <SectionWrapper className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="min-h-[220px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={defaultTransition}
                  className="text-center space-y-6 w-full"
                >
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < review.rating ? "text-mustard fill-mustard" : "text-iron/20"}
                      />
                    ))}
                  </div>
                  <blockquote className="font-serif text-xl md:text-2xl text-brown leading-relaxed text-balance px-4">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <p className="text-sm font-medium text-iron/50">— {review.author}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 w-10 h-10 rounded-full bg-cream border border-cream-dark flex items-center justify-center text-brown hover:bg-mustard hover:text-white transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
              aria-label="Reseña anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 w-10 h-10 rounded-full bg-cream border border-cream-dark flex items-center justify-center text-brown hover:bg-mustard hover:text-white transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
              aria-label="Reseña siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                className={`h-2 rounded-full transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard ${
                  i === index ? "bg-mustard w-6" : "bg-iron/20 hover:bg-iron/30 w-2"
                }`}
                aria-label={`Ir a reseña ${i + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => window.open("https://search.google.com/local/reviews?q=Cabrita+Garage+Café+Belgrano+1184+Mendoza", "_blank", "noopener,noreferrer")}
              className="inline-flex items-center gap-2 text-sm font-medium text-mustard hover:text-caramel transition-colors underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
            >
              Dejanos tu reseña en Google
            </button>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
