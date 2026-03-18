"use client";

import { ChatBox } from "@/components/ChatBox";
import { 
  Sparkles, 
  BrainCircuit, 
  Target, 
  TrendingUp, 
  MessageSquare,
  Zap,
  Bot,
  Zap as ZapIcon,
  ShieldCheck,
  AlertTriangle
} from "lucide-react";
import { motion } from "framer-motion";

export default function AIAssistantPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto py-10">
      {/* Left Column: Chat Assistant */}
      <div className="lg:col-span-8 space-y-12">
        <header className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <Bot size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gradient">Stratos Assistant</h1>
              <p className="text-white/60 font-medium">Your personalized AI companion for academic excellence.</p>
            </div>
          </div>
        </header>

        <ChatBox />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8 group hover:bg-white/[0.07] transition-all cursor-pointer border-l-4 border-l-indigo-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-bold">Concept Analysis</h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Ask me to explain complex topics or break down difficult concepts into simple terms.
            </p>
          </div>
          <div className="glass-card p-8 group hover:bg-white/[0.07] transition-all cursor-pointer border-l-4 border-l-violet-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold">Smart Revision</h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              I'll generate custom quiz questions and revision schedules based on your weak areas.
            </p>
          </div>
        </section>
      </div>

      {/* Right Column: AI Insights & Learning Twin */}
      <div className="lg:col-span-4 space-y-8">
        <section className="glass-card p-8 border-indigo-500/30 bg-indigo-500/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <ZapIcon size={64} className="text-indigo-400 group-hover:rotate-12 transition-transform duration-700" />
          </div>
          <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
            <Sparkles size={24} className="text-indigo-400" />
            Learning Twin
          </h3>
          <div className="space-y-8 relative z-10">
            <div className="space-y-2">
              <div className="flex justify-between items-end mb-2">
                <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Exam Readiness</span>
                <span className="text-indigo-400 font-black">74%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "74%" }}
                  className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-end mb-2">
                <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Retention Level</span>
                <span className="text-violet-400 font-black">62%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "62%" }}
                  className="h-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" 
                />
              </div>
            </div>
            <p className="text-white/50 text-sm italic border-l-2 border-indigo-500/30 pl-4 py-2">
              "You focus best in the morning. Shift your difficult subjects before 11 AM for maximum retention."
            </p>
          </div>
        </section>

        <section className="glass-card p-8 border-red-500/20 bg-red-500/5">
          <h3 className="text-xl font-bold flex items-center gap-3 mb-6">
            <AlertTriangle size={20} className="text-red-400" />
            Risk Detection
          </h3>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
              <h4 className="text-red-400 font-bold text-sm mb-1">Behind Schedule</h4>
              <p className="text-white/60 text-xs">You're 15% behind your weekly target for Mathematics. Stratos suggests a 2-hour recovery session.</p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
              <h4 className="text-amber-400 font-bold text-sm mb-1">Cognitive Load Alert</h4>
              <p className="text-white/60 text-xs">High fatigue detected in recent sessions. Consider a longer break to avoid burnout.</p>
            </div>
          </div>
        </section>

        <section className="glass-card p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <ShieldCheck size={20} className="text-emerald-400" />
            System Health
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 text-center">
              <p className="text-[10px] text-white/30 font-bold uppercase mb-1">Latency</p>
              <p className="text-lg font-black text-emerald-400">12ms</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 text-center">
              <p className="text-[10px] text-white/30 font-bold uppercase mb-1">Uptime</p>
              <p className="text-lg font-black text-emerald-400">99.9%</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
