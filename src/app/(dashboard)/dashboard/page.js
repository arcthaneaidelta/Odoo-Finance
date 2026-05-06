"use client";

import { StatCard } from "@/components/ui/stat-card";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUpRight, CreditCard, Euro, Users, Activity } from "lucide-react";
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Jan", revenue: 4000, expenses: 2400 },
  { name: "Feb", revenue: 3000, expenses: 1398 },
  { name: "Mar", revenue: 5000, expenses: 3800 },
  { name: "Apr", revenue: 8780, expenses: 3908 },
  { name: "May", revenue: 6890, expenses: 4800 },
  { name: "Jun", revenue: 9390, expenses: 3800 },
  { name: "Jul", revenue: 11490, expenses: 4300 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <p className="mt-1 text-slate-500">Welcome back. Here's what's happening today.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="€45,231.89"
          change="20.1%"
          trend="up"
          icon={Euro}
        />
        <StatCard
          title="Active Subscriptions"
          value="+2,350"
          change="18.1%"
          trend="up"
          icon={Users}
        />
        <StatCard
          title="Outstanding Invoices"
          value="€12,234.00"
          change="4.2%"
          trend="down"
          icon={CreditCard}
        />
        <StatCard
          title="MRR Growth"
          value="€8,400.00"
          change="12.5%"
          trend="up"
          icon={Activity}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-4" hoverEffect>
          <CardHeader>
            <CardTitle>Revenue vs Expenses</CardTitle>
            <CardDescription>Financial overview for the last 7 months.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `€${value}`} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                    <Line type="monotone" dataKey="expenses" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                  </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3" hoverEffect>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 mt-4">
              {[
                { name: "Acme Corp", email: "finance@acme.com", amount: "+€1,999.00", status: "Paid" },
                { name: "Global Tech", email: "billing@global.com", amount: "+€2,499.00", status: "Paid" },
                { name: "Startup Inc", email: "hello@startup.com", amount: "+€99.00", status: "Paid" },
                { name: "Mega Agency", email: "acc@mega.agency", amount: "+€4,200.00", status: "Pending" },
                { name: "Design Studio", email: "hi@design.studio", amount: "+€499.00", status: "Paid" },
              ].map((sale, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="flex items-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 font-medium">
                    {sale.name.charAt(0)}
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{sale.name}</p>
                    <p className="text-sm text-slate-500">{sale.email}</p>
                  </div>
                  <div className="ml-auto font-medium text-slate-900">{sale.amount}</div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
