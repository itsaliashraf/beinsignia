"use client";

import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";
import { useActive, useStep, VisualLabel } from "./shared";

// Each line is a list of [className, text] tokens.
const CODE = [
  [["text-accent-ink", "const "], ["text-fg", "app"], ["text-fg-subtle", " = "], ["text-ember-200", "createApp"], ["text-fg-subtle", "({ name: "], ["text-success", "\"your-idea\""], ["text-fg-subtle", " })"]],
  [["text-fg", "app"], ["text-fg-subtle", "."], ["text-ember-200", "route"], ["text-fg-subtle", "("], ["text-success", "\"/orders\""], ["text-fg-subtle", ", listOrders)"]],
  [["text-fg", "app"], ["text-fg-subtle", "."], ["text-ember-200", "use"], ["text-fg-subtle", "(auth(), analytics())"]],
  [["text-accent-ink", "await "], ["text-fg", "app"], ["text-fg-subtle", "."], ["text-ember-200", "deploy"], ["text-fg-subtle", "({ scale: "], ["text-success", "\"auto\""], ["text-fg-subtle", " })"]],
];

const ORDERS = ["#1042 · Delivered", "#1043 · On the way", "#1044 · Preparing"];

function AppVisual() {
  const { ref, active, reduced } = useActive();
  const step = useStep(active, CODE.length + 3, 1100, reduced);
  const lines = Math.min(step + 1, CODE.length);
  const deployed = step >= CODE.length;

  return (
    <div ref={ref} className="grid h-full grid-cols-1 gap-4 p-5 sm:grid-cols-[1.35fr_1fr] sm:p-6" aria-hidden="true">
      <div className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-canvas">
        <div className="flex items-center justify-between border-b border-line px-3 py-2">
          <VisualLabel className="normal-case tracking-normal">app.js</VisualLabel>
          <span className={`font-mono text-[10px] ${deployed ? "text-success" : "text-fg-subtle"}`}>
            {deployed ? "build passed" : "editing"}
          </span>
        </div>
        <pre className="flex-1 overflow-hidden p-3 font-mono text-[11px] leading-[1.9]">
          {CODE.map((tokens, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: i < lines ? 1 : 0, x: i < lines ? 0 : -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="truncate"
            >
              <span className="mr-3 select-none text-fg-subtle/60">{i + 1}</span>
              {tokens.map(([c, t], k) => (
                <span key={k} className={c}>{t}</span>
              ))}
            </motion.div>
          ))}
        </pre>
      </div>

      <div className="hidden justify-center sm:flex">
        <div className="relative flex h-full max-h-[248px] w-[132px] flex-col gap-2 rounded-[1.4rem] border border-line-strong bg-canvas p-2.5">
          <div className="mx-auto h-1 w-8 rounded-full bg-fg/15" />
          <span className="px-1 text-[11px] font-medium">Orders</span>
          <div className="flex flex-col gap-1.5">
            <AnimatePresence>
              {ORDERS.slice(0, Math.max(0, step - 1)).map((o, i) => (
                <motion.div
                  key={o}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="flex items-center gap-1.5 rounded-lg bg-surface-2 p-1.5"
                >
                  <span className={`size-5 rounded-md ${i === 0 ? "bg-success/30" : "bg-accent/30"}`} />
                  <span className="truncate text-[9px] text-fg-muted">{o}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {deployed && (
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-auto inline-flex items-center justify-center gap-1 rounded-lg bg-success/15 py-1 text-[9.5px] text-success"
              >
                <CheckCircle size={11} weight="fill" />
                Live
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default memo(AppVisual);
