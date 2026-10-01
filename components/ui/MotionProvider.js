"use client";

import { MotionConfig } from "framer-motion";

export default function MotionProvider({ children }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ type: "spring", stiffness: 100, damping: 20 }}>
      {children}
    </MotionConfig>
  );
}
