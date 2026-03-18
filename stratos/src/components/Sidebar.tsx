"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Calendar, 
  BookOpen, 
  Timer, 
  BarChart3, 
  FileText, 
  MessageSquare,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils"; // I'll create this

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Planner", href: "/planner", icon: Calendar },
  { name: "Subjects", href: "/subjects", icon: BookOpen },
  { name: "Focus Mode", href: "/focus", icon: Timer },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "AI Assistant", href: "/ai-assistant", icon: MessageSquare },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 pt-24 px-4 hidden md:block">
      <div className="space-y-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
              pathname === item.href
                ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                : "text-white/60 hover:bg-white/10 hover:text-white"
            )}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};
