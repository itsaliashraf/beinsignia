"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/** Ref + whether the loop should run (visible and motion allowed). */
export function useActive() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px 0px -8% 0px" });
  const reduced = useReducedMotion();
  return { ref, active: inView && !reduced, reduced };
}

/** Steps 0..count-1 on an interval while active; holds the final step when motion is reduced. */
export function useStep(active, count, ms, reduced = false) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduced) {
      setStep(count - 1);
      return;
    }
    if (!active) return;
    const id = setInterval(() => setStep((s) => (s + 1) % count), ms);
    return () => clearInterval(id);
  }, [active, count, ms, reduced]);
  return step;
}

export function VisualLabel({ children, className = "" }) {
  return (
    <span className={`font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-subtle ${className}`}>{children}</span>
  );
}

export function LiveDot({ className = "bg-accent" }) {
  return (
    <span className="relative flex size-2" aria-hidden="true">
      <span className={`absolute inset-0 animate-ping rounded-full opacity-60 ${className}`} />
      <span className={`relative size-2 rounded-full ${className}`} />
    </span>
  );
}
