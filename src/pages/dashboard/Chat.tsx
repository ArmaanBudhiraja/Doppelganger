import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/GlassPanel';
import { ChatBubble } from '@/components/ChatBubble';
import { chatMessages, personalityData } from '@/data/mockData';
import { Send, Bot, Sparkles, Brain, Mic, Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  sender: 'ai' | 'user';
  message: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(chatMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      message: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      const aiResponse: Message = {
        id: messages.length + 2,
        sender: 'ai',
        message: getAIResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 2000);
  };

  const getAIResponse = (input: string): string => {
    const responses = [
      "Based on my analysis of your digital patterns, I'd say that's very characteristic of you! Your curiosity really shines through.",
      "Interesting question! Looking at your online behavior, I notice you tend to approach things with a blend of creativity and analytical thinking.",
      "That resonates with what I've learned about you. Your digital footprint shows someone who values depth and authenticity.",
      "I've noticed from your data that you often explore topics like this late at night. Night owl tendencies, perhaps?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="h-[calc(100vh-8rem)] max-w-6xl mx-auto flex gap-6">
      {/* Chat Container */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 glass-panel flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 border-b border-border/50 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-display font-semibold">Your Digital Doppelgänger</h2>
            <div className="flex items-center gap-2 text-sm text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Online • Thinking like you</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col">
          {messages.map((msg) => (
            <ChatBubble
              key={msg.id}
              message={msg.message}
              sender={msg.sender}
              timestamp={msg.timestamp}
            />
          ))}
          {isTyping && (
            <ChatBubble message="" sender="ai" isTyping />
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border/50">
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask your digital twin anything..."
              className="flex-1 bg-muted/30 border-border/50"
            />
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <Mic className="w-5 h-5" />
            </Button>
            <Button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Sidebar - Personality Profile */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="w-80 space-y-4 hidden lg:block"
      >
        <GlassPanel variant="glow" className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold">Personality Profile</h3>
              <p className="text-xs text-muted-foreground">Powering this conversation</p>
            </div>
          </div>

          <div className="space-y-3">
            {personalityData.traits.slice(0, 4).map((trait, index) => (
              <div key={trait.name} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{trait.name}</span>
                  <span className="text-primary font-medium">{trait.score}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${trait.score}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel className="space-y-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-secondary" />
            <h3 className="font-semibold text-sm">Writing Style Markers</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Thoughtful', 'Curious', 'Analytical', 'Creative', 'Friendly'].map((marker) => (
              <span
                key={marker}
                className="px-3 py-1 rounded-full text-xs bg-secondary/10 text-secondary border border-secondary/30"
              >
                {marker}
              </span>
            ))}
          </div>
        </GlassPanel>

        <div className="p-4 rounded-xl bg-muted/20 border border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Your Doppelgänger learns from your digital footprint to communicate in your unique style.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Chat;
