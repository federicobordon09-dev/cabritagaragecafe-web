"use client";

import Image from "next/image";
import { SectionWrapper } from "./section-wrapper";

export function Historia() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <SectionWrapper className="order-2 md:order-1" variant="scaleIn">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-cream-dark/50 shadow-lg group">
              <Image
                src="/img/imagen_del_local.webp"
                alt="Interior de Cabrita Garage Café — el garage convertido en cafetería"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-iron/10 to-transparent" />
            </div>
          </SectionWrapper>

          <div className="order-1 md:order-2 space-y-6">
            <SectionWrapper>
              <p className="text-sm font-semibold text-mustard uppercase tracking-widest">
                Nuestra Historia
              </p>
            </SectionWrapper>

            <SectionWrapper delay={100}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-brown leading-[1.15] text-balance">
                Un garage convertido en{" "}
                <span className="text-mustard">el rincón más cálido</span> del centro
              </h2>
            </SectionWrapper>

            <SectionWrapper delay={200} className="space-y-4 text-iron/70 leading-relaxed">
              <p>
                Lo que alguna vez fue un garage en Av. Belgrano 1184 hoy es una cafetería
                de especialidad que se volvió un clásico de la zona. Acá no hay fórmulas
                mágicas: hay café de primera calidad, panadería recién horneada y un equipo
                que recibe a cada persona como si fuera de la familia.
              </p>
              <p>
                En Cabrita creemos que el mejor café se disfruta sin apuro, que una
                medialuna recién salida del horno puede cambiar tu día y que un espacio
                chiquito puede tener el corazón más grande.
              </p>
              <p className="font-medium text-brown">
                Cabrita al servicio de la comunidad mendocina.{" "}
                <span aria-hidden="true">☕🤎</span>
              </p>
            </SectionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
