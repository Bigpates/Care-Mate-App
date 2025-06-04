import ChatWidget from './components/ChatWidget';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './index.css';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-gradient-start to-primary-gradient-end dark:from-dark-gradient-start dark:to-dark-gradient-end"
    >
      <button
        onClick={() => setDarkMode((d) => !d)}
        className="absolute top-4 right-4 px-3 py-1 rounded-md text-sm backdrop-blur-md bg-white/20 text-white hover:bg-white/30"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <motion.div style={{ y }} ref={ref} className="w-full max-w-md p-4">
        <ChatWidget />
      </motion.div>
    </div>
  );
}
