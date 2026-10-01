"use client";

import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Image as ImageIcon, LinkSimple, TextAa, TextB, TextItalic, Paragraph, CursorClick } from "@phosphor-icons/react";
import { useActive, useStep, VisualLabel } from "./shared";

const BLOCKS = [
  { id: "h", label: "Heading", icon: TextAa, bar: "w-3/4 h-2.5 bg-fg/70" },
  { id: "p", label: "Paragraph", icon: Paragraph, bar: "w-full h-1.5 bg-fg/25" },
  { id: "img", label: "Image", icon: ImageIcon, bar: "w-2/3 h-1.5 bg-fg/25" },
  { id: "btn", label: "Button", icon: CursorClick, bar: "w-16 h-3.5 bg-accent rounded-md" },
];

function WordPressVisual() {
  const { ref, active, reduced } = useActive();
  const step = useStep(active, BLOCKS.length + 2, 1300, reduced);
  const focus = Math.min(step, BLOCKS.length - 1);
  const published = step === BLOCKS.length + 1;

  return (
    <div ref={ref} className="flex h-full flex-col gap-3 p-5 sm:p-6" aria-hidden="true">
      <div className="flex items-center justify-between">
        <VisualLabel>Block editor</VisualLabel>
        <motion.span
          animate={{ scale: published ? [1, 1.08, 1] : 1 }}
          transition={{ duration: 0.4 }}
          className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors duration-300 ${
            published ? "bg-success/20 text-success" : "bg-fg text-canvas"
          }`}
        >
          {published ? "Published" : "Publish"}
        </motion.span>
      </div>

      <ul className="flex flex-1 flex-col gap-1.5">
        {BLOCKS.map((b, i) => {
          const Icon = b.icon;
          const isFocus = i === focus && !published;
          return (
            <li key={b.id} className="relative flex items-center gap-3 rounded-xl px-3 py-2.5">
              {isFocus && (
                <motion.span
                  layoutId="wp-focus"
                  className="absolute inset-0 rounded-xl border border-accent/50 bg-accent-soft"
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                />
              )}
              <Icon size={15} className={`relative ${isFocus ? "text-accent-ink" : "text-fg-subtle"}`} />
              <span className="relative w-16 text-[11.5px] text-fg-muted">{b.label}</span>
              <span className={`relative rounded-full ${b.bar}`} />

              <AnimatePresence>
                {isFocus && (
                  <motion.span
                    initial={{ opacity: 0, y: 6, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, transition: { duration: 0.12 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.25 }}
                    className="glass absolute -top-4 right-2 z-10 flex items-center gap-0.5 rounded-lg p-0.5"
                  >
                    {[TextB, TextItalic, LinkSimple].map((T, k) => (
                      <span key={k} className="grid size-6 place-items-center rounded-md text-fg-muted first:bg-fg/10 first:text-fg">
                        <T size={12} />
                      </span>
                    ))}
                  </motion.span>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(WordPressVisual);
