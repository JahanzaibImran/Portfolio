"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-accent via-accent-purple to-accent-cyan"
      style={{ scaleX }}
    />
  );
}

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      onAnimationComplete={() => setDone(true)}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="mx-auto mb-4 h-8 w-8 rounded-full border-2 border-accent/30 border-t-accent"
        />
        <p className="text-sm text-muted">Loading portfolio...</p>
      </div>
    </motion.div>
  );
}
