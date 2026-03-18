"use client";

import { Timer } from "@/components/Timer";
import { 
  Zap, 
  Target, 
  History, 
  Settings as SettingsIcon,
  CheckCircle2,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function FocusPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto py-10">
      {/* Left Column: Timer & Main Actions */}
      <div className="lg:col-span-8 space-y-12">
        <header className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <Clock size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gradient">Focus Mode</h1>
              <p className="text-white/60 font-medium">Maximize your productivity with the Pomodoro technique.</p>
            </div>
          </div>
        </header>

        <section className="glass-card p-16 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-50" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-violet-600/5 blur-[100px] rounded-full" />
          <Timer />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8 group hover:bg-white/[0.07] transition-all cursor-pointer border-l-4 border-l-indigo-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold">Session Target</h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Set a specific goal for this session to maintain clear focus and measurable progress.
            </p>
          </div>
          <div className="glass-card p-8 group hover:bg-white/[0.07] transition-all cursor-pointer border-l-4 border-l-emerald-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold">Deep Work Mode</h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Block notifications and background noise for ultimate concentration during your study.
            </p>
          </div>
        </section>
      </div>

      {/* Right Column: Stats & History */}
      <div className="lg:col-span-4 space-y-8">
        <section className="glass-card p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <History size={20} className="text-indigo-400" />
              Recent Activity
            </h3>
            <button className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors">
              View All
            </button>
          </div>

          <div className="space-y-6">
            {[
              { task: "Calculus Homework", duration: "50m", status: "Completed", time: "2h ago" },
              { task: "Algorithm Design", duration: "25m", status: "Completed", time: "4h ago" },
              { task: "Physics Review", duration: "25m", status: "Interrupted", time: "Yesterday" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className={cn(
                  "p-2 rounded-lg mt-1",
                  item.status === "Completed" ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                )}>
                  {item.status === "Completed" ? <CheckCircle2 size={16} /> : <Clock size={16} />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-sm">{item.task}</h4>
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/40 font-medium">
                    <span>{item.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className={item.status === "Completed" ? "text-emerald-400/80" : "text-red-400/80"}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card p-8 bg-indigo-600/10 border-indigo-500/20 relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-indigo-500/10 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700" />
          <h3 className="text-xl font-bold mb-4 relative z-10">Pro Tip</h3>
          <p className="text-indigo-200/70 text-sm leading-relaxed relative z-10 italic">
            "The 5-minute break is just as important as the 25-minute focus session. Use it to stretch and hydrate."
          </p>
        </section>

        <button className="w-full glass-card p-4 flex items-center justify-center gap-3 text-white/60 hover:text-white hover:bg-white/10 transition-all font-bold">
          <SettingsIcon size={20} />
          Timer Settings
        </button>
      </div>
    </div>
  );
}
