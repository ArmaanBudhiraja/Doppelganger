import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner = ({ size = 'md', className }: LoadingSpinnerProps) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  return (
    <div className={cn('relative', sizes[size], className)}>
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-1 rounded-full border border-transparent border-t-secondary"
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        <LoadingSpinner size="lg" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground font-medium"
        >
          Loading your digital self...
        </motion.p>
      </div>
    </div>
  );
};
