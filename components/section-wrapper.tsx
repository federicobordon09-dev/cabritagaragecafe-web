"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  scaleIn,
  blurIn,
  slideUp,
  defaultTransition,
  fastTransition,
} from "@/lib/animations";
import { useReducedMotion } from "@/lib/hooks";

type AnimationVariant = "fadeUp" | "fadeIn" | "scaleIn" | "blurIn" | "slideUp";

const variantMap: Record<AnimationVariant, typeof fadeUp> = {
  fadeUp,
  fadeIn,
  scaleIn,
  blurIn,
  slideUp,
};

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  variant?: AnimationVariant;
  as?: "div" | "section" | "article" | "header" | "footer";
};

export function SectionWrapper({
  children,
  className = "",
  delay = 0,
  id,
  variant = "fadeUp",
  as = "div",
}: Props) {
  const reduced = useReducedMotion();
  const v = variantMap[variant] || fadeUp;

  if (reduced) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      variants={v}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{
        ...(variant === "fadeIn" ? fastTransition : defaultTransition),
        ...(delay ? { delay: delay / 1000 } : {}),
      }}
    >
      {children}
    </MotionTag>
  );
}
