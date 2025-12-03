import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Avatar3DPlaceholderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar3DPlaceholder = ({ 
  className, 
  size = 'lg' 
}: Avatar3DPlaceholderProps) => {
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
  };

  return (
    <div className={cn('relative', sizes[size], className)}>
      {/* Outer glow rings */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/30"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-2 rounded-full border border-secondary/30"
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main avatar container */}
      <motion.div
        className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl border border-primary/30 overflow-hidden"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Face silhouette */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-3/5 h-4/5">
            {/* Head */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full aspect-square rounded-full bg-gradient-to-b from-primary/30 to-transparent" />
            
            {/* Eyes glow */}
            <motion.div
              className="absolute top-[35%] left-[25%] w-3 h-3 rounded-full bg-primary"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-[35%] right-[25%] w-3 h-3 rounded-full bg-primary"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            />

            {/* Digital lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <motion.path
                d="M 20 40 Q 50 30 80 40"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                fill="none"
                strokeOpacity="0.3"
                animate={{ pathLength: [0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.path
                d="M 30 60 Q 50 70 70 60"
                stroke="hsl(var(--secondary))"
                strokeWidth="0.5"
                fill="none"
                strokeOpacity="0.3"
                animate={{ pathLength: [0, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </svg>
          </div>
        </div>

        {/* Scanning effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Orbiting particles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [
              Math.cos((i * Math.PI * 2) / 3) * 50,
              Math.cos((i * Math.PI * 2) / 3 + Math.PI) * 50,
              Math.cos((i * Math.PI * 2) / 3) * 50,
            ],
            y: [
              Math.sin((i * Math.PI * 2) / 3) * 50,
              Math.sin((i * Math.PI * 2) / 3 + Math.PI) * 50,
              Math.sin((i * Math.PI * 2) / 3) * 50,
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};
