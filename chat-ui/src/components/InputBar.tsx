import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface Props {
  onSend: (text: string) => void;
}

const InputBar: React.FC<Props> = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText('');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="sticky bottom-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg p-4 flex items-center space-x-2"
    >
      <input
        aria-label="Message input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full bg-transparent placeholder-gray-500 outline-none text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-start rounded-2xl px-3 py-2"
        placeholder="Type your message..."
      />
      <motion.button
        aria-label="Send message"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="bg-gradient-to-r from-accent-start to-accent-end rounded-full p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-start"
      >
        Send
      </motion.button>
    </motion.form>
  );
};

export default InputBar;
