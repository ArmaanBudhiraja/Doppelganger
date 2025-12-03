import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/GlassPanel';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useStore } from '@/store/useStore';
import { User, RefreshCw, Trash2, Shield, Bell, Moon, Sun, Database, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { accounts, setSyncing, isSyncing } = useStore();
  const { toast } = useToast();
  const connectedCount = accounts.filter((a) => a.connected).length;

  const handleResync = () => {
    setSyncing(true);
    toast({
      title: "Syncing data...",
      description: "Your digital footprint is being analyzed.",
    });
    setTimeout(() => {
      setSyncing(false);
      toast({
        title: "Sync complete!",
        description: "Your Doppelgänger has been updated.",
      });
    }, 3000);
  };

  const handleDeleteData = () => {
    toast({
      title: "Data deletion requested",
      description: "Your data will be permanently deleted within 24 hours.",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-3xl font-bold">
          <span className="gradient-text">Settings</span>
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage your account, privacy, and preferences.
        </p>
      </motion.div>

      {/* Profile Card */}
      <GlassPanel variant="glow">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <User className="w-10 h-10 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h2 className="font-display font-semibold text-xl">Digital Twin</h2>
            <p className="text-muted-foreground">your-email@example.com</p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-sm text-muted-foreground">
                {connectedCount} accounts connected
              </span>
              <span className="text-sm text-emerald-400">
                • Active since Jan 2024
              </span>
            </div>
          </div>
          <Button variant="outline">Edit Profile</Button>
        </div>
      </GlassPanel>

      {/* Data Management */}
      <GlassPanel>
        <h3 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
          <Database className="w-5 h-5 text-primary" />
          Data Management
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
            <div className="flex items-center gap-4">
              <RefreshCw className={`w-5 h-5 text-primary ${isSyncing ? 'animate-spin' : ''}`} />
              <div>
                <p className="font-medium">Re-sync All Data</p>
                <p className="text-sm text-muted-foreground">
                  Refresh your digital footprint analysis
                </p>
              </div>
            </div>
            <Button onClick={handleResync} disabled={isSyncing}>
              {isSyncing ? 'Syncing...' : 'Sync Now'}
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-destructive/10 border border-destructive/30">
            <div className="flex items-center gap-4">
              <Trash2 className="w-5 h-5 text-destructive" />
              <div>
                <p className="font-medium text-destructive">Delete All Data</p>
                <p className="text-sm text-muted-foreground">
                  Permanently remove all your data and analysis
                </p>
              </div>
            </div>
            <Button variant="destructive" onClick={handleDeleteData}>
              Delete
            </Button>
          </div>
        </div>
      </GlassPanel>

      {/* Preferences */}
      <GlassPanel>
        <h3 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Preferences
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
            <div className="flex items-center gap-4">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Get notified about new insights
                </p>
              </div>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
            <div className="flex items-center gap-4">
              <Moon className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-muted-foreground">
                  Toggle dark/light theme
                </p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
            <div className="flex items-center gap-4">
              <Shield className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Enhanced Privacy</p>
                <p className="text-sm text-muted-foreground">
                  Additional data anonymization
                </p>
              </div>
            </div>
            <Switch />
          </div>
        </div>
      </GlassPanel>

      {/* Danger Zone */}
      <div className="p-6 rounded-2xl border border-destructive/30 bg-destructive/5">
        <h3 className="font-display font-semibold text-lg mb-4 text-destructive flex items-center gap-2">
          <LogOut className="w-5 h-5" />
          Danger Zone
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <Button variant="destructive" className="w-full">
          Delete Account
        </Button>
      </div>
    </div>
  );
};

export default Settings;
