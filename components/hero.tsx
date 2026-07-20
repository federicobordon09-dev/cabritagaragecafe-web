import Image from "next/image";
import { SectionWrapper } from "./section-wrapper";

export function Hero() {
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
            <SectionWrapper delay={0}>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-mustard bg-mustard/10 px-4 py-1.5 rounded-full tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-mustard" />
                Café de especialidad en Mendoza
              </p>
            </SectionWrapper>

            <SectionWrapper delay={100}>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-brown leading-[1.1] tracking-tight text-balance">
                El garage de las{" "}
                <span className="text-mustard">mejores medialunas</span>{" "}
                de Mendoza
              </h1>
            </SectionWrapper>

            <SectionWrapper delay={200}>
              <p className="text-lg md:text-xl text-iron/70 leading-relaxed max-w-lg">
                Café de especialidad, chipás artesanales y panadería recién horneada
                en el corazón del centro. Pasá, pedí y quedate un rato.
              </p>
            </SectionWrapper>

            <SectionWrapper delay={300} className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-mustard text-white font-semibold px-7 py-3.5 rounded-full hover:bg-caramel transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Ver menú digital
              </a>
              <a
                href={`https://wa.me/${"+542617176679".replace(/\D/g, "")}?text=${encodeURIComponent("¡Hola Cabrita! Quiero hacer un pedido 🥐☕")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brown font-semibold px-7 py-3.5 rounded-full hover:bg-cream-dark transition-all duration-300 shadow-sm hover:shadow-md border border-cream-dark text-base"
              >
                Pedí por WhatsApp
              </a>
            </SectionWrapper>

            <SectionWrapper delay={400} className="flex items-center gap-6 text-sm text-iron/50 pt-2">
              <span className="flex items-center gap-1.5">
                <span className="text-mustard">★</span> 4.8 — 302 reseñas
              </span>
              <span className="w-1 h-1 rounded-full bg-iron/20" />
              <span>Take away</span>
              <span className="w-1 h-1 rounded-full bg-iron/20" />
              <span>Delivery</span>
            </SectionWrapper>
          </div>

          <div className="relative hidden md:block" aria-hidden="true">
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
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  );
}
