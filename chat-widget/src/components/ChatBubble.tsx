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
        className={`max-w-[70%] rounded-2xl px-4 py-2 text-sm backdrop-blur-xs shadow-md ${
          isUser
            ? 'bg-gradient-to-br from-user-gradient-start to-user-gradient-end text-white'
            : 'bg-gradient-to-br from-ai-gradient-start to-ai-gradient-end text-white'
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  );
}
