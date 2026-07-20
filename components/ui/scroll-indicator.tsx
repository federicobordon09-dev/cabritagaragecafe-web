"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks";

export function ScrollIndicator() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <span className="text-xs font-medium text-iron/40 tracking-widest uppercase">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown size={18} className="text-mustard/60" />
      </motion.div>
    </motion.div>
  );
}
