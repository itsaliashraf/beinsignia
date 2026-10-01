"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { Accent, Eyebrow } from "@/components/ui/SectionHeader";
import { steps } from "@/lib/site";

export default function Process({ id = "process", showHeader = true }) {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 65%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length))));
  });

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative py-24 md:py-36">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-6 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <Eyebrow>How we work</Eyebrow>
              {showHeader && (
                <>
                  <h2 id={`${id}-title`} className="text-headline font-medium">
                    A clear process. A smarter way to <Accent>grow.</Accent>
                  </h2>
                  <p className="max-w-[48ch] text-base leading-relaxed text-fg-muted md:text-lg">
                    No guesswork, no unnecessary complexity. At Click &amp; Code, every project follows a clear, collaborative
                    process—from understanding your goals to launching, measuring, and improving your digital solution.
                  </p>
                </>
              )}
              {!showHeader && (
                <h2 id={`${id}-title`} className="text-headline font-medium">
                  Five steps from first call to <Accent>growth.</Accent>
                </h2>
              )}
            </motion.div>

            <div className="hidden items-end gap-4 pt-8 lg:flex" aria-hidden="true">
              <div className="relative h-[5.5rem] overflow-hidden text-[5.5rem] font-medium leading-none tracking-[-0.05em]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={active}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 24 }}
                    className="block"
                  >
                    {steps[active].step}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="flex flex-col gap-1 pb-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">of 05</span>
                <span className="font-serif text-2xl italic text-accent-ink">{steps[active].name}</span>
              </div>
            </div>
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-7">
          <span aria-hidden="true" className="absolute bottom-6 left-[11px] top-6 w-px bg-line-strong" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: progress }}
            className="absolute bottom-6 left-[11px] top-6 w-px origin-top bg-accent"
          />
          {steps.map((p, i) => {
            const on = i <= active;
            return (
              <li key={p.step} className="relative grid grid-cols-[24px_1fr] gap-6 py-8 md:gap-10 md:py-12">
                <span className="relative z-10 mt-1.5 grid size-6 place-items-center">
                  <span
                    className={`size-6 rounded-full border transition-colors duration-500 ${
                      on ? "border-accent bg-canvas" : "border-line-strong bg-canvas"
                    }`}
                  />
                  <span
                    className={`absolute size-2.5 rounded-full transition-[transform,background-color] duration-500 ease-out-expo ${
                      on ? "scale-100 bg-accent" : "scale-50 bg-fg-subtle"
                    }`}
                  />
                </span>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                  className="flex flex-col gap-3"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">
                    {p.step} — <span className={on ? "text-accent-ink" : ""}>{p.name}</span>
                  </span>
                  <h3 className="text-2xl font-medium tracking-[-0.025em] md:text-[2rem]">{p.title}</h3>
                  <p className="max-w-[54ch] text-[15.5px] leading-relaxed text-fg-muted md:text-base">{p.body}</p>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
