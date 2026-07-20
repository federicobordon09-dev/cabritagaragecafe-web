"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-5">
        <SectionWrapper className="text-center mb-16">
          <p className="text-sm font-semibold text-mustard uppercase tracking-widest mb-4">
            FAQ
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-brown leading-[1.15]">
            Todo lo que querés saber{" "}
            <span className="text-mustard">(y más)</span>
          </h2>
        </SectionWrapper>

        <SectionWrapper className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-cream-dark/60 overflow-hidden transition-all duration-300 hover:border-mustard/30 bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-brown text-sm md:text-base pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-mustard"
                    />
                  </motion.div>
                </button>
                <div
                  className={`grid transition-all duration-400 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <motion.div
                      className="px-6 pb-5 text-sm text-iron/60 leading-relaxed"
                      initial={false}
                      animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.a}
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </SectionWrapper>
      </div>
    </section>
  );
}
