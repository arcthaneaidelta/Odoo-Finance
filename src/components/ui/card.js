"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Card({ className, children, hoverEffect = false, ...props }) {
  const Component = hoverEffect ? motion.div : "div";
  const motionProps = hoverEffect
    ? {
        whileHover: { y: -4, transition: { duration: 0.2 } },
      }
    : {};

  return (
    <Component
      className={cn(
        "rounded-2xl border border-slate-200 bg-white text-slate-950 premium-shadow",
        className
      )}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }) {
  return (
    <p
      className={cn("text-sm text-slate-500", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

export function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  );
}
