"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-1.5 w-full origin-left bg-gradient-to-r from-[#D96A7B] via-[#E9A08C] to-[#D4A574]"
      style={{ scaleX }}
    />
  );
}
