"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function StatCard({ title, value, change, trend = "up", icon: Icon, className }) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 premium-shadow",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="mt-2 text-3xl font-semibold text-slate-900">{value}</h3>
        </div>
        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            <Icon size={24} strokeWidth={1.5} />
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
            trend === "up"
              ? "bg-emerald-50 text-emerald-700"
              : trend === "down"
              ? "bg-rose-50 text-rose-700"
              : "bg-slate-100 text-slate-700"
          )}
        >
          {trend === "up" ? "+" : trend === "down" ? "-" : ""}
          {change}
        </span>
        <span className="text-xs text-slate-500">from last month</span>
      </div>

      {/* Decorative gradient blur in background */}
      <div className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-brand-100/50 blur-2xl" />
    </motion.div>
  );
}
