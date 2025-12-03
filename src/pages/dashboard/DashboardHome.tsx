import { motion } from 'framer-motion';
import { MetricCard } from '@/components/MetricCard';
import { ChartCard } from '@/components/ChartCard';
import { GlassPanel } from '@/components/GlassPanel';
import { dashboardHighlights, moodData } from '@/data/mockData';
import { Smile, Video, Music, Zap, Sparkles } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const DashboardHome = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="font-display text-3xl font-bold">
            Welcome back, <span className="gradient-text">Digital Twin</span>
          </h1>
          <p className="text-muted-foreground mt-1">Here's what your AI has discovered about you today.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/30">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-emerald-400 font-medium">All systems active</span>
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Your Mood Today"
          value={dashboardHighlights.moodToday.value}
          subtitle={dashboardHighlights.moodToday.label}
          trend={dashboardHighlights.moodToday.trend}
          icon={<Smile className="w-6 h-6" />}
          color="cyan"
          delay={0.1}
        />
        <MetricCard
          title="Most Watched"
          value={dashboardHighlights.topCategory.value}
          subtitle={`${dashboardHighlights.topCategory.count} videos`}
          icon={<Video className="w-6 h-6" />}
          color="purple"
          delay={0.2}
        />
        <MetricCard
          title="Top Artist"
          value={dashboardHighlights.topArtist.value}
          subtitle={`${dashboardHighlights.topArtist.plays} plays`}
          icon={<Music className="w-6 h-6" />}
          color="pink"
          delay={0.3}
        />
        <MetricCard
          title="Energy Level"
          value={`${dashboardHighlights.energyLevel.value}%`}
          subtitle={dashboardHighlights.energyLevel.label}
          trend={dashboardHighlights.energyLevel.trend}
          icon={<Zap className="w-6 h-6" />}
          color="blue"
          delay={0.4}
        />
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        <ChartCard
          title="Weekly Mood & Energy"
          subtitle="Your emotional patterns this week"
          className="lg:col-span-2"
          delay={0.5}
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={moodData.weekly}>
                <defs>
                  <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(187, 100%, 50%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(187, 100%, 50%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(270, 80%, 65%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(270, 80%, 65%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="day" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 100]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="mood"
                  stroke="hsl(187, 100%, 50%)"
                  strokeWidth={2}
                  fill="url(#moodGradient)"
                  name="Mood"
                />
                <Area
                  type="monotone"
                  dataKey="energy"
                  stroke="hsl(270, 80%, 65%)"
                  strokeWidth={2}
                  fill="url(#energyGradient)"
                  name="Energy"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* AI Summary */}
        <GlassPanel variant="glow" className="flex flex-col" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold">AI Summary</h3>
              <p className="text-xs text-muted-foreground">Generated just now</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {dashboardHighlights.summary}
          </p>
          <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">Continuously learning</span>
          </div>
        </GlassPanel>
      </div>

      {/* Activity Timeline */}
      <ChartCard title="Recent Activity" subtitle="What your digital self has been up to" delay={0.7}>
        <div className="space-y-4">
          {moodData.timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
                {item.icon === 'music' && <Music className="w-5 h-5 text-primary" />}
                {item.icon === 'video' && <Video className="w-5 h-5 text-primary" />}
                {item.icon === 'tv' && <Video className="w-5 h-5 text-secondary" />}
                {item.icon === 'mail' && <Sparkles className="w-5 h-5 text-neon-pink" />}
              </div>
              <div className="flex-1">
                <p className="font-medium">{item.event}</p>
                <p className="text-sm text-muted-foreground">Mood: {item.mood}</p>
              </div>
              <span className="text-sm text-muted-foreground">{item.time}</span>
            </motion.div>
          ))}
        </div>
      </ChartCard>
    </div>
  );
};

export default DashboardHome;
