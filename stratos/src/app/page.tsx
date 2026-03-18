"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Target, 
  ShieldCheck, 
  BrainCircuit,
  Bot,
  LayoutDashboard,
  Calendar,
  BarChart3,
  Timer,
  ChevronRight
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center space-y-20 py-20 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-4xl mx-auto space-y-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-indigo-500/5"
        >
          <Sparkles size={14} />
          AI Powered Study Intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tight leading-[1.1]"
        >
          Master Your Learning <br />
          <span className="text-gradient">with Stratos AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          The intelligent study system that models your behavior, predicts performance, and adapts to your unique learning path.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
        >
          <Link
            href="/dashboard"
            className="group relative px-10 py-5 rounded-2xl bg-indigo-600 text-white font-black text-lg hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-600/30 active:scale-95 flex items-center gap-3"
          >
            Get Started Free
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/login"
            className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-lg hover:bg-white/10 transition-all backdrop-blur-xl flex items-center gap-3 group"
          >
            Live Demo
            <ChevronRight size={20} className="text-white/20 group-hover:text-white transition-colors" />
          </Link>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: LayoutDashboard, title: "Smart Dashboard", desc: "Real-time stats and behavioral modeling." },
          { icon: Calendar, title: "AI Planner", desc: "Auto-generated schedules based on difficulty." },
          { icon: Timer, title: "Focus Engine", desc: "Pomodoro system with cognitive load tracking." },
          { icon: BarChart3, title: "Deep Analytics", desc: "Performance forecasting and gap analysis." },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.1 }}
            className="glass-card p-8 group hover:bg-white/[0.08] transition-all cursor-pointer border-t-2 border-t-transparent hover:border-t-indigo-500"
          >
            <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 w-fit mb-6 group-hover:scale-110 transition-transform">
              <feature.icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 w-full py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-5xl font-black text-gradient mb-2">94%</p>
            <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Efficiency Boost</p>
          </div>
          <div>
            <p className="text-5xl font-black text-gradient mb-2">12ms</p>
            <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">AI Latency</p>
          </div>
          <div>
            <p className="text-5xl font-black text-gradient mb-2">50k+</p>
            <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Active Learners</p>
          </div>
          <div>
            <p className="text-5xl font-black text-gradient mb-2">4.9/5</p>
            <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">User Rating</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10 pb-20">
        <h2 className="text-4xl md:text-5xl font-black">Ready to scale your learning?</h2>
        <p className="text-white/40 text-lg max-w-xl mx-auto font-medium">Join thousands of students using Stratos to achieve their academic goals faster than ever.</p>
        <Link
          href="/signup"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-black font-black text-lg hover:bg-indigo-50 transition-all shadow-2xl shadow-white/10 active:scale-95 group"
        >
          Create Free Account
          <Zap size={20} className="fill-black group-hover:rotate-12 transition-transform" />
        </Link>
      </section>
    </div>
  );
}
