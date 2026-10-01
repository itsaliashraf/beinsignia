"use client";

import { memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Sparkle } from "@phosphor-icons/react";
import { LogoMark } from "@/components/ui/Logo";
import { useActive, VisualLabel } from "./shared";

const PROMPTS = [
  "How do I show up in AI search results?",
  "Who builds SEO-friendly WordPress sites?",
  "Best way to get cited by AI assistants?",
];

function AeoVisual() {
  const { ref, active, reduced } = useActive();
  const [s, setS] = useState({ i: 0, typed: "", phase: "typing" });

  useEffect(() => {
    if (reduced) {
      setS({ i: 0, typed: PROMPTS[0], phase: "answer" });
      return;
    }
    if (!active) return;
    const prompt = PROMPTS[s.i];
    let t;
    if (s.phase === "typing") {
      t =
        s.typed.length < prompt.length
          ? setTimeout(() => setS((p) => ({ ...p, typed: prompt.slice(0, p.typed.length + 1) })), 42)
          : setTimeout(() => setS((p) => ({ ...p, phase: "processing" })), 300);
    } else if (s.phase === "processing") {
      t = setTimeout(() => setS((p) => ({ ...p, phase: "answer" })), 1300);
    } else {
      t = setTimeout(() => setS((p) => ({ i: (p.i + 1) % PROMPTS.length, typed: "", phase: "typing" })), 3600);
    }
    return () => clearTimeout(t);
  }, [active, reduced, s]);

  return (
    <div ref={ref} className="flex h-full flex-col gap-4 p-5 sm:p-6" aria-hidden="true">
      <div className="flex items-center justify-between">
        <VisualLabel>Answer engine</VisualLabel>
        <Sparkle size={15} weight="fill" className="text-accent" />
      </div>

      <div className="flex items-center gap-2 rounded-2xl border border-line-strong bg-surface-2/80 py-2 pl-4 pr-2">
        <span className="min-h-5 flex-1 truncate text-[13.5px]">
          {s.typed}
          {s.phase === "typing" && <span className="ml-px inline-block h-3.5 w-[1.5px] translate-y-[2px] animate-pulse bg-accent" />}
        </span>
        <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-fg text-canvas">
          <ArrowUp size={14} weight="bold" />
        </span>
      </div>

      <div className="relative flex-1">
        <AnimatePresence mode="wait" initial={false}>
          {s.phase === "processing" && (
            <motion.div key="p" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-2 pt-1">
              <div className="shimmer h-2.5 w-11/12 rounded-full" />
              <div className="shimmer h-2.5 w-4/5 rounded-full" />
              <div className="shimmer h-2.5 w-3/5 rounded-full" />
            </motion.div>
          )}
          {s.phase === "answer" && (
            <motion.div
              key={`a-${s.i}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="flex flex-col gap-3"
            >
              <p className="text-[13.5px] leading-relaxed text-fg-muted">
                Structure your content so assistants can quote it: clear answers, schema, and expert pages.{" "}
                <span className="rounded bg-accent-soft px-1 text-fg">Click &amp; Code</span> builds this with SEO, AEO and GEO.
              </p>
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.35 }}
                className="inline-flex w-fit items-center gap-1.5 rounded-full border border-line-strong py-1 pl-1 pr-2.5 text-[11.5px]"
              >
                <LogoMark className="size-4" />
                Cited source
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default memo(AeoVisual);
