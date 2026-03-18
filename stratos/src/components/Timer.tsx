"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Target, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [focusScore, setFocusScore] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          // Session complete
          setIsActive(false);
          setIsBreak(!isBreak);
          setMinutes(isBreak ? 25 : 5);
          setSeconds(0);
          if (!isBreak) {
            setFocusScore((prev) => Math.min(prev + 10, 100));
          }
        }
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, minutes, seconds, isBreak]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
  };

  const formatTime = (m: number, s: number) => 
    `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

  const progress = isBreak 
    ? ((5 * 60 - (minutes * 60 + seconds)) / (5 * 60)) * 100 
    : ((25 * 60 - (minutes * 60 + seconds)) / (25 * 60)) * 100;

  return (
    <div className="flex flex-col items-center gap-12 w-full max-w-2xl mx-auto">
      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Progress Circle */}
        <svg className="absolute w-full h-full transform -rotate-90">
          <circle
            cx="160"
            cy="160"
            r="150"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="12"
            fill="transparent"
          />
          <motion.circle
            cx="160"
            cy="160"
            r="150"
            stroke={isBreak ? "#10b981" : "#6366f1"}
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={942}
            initial={{ strokeDashoffset: 942 }}
            animate={{ strokeDashoffset: 942 - (942 * progress) / 100 }}
            transition={{ duration: 0.5, ease: "linear" }}
          />
        </svg>

        <div className="flex flex-col items-center z-10">
          <span className="text-white/40 font-medium tracking-widest uppercase text-sm mb-2">
            {isBreak ? "Break Time" : "Focusing"}
          </span>
          <h2 className="text-7xl font-black tabular-nums tracking-tighter">
            {formatTime(minutes, seconds)}
          </h2>
          <div className="flex items-center gap-2 mt-4 text-indigo-400 font-medium">
            <Target size={18} />
            <span>Target: 25:00</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <button
          onClick={toggleTimer}
          className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
            isActive 
              ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" 
              : "bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 hover:scale-110"
          }`}
        >
          {isActive ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
        </button>
        <button
          onClick={resetTimer}
          className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
        >
          <RotateCcw size={32} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 w-full mt-8">
        <div className="glass-card p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
            <Target size={24} />
          </div>
          <div>
            <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Current Focus</p>
            <p className="text-xl font-bold">{focusScore}%</p>
          </div>
        </div>
        <div className="glass-card p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
            <Trophy size={24} />
          </div>
          <div>
            <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Sessions</p>
            <p className="text-xl font-bold">4 Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
