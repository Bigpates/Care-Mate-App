import ChatWidget from './components/ChatWidget';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './index.css';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-gradient-start to-primary-gradient-end">
      <motion.div style={{ y }} ref={ref} className="w-full max-w-md p-4">
        <ChatWidget />
      </motion.div>
    </div>
  );
}
