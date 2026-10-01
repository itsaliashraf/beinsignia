import Link from "next/link";
import { Check, Phone } from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Accent, Eyebrow } from "@/components/ui/SectionHeader";
import { plans, site } from "@/lib/site";

function PlanCard({ plan }) {
  const featured = plan.featured;
  return (
    <article
      className={`relative flex h-full flex-col gap-8 overflow-hidden rounded-card border p-7 sm:p-9 ${
        featured
          ? "theme-ink border-accent/35 bg-canvas shadow-[var(--shadow-inset),0_50px_90px_-40px_rgb(60_30_15/0.55)] lg:-translate-y-6"
          : "border-line bg-surface shadow-[var(--shadow-inset),var(--shadow-diffuse)]"
      }`}
    >
      {featured && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 size-[420px] -translate-x-1/2 rounded-full"
          style={{ background: "radial-gradient(closest-side, rgb(230 108 55 / 0.28), transparent)" }}
        />
      )}

      <header className="relative flex flex-col gap-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-medium tracking-[-0.02em]">{plan.name}</h3>
          {featured && (
            <span className="rounded-full bg-accent px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-on-accent">
              Most popular
            </span>
          )}
        </div>
        <p className="flex items-start gap-1">
          <span className="pt-2 text-xl text-fg-muted">$</span>
          <span className="text-[4.25rem] font-medium leading-none tracking-[-0.05em] tabular-nums">{plan.price}</span>
          <span className="self-end pb-2 pl-1 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-muted">
            .00 / {plan.period}
          </span>
        </p>
        <p className="max-w-[34ch] text-[15px] leading-relaxed text-fg-muted">{plan.summary}</p>
      </header>

      <ul className="relative flex flex-col gap-3 border-t border-line pt-7">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[15px]">
            <span
              className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                featured ? "bg-accent text-on-accent" : "bg-fg/[0.07] text-fg"
              }`}
            >
              <Check size={11} weight="bold" aria-hidden="true" />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex flex-col gap-3 pt-2">
        <Button
          href={site.phoneHref}
          variant={featured ? "primary" : "ghost"}
          icon={Phone}
          full
          aria-label={`Call now about the ${plan.name}`}
        >
          Call Now
        </Button>
        <Link href="/contact" className="text-center text-[13.5px] text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline">
          or send us a message
        </Link>
      </div>
    </article>
  );
}

export default function PricingPlans({ id = "pricing", headingLevel = "h2", bone = true }) {
  const H = headingLevel;
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative py-24 md:py-36 ${bone ? "theme-bone" : ""}`}>
      <div className="container-x">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <Reveal>
              <Eyebrow>GBP pricing · Local SEO</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <H id={`${id}-title`} className="text-headline font-medium">
                Google Business Profile plans that put you on the <Accent>map.</Accent>
              </H>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-fg-muted md:text-lg">
              Monthly profile management that helps local customers find you on Google Search and Maps, trust what they see,
              and get in touch.
            </p>
          </Reveal>
        </div>

        <Stagger
          gap={0.12}
          className="mt-16 grid grid-cols-1 items-start gap-5 md:mt-24 lg:grid-cols-[1fr_1.1fr_1fr] lg:items-stretch"
        >
          {plans.map((p) => (
            <StaggerItem key={p.id} className="h-full">
              <PlanCard plan={p} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-[15px] text-fg-muted">
            Looking for SEO, ads, a website or an app? Get a free consultation and a custom quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 border-b border-line-strong pb-1 text-[15px] font-medium transition-colors hover:border-accent"
          >
            Request a quote
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
