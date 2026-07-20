import { MapPin } from "lucide-react";
import { LOCATIONS, SCHEDULE, BUSINESS } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";

export function Sucursales() {
  const verified = LOCATIONS.find((l) => l.isVerified)!;

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

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <SectionWrapper delay={0}>
            <div className="bg-white rounded-2xl p-7 md:p-8 border border-cream-dark/60 h-full">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-mustard/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-mustard" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-brown">
                    {verified.address}
                  </h3>
                  <p className="text-sm text-iron/50">
                    {verified.city}, {verified.province}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                {Object.values(SCHEDULE).map((s) => (
                  <div key={s.days} className="flex justify-between items-center py-1.5 border-b border-cream-dark/20 last:border-0">
                    <span className="text-iron/70">{s.days}</span>
                    <span className="font-medium text-brown">{s.hours}</span>
                  </div>
                ))}
              </div>

              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-mustard hover:text-caramel transition-colors"
              >
                <MapPin size={14} />
                Abrir en Google Maps
              </a>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={100}>
            <div className="bg-white rounded-2xl p-7 md:p-8 border border-cream-dark/60 h-full">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-mustard/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-mustard" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-brown">
                    Sucursal Beltrán
                  </h3>
                  <p className="text-sm text-iron/50">
                    Consultanos por WhatsApp para más info
                  </p>
                </div>
              </div>

              <div className="mt-5 p-4 rounded-xl bg-mustard/5 border border-mustard/10">
                <p className="text-sm text-iron/60">
                  Consultanos por{" "}
                  <a
                    href={`https://wa.me/542617176679`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mustard font-medium hover:text-caramel underline underline-offset-4 transition-colors"
                  >
                    WhatsApp
                  </a>{" "}
                  para horarios y más info.
                </p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
