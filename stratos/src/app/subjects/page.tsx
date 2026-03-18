"use client";

import { useState } from "react";
import { 
  BookOpen, 
  Plus, 
  Search, 
  ChevronRight, 
  Star, 
  Clock, 
  BarChart3, 
  MoreVertical,
  Edit2,
  Trash2,
  LayoutGrid,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Subject {
  id: string;
  name: string;
  topics: number;
  completed: number;
  difficulty: number;
  lastStudied: string;
  mastery: number;
}

const initialSubjects: Subject[] = [
  { id: "1", name: "Mathematics", topics: 12, completed: 8, difficulty: 5, lastStudied: "2h ago", mastery: 85 },
  { id: "2", name: "Physics", topics: 10, completed: 4, difficulty: 4, lastStudied: "4h ago", mastery: 60 },
  { id: "3", name: "Computer Science", topics: 15, completed: 12, difficulty: 3, lastStudied: "Yesterday", mastery: 92 },
  { id: "4", name: "English Literature", topics: 8, completed: 6, difficulty: 2, lastStudied: "3 days ago", mastery: 75 },
];

export default function SubjectsPage() {
  const [subjects] = useState<Subject[]>(initialSubjects);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-12 pb-20">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="p-4 rounded-3xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <BookOpen size={40} />
          </div>
          <div>
            <h1 className="text-5xl font-black text-gradient">Subjects</h1>
            <p className="text-white/60 font-medium tracking-wide">Manage your academic curriculum and monitor progress.</p>
          </div>
        </div>
        <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-black hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30 active:scale-95 group shrink-0">
          <Plus size={24} className="group-hover:rotate-90 transition-transform" />
          Add New Subject
        </button>
      </header>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative flex-1 group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-indigo-400 transition-colors" size={24} />
          <input 
            type="text" 
            placeholder="Search subjects or topics..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-8 py-5 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all placeholder:text-white/20 font-bold"
          />
        </div>
        <div className="flex gap-4">
          <select className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-indigo-500/50 text-white/60 font-bold appearance-none cursor-pointer hover:bg-white/[0.08] transition-all pr-12">
            <option>All Difficulties</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-indigo-500/50 text-white/60 font-bold appearance-none cursor-pointer hover:bg-white/[0.08] transition-all pr-12">
            <option>Sort by Progress</option>
            <option>Sort by Name</option>
            <option>Sort by Last Studied</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <AnimatePresence>
          {subjects.map((subject, idx) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 group relative overflow-hidden hover:bg-white/[0.08] transition-all border-l-8 border-l-indigo-600/40"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-3 rounded-xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="flex items-start justify-between mb-10">
                <div className="space-y-3">
                  <h3 className="text-3xl font-black">{subject.name}</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star 
                          key={s} 
                          size={14} 
                          className={s <= subject.difficulty ? "fill-amber-400 text-amber-400" : "text-white/10"} 
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Difficulty</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-black text-gradient">{Math.round((subject.completed / subject.topics) * 100)}%</p>
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mt-1">Progress</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(subject.completed / subject.topics) * 100}%` }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" 
                  />
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2">
                    <CheckCircle2 size={20} className="text-emerald-400" />
                    <div className="text-center">
                      <p className="text-lg font-black">{subject.completed}/{subject.topics}</p>
                      <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Topics</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2">
                    <Clock size={20} className="text-indigo-400" />
                    <div className="text-center">
                      <p className="text-lg font-black">{subject.lastStudied}</p>
                      <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Studied</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2">
                    <Target size={20} className="text-violet-400" />
                    <div className="text-center">
                      <p className="text-lg font-black">{subject.mastery}%</p>
                      <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Mastery</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Zap size={20} />
                  </div>
                  <p className="text-xs font-bold text-indigo-200/60">Predicted readiness is high for the upcoming exam.</p>
                </div>
                <button className="p-4 rounded-xl bg-white/5 text-white/40 hover:text-indigo-400 hover:bg-white/10 transition-all font-black text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                  View Topics
                  <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
