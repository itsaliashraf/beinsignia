"use client";

import { memo, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Check, CursorClick, MagnifyingGlass, Sparkle, TerminalWindow } from "@phosphor-icons/react";
import { LogoMark } from "@/components/ui/Logo";

const SCENES = [
  {
    channel: "search",
    query: "seo agency in lahore",
    crumb: "services › seo",
    title: "SEO that keeps paying back",
    desc: "Technical SEO, content and local search built around qualified organic traffic.",
  },
  {
    channel: "ai",
    query: "who can get my brand into ai answers?",
    answer: [
      "Click & Code combines SEO, AEO and GEO so",
      "your brand is the cited answer when customers",
      "ask search engines and AI assistants.",
    ],
  },
  {
    channel: "ads",
    query: "google ads expert for my clinic",
    crumb: "google-ads",
    title: "Google Ads built around conversions",
    desc: "Reach patients already searching for your services, and track every enquiry.",
  },
  {
    channel: "search",
    query: "custom app developer for startups",
    crumb: "services › custom-apps",
    title: "Turn your app idea into a product",
    desc: "Custom development focused on usability, performance and scalability.",
  },
  {
    channel: "ads",
    query: "fast wordpress site for my business",
    crumb: "wordpress",
    title: "WordPress sites that are easy to run",
    desc: "Professional, flexible and optimized for search from day one.",
  },
];

const CHANNELS = [
  { id: "search", label: "Search" },
  { id: "ai", label: "AI" },
  { id: "ads", label: "Ads" },
];

function useConsoleLoop(active, reduced) {
  const [state, setState] = useState({ i: 0, typed: "", phase: "typing" });

  useEffect(() => {
    if (reduced) {
      setState({ i: 0, typed: SCENES[0].query, phase: "result" });
      return;
    }
    if (!active) return;
    const scene = SCENES[state.i];
    let t;
    if (state.phase === "typing") {
      if (state.typed.length < scene.query.length) {
        t = setTimeout(
          () => setState((s) => ({ ...s, typed: scene.query.slice(0, s.typed.length + 1) })),
          34 + Math.random() * 46,
        );
      } else {
        t = setTimeout(() => setState((s) => ({ ...s, phase: "thinking" })), 380);
      }
    } else if (state.phase === "thinking") {
      t = setTimeout(() => setState((s) => ({ ...s, phase: "result" })), 1150);
    } else {
      t = setTimeout(() => setState((s) => ({ i: (s.i + 1) % SCENES.length, typed: "", phase: "typing" })), 4200);
    }
    return () => clearTimeout(t);
  }, [active, reduced, state]);

  return state;
}

function SearchResult({ scene }) {
  const sponsored = scene.channel === "ads";
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-line bg-surface-2/70 p-4">
      <div className="flex items-center gap-2.5">
        <LogoMark className="size-6" />
        <div className="flex flex-col leading-tight">
          <span className="text-[13px] font-medium">
            {sponsored && <span className="mr-1.5 font-semibold">Sponsored ·</span>}
            Click &amp; Code
          </span>
          <span className="font-mono text-[10.5px] text-fg-subtle">click&amp;code › {scene.crumb}</span>
        </div>
      </div>
      <p className="text-[15px] font-medium text-accent-ink">{scene.title}</p>
      <p className="text-[13px] leading-snug text-fg-muted">{scene.desc}</p>
    </div>
  );
}

function AiAnswer({ scene }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface-2/70 p-4">
      <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-muted">
        <Sparkle size={13} weight="fill" className="text-accent" aria-hidden="true" />
        AI answer
      </span>
      <div className="flex flex-col gap-0.5 text-[13.5px] leading-snug text-fg">
        {scene.answer.map((line, k) => (
          <motion.span
            key={line}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.12 * k }}
          >
            {line}
          </motion.span>
        ))}
      </div>
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.5 }}
        className="inline-flex w-fit items-center gap-1.5 rounded-full border border-line-strong bg-canvas/60 py-1 pl-1 pr-2.5 text-[11.5px]"
      >
        <LogoMark className="size-4" />
        Source · Click &amp; Code
      </motion.span>
    </div>
  );
}

function Thinking() {
  return (
    <div className="flex flex-col gap-2.5 rounded-2xl border border-line bg-surface-2/50 p-4" aria-hidden="true">
      <div className="shimmer h-3 w-1/3 rounded-full" />
      <div className="shimmer h-3 w-11/12 rounded-full" />
      <div className="shimmer h-3 w-4/5 rounded-full" />
      <div className="shimmer h-3 w-2/3 rounded-full" />
    </div>
  );
}

const LeadToast = memo(function LeadToast({ active }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!active) return;
    let t = setTimeout(function tick() {
      setShow((v) => !v);
      t = setTimeout(tick, 3000);
    }, 1800);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: -8, transition: { duration: 0.2 } }}
          transition={{ type: "spring", stiffness: 320, damping: 14 }}
          className="glass absolute -left-14 top-28 hidden items-center gap-3 rounded-2xl py-2.5 pl-2.5 pr-4 xl:flex"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-accent text-on-accent">
            <CursorClick size={18} aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[13px] font-medium">New enquiry</span>
            <span className="text-[11.5px] text-fg-muted">Contact form · just now</span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

