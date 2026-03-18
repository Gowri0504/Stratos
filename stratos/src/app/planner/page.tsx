"use client";

import { useState } from "react";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  AlertTriangle,
  Zap,
  LayoutGrid,
  ChevronRight,
  ChevronLeft,
  Settings,
  Sparkles,
  BookOpen
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Task {
  id: string;
  subject: string;
  topic: string;
  duration: string;
  completed: boolean;
  priority: "High" | "Medium" | "Low";
}

const initialTasks: Task[] = [
  { id: "1", subject: "Mathematics", topic: "Derivatives", duration: "45m", completed: true, priority: "High" },
  { id: "2", subject: "Physics", topic: "Quantum Mechanics", duration: "60m", completed: false, priority: "High" },
  { id: "3", subject: "Software Engineering", topic: "Design Patterns", duration: "30m", completed: false, priority: "Medium" },
  { id: "4", subject: "Chemistry", topic: "Thermodynamics", duration: "45m", completed: false, priority: "Low" },
];

export default function PlannerPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isGenerating, setIsGenerating] = useState(false);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const generateSchedule = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto py-10 pb-20">
      {/* Left Column: Smart Schedule */}
      <div className="lg:col-span-8 space-y-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-3xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <CalendarIcon size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gradient">Smart Planner</h1>
              <p className="text-white/60 font-medium">AI-optimized daily timetable for maximum efficiency.</p>
            </div>
          </div>
          <button 
            onClick={generateSchedule}
            disabled={isGenerating}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-black hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30 disabled:opacity-50 active:scale-95 group"
          >
            {isGenerating ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
            )}
            {isGenerating ? "Optimizing..." : "Auto-Generate Plan"}
          </button>
        </header>

        <section className="glass-card overflow-hidden">
          <div className="p-8 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-indigo-400 font-bold">
                <ChevronLeft size={20} />
                <span>Today</span>
                <ChevronRight size={20} />
              </div>
              <h3 className="text-xl font-bold">March 18, 2026</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
                <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Pending</span>
              </div>
            </div>
          </div>

          <div className="divide-y divide-white/10">
            <AnimatePresence>
              {tasks.map((task) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={cn(
                    "p-8 flex items-center gap-8 group transition-all duration-500",
                    task.completed ? "bg-emerald-500/5" : "bg-transparent hover:bg-white/[0.03]"
                  )}
                >
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className={cn(
                      "w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all",
                      task.completed 
                        ? "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
                        : "border-white/20 text-transparent hover:border-indigo-500"
                    )}
                  >
                    <CheckCircle2 size={18} />
                  </button>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <h4 className={cn(
                        "text-xl font-bold transition-all",
                        task.completed ? "text-white/30 line-through" : "text-white"
                      )}>
                        {task.topic}
                      </h4>
                      <span className={cn(
                        "text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border",
                        task.priority === "High" ? "bg-red-500/10 text-red-400 border-red-500/20" :
                        task.priority === "Medium" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                        "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      )}>
                        {task.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/40 font-medium">
                      <span className="flex items-center gap-2">
                        <BookOpen size={14} className="text-indigo-400" />
                        {task.subject}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="flex items-center gap-2">
                        <Clock size={14} className="text-indigo-400" />
                        {task.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-3 rounded-xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                      <Settings size={18} />
                    </button>
                    <button className="p-3 rounded-xl bg-red-500/10 text-red-400 hover:text-white hover:bg-red-500 transition-all">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button className="w-full p-8 text-white/40 hover:text-indigo-400 hover:bg-indigo-500/5 transition-all flex items-center justify-center gap-4 font-black uppercase tracking-[0.2em] group">
            <Plus size={24} className="group-hover:rotate-90 transition-transform" />
            Add Custom Task
          </button>
        </section>
      </div>

      {/* Right Column: Planner Intelligence */}
      <div className="lg:col-span-4 space-y-10">
        <section className="glass-card p-10 bg-indigo-600/10 border-indigo-500/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Zap size={64} className="text-indigo-400 group-hover:scale-150 transition-transform duration-1000" />
          </div>
          <h3 className="text-2xl font-black mb-6 relative z-10 flex items-center gap-3">
            <Sparkles size={24} className="text-indigo-400" />
            AI Insights
          </h3>
          <div className="space-y-6 relative z-10">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <h4 className="text-indigo-400 font-bold text-sm mb-2 flex items-center gap-2">
                <LayoutGrid size={16} />
                Peak Focus Window
              </h4>
              <p className="text-white/60 text-xs leading-relaxed">
                Your historical data shows 92% higher focus between <strong>09:00 AM - 11:30 AM</strong>. Focus on high-difficulty subjects during this time.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <h4 className="text-amber-400 font-bold text-sm mb-2 flex items-center gap-2">
                <AlertTriangle size={16} />
                Retention Risk
              </h4>
              <p className="text-white/60 text-xs leading-relaxed">
                You haven't reviewed <strong>Thermodynamics</strong> in 4 days. Retention is likely decaying. Schedule a revision soon.
              </p>
            </div>
          </div>
        </section>

        <section className="glass-card p-10">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
            <Clock size={20} className="text-violet-400" />
            Weekly Progress
          </h3>
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between items-end text-xs font-bold uppercase tracking-widest text-white/40">
                <span>Completed Tasks</span>
                <span className="text-white">12/18</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "66%" }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-end text-xs font-bold uppercase tracking-widest text-white/40">
                <span>Study Goal</span>
                <span className="text-white">32.5h / 40h</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "81%" }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="glass-card p-10 bg-white/5 flex flex-col items-center justify-center text-center gap-6 group hover:bg-white/[0.08] transition-all cursor-pointer">
          <div className="p-5 rounded-3xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
            <CalendarIcon size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Sync Calendar</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              Import deadlines from Google Calendar or Outlook for a unified study view.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
