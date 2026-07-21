"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ShoppingCart, Coffee, Wine, Sparkles, Grid3X3, Sandwich, Cake, Package, CupSoda } from "lucide-react";
import { MENU_CATEGORIES, BUSINESS } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";
import { staggerContainer, staggerItem } from "@/lib/animations";

const categoryIcons: Record<string, React.ElementType> = {
  cafes: Coffee,
  bebidas: Wine,
  otros: CupSoda,
  extras: Sparkles,
  promos: Grid3X3,
  panaderia: Package,
  sandwiches: Sandwich,
  pasteleria: Cake,
  mayorista: Package,
};

const categoryEmojis: Record<string, string> = {
  cafes: "☕",
  bebidas: "🍹",
  otros: "🧃",
  extras: "✨",
  promos: "🔥",
  panaderia: "🥖",
  sandwiches: "🥪",
  pasteleria: "🍰",
  mayorista: "📦",
};

function buildWhatsAppUrl(itemName: string, categoryName: string) {
  const phone = BUSINESS.phone.replace(/\D/g, "");
  const message = encodeURIComponent(
    `¡Hola Cabrita! Quiero pedir:\n- 1 × ${itemName} (${categoryName})\n\n📍 Retiro en local`
  );
  return `https://wa.me/${phone}?text=${message}`;
}

export function MenuDigital() {
  const [openId, setOpenId] = useState<string | null>("promos");

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section id="menu" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-5">
        <SectionWrapper className="text-center mb-16">
          <p className="text-sm font-semibold text-mustard uppercase tracking-widest mb-4">
            Menú digital
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-brown leading-[1.15]">
            Todo lo que horneamos{" "}
            <span className="text-mustard">con amor</span>
          </h2>
          <p className="text-iron/60 mt-4 max-w-md mx-auto">
            Tocá la categoría para ver los productos. Pedí directo por WhatsApp desde acá.
          </p>
        </SectionWrapper>

        <motion.div
          className="space-y-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px 0px" }}
        >
          {MENU_CATEGORIES.map((category) => {
            const isOpen = openId === category.id;
            const Icon = categoryIcons[category.id] || Package;

            return (
              <motion.div
                key={category.id}
                variants={staggerItem}
                className="rounded-2xl border border-cream-dark/60 overflow-hidden transition-all duration-300 hover:border-mustard/20 bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggle(category.id)}
                  className="w-full flex items-center justify-between px-5 md:px-7 py-4 md:py-5 text-left bg-cream/40 hover:bg-cream transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl" aria-hidden="true">
                      {categoryEmojis[category.id] || "📋"}
                    </span>
                    <div>
                      <span className="font-serif text-lg md:text-xl font-semibold text-brown">
                        {category.name}
                      </span>
                      {!isOpen && (
                        <span className="text-xs text-iron/40 ml-2">
                          {category.items.length} productos
                        </span>
                      )}
                    </div>
                  </div>
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
                    <div className="px-5 md:px-7 pb-4 md:pb-5 space-y-1">
                      {category.items.map((item, i) => (
                        <motion.div
                          key={`${category.id}-${item.name}-${i}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                          transition={{
                            duration: 0.25,
                            delay: isOpen ? Math.min(i * 0.02, 0.3) : 0,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="flex items-center gap-3 py-2.5 border-b border-cream-dark/20 last:border-0 group/item"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-3">
                              <span className="font-medium text-brown text-sm md:text-base leading-snug">
                                {item.name}
                              </span>
                              <span className="shrink-0 font-semibold text-mustard text-sm md:text-base tabular-nums">
                                {item.price}
                              </span>
                            </div>
                            {item.description && (
                              <p className="text-xs md:text-sm text-iron/50 mt-0.5 leading-relaxed pr-2">
                                {item.description}
                              </p>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => window.open(buildWhatsAppUrl(item.name, category.name), "_blank", "noopener,noreferrer")}
                            className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-mustard/10 hover:bg-mustard text-mustard hover:text-white flex items-center justify-center transition-all duration-200 opacity-0 group-hover/item:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
                            aria-label={`Pedir ${item.name} por WhatsApp`}
                            title="Pedir por WhatsApp"
                          >
                            <ShoppingCart size={14} className="md:w-[15px] md:h-[15px]" />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <SectionWrapper delay={200} className="text-center mt-10">
          <p className="text-sm text-iron/50">
            Los precios pueden variar sin previo aviso. Productos de estación y disponibilidad variable.
          </p>
        </SectionWrapper>
      </div>
    </section>
  );
}
