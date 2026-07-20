"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { buttonHover, buttonTap } from "@/lib/animations";

type ButtonBase = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

type ButtonAsButton = ButtonBase &
  Omit<React.ComponentPropsWithoutRef<typeof motion.button>, keyof ButtonBase> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBase &
  Omit<React.ComponentPropsWithoutRef<typeof motion.a>, keyof ButtonBase> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

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

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      variant = "primary",
      size = "md",
      className = "",
      icon,
      iconPosition = "left",
      style,
      ...rest
    } = props as ButtonBase & Record<string, unknown>;

    const classes = `relative inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    const content = (
      <>
        {icon && iconPosition === "left" && icon}
        <span>{children}</span>
        {icon && iconPosition === "right" && icon}
      </>
    );

    if ("href" in rest && (rest as Record<string, unknown>).href) {
      const { href, target, rel, ...anchorRest } = rest as Record<string, unknown>;
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href as string}
          target={(target as string) || undefined}
          rel={(rel as string) || undefined}
          className={classes}
          whileHover={buttonHover}
          whileTap={buttonTap}
          style={style as React.CSSProperties}
          {...(anchorRest as React.ComponentPropsWithoutRef<typeof motion.a>)}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        whileHover={buttonHover}
        whileTap={buttonTap}
        style={style as React.CSSProperties}
        {...(rest as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
