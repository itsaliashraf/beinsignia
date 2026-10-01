import { services } from "@/lib/site";

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="size-[0.42em] shrink-0 text-accent" aria-hidden="true">
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z" fill="currentColor" />
    </svg>
  );
}

function Row({ hidden = false }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-[0.5em] pr-[0.5em]">
      {services.map((s, i) => (
        <li key={s.id} className="flex items-center gap-[0.5em] whitespace-nowrap">
          <span className={i % 2 ? "font-serif font-normal italic text-fg-muted" : "font-medium"}>{s.short}</span>
          <Star />
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <section aria-label="What we do" className="relative overflow-hidden border-y border-line py-7 md:py-9">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-canvas to-transparent" />
      <div className="flex w-max animate-marquee text-[clamp(2rem,1.2rem+3.4vw,4.25rem)] leading-none tracking-[-0.035em] hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
