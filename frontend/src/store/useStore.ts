import { create } from 'zustand';

interface Account {
  id: string;
  name: string;
  icon: string;
  connected: boolean;
  lastSync: string | null;
}

interface AppState {
  accounts: Account[];
  isSyncing: boolean;
  sidebarCollapsed: boolean;
  currentMood: number;
  
  connectAccount: (id: string) => void;
  disconnectAccount: (id: string) => void;
  setSyncing: (syncing: boolean) => void;
  toggleSidebar: () => void;
  setCurrentMood: (mood: number) => void;
}

export const useStore = create<AppState>((set) => ({
  accounts: [
    { id: "google", name: "Google", icon: "mail", connected: false, lastSync: null },
    { id: "spotify", name: "Spotify", icon: "music", connected: false, lastSync: null },
    { id: "youtube", name: "YouTube", icon: "video", connected: false, lastSync: null },
    { id: "instagram", name: "Instagram", icon: "camera", connected: false, lastSync: null },
  ],
  isSyncing: false,
  sidebarCollapsed: false,
  currentMood: 82,
  
  connectAccount: (id) =>
    set((state) => ({
      accounts: state.accounts.map((acc) =>
        acc.id === id ? { ...acc, connected: true, lastSync: "Just now" } : acc
      ),
    })),
    
  disconnectAccount: (id) =>
    set((state) => ({
      accounts: state.accounts.map((acc) =>
        acc.id === id ? { ...acc, connected: false, lastSync: null } : acc
      ),
    })),
    
  setSyncing: (syncing) => set({ isSyncing: syncing }),
  
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  
  setCurrentMood: (mood) => set({ currentMood: mood }),
}));
