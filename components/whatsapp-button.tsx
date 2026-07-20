"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/data";

export function WhatsAppButton() {
  const phone = BUSINESS.phone.replace(/\D/g, "");
  const message = encodeURIComponent(BUSINESS.whatsappMessage);

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl md:bottom-6 md:right-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      aria-label="Contactar por WhatsApp"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ scale: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
    >
      <MessageCircle size={26} fill="currentColor" />
    </motion.a>
  );
}
