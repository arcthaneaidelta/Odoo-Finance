"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  ShieldCheck,
  Settings,
  Workflow,
  Blocks,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Invoicing", href: "/invoices", icon: FileText },
  { name: "Accounting", href: "/accounting", icon: BookOpen },
  { name: "PT Compliance", href: "/compliance", icon: ShieldCheck },
  { name: "Automation", href: "/automation", icon: Workflow },
  { name: "Integrations", href: "/integrations", icon: Blocks },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white pt-6">
      <div className="px-6 mb-8 flex items-center gap-3">
        {/* Animated Logo */}
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white shadow-sm">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Blocks size={18} />
          </motion.div>
        </div>
        <span className="text-lg font-bold text-slate-900 tracking-tight">Odoo Finance</span>
      </div>

      <nav className="flex-1 space-y-1 px-3 mt-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group relative flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 overflow-hidden",
                isActive
                  ? "text-brand-700 bg-brand-50"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-brand-600 rounded-r-full"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0 z-10 transition-colors duration-200",
                  isActive ? "text-brand-600" : "text-slate-400 group-hover:text-slate-500"
                )}
                aria-hidden="true"
              />
              <span className="z-10">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100 bg-slate-50/50 mt-auto">
        <div className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-slate-100 cursor-pointer">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-brand-700 font-bold border border-brand-200 shadow-sm">
            JD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900">John Doe</span>
            <span className="text-xs text-slate-500 font-medium">CFO, ScaleUp PT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
