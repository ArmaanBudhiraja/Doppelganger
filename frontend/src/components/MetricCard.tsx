import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: string;
  icon?: React.ReactNode;
  color?: 'cyan' | 'purple' | 'pink' | 'blue';
  delay?: number;
}

export const MetricCard = ({
  title,
  value,
  subtitle,
  trend,
  icon,
  color = 'cyan',
  delay = 0,
}: MetricCardProps) => {
  const colorClasses = {
    cyan: 'from-neon-cyan/20 to-transparent border-neon-cyan/30',
    purple: 'from-neon-purple/20 to-transparent border-neon-purple/30',
    pink: 'from-neon-pink/20 to-transparent border-neon-pink/30',
    blue: 'from-neon-blue/20 to-transparent border-neon-blue/30',
  };

  const textColors = {
    cyan: 'text-neon-cyan',
    purple: 'text-neon-purple',
    pink: 'text-neon-pink',
    blue: 'text-neon-blue',
  };

  const getTrendIcon = () => {
    if (!trend) return null;
    if (trend.startsWith('+')) return <TrendingUp className="w-4 h-4 text-emerald-400" />;
    if (trend.startsWith('-')) return <TrendingDown className="w-4 h-4 text-red-400" />;
    return <Minus className="w-4 h-4 text-muted-foreground" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'relative overflow-hidden rounded-2xl border bg-gradient-to-br p-5',
        'backdrop-blur-xl hover:scale-[1.02] transition-transform duration-300',
        colorClasses[color]
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className={cn('text-3xl font-bold font-display', textColors[color])}>{value}</p>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className={cn('p-3 rounded-xl bg-background/50', textColors[color])}>
            {icon}
          </div>
        )}
      </div>
      
      {trend && (
        <div className="flex items-center gap-1 mt-3">
          {getTrendIcon()}
          <span className={cn(
            'text-sm font-medium',
            trend.startsWith('+') ? 'text-emerald-400' : trend.startsWith('-') ? 'text-red-400' : 'text-muted-foreground'
          )}>
            {trend}
          </span>
          <span className="text-xs text-muted-foreground">vs last week</span>
        </div>
      )}

      {/* Decorative glow */}
      <div className={cn(
        'absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20',
        color === 'cyan' && 'bg-neon-cyan',
        color === 'purple' && 'bg-neon-purple',
        color === 'pink' && 'bg-neon-pink',
        color === 'blue' && 'bg-neon-blue'
      )} />
    </motion.div>
  );
};
