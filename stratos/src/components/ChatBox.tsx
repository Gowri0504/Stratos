"use client";

import { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Sparkles, Zap, BrainCircuit, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm Stratos AI, your intelligent study companion. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Mocking AI response for now
      setTimeout(() => {
        const assistantMessage: Message = { 
          role: "assistant", 
          content: `I've analyzed your request about "${input}". Based on your current progress, I recommend focusing on Calculus for 45 minutes today.` 
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("AI error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[650px] glass-card overflow-hidden border-indigo-500/20 shadow-2xl shadow-indigo-500/10">
      {/* Header */}
      <div className="p-6 bg-white/5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="text-xl font-black text-gradient">Stratos AI</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Intelligent Assistant</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="p-2 rounded-lg bg-white/5 text-white/40 hover:bg-white/10 transition-colors cursor-pointer">
            <BrainCircuit size={18} />
          </div>
          <div className="p-2 rounded-lg bg-white/5 text-white/40 hover:bg-white/10 transition-colors cursor-pointer">
            <Zap size={18} />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
        <AnimatePresence>
          {messages.map((m, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              key={idx}
              className={`flex items-start gap-5 ${m.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`p-3 rounded-2xl shrink-0 shadow-lg ${
                m.role === "user" 
                  ? "bg-indigo-600 text-white shadow-indigo-600/20" 
                  : "bg-white/10 text-indigo-400 border border-white/10 shadow-black/20"
              }`}>
                {m.role === "user" ? <User size={20} /> : <Bot size={20} />}
              </div>
              <div className={`p-6 rounded-3xl max-w-[80%] text-sm leading-relaxed font-medium ${
                m.role === "user" 
                  ? "bg-indigo-600/10 text-indigo-100 border border-indigo-500/20 rounded-tr-none" 
                  : "bg-white/5 text-white/80 border border-white/10 rounded-tl-none"
              }`}>
                {m.content}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl w-fit"
            >
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" />
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-6 bg-white/5 border-t border-white/10">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything about your study plan..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 pr-16 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all placeholder:text-white/20 font-medium"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 bottom-2 px-4 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center group-hover:scale-105"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-[10px] text-center text-white/20 mt-4 font-bold uppercase tracking-widest">
          Powered by Stratos AI Engine v2.0
        </p>
      </div>
    </div>
  );
};
