import { motion } from 'framer-motion';
import { ChartCard } from '@/components/ChartCard';
import { moodData } from '@/data/mockData';
import { Music, Video, Mail, Tv } from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  AreaChart, Area, BarChart, Bar 
} from 'recharts';
import { cn } from '@/lib/utils';

const iconMap = {
  music: Music,
  video: Video,
  mail: Mail,
  tv: Tv,
};

const moodColors: Record<string, string> = {
  relaxed: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  curious: 'text-primary bg-primary/10 border-primary/30',
  immersed: 'text-secondary bg-secondary/10 border-secondary/30',
  productive: 'text-neon-pink bg-neon-pink/10 border-neon-pink/30',
};

const MoodTrends = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-3xl font-bold">
          <span className="gradient-text">Mood</span> & Trends
        </h1>
        <p className="text-muted-foreground mt-1">
          Track your emotional patterns and see how your digital behavior affects your mood.
        </p>
      </motion.div>

      {/* Main Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Mood Over Time */}
        <ChartCard
          title="Mood Over Time"
          subtitle="Your emotional journey this week"
          delay={0.1}
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={moodData.weekly}>
                <defs>
                  <linearGradient id="moodAreaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(187, 100%, 50%)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(187, 100%, 50%)" stopOpacity={0} />
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
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="mood"
                  stroke="hsl(187, 100%, 50%)"
                  strokeWidth={3}
                  fill="url(#moodAreaGradient)"
                  name="Mood"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Stress Levels */}
        <ChartCard
          title="Stress Levels"
          subtitle="Lower is better"
          delay={0.2}
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={moodData.weekly}>
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
                  }}
                />
                <Bar
                  dataKey="stress"
                  fill="hsl(var(--destructive))"
                  radius={[8, 8, 0, 0]}
                  name="Stress"
                  fillOpacity={0.7}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Sentiment Heatmap */}
      <ChartCard
        title="Email Sentiment Heatmap"
        subtitle="Your communication tone throughout the day"
        delay={0.3}
      >
        <div className="overflow-x-auto">
          <div className="grid grid-cols-8 gap-2 min-w-[500px]">
            <div className="text-sm text-muted-foreground font-medium"></div>
            {moodData.sentimentHeatmap.map((item) => (
              <div key={item.day} className="text-center text-sm text-muted-foreground font-medium">
                {item.day}
              </div>
            ))}
            
            {['morning', 'afternoon', 'evening'].map((time) => (
              <>
                <div key={`label-${time}`} className="text-sm text-muted-foreground capitalize flex items-center">
                  {time}
                </div>
                {moodData.sentimentHeatmap.map((item) => {
                  const value = item[time as keyof typeof item] as number;
                  return (
                    <motion.div
                      key={`${item.day}-${time}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="aspect-square rounded-lg flex items-center justify-center text-xs font-medium"
                      style={{
                        backgroundColor: `hsl(187, 100%, 50%, ${value * 0.6})`,
                      }}
                    >
                      {Math.round(value * 100)}%
                    </motion.div>
                  );
                })}
              </>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span>Less Positive</span>
          <div className="flex gap-1">
            {[0.2, 0.4, 0.6, 0.8, 1].map((opacity) => (
              <div
                key={opacity}
                className="w-6 h-4 rounded"
                style={{ backgroundColor: `hsl(187, 100%, 50%, ${opacity * 0.6})` }}
              />
            ))}
          </div>
          <span>More Positive</span>
        </div>
      </ChartCard>

      {/* Activity Timeline */}
      <ChartCard
        title="Mood-Activity Correlation"
        subtitle="How your activities affect your emotional state"
        delay={0.4}
      >
        <div className="space-y-3">
          {moodData.timeline.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Music;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{item.event}</p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
                <span className={cn(
                  'px-3 py-1 rounded-full text-sm font-medium border capitalize',
                  moodColors[item.mood] || 'text-muted-foreground bg-muted/30 border-border'
                )}>
                  {item.mood}
                </span>
              </motion.div>
            );
          })}
        </div>
      </ChartCard>
    </div>
  );
};

export default MoodTrends;
