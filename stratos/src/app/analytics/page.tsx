"use client";

import { KnowledgeGraph } from "@/components/KnowledgeGraph";
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Clock, 
  Zap, 
  Activity, 
  Calendar,
  AlertCircle,
  BrainCircuit,
  LayoutGrid
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area
} from "recharts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const radarData = [
  { subject: "Math", A: 85, fullMark: 100 },
  { subject: "Physics", A: 60, fullMark: 100 },
  { subject: "CS", A: 92, fullMark: 100 },
  { subject: "Eng", A: 75, fullMark: 100 },
  { subject: "History", A: 45, fullMark: 100 },
];

const productivityData = [
  { time: "08:00", value: 40 },
  { time: "10:00", value: 85 },
  { time: "12:00", value: 65 },
  { time: "14:00", value: 55 },
  { time: "16:00", value: 92 },
  { time: "18:00", value: 75 },
  { time: "20:00", value: 45 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-12 pb-12">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-3xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <BarChart3 size={40} />
          </div>
          <div>
            <h1 className="text-5xl font-black text-gradient">Deep Analytics</h1>
            <p className="text-white/60 font-medium tracking-wide">AI-driven behavioral analysis and performance forecasting.</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Performance Forecast */}
        <div className="lg:col-span-8 space-y-10">
          <section className="glass-card p-10 min-h-[450px] relative overflow-hidden">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-2xl font-bold mb-1">Performance Forecast</h3>
                <p className="text-white/40 text-sm font-medium">Predicting future results based on current behavior.</p>
              </div>
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                <TrendingUp size={24} />
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={productivityData}>
                  <defs>
                    <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="time" stroke="#ffffff40" fontSize={10} fontWeight="bold" />
                  <YAxis stroke="#ffffff40" fontSize={10} fontWeight="bold" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #ffffff20", borderRadius: "16px", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorProd)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-card p-10 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Target size={20} className="text-violet-400" />
                Subject Mastery
              </h3>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="#ffffff20" />
                    <PolarAngleAxis dataKey="subject" stroke="#ffffff60" fontSize={10} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#ffffff20" fontSize={8} />
                    <Radar name="Mastery" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.5} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-card p-10 flex flex-col justify-center gap-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400">
                  <Activity size={32} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-black uppercase tracking-[0.2em] mb-1">Focus Consistency</p>
                  <p className="text-3xl font-black">94.2%</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-violet-500/10 text-violet-400">
                  <Clock size={32} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-black uppercase tracking-[0.2em] mb-1">Avg Session Length</p>
                  <p className="text-3xl font-black">42.5m</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <Zap size={32} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-black uppercase tracking-[0.2em] mb-1">Study Efficiency</p>
                  <p className="text-3xl font-black">1.8x</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right: Knowledge Graph & Insights */}
        <div className="lg:col-span-4 space-y-10">
          <KnowledgeGraph />

          <section className="glass-card p-8 border-indigo-500/20 bg-indigo-500/5">
            <h3 className="text-xl font-black mb-8 flex items-center gap-3">
              <BrainCircuit size={20} className="text-indigo-400" />
              Cognitive Insights
            </h3>
            <div className="space-y-6">
              {[
                { title: "Peak Alertness", val: "09:00 AM", desc: "Best for new learning" },
                { title: "Burnout Risk", val: "Low", desc: "Consistency is stable" },
                { title: "Memory Decay", val: "Slow", desc: "Spaced repetition active" },
              ].map((insight, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{insight.title}</span>
                    <span className="text-indigo-400 font-bold text-sm">{insight.val}</span>
                  </div>
                  <p className="text-white/60 text-xs font-medium">{insight.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card p-8 border-violet-500/20 bg-violet-500/5 group">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-black">Goal Simulation</h3>
              <LayoutGrid size={20} className="text-violet-400 group-hover:rotate-90 transition-transform duration-500" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 italic">
              "If you increase study time by 30 mins/day, your predicted Calculus grade will rise by 8.5%."
            </p>
            <button className="w-full p-4 rounded-2xl bg-violet-600 text-white font-black hover:bg-violet-700 transition-all shadow-lg shadow-violet-600/20 active:scale-95">
              Run New Simulation
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
