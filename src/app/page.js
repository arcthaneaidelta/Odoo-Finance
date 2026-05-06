"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Blocks, LayoutDashboard, FileText, BookOpen } from "lucide-react";

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-100">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white shadow-sm">
              <Blocks size={18} />
            </div>
            <span className="font-bold tracking-tight text-slate-900">Odoo Finance</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Sign In
            </Link>
            <Link href="/dashboard">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-500 opacity-20 blur-[100px]" 
          />
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute right-0 top-20 -z-10 h-[300px] w-[300px] rounded-full bg-indigo-500 opacity-10 blur-[100px]" 
          />
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute left-20 top-40 -z-10 h-[300px] w-[300px] rounded-full bg-blue-400 opacity-20 blur-[120px]" 
          />
        </div>
        
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10"
        >
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center rounded-full border border-brand-200/50 bg-white/50 backdrop-blur-sm px-3 py-1 text-sm font-medium text-brand-700 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2 animate-pulse" />
              Now fully compliant with SAFT-PT
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-6 text-balance"
            >
              The Financial Engine for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Portugal&apos;s Next Unicorns.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl leading-8 text-slate-600 mb-10 max-w-2xl mx-auto"
            >
              Enterprise-grade accounting, seamless invoicing, and automated tax compliance designed specifically for fast-growing Portuguese scale-ups.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center gap-x-6"
            >
              <Link href="/dashboard">
                <Button size="lg" className="h-14 px-8 text-base shadow-xl shadow-brand-500/30 hover:shadow-brand-500/40 transition-all rounded-full">
                  Enter Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#features" className="text-sm font-semibold leading-6 text-slate-900 hover:text-brand-600 transition-colors">
                Explore Features <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Fake Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.2 }}
          className="mx-auto max-w-6xl px-6 lg:px-8 mt-16 relative z-10"
        >
          <div className="rounded-2xl border border-slate-200/50 bg-white/50 p-2 backdrop-blur-xl premium-shadow ring-1 ring-slate-900/5">
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xl">
              {/* Fake UI Header */}
              <div className="flex h-12 items-center border-b border-slate-100 bg-slate-50/50 px-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                </div>
              </div>
              {/* Fake UI Content */}
              <div className="flex h-[400px]">
                <div className="w-48 border-r border-slate-100 bg-slate-50/50 p-4 space-y-2">
                  <div className="flex items-center gap-2 rounded-md bg-brand-50 px-2 py-1.5 text-brand-700 shadow-sm">
                    <LayoutDashboard size={14} /> <span className="text-xs font-semibold">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-slate-500 transition-colors">
                    <FileText size={14} /> <span className="text-xs font-medium">Invoices</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-slate-500 transition-colors">
                    <BookOpen size={14} /> <span className="text-xs font-medium">Accounting</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-slate-500 transition-colors">
                    <ShieldCheck size={14} /> <span className="text-xs font-medium">Compliance</span>
                  </div>
                </div>
                <div className="flex-1 p-6 overflow-hidden bg-slate-50/30">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-900 tracking-tight">Financial Overview</h2>
                    <div className="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm flex items-center">Last 30 Days</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10 text-brand-600"><LayoutDashboard size={40} /></div>
                      <p className="text-xs font-semibold text-slate-500 mb-1">Total Revenue</p>
                      <p className="text-2xl font-extrabold text-slate-900">€45,231</p>
                      <p className="text-xs text-emerald-600 mt-2 font-bold flex items-center gap-1"><ArrowRight className="h-3 w-3 -rotate-45" /> +12.5%</p>
                    </div>
                    <div className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10 text-brand-600"><Blocks size={40} /></div>
                      <p className="text-xs font-semibold text-slate-500 mb-1">Active Subs</p>
                      <p className="text-2xl font-extrabold text-slate-900">2,350</p>
                      <p className="text-xs text-emerald-600 mt-2 font-bold flex items-center gap-1"><ArrowRight className="h-3 w-3 -rotate-45" /> +5.2%</p>
                    </div>
                    <div className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10 text-brand-600"><FileText size={40} /></div>
                      <p className="text-xs font-semibold text-slate-500 mb-1">Outstanding</p>
                      <p className="text-2xl font-extrabold text-slate-900">€12,234</p>
                      <p className="text-xs text-rose-600 mt-2 font-bold flex items-center gap-1"><ArrowRight className="h-3 w-3 rotate-45" /> -2.1%</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm h-40 relative overflow-hidden flex flex-col justify-between">
                    <div className="flex justify-between items-center z-10">
                      <p className="text-xs font-bold text-slate-800">Revenue Trend</p>
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-50 to-transparent" />
                    <svg className="absolute bottom-0 left-0 h-[100px] w-full z-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M0 100 L0 60 Q20 40 40 70 T80 30 L100 40 L100 100 Z" fill="#3b82f6" fillOpacity="0.1" />
                      <path d="M0 60 Q20 40 40 70 T80 30 L100 40" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="80" cy="30" r="3" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="relative overflow-hidden border-y border-slate-200/50 bg-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_80%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-center text-center divide-x divide-slate-100"
          >
            {[
              { value: "€2B+", label: "Processed Annually" },
              { value: "100%", label: "AT Compliant" },
              { value: "500+", label: "Scale-ups Trust Us" },
              { value: "0.01s", label: "API Response Time" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
                }}
                className="flex flex-col gap-2 px-4"
              >
                <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-brand-600 to-slate-600">
                  {stat.value}
                </span>
                <span className="text-sm tracking-wide text-slate-500 font-semibold uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden">
        {/* Light Mode Mesh Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full bg-brand-200 opacity-30 blur-[120px]" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base font-semibold leading-7 text-brand-600"
            >
              Everything you need
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl"
            >
              No compromise functionality.
            </motion.p>
          </div>
          
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: 'Automated Invoicing',
                description: 'Generate and send SAFT-PT compliant invoices automatically based on subscription events.',
                icon: Zap,
              },
              {
                name: 'Real-time Accounting',
                description: 'Live ledger sync with your bank accounts. Stop waiting for end-of-month reconciliation.',
                icon: ShieldCheck,
              },
              {
                name: 'Global Readiness',
                description: 'Multi-currency support with real-time ECB exchange rates and automated VAT calculations.',
                icon: Globe,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", bounce: 0.4 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col rounded-3xl bg-white p-8 ring-1 ring-slate-200 shadow-sm transition-all hover:shadow-xl hover:shadow-brand-500/5"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 shadow-sm border border-brand-100 transition-colors group-hover:bg-brand-600 group-hover:border-brand-600">
                  <feature.icon className="h-6 w-6 text-brand-600 transition-colors group-hover:text-white" aria-hidden="true" />
                </div>
                
                <h3 className="text-xl font-semibold leading-8 text-slate-900">{feature.name}</h3>
                <p className="mt-4 flex-auto text-base leading-7 text-slate-600">{feature.description}</p>
                
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-brand-600 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="relative isolate overflow-hidden rounded-3xl bg-slate-900 px-6 py-24 text-center shadow-2xl sm:px-16"
          >
            {/* CTA Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[500px] rounded-full bg-brand-500 opacity-20 blur-[100px]" />
            <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-indigo-500 opacity-20 blur-[120px]" />
            
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl relative z-10 text-balance">
              Ready to scale your finance operations?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300 relative z-10">
              Join the fastest-growing Portuguese companies using Odoo Finance to manage their revenue, accounting, and compliance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 relative z-10">
              <Link href="/dashboard">
                <Button size="lg" className="h-14 px-8 text-base bg-white text-slate-900 shadow-xl shadow-brand-500/20 hover:bg-slate-50 transition-all rounded-full hover:scale-105 active:scale-95 font-semibold">
                  Enter Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-brand-600 text-white">
                <Blocks size={14} />
              </div>
              <span className="font-semibold text-slate-900">Odoo Finance</span>
            </div>
            <p className="text-sm text-slate-500 font-medium">
              © 2026 Odoo Finance Demo. Crafted for premium SaaS demonstration.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Privacy</a>
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
