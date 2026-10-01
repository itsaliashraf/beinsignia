"use client";

import { motion } from "framer-motion";

const spring = { type: "spring", stiffness: 100, damping: 20 };

export function Reveal({ children, delay = 0, y = 24, className = "", as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ ...spring, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}

const parent = {
  hidden: {},
  show: (gap = 0.08) => ({ transition: { staggerChildren: gap, delayChildren: 0.05 } }),
};

const child = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: spring },
};

export function Stagger({ children, gap = 0.08, className = "", as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      variants={parent}
      custom={gap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      className={className}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className = "", as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag variants={child} className={className}>
      {children}
    </Tag>
  );
}
