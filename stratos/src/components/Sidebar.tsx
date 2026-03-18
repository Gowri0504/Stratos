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
    <aside className="fixed left-0 top-0 h-full w-64 bg-cyber-bg/40 backdrop-blur-2xl border-r border-white/5 pt-28 px-4 hidden md:block">
      <div className="space-y-3">
        {sidebarItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 font-bold tracking-tight text-sm uppercase",
              pathname === item.href
                ? "sidebar-active"
                : "text-white/40 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon size={18} />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};
