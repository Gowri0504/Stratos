import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  trend?: string;
}

export const DashboardCard = ({ title, value, description, icon: Icon, trend }: DashboardCardProps) => {
  return (
    <div className="cyber-card p-8 flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <div className="p-4 rounded-2xl bg-cyber-blue/5 border border-cyber-blue/20 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
          <Icon className="text-cyber-blue" size={28} />
        </div>
        {trend && (
          <span className="text-[10px] font-black text-cyber-blue bg-cyber-blue/10 px-3 py-1 rounded-full border border-cyber-blue/20 uppercase tracking-widest">
            {trend}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">{title}</h3>
        <p className="text-4xl font-black mt-2 tracking-tighter italic">{value}</p>
        <p className="text-white/20 text-xs mt-3 font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
