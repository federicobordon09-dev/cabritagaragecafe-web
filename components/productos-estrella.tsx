import Image from "next/image";
import { PRODUCTS } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";

const imageMap: Record<string, string> = {
  medialunas: "/img/imagen_medialunas.jpg",
  chipas: "/img/imagen_chipa.jpg",
  cafe: "/img/imagen_cafe.webp",
  scones: "/img/imagen_sconne_creo.webp",
  cookies: "/img/imagenes_cokees.jpg",
  vegano: "/img/imagen_vegetales.webp",
};

const fallbackEmoji: Record<string, string> = {
  medialunas: "🥐",
  chipas: "🧀",
  cafe: "☕",
  scones: "🫓",
  cookies: "🍪",
  vegano: "🌱",
};

const sizes: Record<string, string> = {
  medialunas: "md:col-span-2 md:row-span-2",
  chipas: "md:col-span-1 md:row-span-2",
  cafe: "md:col-span-1 md:row-span-1",
  scones: "md:col-span-1 md:row-span-1",
  cookies: "md:col-span-1 md:row-span-1",
  vegano: "md:col-span-2 md:row-span-1",
};

export function ProductosEstrella() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        <SectionWrapper className="text-center mb-16">
          <p className="text-sm font-semibold text-mustard uppercase tracking-widest mb-4">
            Productos estrella
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-brown leading-[1.15]">
            Lo que tenés que probar{" "}
            <span className="text-mustard">sí o sí</span>
          </h2>
        </SectionWrapper>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[240px]">
          {PRODUCTS.map((product, i) => (
            <SectionWrapper
              key={product.id}
              delay={i * 80}
              className={`group relative rounded-xl overflow-hidden bg-iron cursor-default ${sizes[product.id] || ""}`}
            >
              <Image
                src={imageMap[product.id] || ""}
                alt={product.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-iron/80 via-iron/30 to-transparent" />
              <div className="absolute top-3 right-3 text-2xl md:text-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                {fallbackEmoji[product.id] || "✨"}
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-6">
                {product.badge && (
                  <span className="self-start text-xs font-semibold text-mustard bg-mustard/15 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                    {product.badge}
                  </span>
                )}
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-white group-hover:text-mustard transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-white/70 mt-1 leading-relaxed max-w-xs line-clamp-2">
                  {product.description}
                </p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
