"use client";

import { motion } from "framer-motion";
import { Clock, MessageCircle, MapPin } from "lucide-react";
import { LOCATIONS, SCHEDULE, BUSINESS } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Sucursales() {
  const verified = LOCATIONS.find((l) => l.isVerified)!;
  const scheduleList = Object.values(SCHEDULE);

  return (
    <section id="sucursales" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        <SectionWrapper className="text-center mb-16">
          <p className="text-sm font-semibold text-mustard uppercase tracking-widest mb-4">
            Dónde estamos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-brown leading-[1.15]">
            Pasá por{" "}
            <span className="text-mustard">nuestro garage</span>
          </h2>
        </SectionWrapper>

        <motion.div
          className="grid md:grid-cols-2 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px 0px" }}
        >
          <motion.div
            variants={staggerItem}
            className="bg-white rounded-2xl p-7 md:p-8 border border-cream-dark/60 h-full group hover:border-mustard/30 transition-all duration-500"
          >
            <div className="flex items-start gap-4 mb-5">
              <motion.div
                className="w-11 h-11 rounded-xl bg-mustard/10 flex items-center justify-center shrink-0"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(200, 151, 90, 0.2)" }}
              >
                <Clock size={20} className="text-mustard" />
              </motion.div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-brown">
                  Horarios
                </h3>
                <p className="text-sm text-iron/50">
                  {verified.address}, {verified.city}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              {scheduleList.map((s) => (
                <div key={s.days} className="flex justify-between items-center py-1.5 border-b border-cream-dark/20 last:border-0">
                  <span className="text-iron/70">{s.days}</span>
                  <span className="font-medium text-brown">{s.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 p-4 rounded-xl bg-mustard/5 border border-mustard/10">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle size={16} className="text-mustard" />
                <span className="text-sm font-semibold text-brown">Sucursal Beltrán</span>
              </div>
              <p className="text-sm text-iron/60">
                Consultanos por{" "}
                <button
                  type="button"
                  onClick={() => window.open(`https://wa.me/${BUSINESS.phone.replace(/\D/g, "")}`, "_blank", "noopener,noreferrer")}
                  className="text-mustard font-medium hover:text-caramel underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
                >
                  WhatsApp
                </button>{" "}
                para horarios y más info de nuestra sucursal en Beltrán y Juan B. Justo.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="bg-white rounded-2xl p-7 md:p-8 border border-cream-dark/60 h-full group hover:border-mustard/30 transition-all duration-500"
          >
            <div className="flex items-start gap-4 mb-5">
              <motion.div
                className="w-11 h-11 rounded-xl bg-mustard/10 flex items-center justify-center shrink-0"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(200, 151, 90, 0.2)" }}
              >
                <MapPin size={20} className="text-mustard" />
              </motion.div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-brown">
                  {verified.address}
                </h3>
                <p className="text-sm text-iron/50">
                  {verified.city}, {verified.province}
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-cream-dark/30">
              <iframe
                src="https://maps.google.com/maps?q=Cabrita+Garage+Caf%C3%A9+Av+Belgrano+1184+Mendoza&output=embed"
                width="100%"
                height="220"
                className="w-full"
                loading="lazy"
                referrerPolicy="no-referrer"
                title="Mapa de Cabrita Café Garage en Av. Belgrano 1184"
                allowFullScreen
              />
            </div>

            <button
              type="button"
              onClick={() => window.open(BUSINESS.googleMapsUrl, "_blank", "noopener,noreferrer")}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-mustard hover:text-caramel transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
            >
              <MapPin size={14} />
              Abrir en Google Maps
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
