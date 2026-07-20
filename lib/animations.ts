import { type Variants, type Transition, type TargetAndTransition } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: easeOut,
};

export const fastTransition: Transition = {
  duration: 0.3,
  ease: easeOut,
};

export const slowTransition: Transition = {
  duration: 0.9,
  ease: easeOut,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const cardHover: TargetAndTransition = {
  y: -6,
  boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
  transition: { duration: 0.3, ease: easeOut },
};

export const imageZoom: TargetAndTransition = {
  scale: 1.05,
  transition: { duration: 0.5, ease: easeOut },
};

export const buttonHover: TargetAndTransition = {
  y: -2,
  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
  transition: { duration: 0.25, ease: easeOut },
};

export const buttonTap: TargetAndTransition = {
  scale: 0.97,
  transition: { duration: 0.1, ease: easeOut },
};

export function withTransition(variants: Variants, transition: Transition): Variants {
  return {
    hidden: variants.hidden,
    visible: {
      ...(variants.visible as object),
      transition,
    },
  };
}

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};
