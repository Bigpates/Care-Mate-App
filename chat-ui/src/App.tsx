import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ChatContainer from './components/ChatContainer';
import ScrollAnimationWrapper from './components/ScrollAnimationWrapper';
import bg from './assets/placeholder-background.jpg';

const App: React.FC = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) html.classList.add('dark');
    else html.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen flex flex-col transition-colors bg-white dark:bg-gray-900">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between p-4"
      >
        <h1 className="font-semibold text-xl">Care-Mate</h1>
        <button
          onClick={() => setDark(!dark)}
          className="focus:ring-2 focus:ring-primary-start rounded-full p-2"
          aria-label="Toggle dark mode"
        >
          💡
        </button>
      </motion.header>
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url(${bg})`, filter: 'blur(8px) brightness(0.8)' }}
        ></div>
        <ScrollAnimationWrapper>
          <div className="w-full max-w-md md:h-[600px] h-screen mx-auto p-6">
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-card h-full flex flex-col">
              <ChatContainer />
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
      <footer className="text-center text-sm p-4">© 2025 Care-Mate</footer>
    </div>
  );
};

export default App;
