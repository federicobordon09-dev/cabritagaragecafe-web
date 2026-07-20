"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MENU_CATEGORIES } from "@/lib/data";
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
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-cream/50 hover:bg-cream transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl font-semibold text-brown">
                    {category.name}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-mustard transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-400 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 space-y-3">
                      {category.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-start justify-between gap-4 py-2 border-b border-cream-dark/30 last:border-0"
                        >
                          <div>
                            <span className="font-medium text-brown">{item.name}</span>
                            <p className="text-sm text-iron/50 mt-0.5">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="text-center pt-6">
            <p className="text-sm text-iron/50">
              Precios consultar. Escribinos por{" "}
              <a
                href={`https://wa.me/542617176679?text=${encodeURIComponent("¡Hola! Quería consultar por el menú y precios 🙌")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mustard font-medium hover:text-caramel underline underline-offset-4 transition-colors"
              >
                WhatsApp
              </a>{" "}
              o pedí por{" "}
              <a
                href="https://pedidosya.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mustard font-medium hover:text-caramel underline underline-offset-4 transition-colors"
              >
                PedidosYa
              </a>
              .
            </p>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
