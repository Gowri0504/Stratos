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
    <div className="glass-card p-6 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
          <Icon className="text-indigo-400" size={24} />
        </div>
        {trend && (
          <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
            {trend}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-white/60 text-sm font-medium">{title}</h3>
        <p className="text-3xl font-bold mt-1">{value}</p>
        <p className="text-white/40 text-xs mt-2">{description}</p>
      </div>
    </div>
  );
};
