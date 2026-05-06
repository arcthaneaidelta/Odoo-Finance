"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AutomationPage() {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Workflows</h1>
          <p className="mt-1 text-slate-500">Automate your financial operations.</p>
        </div>
        <Button>Create Workflow</Button>
      </div>

      <Card className="flex-1 min-h-[400px]">
        <div className="h-full flex items-center justify-center bg-slate-50 rounded-xl m-2 border border-dashed border-slate-200 relative overflow-hidden">
          {/* Fake Grid Background */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="w-64 p-4 rounded-lg bg-white premium-shadow border border-slate-200 text-center">
              <span className="font-medium text-sm text-slate-900">Trigger: Invoice Paid</span>
            </div>
            <div className="w-px h-8 bg-brand-300" />
            <div className="w-64 p-4 rounded-lg bg-brand-50 premium-shadow border border-brand-200 text-center">
              <span className="font-medium text-sm text-brand-700">Action: Send Thank You Email</span>
            </div>
            <div className="w-px h-8 bg-brand-300" />
            <div className="w-64 p-4 rounded-lg bg-white premium-shadow border border-slate-200 text-center">
              <span className="font-medium text-sm text-slate-900">Action: Update CRM</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
