"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useActiveSection, useReducedMotion } from "@/lib/hooks";
import { BUSINESS } from "@/lib/data";

const NAV_ITEMS = [
  { label: "Inicio", href: "#hero" },
  { label: "Menú", href: "#menu" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Sucursales", href: "#sucursales" },
  { label: "Contacto", href: "#footer" },
];

const SECTION_IDS = ["hero", "menu", "resenas", "sucursales", "footer"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = parseInt(document.body.style.top || "0") * -1;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY > 0) window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    requestAnimationFrame(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-lg shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-cream/0"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 h-16 md:h-20">
        <button
          type="button"
          onClick={() => handleNav("#hero")}
          className="flex items-center gap-2.5 group"
          aria-label="Ir al inicio"
        >
          <Image
            src="/img/logo_cabritagaragecafe.jpg"
            alt="Cabrita Garage Café"
            width={36}
            height={36}
            className="rounded-full object-cover ring-2 ring-mustard/20 group-hover:ring-mustard/40 transition-all duration-300"
          />
          <span className="font-serif text-lg md:text-xl font-semibold text-brown tracking-tight">
            Cabrita
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = active === sectionId;
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNav(item.href)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  isActive
                    ? "text-brown"
                    : "text-iron/60 hover:text-brown"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-mustard/8 rounded-lg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{ backgroundColor: "rgba(200, 151, 90, 0.08)" }}
                  />
                )}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => window.open(`https://wa.me/${BUSINESS.phone.replace(/\D/g, "")}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`, "_blank", "noopener,noreferrer")}
            className="ml-3 inline-flex items-center gap-1.5 bg-mustard text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-caramel transition-all duration-300 shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-brown rounded-lg hover:bg-cream-dark/50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-16 bg-cream/98 backdrop-blur-lg z-50 flex flex-col items-center justify-center gap-8 overflow-y-auto overscroll-contain md:hidden"
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.href}
                type="button"
                onClick={() => handleNav(item.href)}
                className="text-2xl font-serif text-brown hover:text-mustard transition-colors"
                initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduced ? {} : { delay: 0.05 * i, duration: 0.4 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              type="button"
              onClick={() => window.open(`https://wa.me/${BUSINESS.phone.replace(/\D/g, "")}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`, "_blank", "noopener,noreferrer")}
              className="mt-4 inline-flex items-center gap-2 bg-mustard text-white text-lg font-semibold px-8 py-3.5 rounded-full hover:bg-caramel transition-all duration-300"
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduced ? {} : { delay: 0.25, duration: 0.4 }}
            >
              <MessageCircle size={20} />
              WhatsApp
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
