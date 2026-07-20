"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollIndicator } from "./ui/scroll-indicator";
import { Button } from "./ui/button";
import { BUSINESS } from "@/lib/data";
import { useReducedMotion } from "@/lib/hooks";

const BADGES = [
  { label: "Café de Especialidad", icon: "☕" },
  { label: "Panadería Artesanal", icon: "🥐" },
  { label: "Take Away", icon: "🛍️" },
  { label: "Pet Friendly", icon: "🐾" },
];

export function Hero() {
  const reduced = useReducedMotion();
  const whatsappUrl = `https://wa.me/${BUSINESS.phone.replace(/\D/g, "")}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-cream-dark via-cream to-cream"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-mustard/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-mustard/5 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="inline-flex items-center gap-2 text-sm font-medium text-mustard bg-mustard/10 px-4 py-1.5 rounded-full tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-mustard animate-pulse" />
                Café de especialidad en Mendoza
              </p>
            </motion.div>

            <motion.h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-brown leading-[1.1] tracking-tight text-balance"
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              El garage de las{" "}
              <span className="text-mustard">mejores medialunas</span>{" "}
              de Mendoza
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-iron/70 leading-relaxed max-w-lg"
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              Café de especialidad, chipás artesanales y panadería recién horneada
              en el corazón del centro. Pasá, pedí y quedate un rato.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            >
              {BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1 text-xs font-medium text-iron/50 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cream-dark/30"
                >
                  <span aria-hidden="true">{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            >
              <Button
                href="#menu"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Ver menú digital
              </Button>
              <Button
                href={whatsappUrl}
                variant="secondary"
                size="lg"
              >
                Pedí por WhatsApp
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 text-sm text-iron/50 pt-2"
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
            >
              <span className="flex items-center gap-1.5">
                <span className="text-mustard text-base">★</span>
                <span className="font-medium text-brown">4.8</span>
                <span>— 302 reseñas</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-iron/20" aria-hidden="true" />
              <span>Take away</span>
              <span className="w-1 h-1 rounded-full bg-iron/20" aria-hidden="true" />
              <span>Delivery</span>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden md:block"
            initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            aria-hidden="true"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-cream-dark/50 shadow-xl">
              <Image
                src="/img/imagen_del_local_fuera.webp"
                alt="Fachada de Cabrita Garage Café en Av. Belgrano 1184"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 0px, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-iron/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent pointer-events-none" />

      <ScrollIndicator />
    </section>
  );
}
