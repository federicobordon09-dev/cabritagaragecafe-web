import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/data";

export function WhatsAppButton() {
  const phone = BUSINESS.phone.replace(/\D/g, "");
  const message = encodeURIComponent(BUSINESS.whatsappMessage);

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 md:bottom-6 md:right-6"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={26} fill="currentColor" />
    </a>
  );
}
