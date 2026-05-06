"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AccountingPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">General Ledger</h1>
          <p className="mt-1 text-slate-500">Real-time sync with Portuguese banking APIs.</p>
        </div>
        <Button variant="outline">Export Standard Audit File (SAF-T)</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50">
            <p className="text-slate-500">Ledger view will load here...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
