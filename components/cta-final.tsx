"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";
import { Button } from "./ui/button";

export function CtaFinal() {
  const whatsappUrl = `https://wa.me/${BUSINESS.phone.replace(/\D/g, "")}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-mustard/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
        <SectionWrapper>
          <motion.span
            className="text-5xl md:text-6xl mb-6 block"
            aria-hidden="true"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            🧀🍞
          </motion.span>
        </SectionWrapper>

        <SectionWrapper delay={100}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-brown leading-[1.15] mb-6">
            Pasá por tu chipá{" "}
            <span className="text-mustard">recién salido del horno</span>
          </h2>
        </SectionWrapper>

        <SectionWrapper delay={200}>
          <p className="text-lg text-iron/60 max-w-lg mx-auto mb-10">
            Te esperamos en Av. Belgrano 1184, Mendoza. Take away, vereda o delivery
            — como más te guste.
          </p>
        </SectionWrapper>

        <SectionWrapper delay={300} className="flex flex-wrap justify-center gap-4">
          <Button
            href={BUSINESS.googleMapsUrl}
            variant="primary"
            size="lg"
            icon={<ArrowRight size={18} />}
            iconPosition="right"
          >
            Encontranos en Belgrano 1184
          </Button>
          <Button
            href={whatsappUrl}
            variant="secondary"
            size="lg"
          >
            Pedí por WhatsApp
          </Button>
        </SectionWrapper>
      </div>
    </section>
  );
}
