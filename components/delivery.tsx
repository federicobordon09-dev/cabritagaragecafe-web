import { ShoppingBag, Smartphone, Store } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";

const options = [
  {
    icon: ShoppingBag,
    title: "PedidosYa",
    description: "Pedí desde la app y recibilo donde estés.",
    cta: "Pedir por PedidosYa",
    href: BUSINESS.pedidosYaUrl,
    isExternal: true,
  },
  {
    icon: Smartphone,
    title: "WhatsApp",
    description: "Escribinos directo para coordinar retiro o delivery.",
    cta: "Escribir por WhatsApp",
    href: `https://wa.me/${BUSINESS.phone.replace(/\D/g, "")}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`,
    isExternal: true,
  },
  {
    icon: Store,
    title: "Retiro en local",
    description: "Pasá por Av. Belgrano 1184 y llevate todo recién horneado.",
    cta: "Ver dirección",
    href: BUSINESS.googleMapsUrl,
    isExternal: true,
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

        <div className="grid md:grid-cols-3 gap-6">
          {options.map((opt, i) => (
            <SectionWrapper key={opt.title} delay={i * 100}>
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-cream-dark/60 text-center h-full flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-mustard/10 flex items-center justify-center mb-5">
                  <opt.icon size={26} className="text-mustard" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-brown mb-2">
                  {opt.title}
                </h3>
                <p className="text-sm text-iron/60 leading-relaxed mb-6">
                  {opt.description}
                </p>
                <a
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 bg-mustard text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-caramel transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {opt.cta}
                </a>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
