import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Bot, User } from 'lucide-react';

interface ChatBubbleProps {
  message: string;
  sender: 'ai' | 'user';
  timestamp?: Date;
  isTyping?: boolean;
}

export const ChatBubble = ({
  message,
  sender,
  timestamp,
  isTyping = false,
}: ChatBubbleProps) => {
  const isAI = sender === 'ai';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'flex gap-3 max-w-[85%]',
        isAI ? 'self-start' : 'self-end flex-row-reverse'
      )}
    >
      <div className={cn(
        'flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center',
        isAI 
          ? 'bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/30' 
          : 'bg-muted'
      )}>
        {isAI ? (
          <Bot className="w-5 h-5 text-primary" />
        ) : (
          <User className="w-5 h-5 text-muted-foreground" />
        )}
      </div>
      
      <div className={cn(
        'rounded-2xl px-4 py-3 backdrop-blur-xl',
        isAI 
          ? 'glass-panel-light rounded-tl-sm' 
          : 'bg-primary/20 border border-primary/30 rounded-tr-sm'
      )}>
        {isTyping ? (
          <div className="flex gap-1 py-1">
            <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        ) : (
          <>
            <p className="text-sm leading-relaxed">{message}</p>
            {timestamp && (
              <p className="text-xs text-muted-foreground mt-1">
                {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};
