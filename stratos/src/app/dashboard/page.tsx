"use client";

import { motion } from "framer-motion";
import { 
  Clock, 
  Target, 
  TrendingUp, 
  AlertCircle,
  Zap,
  Calendar as CalendarIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardCard } from "@/components/DashboardCard";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

const data = [
  { name: "Mon", hours: 4, focus: 85 },
  { name: "Tue", hours: 6, focus: 78 },
  { name: "Wed", hours: 5, focus: 92 },
  { name: "Thu", hours: 7, focus: 88 },
  { name: "Fri", hours: 3, focus: 75 },
  { name: "Sat", hours: 8, focus: 95 },
  { name: "Sun", hours: 6, focus: 90 },
];

export default function Dashboard() {
  return (
    <div className="space-y-12 pb-20 max-w-7xl mx-auto">
      <header className="flex flex-col gap-3">
        <h1 className="text-5xl font-black text-cyber italic tracking-tighter">DASHBOARD_OVERVIEW</h1>
        <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px]">Welcome back, operative. System performance is optimal.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <DashboardCard
          title="Study Uptime"
          value="32.5h"
          description="Total runtime this cycle"
          icon={Clock}
          trend="+12%"
        />
        <DashboardCard
          title="Focus Density"
          value="88%"
          description="Cognitive alignment score"
          icon={Target}
          trend="+5%"
        />
        <DashboardCard
          title="Predictive Readiness"
          value="74%"
          description="AI-forecasted outcome"
          icon={Zap}
          trend="+8%"
        />
        <DashboardCard
          title="Continuous Streak"
          value="12d"
          description="Consecutive sync days"
          icon={TrendingUp}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 cyber-card p-10 min-h-[450px]">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-black italic text-cyber tracking-widest uppercase">Productivity_Trend</h3>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-cyber-pink" />
            </div>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f2ff" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#00f2ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#ffffff20" 
                  fontSize={10} 
                  fontWeight="bold"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#ffffff20" 
                  fontSize={10} 
                  fontWeight="bold"
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#0d0d0d", 
                    border: "1px solid #00f2ff30", 
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,242,255,0.1)"
                  }}
                  itemStyle={{ color: "#00f2ff", fontSize: "12px", fontWeight: "bold" }}
                />
                <Area 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="#00f2ff" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorHours)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="cyber-card p-10 space-y-8">
          <h3 className="text-xl font-black italic text-cyber tracking-widest uppercase">System_Deadlines</h3>
          <div className="space-y-6">
            {[
              { subject: "Advanced Mathematics", task: "Midterm Exam", date: "Mar 20", priority: "High" },
              { subject: "Software Engineering", task: "Project Proposal", date: "Mar 22", priority: "Medium" },
              { subject: "Data Structures", task: "Assignment #4", date: "Mar 25", priority: "Low" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyber-blue/30 transition-all group cursor-pointer">
                <div className={cn(
                  "p-3 rounded-xl shadow-lg",
                  item.priority === "High" ? "bg-red-500/10 text-red-500 shadow-red-500/5" :
                  item.priority === "Medium" ? "bg-cyber-yellow/10 text-cyber-yellow shadow-cyber-yellow/5" :
                  "bg-cyber-blue/10 text-cyber-blue shadow-cyber-blue/5"
                )}>
                  <AlertCircle size={20} className="group-hover:rotate-12 transition-transform" />
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-xs uppercase tracking-wider">{item.subject}</h4>
                  <p className="text-[10px] text-white/30 font-bold mt-1 uppercase">{item.task}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="cyber-button w-full text-[10px]">View_Full_Registry</button>
        </div>
      </div>
    </div>
  );
}
