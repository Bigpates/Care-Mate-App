import { motion, useViewportScroll, useTransform } from 'framer-motion';
import React from 'react';

const ScrollAnimationWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  return <motion.div style={{ y }}>{children}</motion.div>;
};

export default ScrollAnimationWrapper;
