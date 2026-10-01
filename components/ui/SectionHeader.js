import { Reveal } from "@/components/ui/Reveal";

export function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`flex items-start gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-fg-muted ${className}`}
    >
      <span aria-hidden="true" className="mt-[0.6em] h-px w-6 shrink-0 bg-accent" />
      {children}
    </p>
  );
}

/** Serif italic accent word for headlines. */
export function Accent({ children }) {
  return <em className="font-serif font-normal italic tracking-[-0.01em] text-accent-ink">{children}</em>;
}

export default function SectionHeader({ eyebrow, title, body, className = "", titleClassName = "", as: H = "h2" }) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <H className={`text-headline font-medium ${titleClassName}`}>{title}</H>
      </Reveal>
      {body && (
        <Reveal delay={0.1}>
          <p className="max-w-[60ch] text-base leading-relaxed text-fg-muted md:text-lg">{body}</p>
        </Reveal>
      )}
    </div>
  );
}
