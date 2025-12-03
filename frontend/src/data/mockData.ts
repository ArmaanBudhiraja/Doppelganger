export const personalityData = {
  bigFive: {
    openness: 78,
    conscientiousness: 65,
    extraversion: 42,
    agreeableness: 71,
    neuroticism: 35,
  },
  summary: "You're a creative thinker with a rich inner world. You value deep connections over superficial interactions, and tend to be reflective and analytical. Your digital footprint reveals someone who seeks knowledge and authentic experiences.",
  traits: [
    { name: "Creative", score: 85, color: "cyan" },
    { name: "Analytical", score: 72, color: "purple" },
    { name: "Empathetic", score: 68, color: "pink" },
    { name: "Curious", score: 91, color: "blue" },
    { name: "Independent", score: 76, color: "cyan" },
  ],
};

export const moodData = {
  weekly: [
    { day: "Mon", mood: 72, energy: 65, stress: 30 },
    { day: "Tue", mood: 68, energy: 58, stress: 45 },
    { day: "Wed", mood: 75, energy: 70, stress: 35 },
    { day: "Thu", mood: 82, energy: 78, stress: 25 },
    { day: "Fri", mood: 88, energy: 85, stress: 20 },
    { day: "Sat", mood: 90, energy: 75, stress: 15 },
    { day: "Sun", mood: 78, energy: 60, stress: 28 },
  ],
  monthly: [
    { week: "Week 1", mood: 72, energy: 68 },
    { week: "Week 2", mood: 78, energy: 75 },
    { week: "Week 3", mood: 71, energy: 65 },
    { week: "Week 4", mood: 85, energy: 82 },
  ],
  sentimentHeatmap: [
    { day: "Mon", morning: 0.6, afternoon: 0.7, evening: 0.5 },
    { day: "Tue", morning: 0.5, afternoon: 0.6, evening: 0.7 },
    { day: "Wed", morning: 0.7, afternoon: 0.8, evening: 0.6 },
    { day: "Thu", morning: 0.8, afternoon: 0.7, evening: 0.8 },
    { day: "Fri", morning: 0.9, afternoon: 0.9, evening: 0.85 },
    { day: "Sat", morning: 0.85, afternoon: 0.9, evening: 0.8 },
    { day: "Sun", morning: 0.7, afternoon: 0.75, evening: 0.65 },
  ],
  timeline: [
    { time: "2 hours ago", event: "Listened to calm lo-fi beats", mood: "relaxed", icon: "music" },
    { time: "5 hours ago", event: "Watched tech review videos", mood: "curious", icon: "video" },
    { time: "Yesterday", event: "Binge-watched sci-fi series", mood: "immersed", icon: "tv" },
    { time: "2 days ago", event: "High email activity", mood: "productive", icon: "mail" },
  ],
};

export const interestsData = {
  topThemes: [
    { name: "Technology", score: 95, icon: "cpu" },
    { name: "Music", score: 88, icon: "music" },
    { name: "Science", score: 82, icon: "flask" },
    { name: "Design", score: 78, icon: "palette" },
    { name: "Gaming", score: 72, icon: "gamepad" },
  ],
  tagCloud: [
    { text: "AI", value: 95 },
    { text: "Synthwave", value: 85 },
    { text: "Space", value: 80 },
    { text: "Coding", value: 90 },
    { text: "Philosophy", value: 70 },
    { text: "Cyberpunk", value: 75 },
    { text: "Minimalism", value: 65 },
    { text: "Future Tech", value: 88 },
    { text: "Indie Music", value: 72 },
    { text: "Productivity", value: 68 },
    { text: "VR/AR", value: 77 },
    { text: "Startups", value: 60 },
  ],
  clusters: [
    { name: "Tech & Innovation", items: ["AI", "Coding", "Future Tech", "VR/AR"], size: 40 },
    { name: "Creative Arts", items: ["Design", "Music", "Synthwave"], size: 30 },
    { name: "Knowledge", items: ["Science", "Philosophy", "Space"], size: 25 },
    { name: "Lifestyle", items: ["Minimalism", "Productivity"], size: 20 },
  ],
  summary: "Your interests paint a picture of a forward-thinking creative technologist. You're drawn to the intersection of technology and art, with a particular fascination for emerging tech and electronic music.",
};

export const socialGraphData = {
  nodes: [
    { id: "you", label: "You", type: "self", size: 30 },
    { id: "alice", label: "Alice Chen", type: "friend", size: 20, interactions: 156 },
    { id: "bob", label: "Bob Smith", type: "friend", size: 18, interactions: 98 },
    { id: "carol", label: "Carol White", type: "friend", size: 15, interactions: 67 },
    { id: "spotify", label: "Spotify", type: "platform", size: 22 },
    { id: "youtube", label: "YouTube", type: "platform", size: 25 },
    { id: "mkbhd", label: "MKBHD", type: "channel", size: 16, interactions: 45 },
    { id: "veritasium", label: "Veritasium", type: "channel", size: 14, interactions: 38 },
    { id: "lofi", label: "Lofi Girl", type: "artist", size: 18, interactions: 120 },
  ],
  edges: [
    { from: "you", to: "alice", strength: 0.9 },
    { from: "you", to: "bob", strength: 0.7 },
    { from: "you", to: "carol", strength: 0.5 },
    { from: "you", to: "spotify", strength: 0.95 },
    { from: "you", to: "youtube", strength: 0.88 },
    { from: "youtube", to: "mkbhd", strength: 0.8 },
    { from: "youtube", to: "veritasium", strength: 0.7 },
    { from: "spotify", to: "lofi", strength: 0.9 },
    { from: "alice", to: "bob", strength: 0.4 },
  ],
  selectedNode: {
    id: "alice",
    name: "Alice Chen",
    type: "friend",
    interactions: 156,
    moodImpact: 0.85,
    sharedInterests: ["Technology", "Music", "Design"],
    lastInteraction: "2 hours ago",
  },
};

export const dashboardHighlights = {
  moodToday: { value: 82, label: "Energetic", trend: "+8%" },
  topCategory: { value: "Tech Videos", count: 23 },
  topArtist: { value: "Lofi Girl", plays: 47 },
  energyLevel: { value: 78, label: "High", trend: "+12%" },
  summary: "Your digital footprint shows you were more energetic this week, with a 15% increase in productivity-related content consumption. Your music choices shifted towards upbeat electronic, correlating with your improved mood scores.",
};

export const chatMessages: Array<{
  id: number;
  sender: 'ai' | 'user';
  message: string;
  timestamp: Date;
}> = [
  {
    id: 1,
    sender: 'ai',
    message: "Hey! I'm your Digital Doppelgänger. I've been analyzing your online presence and I think I've got a pretty good sense of who you are. Want to chat?",
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: 2,
    sender: 'user',
    message: "That's fascinating! What have you learned about me?",
    timestamp: new Date(Date.now() - 45000),
  },
  {
    id: 3,
    sender: 'ai',
    message: "Well, based on your Spotify listening habits and YouTube watch history, you seem to be a creative tech enthusiast who values depth over breadth. You prefer lo-fi beats when working and tend to dive deep into topics that interest you rather than skimming the surface.",
    timestamp: new Date(Date.now() - 30000),
  },
];

export const connectedAccounts = [
  { id: "google", name: "Google", icon: "mail", connected: true, lastSync: "2 min ago" },
  { id: "spotify", name: "Spotify", icon: "music", connected: true, lastSync: "5 min ago" },
  { id: "youtube", name: "YouTube", icon: "video", connected: false, lastSync: null },
  { id: "instagram", name: "Instagram", icon: "camera", connected: false, lastSync: null },
];
