"use client";

import { memo } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { MagnifyingGlass, TrendUp } from "@phosphor-icons/react";
import { useActive, useStep, VisualLabel } from "./shared";

const ROWS = {
  you: { name: "Your website", you: true },
  a: { name: "Competitor A" },
  dir: { name: "Local directory" },
  b: { name: "Competitor B" },
};

// "Your website" climbs one position per tick, holds at #1, then resets.
const ORDERS = [
  ["a", "dir", "b", "you"],
  ["a", "dir", "you", "b"],
  ["a", "you", "dir", "b"],
  ["you", "a", "dir", "b"],
  ["you", "a", "dir", "b"],
];

function SeoVisual() {
  const { ref, active, reduced } = useActive();
  const step = useStep(active, ORDERS.length, 1900, reduced);
  const order = ORDERS[step];

  return (
    <div ref={ref} className="flex h-full flex-col gap-4 p-5 sm:p-6" aria-hidden="true">
      <div className="flex items-center justify-between">
        <VisualLabel>Position tracking</VisualLabel>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11.5px] text-fg-muted">
          <MagnifyingGlass size={12} />
          dentist in lahore
        </span>
      </div>

      <LayoutGroup>
        <ol className="flex flex-col gap-1.5">
          {order.map((id, idx) => {
            const row = ROWS[id];
            return (
              <motion.li
                layout
                key={id}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
                  row.you ? "border-accent/40 bg-accent-soft" : "border-line bg-surface-2/60"
                }`}
              >
                <span className={`w-6 font-mono text-[12px] ${row.you ? "text-accent-ink" : "text-fg-subtle"}`}>#{idx + 1}</span>
                <span className={`flex-1 text-[13.5px] ${row.you ? "font-medium text-fg" : "text-fg-muted"}`}>{row.name}</span>
                {row.you ? (
                  <TrendUp size={15} className="text-accent-ink" />
                ) : (
                  <span className="h-1.5 w-12 rounded-full bg-surface-3" />
                )}
              </motion.li>
            );
          })}
        </ol>
      </LayoutGroup>

      <svg viewBox="0 0 300 54" className="mt-auto h-12 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="seo-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 48 C40 46 60 44 90 40 S140 36 170 28 S230 20 260 10 L300 4 L300 54 L0 54Z" fill="url(#seo-fill)" />
        <motion.path
          d="M0 48 C40 46 60 44 90 40 S140 36 170 28 S230 20 260 10 L300 4"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.75"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: active || reduced ? 1 : 0 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </div>
  );
}

export default memo(SeoVisual);
