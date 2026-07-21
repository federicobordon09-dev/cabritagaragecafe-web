"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { EVENTS, BUSINESS } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";
import { staggerContainer, staggerItem, cardHover } from "@/lib/animations";

export function Eventos() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <SectionWrapper className="text-center mb-16">
          <p className="text-sm font-semibold text-mustard uppercase tracking-widest mb-4">
            Eventos & Novedades
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-brown leading-[1.15]">
            Siempre{" "}
            <span className="text-mustard">pasa algo</span> en Cabrita
          </h2>
        </SectionWrapper>

        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px 0px" }}
        >
          {EVENTS.map((event) => (
            <motion.div
              key={event.title}
              variants={staggerItem}
              className="bg-cream rounded-2xl p-7 md:p-8 border border-cream-dark/60 group hover:border-mustard/30 transition-all duration-500"
              whileHover={cardHover}
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-mustard/10 flex items-center justify-center shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <Calendar size={22} className="text-mustard" />
                </motion.div>
                <div>
                  <span className="text-xs font-semibold text-mustard uppercase tracking-wider">
                    {event.date}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-brown mt-0.5">
                    {event.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-iron/60 leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <SectionWrapper delay={200} className="text-center mt-10">
          <p className="text-sm text-iron/50">
            Seguinos en{" "}
            <button
              type="button"
              onClick={() => window.open(BUSINESS.instagramUrl, "_blank", "noopener,noreferrer")}
              className="text-mustard font-medium hover:text-caramel underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
            >
              Instagram
            </button>{" "}
            para no perderte ninguna novedad.
          </p>
        </SectionWrapper>
      </div>
    </section>
  );
}
