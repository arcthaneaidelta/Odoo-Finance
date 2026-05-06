"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const variants = {
  default: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm hover:shadow-md",
  outline: "border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900",
  ghost: "bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900",
  secondary: "bg-brand-50 text-brand-700 hover:bg-brand-100",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
};

const sizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8 text-md",
  icon: "h-10 w-10",
};

export const Button = forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
