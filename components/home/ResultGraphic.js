"use client";

import { motion } from "framer-motion";

const draw = (delay = 0) => ({
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true, margin: "0px 0px -15% 0px" },
  transition: { pathLength: { duration: 1.6, ease: [0.16, 1, 0.3, 1], delay }, opacity: { duration: 0.2, delay } },
});

const pop = (delay = 0) => ({
  initial: { scale: 0, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true, margin: "0px 0px -15% 0px" },
  transition: { type: "spring", stiffness: 260, damping: 14, delay },
});

const line = { fill: "none", stroke: "currentColor", strokeWidth: 1.25, strokeLinecap: "round", strokeLinejoin: "round" };
const accent = { ...line, stroke: "var(--color-accent)", strokeWidth: 2 };

function Visibility() {
  const pts = [
    [10, 92],
    [52, 80],
    [94, 70],
    [136, 46],
    [178, 30],
    [218, 12],
  ];
  return (
    <>
      {[30, 60, 90].map((y) => (
        <line key={y} x1="0" x2="230" y1={y} y2={y} stroke="currentColor" strokeOpacity="0.12" strokeDasharray="2 5" />
      ))}
      <motion.path d={`M${pts.map((p) => p.join(" ")).join(" L")}`} {...accent} {...draw()} />
      {pts.map(([x, y], i) => (
        <motion.circle key={x} cx={x} cy={y} r={i === pts.length - 1 ? 4.5 : 2.5} fill="var(--color-accent)" {...pop(0.25 + i * 0.18)} />
      ))}
    </>
  );
}

function Leads() {
  const starts = [8, 26, 44, 62, 80, 98];
  return (
    <>
      {starts.map((y, i) => (
        <motion.path key={y} d={`M4 ${y} C 90 ${y}, 120 53, 196 53`} {...line} strokeOpacity="0.35" {...draw(i * 0.08)} />
      ))}
      <motion.path d="M150 53 L 222 53" {...accent} {...draw(0.6)} />
      <motion.circle cx="222" cy="53" r="5" fill="var(--color-accent)" {...pop(1.3)} />
    </>
  );
}

function Speed() {
  return (
    <>
      <path d="M30 96 A 85 85 0 0 1 200 96" {...line} strokeOpacity="0.15" strokeWidth="8" />
      <motion.path d="M30 96 A 85 85 0 0 1 200 96" {...accent} strokeWidth="8" {...draw()} />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const a = Math.PI - (i / 6) * Math.PI;
        return (
          <line
            key={i}
            x1={115 + Math.cos(a) * 66}
            y1={96 - Math.sin(a) * 66}
            x2={115 + Math.cos(a) * 58}
            y2={96 - Math.sin(a) * 58}
            stroke="currentColor"
            strokeOpacity="0.35"
          />
        );
      })}
      <motion.g
        style={{ originX: 0.5, originY: 1 }}
        initial={{ rotate: -80 }}
        whileInView={{ rotate: 62 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ type: "spring", stiffness: 40, damping: 9, delay: 0.3 }}
      >
        <line x1="115" y1="96" x2="115" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      <circle cx="115" cy="96" r="5" fill="currentColor" />
    </>
  );
}

function Scale() {
  const layer = (y) => `M115 ${y} L175 ${y + 18} L115 ${y + 36} L55 ${y + 18} Z`;
  return (
    <>
      {[60, 38, 16].map((y, i) => (
        <motion.path
          key={y}
          d={layer(y)}
          fill={i === 2 ? "var(--color-accent)" : "var(--color-canvas)"}
          fillOpacity={i === 2 ? 0.9 : 1}
          stroke={i === 2 ? "var(--color-accent)" : "currentColor"}
          strokeOpacity={i === 2 ? 1 : 0.4}
          strokeWidth="1.25"
          strokeLinejoin="round"
          initial={{ y: 26, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ type: "spring", stiffness: 140, damping: 16, delay: i * 0.2 }}
        />
      ))}
    </>
  );
}

const GRAPHICS = { seo: Visibility, ads: Leads, web: Speed, apps: Scale };

export default function ResultGraphic({ id }) {
  const G = GRAPHICS[id];
  return (
    <svg viewBox="0 0 230 106" className="h-28 w-full max-w-[260px] overflow-visible text-fg" aria-hidden="true">
      <G />
    </svg>
  );
}
