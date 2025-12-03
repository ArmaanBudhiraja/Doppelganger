import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ChartCard = ({
  title,
  subtitle,
  children,
  className,
  delay = 0,
}: ChartCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'glass-panel p-6 space-y-4',
        className
      )}
    >
      <div>
        <h3 className="font-display font-semibold text-lg">{title}</h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {children}
    </motion.div>
  );
};
