import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';
import useChatAPI from '../hooks/useChatAPI';

const ChatContainer: React.FC = () => {
  const { messages, sendMessage } = useChatAPI();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-full max-h-full">
      <header className="text-white text-lg font-semibold p-2 rounded-t-2xl bg-gradient-to-r from-primary-start to-primary-end shadow-card">
        Care-Mate Chat
      </header>
      <div ref={containerRef} className="messages flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((m) => (
          <MessageBubble key={m.id} text={m.text} sender={m.sender} />
        ))}
      </div>
      <InputBar onSend={sendMessage} />
    </div>
  );
};

export default ChatContainer;
