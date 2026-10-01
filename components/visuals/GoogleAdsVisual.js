"use client";

import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhoneCall } from "@phosphor-icons/react";
import { LiveDot, useActive, useStep, VisualLabel } from "./shared";

const KEYWORDS = ["ac repair lahore", "ac service near me", "split ac repair"];

function GoogleAdsVisual() {
  const { ref, active, reduced } = useActive();
  // 6 ticks of 1s: badge visible on ticks 2-4 (3 seconds), hidden otherwise.
  const tick = useStep(active, 6, 1000, reduced);
  const showBadge = !reduced && tick >= 2 && tick <= 4;

  return (
    <div ref={ref} className="relative flex h-full flex-col gap-4 p-5 sm:p-6" aria-hidden="true">
      <div className="flex items-center justify-between">
        <VisualLabel>Search campaign</VisualLabel>
        <span className="inline-flex items-center gap-2 text-[11.5px] text-fg-muted">
          <LiveDot className="bg-success" />
          Live
        </span>
      </div>

      <div className="flex flex-col gap-1.5 rounded-2xl border border-line bg-surface-2/70 p-4">
        <span className="text-[11.5px] text-fg-muted">
          <span className="font-semibold text-fg">Sponsored</span> · your-business.pk
        </span>
        <span className="text-[14.5px] font-medium leading-snug text-accent-ink">Same-day AC repair in Lahore. Book online.</span>
        <span className="text-[12.5px] leading-snug text-fg-muted">Certified technicians, upfront pricing, 7 days a week.</span>
      </div>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {KEYWORDS.map((k, i) => (
          <motion.span
            key={k}
            animate={{ opacity: tick % 3 === i ? 1 : 0.55 }}
            className="rounded-full border border-line px-2.5 py-1 font-mono text-[10.5px] text-fg-muted"
          >
            {k}
          </motion.span>
        ))}
      </div>

      <AnimatePresence>
        {showBadge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.18 } }}
            transition={{ type: "spring", stiffness: 340, damping: 13 }}
            className="glass absolute right-4 top-[46%] flex items-center gap-2.5 rounded-xl py-2 pl-2 pr-3"
          >
            <span className="grid size-7 place-items-center rounded-lg bg-success/20 text-success">
              <PhoneCall size={14} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[12px] font-medium">Conversion</span>
              <span className="text-[10.5px] text-fg-muted">Call from ad</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(GoogleAdsVisual);
