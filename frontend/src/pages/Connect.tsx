import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OAuthConnectCard } from '@/components/OAuthConnectCard';
import { useStore } from '@/store/useStore';
import { ArrowRight, ArrowLeft, Sparkles, Shield, Zap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Connect = () => {
  const { accounts, connectAccount, disconnectAccount } = useStore();
  const connectedCount = accounts.filter((a) => a.connected).length;
  const progress = (connectedCount / accounts.length) * 100;

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30" />
      <div className="fixed top-1/3 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
      <div className="fixed bottom-1/3 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[120px]" />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex items-center justify-between px-8 py-6 max-w-5xl mx-auto"
      >
        <Button variant="ghost" asChild>
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </Button>
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold gradient-text">Connect</span>
        </div>

        <Button variant="hero" asChild disabled={connectedCount === 0}>
          <Link to="/dashboard">
            Continue
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-3xl mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl font-bold mb-4">
            Connect Your <span className="gradient-text">Accounts</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Link your digital platforms to help our AI understand your online identity. 
            The more you connect, the better your Doppelgänger.
          </p>
        </motion.div>

        {/* Progress Tracker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-semibold">Connection Progress</p>
              <p className="text-sm text-muted-foreground">
                {connectedCount} of {accounts.length} accounts connected
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-display font-bold text-primary">{Math.round(progress)}%</p>
            </div>
          </div>
          <Progress value={progress} className="h-3" />
          
          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>End-to-end encrypted</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-primary" />
              <span>Real-time analysis</span>
            </div>
          </div>
        </motion.div>

        {/* OAuth Cards */}
        <div className="space-y-4">
          {accounts.map((account, index) => (
            <OAuthConnectCard
              key={account.id}
              {...account}
              onConnect={() => connectAccount(account.id)}
              onDisconnect={() => disconnectAccount(account.id)}
              delay={0.1 * index}
            />
          ))}
        </div>

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 p-4 rounded-xl bg-muted/30 border border-border/50 text-center"
        >
          <p className="text-sm text-muted-foreground">
            We only analyze public data and content you've interacted with. 
            Your credentials are never stored and you can disconnect anytime.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Connect;
