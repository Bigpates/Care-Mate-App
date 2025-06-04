import { useState } from 'react';
import axios from '../axiosConfig';

export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

export default function useChatAPI() {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (text: string) => {
    const userMsg: Message = { id: Date.now(), text, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const { data } = await axios.post('/chat', {
        userId: 'demo-user',
        message: text,
      });
      const botMsg: Message = { id: Date.now() + 1, text: data.reply, sender: 'bot' };
      setMessages((prev) => [...prev, botMsg]);
    } catch (e) {
      const errMsg: Message = { id: Date.now() + 1, text: 'Error contacting AI', sender: 'bot' };
      setMessages((prev) => [...prev, errMsg]);
    }
  };

  return { messages, sendMessage };
}
