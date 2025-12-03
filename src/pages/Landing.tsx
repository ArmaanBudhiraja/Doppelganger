import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar3DPlaceholder } from '@/components/Avatar3DPlaceholder';
import { Brain, TrendingUp, Users, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Personality Mapping',
    description: 'Advanced AI analyzes your digital footprint to build a comprehensive personality model.',
  },
  {
    icon: TrendingUp,
    title: 'Mood Trends',
    description: 'Track emotional patterns across your online activity with beautiful visualizations.',
  },
  {
    icon: Users,
    title: 'Interest Graph',
    description: 'Discover connections between your interests, friends, and digital interactions.',
  },
  {
    icon: MessageCircle,
    title: 'AI Doppelgänger Chat',
    description: 'Chat with an AI version of yourself that thinks and speaks like you.',
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl gradient-text">Digital Doppelgänger</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link to="/connect">Connect Accounts</Link>
          </Button>
          <Button variant="hero" asChild>
            <Link to="/dashboard">
              Enter Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary">AI-Powered Identity Analysis</span>
              </motion.div>
              
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight">
                Meet Your{' '}
                <span className="gradient-text">Digital</span>
                <br />
                <span className="neon-text">Doppelgänger</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Your online life, transformed into a conscious AI version of you. 
                Connect your accounts and discover who you really are in the digital realm.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/connect">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/dashboard">
                  View Demo
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-primary">4+</p>
                <p className="text-sm text-muted-foreground">Platforms</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-secondary">AI</p>
                <p className="text-sm text-muted-foreground">Powered</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-neon-pink">100%</p>
                <p className="text-sm text-muted-foreground">Private</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Avatar3DPlaceholder size="lg" className="scale-125" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold mb-4">
            Discover Your <span className="gradient-text">Digital Self</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI analyzes your digital footprint across multiple platforms to create a comprehensive view of your online identity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 hover-glow group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel glow-border p-12 text-center"
        >
          <h2 className="font-display text-4xl font-bold mb-4">
            Ready to Meet <span className="neon-text">Yourself</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Connect your accounts and let AI reveal the patterns and insights hidden in your digital life.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/connect">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Digital Doppelgänger © 2024</span>
          </div>
          <p className="text-sm text-muted-foreground">Your data. Your identity. Your AI twin.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
