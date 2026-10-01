"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import Logo from "@/components/ui/Logo";
import { nav, site } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // Close the sheet whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href) => (href.startsWith("/#") ? false : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="container-x pt-3 md:pt-4">
          <div
            className={`flex items-center justify-between gap-4 rounded-full border py-2 pl-4 pr-2 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out-expo ${
              scrolled || open
                ? "border-line bg-surface/80 shadow-[var(--shadow-inset),var(--shadow-diffuse)] backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            <Logo />

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1" onMouseLeave={() => setHovered(null)}>
                {nav.map((item) => (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      onMouseEnter={() => setHovered(item.href)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`relative z-10 block rounded-full px-4 py-2 text-[14px] transition-colors duration-300 ${
                        isActive(item.href) ? "text-fg" : "text-fg-muted hover:text-fg"
                      }`}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <span aria-hidden="true" className="absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent" />
                      )}
                    </Link>
                    {hovered === item.href && (
                      <motion.span
                        layoutId="nav-hover"
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-fg/[0.06]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="group hidden h-10 items-center gap-2 rounded-full bg-accent pl-4 pr-1 text-[14px] font-medium text-on-accent transition-[transform,background-color] duration-300 ease-out-expo hover:bg-accent-hover active:scale-[0.98] sm:inline-flex"
              >
                Free Consultation
                <span className="grid size-8 place-items-center rounded-full bg-on-accent/12 transition-transform duration-500 ease-out-expo group-hover:rotate-45">
                  <ArrowUpRight size={15} aria-hidden="true" />
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="grid size-10 place-items-center rounded-full border border-line-strong text-fg transition-transform active:scale-[0.96] lg:hidden"
              >
                {open ? <X size={18} /> : <List size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-40 flex flex-col bg-canvas/95 px-4 pb-8 pt-28 backdrop-blur-2xl sm:px-6 lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
              className="flex flex-col divide-y divide-line border-y border-line"
            >
              {[{ label: "Home", href: "/" }, ...nav].map((item, i) => (
                <motion.li
                  key={item.href}
                  variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4 text-[2rem] font-medium tracking-[-0.03em]"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-fg-subtle">0{i + 1}</span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.35 } }}
              className="mt-auto flex flex-col gap-5"
            >
              <div className="flex flex-col gap-1 text-sm text-fg-muted">
                <a href={`mailto:${site.email}`} className="hover:text-fg">{site.email}</a>
                <a href={site.phoneHref} className="hover:text-fg">{site.phone}</a>
              </div>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent text-base font-medium text-on-accent active:scale-[0.98]"
              >
                Get a Free Consultation
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
