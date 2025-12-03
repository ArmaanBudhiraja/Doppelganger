import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check, Loader2, Mail, Music, Video, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OAuthConnectCardProps {
  id: string;
  name: string;
  icon: string;
  connected: boolean;
  lastSync?: string | null;
  onConnect: () => void;
  onDisconnect: () => void;
  delay?: number;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: Mail,
  music: Music,
  video: Video,
  camera: Camera,
};

const brandColors: Record<string, string> = {
  google: 'from-red-500/20 to-yellow-500/20 border-red-500/30',
  spotify: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
  youtube: 'from-red-600/20 to-red-500/20 border-red-500/30',
  instagram: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
};

export const OAuthConnectCard = ({
  id,
  name,
  icon,
  connected,
  lastSync,
  onConnect,
  onDisconnect,
  delay = 0,
}: OAuthConnectCardProps) => {
  const IconComponent = iconMap[icon] || Mail;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6',
        'backdrop-blur-xl transition-all duration-300',
        brandColors[id] || 'from-card to-card/50 border-border'
      )}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-background/50">
          <IconComponent className="w-8 h-8 text-foreground" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{name}</h3>
          {connected ? (
            <div className="flex items-center gap-2 text-sm text-emerald-400">
              <Check className="w-4 h-4" />
              <span>Connected</span>
              {lastSync && <span className="text-muted-foreground">• {lastSync}</span>}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Not connected</p>
          )}
        </div>
        
        <Button
          variant={connected ? "outline" : "default"}
          onClick={connected ? onDisconnect : onConnect}
          className={cn(
            'min-w-[100px]',
            !connected && 'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90'
          )}
        >
          {connected ? 'Disconnect' : 'Connect'}
        </Button>
      </div>

      {/* Status indicator */}
      <div className={cn(
        'absolute top-3 right-3 w-3 h-3 rounded-full',
        connected ? 'bg-emerald-400 animate-pulse' : 'bg-muted'
      )} />
    </motion.div>
  );
};
