import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { User, RefreshCw, Bell } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { isSyncing, setSyncing, accounts } = useStore();
  const connectedCount = accounts.filter((a) => a.connected).length;

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => setSyncing(false), 2000);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'h-16 px-6 flex items-center justify-between border-b border-border/50 bg-background/50 backdrop-blur-xl',
        className
      )}
    >
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm">
          <span className={cn(
            'w-2 h-2 rounded-full',
            connectedCount > 0 ? 'bg-emerald-400 animate-pulse' : 'bg-muted-foreground'
          )} />
          <span className="text-muted-foreground">
            {connectedCount}/{accounts.length} connected
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleSync}
          className="relative"
          disabled={isSyncing}
        >
          <RefreshCw className={cn('w-5 h-5', isSyncing && 'animate-spin')} />
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-xs flex items-center justify-center">
            3
          </span>
        </Button>

        <div className="flex items-center gap-3 pl-3 border-l border-border/50">
          <div className="text-right">
            <p className="text-sm font-medium">Digital Twin</p>
            <p className="text-xs text-muted-foreground">
              {isSyncing ? 'Syncing...' : 'All synced'}
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/30 flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
