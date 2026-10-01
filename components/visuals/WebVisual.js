"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Check, LockSimple } from "@phosphor-icons/react";
import { useActive, useStep } from "./shared";

const VITALS = ["LCP", "INP", "CLS"];

function Block({ on, className, children }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-[inherit] border border-dashed border-line-strong" />
      <motion.div
        initial={false}
        animate={{ opacity: on ? 1 : 0, y: on ? 0 : 8, scale: on ? 1 : 0.98 }}
        transition={{ type: "spring", stiffness: 160, damping: 20 }}
        className="relative h-full rounded-[inherit]"
      >
        {children}
      </motion.div>
    </div>
  );
}

function WebVisual() {
  const { ref, active, reduced } = useActive();
  const step = useStep(active, 8, 900, reduced);
  const s = Math.min(step, 6);

  return (
    <div ref={ref} className="flex h-full flex-col p-5 sm:p-6" aria-hidden="true">
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-line bg-canvas">
        <div className="flex items-center gap-2 border-b border-line px-3 py-2">
          <span className="flex gap-1">
            <span className="size-2 rounded-full bg-fg/15" />
            <span className="size-2 rounded-full bg-fg/15" />
          </span>
          <span className="mx-auto inline-flex items-center gap-1 rounded-md bg-surface-2 px-2.5 py-0.5 font-mono text-[10px] text-fg-muted">
            <LockSimple size={9} />
            your-new-site.com
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-2.5 p-3">
          <Block on={s >= 1} className="h-5 rounded-md">
            <div className="flex h-full items-center justify-between rounded-md bg-surface-2 px-2">
              <span className="h-1.5 w-10 rounded-full bg-fg/40" />
              <span className="flex gap-1.5">
                <span className="h-1.5 w-5 rounded-full bg-fg/20" />
                <span className="h-1.5 w-5 rounded-full bg-fg/20" />
                <span className="h-1.5 w-7 rounded-full bg-accent" />
              </span>
            </div>
          </Block>
          <div className="grid flex-1 grid-cols-[1.2fr_1fr] gap-2.5">
            <Block on={s >= 2} className="rounded-lg">
              <div className="flex h-full flex-col justify-center gap-1.5 rounded-lg bg-surface-2 p-2.5">
                <span className="h-2.5 w-11/12 rounded-full bg-fg/70" />
                <span className="h-2.5 w-3/4 rounded-full bg-fg/70" />
                <span className="mt-1 h-1.5 w-full rounded-full bg-fg/20" />
                <span className="h-1.5 w-4/5 rounded-full bg-fg/20" />
                <span className="mt-1.5 h-4 w-14 rounded-full bg-accent" />
              </div>
            </Block>
            <Block on={s >= 3} className="rounded-lg">
              <div className="h-full rounded-lg bg-linear-to-br from-ember-400 via-ember-600 to-surface-3" />
            </Block>
          </div>
          <div className="grid h-10 grid-cols-3 gap-2.5">
            {[4, 4, 5].map((n, i) => (
              <Block key={i} on={s >= n} className="rounded-md">
                <div className="h-full rounded-md bg-surface-2" />
              </Block>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-subtle">Core Web Vitals</span>
        <span className="flex gap-1.5">
          {VITALS.map((v) => (
            <span
              key={v}
              className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] transition-colors duration-500 ${
                s >= 6 ? "border-success/40 text-success" : "border-line text-fg-subtle"
              }`}
            >
              {s >= 6 && <Check size={9} weight="bold" />}
              {v}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export default memo(WebVisual);
