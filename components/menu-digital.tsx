"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MENU_CATEGORIES, BUSINESS, PRICE_RANGE } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";

export function MenuDigital() {
  const [openId, setOpenId] = useState<string | null>("cafes");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <SectionWrapper className="text-center mb-16">
          <p className="text-sm font-semibold text-mustard uppercase tracking-widest mb-4">
            Menú digital
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-brown leading-[1.15]">
            Todo lo que horneamos{" "}
            <span className="text-mustard">con amor</span>
          </h2>
          <p className="text-iron/60 mt-4 max-w-md mx-auto">
            Productos de estación y disponibilidad variable. Consultanos por lo que no
            encontrás acá.
          </p>
        </SectionWrapper>

        <SectionWrapper className="space-y-3">
          {MENU_CATEGORIES.map((category) => {
            const isOpen = openId === category.id;
            return (
              <div
                key={category.id}
                className="rounded-xl border border-cream-dark/60 overflow-hidden transition-all duration-300 hover:border-mustard/30"
              >
                <button
                  onClick={() => toggle(category.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-cream/50 hover:bg-cream transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl font-semibold text-brown">
                    {category.name}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ChevronDown size={20} className="text-mustard" />
                  </motion.div>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 space-y-3">
                      {category.items.map((item, i) => (
                        <motion.div
                          key={`${category.id}-${item.name}-${i}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{
                            duration: 0.3,
                            delay: isOpen ? i * 0.05 : 0,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="flex items-start justify-between gap-4 py-2 border-b border-cream-dark/30 last:border-0"
                        >
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4">
                              <span className="font-medium text-brown">{item.name}</span>
                              {"price" in item && item.price && (
                                <span className="shrink-0 font-semibold text-mustard text-sm">{item.price}</span>
                              )}
                            </div>
                            <p className="text-sm text-iron/50 mt-0.5">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pt-8 space-y-6">
            <div className="text-center">
              <p className="text-sm text-iron/50">
                Café desde <span className="font-semibold text-brown">{PRICE_RANGE.cafeDesde}</span>
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-iron/50">
                Escribinos por{" "}
                <button
                  type="button"
                  onClick={() => window.open(`https://wa.me/${BUSINESS.phone.replace(/\D/g, "")}?text=${encodeURIComponent("¡Hola! Quería consultar por el menú 🙌")}`, "_blank", "noopener,noreferrer")}
                  className="text-mustard font-medium hover:text-caramel underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
                >
                  WhatsApp
                </button>{" "}
                o pedí por{" "}
                <button
                  type="button"
                  onClick={() => window.open(BUSINESS.pedidosYaUrl, "_blank", "noopener,noreferrer")}
                  className="text-mustard font-medium hover:text-caramel underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
                >
                  PedidosYa
                </button>
                .
              </p>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
