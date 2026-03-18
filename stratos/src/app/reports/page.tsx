"use client";

import { 
  FileText, 
  Download, 
  ChevronRight, 
  Calendar, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  Zap,
  LayoutGrid,
  Share2,
  Trash2,
  MoreVertical,
  Bot,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Report {
  id: string;
  title: string;
  date: string;
  type: "Weekly" | "Monthly";
  score: number;
  status: "Completed" | "Pending";
}

const initialReports: Report[] = [
  { id: "1", title: "Weekly Progress - Mar Week 2", date: "Mar 14, 2026", type: "Weekly", score: 88, status: "Completed" },
  { id: "2", title: "Monthly Performance - February", date: "Mar 01, 2026", type: "Monthly", score: 74, status: "Completed" },
  { id: "3", title: "Weekly Progress - Mar Week 1", date: "Mar 07, 2026", type: "Weekly", score: 82, status: "Completed" },
  { id: "4", title: "Weekly Progress - Feb Week 4", date: "Feb 28, 2026", type: "Weekly", score: 68, status: "Completed" },
];

export default function ReportsPage() {
  return (
    <div className="space-y-12 pb-20">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="p-4 rounded-3xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <FileText size={40} />
          </div>
          <div>
            <h1 className="text-5xl font-black text-gradient">Reports</h1>
            <p className="text-white/60 font-medium tracking-wide">AI-generated performance summaries and academic insights.</p>
          </div>
        </div>
        <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-black hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30 active:scale-95 group shrink-0">
          <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
          Generate New Report
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Reports List */}
        <div className="lg:col-span-8 space-y-8">
          <div className="glass-card overflow-hidden">
            <div className="p-8 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <h3 className="text-2xl font-black">Generated Reports</h3>
              <div className="flex gap-4">
                <button className="p-3 rounded-xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                  <LayoutGrid size={20} />
                </button>
                <button className="p-3 rounded-xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

            <div className="divide-y divide-white/10">
              <AnimatePresence>
                {initialReports.map((report, idx) => (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 flex items-center gap-8 group hover:bg-white/[0.03] transition-all duration-500"
                  >
                    <div className={cn(
                      "p-5 rounded-3xl shrink-0",
                      report.type === "Weekly" ? "bg-indigo-500/10 text-indigo-400" : "bg-violet-500/10 text-violet-400"
                    )}>
                      <FileText size={32} />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h4 className="text-xl font-bold group-hover:text-indigo-400 transition-colors cursor-pointer">{report.title}</h4>
                        <span className={cn(
                          "text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border",
                          report.type === "Weekly" ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" : "bg-violet-500/10 text-violet-400 border-violet-500/20"
                        )}>
                          {report.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/40 font-medium">
                        <span className="flex items-center gap-2">
                          <Calendar size={14} className="text-indigo-400" />
                          {report.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400" />
                          {report.status}
                        </span>
                      </div>
                    </div>

                    <div className="text-right mr-8">
                      <p className="text-3xl font-black text-gradient">{report.score}%</p>
                      <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mt-1">Efficiency Score</p>
                    </div>

                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-4 rounded-2xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                        <Download size={20} />
                      </button>
                      <button className="p-4 rounded-2xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                        <Share2 size={20} />
                      </button>
                      <button className="p-4 rounded-2xl bg-red-500/10 text-red-400 hover:text-white hover:bg-red-500 transition-all">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <button className="w-full p-8 text-white/40 hover:text-indigo-400 hover:bg-indigo-500/5 transition-all font-black uppercase tracking-[0.2em] group">
              View All Archived Reports
            </button>
          </div>
        </div>

        {/* Right: Insights Summary */}
        <div className="lg:col-span-4 space-y-10">
          <section className="glass-card p-10 bg-indigo-600/10 border-indigo-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Bot size={64} className="text-indigo-400 group-hover:scale-150 transition-transform duration-1000" />
            </div>
            <h3 className="text-2xl font-black mb-8 relative z-10 flex items-center gap-3">
              <Sparkles size={24} className="text-indigo-400" />
              AI Summary
            </h3>
            <div className="space-y-8 relative z-10">
              <p className="text-indigo-100/70 text-sm leading-relaxed italic border-l-4 border-indigo-500/30 pl-6 py-2">
                "Overall efficiency has increased by 12.5% this month. Your focus sessions are becoming more consistent, particularly in the morning windows."
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Growth Trend</p>
                    <p className="text-xl font-black">+12.5% High</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400">
                    <Target size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Goal Alignment</p>
                    <p className="text-xl font-black">94% Accuracy</p>
                  </div>
                </div>
              </div>

              <button className="w-full p-5 rounded-2xl bg-indigo-600 text-white font-black hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/30 active:scale-95">
                Download Full AI Insight
              </button>
            </div>
          </section>

          <section className="glass-card p-10">
            <h3 className="text-xl font-black mb-8 flex items-center gap-3">
              <Clock size={20} className="text-violet-400" />
              Upcoming Report
            </h3>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-20 h-20 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 flex items-center justify-center animate-pulse">
                <span className="text-xl font-black">4d</span>
              </div>
              <div>
                <h4 className="font-bold">Weekly Performance</h4>
                <p className="text-white/40 text-xs">Generating in 4 days, 12 hours</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
