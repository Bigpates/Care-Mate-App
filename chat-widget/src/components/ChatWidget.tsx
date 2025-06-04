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
      className="flex flex-col h-full w-full bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-4 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div ref={containerRef} className="flex-1 overflow-y-auto pr-2">
        {messages.map((m) => (
          <ChatBubble key={m.id} message={m} />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-2 flex">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          className="flex-1 rounded-l-lg bg-white/80 text-gray-900 px-3 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-r-lg bg-gradient-to-br from-primary-gradient-start to-primary-gradient-end text-gray-900 px-4 py-2 font-medium hover:opacity-90"
        >
          Send
        </button>
      </form>
    </motion.div>
  );
}
