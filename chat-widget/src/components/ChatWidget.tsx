import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ChatBubble from './ChatBubble';
import { useChat } from '../hooks/useChat';

export default function ChatWidget() {
  const { messages, sendMessage } = useChat();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value.trim();
    if (!value) return;
    sendMessage(value);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <motion.div
      className="flex flex-col h-full w-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl ring-1 ring-white/10 p-6 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div ref={containerRef} className="flex-1 overflow-y-auto pr-2">
        {messages.map((m) => (
          <ChatBubble key={m.id} message={m} />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-3 flex">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          className="flex-1 rounded-l-lg bg-white/70 dark:bg-gray-700/40 text-gray-900 dark:text-white px-3 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-r-lg bg-gradient-to-br from-primary-gradient-start to-primary-gradient-end text-white px-5 py-2 font-semibold hover:opacity-90"
        >
          Send
        </button>
      </form>
    </motion.div>
  );
}
