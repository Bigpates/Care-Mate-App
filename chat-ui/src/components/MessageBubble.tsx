import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  text: string;
  sender: 'user' | 'bot';
}

const MessageBubble: React.FC<Props> = ({ text, sender }) => {
  const isUser = sender === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`my-2 flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2 text-sm shadow-card backdrop-blur-lg ${
          isUser
            ? 'bg-gradient-to-r from-primary-start to-primary-end text-white rounded-br-none'
            : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-none'
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
};

export default MessageBubble;
