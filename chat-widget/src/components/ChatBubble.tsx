import { motion } from 'framer-motion';
import type { ChatMessage } from '../hooks/useChat';

interface Props {
  message: ChatMessage;
}

export default function ChatBubble({ message }: Props) {
  const isUser = message.role === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`my-2 flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[70%] rounded-xl px-4 py-2 text-sm backdrop-blur-xs bg-white/10 text-white shadow-md ${
          isUser ? 'bg-gradient-to-br from-primary-gradient-start to-primary-gradient-end text-gray-900' : 'bg-white/5'
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  );
}
