import Link from "next/link";

export function LogoMark({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="var(--color-ember-500)" />
      <path
        d="M11.4 10 6.6 16l4.8 6"
        fill="none"
        stroke="var(--color-charcoal)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4 8.6 25.8 18.2l-4.7.95 2.65 5.3-2.4 1.15-2.65-5.3-3.3 3.2z"
        fill="var(--color-charcoal)"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }) {
  return (
    <span className={`text-[17px] font-semibold tracking-[-0.02em] ${className}`}>
      Click<span className="mx-[0.12em] font-serif text-[1.18em] font-normal italic text-accent-ink">&amp;</span>Code
    </span>
  );
}

export default function Logo({ className = "" }) {
  return (
    <Link href="/" aria-label="Click & Code home" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="size-8 transition-transform duration-500 ease-out-expo group-hover:-rotate-6" />
      <Wordmark />
    </Link>
  );
}
