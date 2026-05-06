"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function CompliancePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Portuguese Compliance</h1>
        <p className="mt-1 text-slate-500">Configure Autoridade Tributária integration and SAFT settings.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-brand-500" />
              <div>
                <CardTitle>AT Communication</CardTitle>
                <CardDescription>Real-time invoice reporting</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-sm font-medium text-slate-700">Status</span>
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">Active</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-sm font-medium text-slate-700">Last Sync</span>
                <span className="text-sm text-slate-500">Today, 10:45 AM</span>
              </div>
              <Button variant="outline" className="w-full">Configure Credentials</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-brand-500" />
              <div>
                <CardTitle>SAFT-PT Export</CardTitle>
                <CardDescription>Standard audit file</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg bg-brand-50 p-4 text-sm text-brand-800">
                Your monthly SAF-T file for the previous month is ready to be exported.
              </div>
              <Button className="w-full">Download SAFT-PT XML</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
