import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RobotCursorFollower } from '@/components/RobotCursorFollower';
import { Brain, TrendingUp, Users, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import Logo from '/logo.png';

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
      <div className="fixed inset-0 bg-grid-pattern opacity-35" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[160px]" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[160px]" />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto"
      >
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Doppelganger Logo" className="h-12" />
          <span className="font-display font-bold text-xl gradient-text">Doppelganger</span>
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
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24">
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
                className="inline-flex items-center gap-2 px-4 py-2 text-sm"
              >
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
            <RobotCursorFollower size="lg" className="scale-110" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" z-10 border-t border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Doppelgänger © 2025</span>
          </div>
          <p className="text-sm text-muted-foreground">Your data. Your identity. Your AI twin.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
