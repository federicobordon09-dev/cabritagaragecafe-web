"use client";

import { forwardRef, useCallback } from "react";
import { motion } from "framer-motion";
import { buttonHover, buttonTap } from "@/lib/animations";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  openInNewTab?: boolean;
} & Omit<React.ComponentPropsWithoutRef<typeof motion.button>, "children" | "className">;

const variantStyles: Record<string, string> = {
  primary:
    "bg-mustard text-white hover:bg-caramel shadow-md hover:shadow-xl border border-transparent",
  secondary:
    "bg-white text-brown border border-cream-dark hover:bg-cream-dark shadow-sm hover:shadow-md",
  ghost:
    "bg-transparent text-brown hover:bg-cream-dark/50 border border-transparent",
};

const sizeStyles: Record<string, string> = {
  sm: "text-xs px-4 py-2 gap-1.5",
  md: "text-sm px-6 py-3 gap-2",
  lg: "text-base px-8 py-4 gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      variant = "primary",
      size = "md",
      className = "",
      icon,
      iconPosition = "left",
      href,
      openInNewTab = true,
      style,
      ...rest
    } = props;

    const classes = `relative inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    const handleClick = useCallback(() => {
      if (href) {
        if (href.startsWith("#")) {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        } else if (openInNewTab) {
          window.open(href, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = href;
        }
      }
    }, [href, openInNewTab]);

    return (
      <motion.button
        ref={ref}
        type="button"
        className={classes}
        whileHover={buttonHover}
        whileTap={buttonTap}
        style={style as React.CSSProperties}
        onClick={handleClick}
        {...(rest as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {icon && iconPosition === "left" && icon}
        <span>{children}</span>
        {icon && iconPosition === "right" && icon}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
