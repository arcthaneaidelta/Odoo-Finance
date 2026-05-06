"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function IntegrationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Integrations</h1>
        <p className="mt-1 text-slate-500">Connect Odoo Finance with your favorite tools.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {['Stripe', 'GoCardless', 'Salesforce', 'HubSpot', 'Slack', 'Zendesk'].map((app) => (
          <Card key={app}>
            <CardHeader>
              <CardTitle>{app}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Connect</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
