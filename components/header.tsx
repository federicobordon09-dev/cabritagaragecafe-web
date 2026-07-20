"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Inicio", href: "#hero" },
  { label: "Menú", href: "#menu" },
  { label: "Sucursales", href: "#sucursales" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#footer" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 h-16 md:h-20">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
          className="flex items-center gap-2"
        >
          <Image
            src="/img/logo_cabritagaragecafe.jpg"
            alt="Cabrita Garage Café"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="font-serif text-lg md:text-xl font-semibold text-brown tracking-tight">
            Cabrita
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
              className="text-sm font-medium text-iron/70 hover:text-brown transition-colors duration-300 tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#menu"
            onClick={(e) => { e.preventDefault(); handleNav("#menu"); }}
            className="inline-flex items-center gap-1.5 bg-mustard text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-caramel transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Ver menú
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-brown"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 top-16 bg-cream z-40 flex flex-col items-center justify-center gap-8 transition-all duration-400 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
            className="text-2xl font-serif text-brown hover:text-mustard transition-colors"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#menu"
          onClick={(e) => { e.preventDefault(); handleNav("#menu"); }}
          className="mt-4 inline-flex items-center gap-1.5 bg-mustard text-white text-lg font-semibold px-8 py-3.5 rounded-full hover:bg-caramel transition-all duration-300"
        >
          Ver menú
        </a>
      </div>
    </header>
  );
}
