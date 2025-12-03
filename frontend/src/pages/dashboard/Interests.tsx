import { motion } from 'framer-motion';
import { ChartCard } from '@/components/ChartCard';
import { GlassPanel } from '@/components/GlassPanel';
import { interestsData } from '@/data/mockData';
import { Cpu, Music, FlaskConical, Palette, Gamepad2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  cpu: Cpu,
  music: Music,
  flask: FlaskConical,
  palette: Palette,
  gamepad: Gamepad2,
};

const Interests = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-3xl font-bold">
          Your <span className="gradient-text">Interest Map</span>
        </h1>
        <p className="text-muted-foreground mt-1">
          Discover patterns in what captivates your attention across the digital landscape.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top Themes */}
        <ChartCard
          title="Top Themes"
          subtitle="Your dominant interests ranked by engagement"
          className="lg:col-span-1"
          delay={0.1}
        >
          <div className="space-y-4">
            {interestsData.topThemes.map((theme, index) => {
              const IconComponent = iconMap[theme.icon] || Cpu;
              return (
                <motion.div
                  key={theme.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-sm">{theme.name}</span>
                      <span className="text-primary font-bold text-sm">{theme.score}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${theme.score}%` }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ChartCard>

        {/* Tag Cloud */}
        <ChartCard
          title="Interest Tag Cloud"
          subtitle="Words that define your digital identity"
          className="lg:col-span-2"
          delay={0.2}
        >
          <div className="flex flex-wrap gap-3 justify-center py-4">
            {interestsData.tagCloud.map((tag, index) => {
              const size = tag.value > 85 ? 'text-2xl' : tag.value > 70 ? 'text-xl' : tag.value > 55 ? 'text-lg' : 'text-base';
              const opacity = tag.value / 100;
              
              return (
                <motion.span
                  key={tag.text}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className={cn(
                    'px-4 py-2 rounded-full border font-medium cursor-pointer',
                    'hover:scale-110 transition-transform',
                    size
                  )}
                  style={{
                    backgroundColor: `hsl(187, 100%, 50%, ${opacity * 0.15})`,
                    borderColor: `hsl(187, 100%, 50%, ${opacity * 0.4})`,
                    color: `hsl(187, 100%, ${40 + opacity * 20}%)`,
                  }}
                >
                  {tag.text}
                </motion.span>
              );
            })}
          </div>
        </ChartCard>
      </div>

      {/* Topic Clusters */}
      <ChartCard
        title="Topic Clusters"
        subtitle="How your interests group together"
        delay={0.3}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {interestsData.clusters.map((cluster, index) => (
            <motion.div
              key={cluster.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-5 rounded-xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-sm">{cluster.name}</h4>
                <span className="text-xs text-primary font-bold">{cluster.size}%</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cluster.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded-md text-xs bg-background/50 text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </ChartCard>

      {/* Interest Summary */}
      <GlassPanel variant="glow">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg mb-2">AI Interest Analysis</h3>
            <p className="text-muted-foreground leading-relaxed">
              {interestsData.summary}
            </p>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
};

export default Interests;
