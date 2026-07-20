"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Smartphone, Store } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";
import { Button } from "./ui/button";
import { staggerContainer, staggerItem, cardHover } from "@/lib/animations";

const options = [
  {
    icon: ShoppingBag,
    title: "PedidosYa",
    description: "Pedí desde la app y recibilo donde estés.",
    cta: "Pedir por PedidosYa",
    href: BUSINESS.pedidosYaUrl,
  },
  {
    icon: Smartphone,
    title: "WhatsApp",
    description: "Escribinos directo para coordinar retiro o delivery.",
    cta: "Escribir por WhatsApp",
    href: `https://wa.me/${BUSINESS.phone.replace(/\D/g, "")}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`,
  },
  {
    icon: Store,
    title: "Retiro en local",
    description: "Pasá por Av. Belgrano 1184 y llevate todo recién horneado.",
    cta: "Ver dirección",
    href: BUSINESS.googleMapsUrl,
  },
];

export function Delivery() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        <SectionWrapper className="text-center mb-16">
          <p className="text-sm font-semibold text-mustard uppercase tracking-widest mb-4">
            Delivery & Take away
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-brown leading-[1.15]">
            Llevate Cabrita{" "}
            <span className="text-mustard">a donde quieras</span>
          </h2>
        </SectionWrapper>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px 0px" }}
        >
          {options.map((opt) => (
            <motion.div
              key={opt.title}
              variants={staggerItem}
              className="bg-white rounded-2xl p-7 md:p-8 border border-cream-dark/60 text-center h-full flex flex-col items-center group hover:border-mustard/30 transition-all duration-500"
              whileHover={cardHover}
            >
              <div className="w-14 h-14 rounded-2xl bg-mustard/10 flex items-center justify-center mb-5 group-hover:bg-mustard/20 transition-colors duration-300">
                <opt.icon size={26} className="text-mustard" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brown mb-2">
                {opt.title}
              </h3>
              <p className="text-sm text-iron/60 leading-relaxed mb-6">
                {opt.description}
              </p>
              <Button
                href={opt.href}
                variant="primary"
                size="md"
                className="mt-auto"
              >
                {opt.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
