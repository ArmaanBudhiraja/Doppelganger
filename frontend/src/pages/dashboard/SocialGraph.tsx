import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/GlassPanel';
import { socialGraphData } from '@/data/mockData';
import { Users, ExternalLink, TrendingUp, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const nodeTypeColors = {
  self: 'bg-gradient-to-br from-primary to-secondary',
  friend: 'bg-neon-cyan/30 border-neon-cyan/50',
  platform: 'bg-neon-purple/30 border-neon-purple/50',
  channel: 'bg-neon-pink/30 border-neon-pink/50',
  artist: 'bg-neon-blue/30 border-neon-blue/50',
};

const SocialGraph = () => {
  const selectedNode = socialGraphData.selectedNode;

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-3xl font-bold">
          Your <span className="gradient-text">Social Graph</span>
        </h1>
        <p className="text-muted-foreground mt-1">
          Visualize your connections and see how they influence your digital life.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Graph Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 glass-panel p-6 min-h-[500px] relative overflow-hidden"
        >
          <h3 className="font-display font-semibold text-lg mb-4">Network Visualization</h3>
          
          {/* Animated Graph Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Center node (You) */}
            <motion.div
              className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-primary-foreground font-bold text-sm">YOU</span>
            </motion.div>

            {/* Orbital rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute rounded-full border border-border/30"
                style={{
                  width: `${ring * 150 + 100}px`,
                  height: `${ring * 150 + 100}px`,
                }}
                animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 30 + ring * 10, repeat: Infinity, ease: 'linear' }}
              />
            ))}

            {/* Nodes */}
            {socialGraphData.nodes.filter(n => n.id !== 'you').map((node, index) => {
              const angle = (index / (socialGraphData.nodes.length - 1)) * Math.PI * 2;
              const radius = 100 + (index % 3) * 80;
              
              return (
                <motion.div
                  key={node.id}
                  className={cn(
                    'absolute w-12 h-12 rounded-full border-2 flex items-center justify-center cursor-pointer',
                    'hover:scale-125 transition-transform z-20',
                    nodeTypeColors[node.type as keyof typeof nodeTypeColors]
                  )}
                  style={{
                    left: `calc(50% + ${Math.cos(angle) * radius}px - 24px)`,
                    top: `calc(50% + ${Math.sin(angle) * radius}px - 24px)`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.3 }}
                >
                  <span className="text-xs font-medium text-center leading-tight px-1">
                    {node.label.split(' ')[0]}
                  </span>
                </motion.div>
              );
            })}

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {socialGraphData.edges.slice(0, 6).map((edge, index) => {
                const fromNode = socialGraphData.nodes.find(n => n.id === edge.from);
                const toNode = socialGraphData.nodes.find(n => n.id === edge.to);
                if (!fromNode || !toNode) return null;
                
                const fromIndex = socialGraphData.nodes.indexOf(fromNode);
                const toIndex = socialGraphData.nodes.indexOf(toNode);
                
                const fromAngle = fromNode.id === 'you' ? 0 : (fromIndex / (socialGraphData.nodes.length - 1)) * Math.PI * 2;
                const toAngle = toNode.id === 'you' ? 0 : ((toIndex - 1) / (socialGraphData.nodes.length - 1)) * Math.PI * 2;
                
                const fromRadius = fromNode.id === 'you' ? 0 : 100 + (fromIndex % 3) * 80;
                const toRadius = toNode.id === 'you' ? 0 : 100 + ((toIndex - 1) % 3) * 80;
                
                return (
                  <motion.line
                    key={`${edge.from}-${edge.to}`}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${Math.cos(toAngle) * toRadius}px)`}
                    y2={`calc(50% + ${Math.sin(toAngle) * toRadius}px)`}
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeOpacity={edge.strength * 0.3}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Legend */}
          <div className="absolute bottom-6 left-6 flex flex-wrap gap-3">
            {Object.entries(nodeTypeColors).map(([type, color]) => (
              <div key={type} className="flex items-center gap-2 text-xs">
                <div className={cn('w-3 h-3 rounded-full border', color)} />
                <span className="capitalize text-muted-foreground">{type}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Selected Node Info */}
        <GlassPanel variant="glow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan/30 to-neon-cyan/10 border border-neon-cyan/50 flex items-center justify-center">
              <Users className="w-6 h-6 text-neon-cyan" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg">{selectedNode.name}</h3>
              <p className="text-sm text-muted-foreground capitalize">{selectedNode.type}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-muted/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Interactions</span>
                <span className="font-bold text-primary">{selectedNode.interactions}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-emerald-400">+23% this month</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-muted/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Mood Impact</span>
                <span className="font-bold text-secondary">{Math.round(selectedNode.moodImpact * 100)}%</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-neon-pink" />
                <span className="text-xs text-neon-pink">Positive influence</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Shared Interests</p>
              <div className="flex flex-wrap gap-2">
                {selectedNode.sharedInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/30"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                Last interaction: {selectedNode.lastInteraction}
              </p>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
};

export default SocialGraph;
