import { MapPin, Phone } from "lucide-react";

function InstagramIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { BUSINESS, LOCATIONS, SCHEDULE } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";

const scheduleList = Object.values(SCHEDULE);

export function Footer() {
  const verified = LOCATIONS.find((l) => l.isVerified)!;

  return (
    <footer id="footer" className="bg-iron text-cream/80">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          <SectionWrapper className="md:col-span-1">
            <h3 className="font-serif text-2xl font-semibold text-white mb-3">
              Cabrita
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed">
              Café de especialidad, chipás artesanales y panadería recién horneada
              en el centro de Mendoza.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mustard transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} className="text-white" />
              </a>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={50}>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Horarios
            </h4>
            <ul className="space-y-2.5 text-sm">
              {scheduleList.map((s) => (
                <li key={s.days} className="flex justify-between gap-4">
                  <span className="text-cream/50">{s.days}</span>
                  <span className="text-cream/80 font-medium">{s.hours}</span>
                </li>
              ))}
            </ul>
          </SectionWrapper>

          <SectionWrapper delay={100}>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-2 text-cream/60 hover:text-mustard transition-colors"
                >
                  <Phone size={14} className="shrink-0" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-cream/60">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span>
                  {verified.address}, {verified.city}
                </span>
              </li>
              <li>
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream/60 hover:text-mustard transition-colors"
                >
                  <InstagramIcon size={14} className="shrink-0" />
                  @{BUSINESS.instagram}
                </a>
              </li>
            </ul>
          </SectionWrapper>

          <SectionWrapper delay={150}>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Accesos rápidos
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#menu" className="text-cream/60 hover:text-mustard transition-colors">
                  Menú digital
                </a>
              </li>
              <li>
                <a href="#sucursales" className="text-cream/60 hover:text-mustard transition-colors">
                  Sucursales
                </a>
              </li>
              <li>
                <a href="#resenas" className="text-cream/60 hover:text-mustard transition-colors">
                  Reseñas
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BUSINESS.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/60 hover:text-mustard transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.pedidosYaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/60 hover:text-mustard transition-colors"
                >
                  PedidosYa
                </a>
              </li>
            </ul>
          </SectionWrapper>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Cabrita Garage Café. Todos los derechos reservados.</p>
          <p>
            Hecho con 🤎 para la comunidad mendocina.
          </p>
        </div>
      </div>
    </footer>
  );
}
