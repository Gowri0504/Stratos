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
    <div className="space-y-8 pb-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-gradient">Dashboard Overview</h1>
        <p className="text-white/60">Welcome back! Here's your study progress for today.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Study Time"
          value="32.5 hrs"
          description="Total hours focused this week"
          icon={Clock}
          trend="+12%"
        />
        <DashboardCard
          title="Average Focus"
          value="88%"
          description="Mental performance score"
          icon={Target}
          trend="+5%"
        />
        <DashboardCard
          title="Exam Readiness"
          value="74%"
          description="Predicted readiness score"
          icon={Zap}
          trend="+8%"
        />
        <DashboardCard
          title="Active Streak"
          value="12 Days"
          description="Consistent study days"
          icon={TrendingUp}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-8 min-h-[400px]">
          <h3 className="text-xl font-bold mb-6">Productivity Trend</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="name" stroke="#ffffff60" fontSize={12} />
                <YAxis stroke="#ffffff60" fontSize={12} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #ffffff20", borderRadius: "12px" }}
                />
                <Area type="monotone" dataKey="hours" stroke="#6366f1" fillOpacity={1} fill="url(#colorHours)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-8 space-y-6">
          <h3 className="text-xl font-bold">Upcoming Deadlines</h3>
          <div className="space-y-4">
            {[
              { subject: "Advanced Mathematics", task: "Midterm Exam", date: "Mar 20", priority: "High" },
              { subject: "Software Engineering", task: "Project Proposal", date: "Mar 22", priority: "Medium" },
              { subject: "Data Structures", task: "Assignment #4", date: "Mar 25", priority: "Low" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className={cn(
                  "p-2 rounded-lg",
                  item.priority === "High" ? "bg-red-500/10 text-red-400" :
                  item.priority === "Medium" ? "bg-amber-500/10 text-amber-400" :
                  "bg-emerald-500/10 text-emerald-400"
                )}>
                  <AlertCircle size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{item.subject}</h4>
                  <p className="text-xs text-white/60">{item.task}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
