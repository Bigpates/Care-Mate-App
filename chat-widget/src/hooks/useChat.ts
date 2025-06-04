import { useRef, useState } from 'react';

export interface ChatMessage {
  id: number;
  role: 'user' | 'ai';
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const controllerRef = useRef<AbortController | null>(null);

  const sendMessage = async (text: string) => {
    const id = Date.now();
    setMessages((m) => [...m, { id, role: 'user', content: text }]);

    controllerRef.current?.abort();
    controllerRef.current = new AbortController();

    try {
      const resp = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'demo-user', message: text }),
        signal: controllerRef.current.signal
      });

      if (!resp.ok) throw new Error('Network error');
      const data = await resp.json();
      setMessages((m) => [...m, { id: id + 1, role: 'ai', content: data.reply }]);
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') return;
      setMessages((m) => [...m, { id: id + 1, role: 'ai', content: 'Error contacting AI' }]);
    }
  };

  return { messages, sendMessage };
}
