"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Search, FileText, MoreHorizontal, Download, Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const invoices = [
  { id: "INV-2026-001", client: "Acme Corp", amount: "€1,999.00", status: "Paid", date: "May 1, 2026", due: "May 15, 2026" },
  { id: "INV-2026-002", client: "Global Tech", amount: "€2,499.00", status: "Pending", date: "May 3, 2026", due: "May 18, 2026" },
  { id: "INV-2026-003", client: "Startup Inc", amount: "€99.00", status: "Paid", date: "May 4, 2026", due: "May 19, 2026" },
  { id: "INV-2026-004", client: "Mega Agency", amount: "€4,200.00", status: "Overdue", date: "Apr 20, 2026", due: "May 5, 2026" },
  { id: "INV-2026-005", client: "Design Studio", amount: "€499.00", status: "Draft", date: "May 6, 2026", due: "May 21, 2026" },
];

export default function InvoicesPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCreate = () => {
    setIsCreating(true);
    setTimeout(() => {
      setIsCreating(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Invoices</h1>
          <p className="mt-1 text-slate-500">Manage and track your SAFT-PT compliant invoices.</p>
        </div>
        <Button onClick={handleCreate} disabled={isCreating} className="shadow-lg shadow-brand-500/20">
          {isCreating ? (
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
              <Plus className="mr-2 h-4 w-4" />
            </motion.div>
          ) : (
            <Plus className="mr-2 h-4 w-4" />
          )}
          Create Invoice
        </Button>
      </div>

      <AnimatePresence>
        {isSent && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center gap-3 rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-emerald-800"
          >
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            <span className="font-medium">Invoice INV-2026-006 successfully generated and sent!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Card className="overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-200 p-4">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search invoices..."
              className="h-10 w-full rounded-md border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Filter</Button>
            <Button variant="outline" size="sm">Export SAFT-PT</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-6 py-4 font-medium">Invoice ID</th>
                <th className="px-6 py-4 font-medium">Client</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Due Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {invoices.map((invoice, i) => (
                <motion.tr
                  key={invoice.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-6 py-4 font-medium text-slate-900">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-slate-400" />
                      {invoice.id}
                    </div>
                  </td>
                  <td className="px-6 py-4">{invoice.client}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">{invoice.amount}</td>
                  <td className="px-6 py-4">{invoice.date}</td>
                  <td className="px-6 py-4">{invoice.due}</td>
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                        invoice.status === "Paid" ? "bg-emerald-100 text-emerald-800" :
                        invoice.status === "Pending" ? "bg-amber-100 text-amber-800" :
                        invoice.status === "Overdue" ? "bg-rose-100 text-rose-800" :
                        "bg-slate-100 text-slate-800"
                      )}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-brand-600">
                        <Send className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-brand-600">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
