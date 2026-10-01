"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { ChatCircle, Heart, ShareFat } from "@phosphor-icons/react";
import { useActive } from "./shared";

const POSTS = [
  { cta: "Shop now", tone: "from-ember-500 via-ember-700 to-surface-3" },
  { cta: "Book now", tone: "from-ember-200 via-ember-400 to-ember-700" },
  { cta: "Learn more", tone: "from-surface-3 via-ember-600 to-ember-300" },
];

function Post({ post }) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-line bg-surface-2/80 p-2">
      <div className="flex items-center gap-1.5">
        <span className="size-4 rounded-full bg-fg/20" />
        <span className="flex flex-col gap-0.5">
          <span className="h-1.5 w-12 rounded-full bg-fg/25" />
          <span className="text-[8.5px] text-fg-subtle">Sponsored</span>
        </span>
      </div>
      <div className={`aspect-[4/3] rounded-lg bg-linear-to-br ${post.tone}`} />
      <div className="flex items-center justify-between">
        <span className="rounded-md bg-fg/90 px-1.5 py-0.5 text-[8.5px] font-semibold text-canvas">{post.cta}</span>
        <span className="flex gap-1.5 text-fg-muted">
          <Heart size={10} />
          <ChatCircle size={10} />
          <ShareFat size={10} />
        </span>
      </div>
    </div>
  );
}

function MetaAdsVisual() {
  const { ref, active } = useActive();
  const feed = [...POSTS, ...POSTS];

  return (
    <div ref={ref} className="grid h-full place-items-center p-5" aria-hidden="true">
      <div className="relative h-[262px] w-[148px] overflow-hidden rounded-[1.6rem] border border-line-strong bg-canvas p-1.5 shadow-[var(--shadow-diffuse)]">
        <div className="absolute left-1/2 top-2 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-fg/15" />
        <div className="h-full overflow-hidden rounded-[1.2rem] pt-4">
          <motion.div
            className="flex flex-col gap-2 px-1"
            animate={active ? { y: ["0%", "-50%"] } : undefined}
            transition={{ duration: 16, ease: "linear", repeat: Infinity }}
          >
            {feed.map((p, i) => (
              <Post key={i} post={p} />
            ))}
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-canvas to-transparent" />
      </div>
    </div>
  );
}

export default memo(MetaAdsVisual);