const DEPLOY = ["git push origin main", "running build", "deployed to production"];

const DeployChip = memo(function DeployChip({ active }) {
  const [k, setK] = useState(0);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setK((v) => (v + 1) % DEPLOY.length), 2200);
    return () => clearInterval(id);
  }, [active]);
  const done = k === DEPLOY.length - 1;

  return (
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="glass absolute -bottom-7 -right-5 hidden -rotate-2 items-center gap-2.5 rounded-xl px-3.5 py-2.5 font-mono text-[11.5px] lg:flex"
    >
      <TerminalWindow size={15} className="text-fg-subtle" aria-hidden="true" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={k}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6, transition: { duration: 0.15 } }}
          className={done ? "text-success" : "text-fg-muted"}
        >
          {done && <Check size={12} weight="bold" className="mr-1 inline" aria-hidden="true" />}
          {DEPLOY[k]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
});

export default function HeroConsole() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const reduced = useReducedMotion();
  const { i, typed, phase } = useConsoleLoop(inView, reduced);
  const scene = SCENES[i];

  return (
    <div ref={ref} className="relative">
      <motion.div
        animate={reduced ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="glass relative rounded-card p-2 shadow-[var(--shadow-inset),var(--shadow-lift)]"
        role="img"
        aria-label="Illustration: a search console showing Click & Code appearing in search results, AI answers and ads"
      >
        <div className="rounded-[1.4rem] border border-line bg-canvas/70 p-4 sm:p-5">
          {/* Header */}
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 whitespace-nowrap font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-muted">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
                <span className="relative size-2 rounded-full bg-accent" />
              </span>
              Discovery console
            </span>
            <div className="flex gap-0.5 rounded-full border border-line bg-surface/70 p-0.5">
              {CHANNELS.map((c) => (
                <span key={c.id} className="relative whitespace-nowrap px-2.5 py-1 text-[11px]">
                  {scene.channel === c.id && (
                    <motion.span
                      layoutId="console-channel"
                      className="absolute inset-0 rounded-full bg-fg/[0.09]"
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    />
                  )}
                  <span className={`relative ${scene.channel === c.id ? "text-fg" : "text-fg-subtle"}`}>{c.label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Query */}
          <div className="mt-4 flex h-12 items-center gap-3 rounded-full border border-line-strong bg-surface-2/80 px-4">
            <MagnifyingGlass size={17} className="shrink-0 text-fg-muted" aria-hidden="true" />
            <span className="truncate text-[14.5px]">
              {typed}
              <span className="ml-px inline-block h-4 w-[1.5px] translate-y-[3px] animate-pulse bg-accent" />
            </span>
          </div>

          {/* Results */}
          <div className="mt-3 h-[208px]">
            <AnimatePresence mode="wait" initial={false}>
              {phase === "thinking" && (
                <motion.div key="thinking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Thinking />
                </motion.div>
              )}
              {phase === "result" && (
                <motion.div
                  key={`r-${i}`}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}
                  transition={{ type: "spring", stiffness: 140, damping: 20 }}
                  className="flex flex-col gap-2.5"
                >
                  {scene.channel === "ai" ? <AiAnswer scene={scene} /> : <SearchResult scene={scene} />}
                  <div className="flex flex-col gap-2 px-4 opacity-50" aria-hidden="true">
                    <div className="h-2.5 w-2/5 rounded-full bg-surface-3" />
                    <div className="h-2.5 w-4/5 rounded-full bg-surface-3" />
                  </div>
                </motion.div>
              )}
              {phase === "typing" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full flex-col justify-center gap-2 px-1 font-mono text-[11px] text-fg-subtle"
                >
                  <span>Listening for customer intent</span>
                  <span className="flex gap-1" aria-hidden="true">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="size-1.5 animate-breathe rounded-full bg-fg-subtle"
                        style={{ animationDelay: `${d * 0.2}s` }}
                      />
                    ))}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Signal footer */}
          <div className="mt-3 grid grid-cols-3 gap-2 border-t border-line pt-4">
            {["Visibility", "Leads", "Conversions"].map((label, k) => (
              <div key={label} className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-subtle">{label}</span>
                <div className="flex h-7 items-end gap-[3px]" aria-hidden="true">
                  {Array.from({ length: 9 }).map((_, b) => (
                    <span
                      key={b}
                      className={`w-full origin-bottom animate-bar rounded-[2px] ${b > 5 ? "bg-accent" : "bg-fg/20"}`}
                      style={{ height: `${30 + b * 8}%`, animationDelay: `${(b + k * 3) * 0.13}s` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <LeadToast active={inView && !reduced} />
      <DeployChip active={inView && !reduced} />
    </div>
  );
}
