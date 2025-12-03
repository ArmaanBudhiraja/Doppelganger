import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassPanelProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'light' | 'glow';
  children: React.ReactNode;
}

export const GlassPanel = ({ 
  variant = 'default', 
  className, 
  children,
  ...props 
}: GlassPanelProps) => {
  const variants = {
    default: 'glass-panel',
    light: 'glass-panel-light',
    glow: 'glass-panel glow-border',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(variants[variant], 'p-6', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
