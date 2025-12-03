import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Brain, 
  TrendingUp, 
  Users, 
  Compass, 
  MessageCircle, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useStore } from '@/store/useStore';
import { Button } from '@/components/ui/button';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/dashboard/personality', label: 'Personality', icon: Brain },
  { path: '/dashboard/mood', label: 'Mood & Trends', icon: TrendingUp },
  { path: '/dashboard/social', label: 'Social Graph', icon: Users },
  { path: '/dashboard/interests', label: 'Interests', icon: Compass },
  { path: '/dashboard/chat', label: 'Doppelgänger Chat', icon: MessageCircle },
  { path: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export const DashboardSidebar = () => {
  const { sidebarCollapsed, toggleSidebar } = useStore();
  const location = useLocation();

  return (
    <motion.aside
      initial={false}
      animate={{ width: sidebarCollapsed ? 80 : 260 }}
      className="h-screen bg-sidebar border-r border-sidebar-border flex flex-col"
    >
      {/* Logo */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-sidebar-border">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          {!sidebarCollapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-display font-bold text-lg gradient-text"
            >
              Doppel
            </motion.span>
          )}
        </NavLink>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="w-8 h-8"
        >
          {sidebarCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200',
                'hover:bg-sidebar-accent',
                isActive && 'bg-sidebar-accent border border-primary/30 shadow-lg shadow-primary/10'
              )}
            >
              <Icon className={cn(
                'w-5 h-5 flex-shrink-0',
                isActive ? 'text-primary' : 'text-sidebar-foreground/70'
              )} />
              {!sidebarCollapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={cn(
                    'text-sm font-medium',
                    isActive ? 'text-primary' : 'text-sidebar-foreground/70'
                  )}
                >
                  {item.label}
                </motion.span>
              )}
              {isActive && !sidebarCollapsed && (
                <motion.div
                  layoutId="activeIndicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      {!sidebarCollapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 mx-3 mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
        >
          <p className="text-xs text-muted-foreground mb-2">Your Digital Twin</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium">Active & Learning</span>
          </div>
        </motion.div>
      )}
    </motion.aside>
  );
};
