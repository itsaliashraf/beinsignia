import Link from "next/link";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Accent, Eyebrow } from "@/components/ui/SectionHeader";
import Process from "@/components/home/Process";
import FinalCta from "@/components/home/FinalCta";
import { serviceVisuals } from "@/components/visuals";
import { services } from "@/lib/site";

export const metadata = {
  title: "Services — SEO, AEO & GEO, Google Ads, Meta Ads, Websites & Apps",
  description:
    "SEO services, AEO & GEO, Google Ads, Meta Ads, custom website development, WordPress development and custom app development from Click & Code in Lahore.",
  alternates: { canonical: "/services" },
};

const GROUPS = {
  seo: "Search & AI discovery",
  "aeo-geo": "Search & AI discovery",
  "google-ads": "Performance advertising",
  "meta-ads": "Performance advertising",
  "custom-websites": "Websites & products",
  wordpress: "Websites & products",
  "custom-apps": "Websites & products",
};

const STARTS = [
  { who: "Startups", mix: ["Custom Websites", "SEO Services", "Google Ads"] },
  { who: "Small & Medium Businesses", mix: ["GBP Plans", "SEO Services", "Meta Ads"] },
  { who: "Growing Brands", mix: ["AEO & GEO", "Google Ads", "Meta Ads"] },
  { who: "Entrepreneurs", mix: ["WordPress Development", "Custom Apps"] },
];

function ServiceRow({ s, i }) {
  const Visual = serviceVisuals[s.id];
  const flip = i % 2 === 1;
  return (
    <section
      id={s.id}
      aria-labelledby={`${s.id}-title`}
      className="scroll-mt-24 border-t border-line py-20 first:border-t-0 md:py-28"
    >
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className={`lg:col-span-6 ${flip ? "lg:order-last lg:col-start-7" : ""}`}>
          <div className="relative h-[320px] overflow-hidden rounded-card border border-line bg-surface shadow-[var(--shadow-inset),var(--shadow-lift)] md:h-[380px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgb(230 108 55 / 0.12), transparent)" }}
            />
            <Visual />
          </div>
        </Reveal>

        <div className={`flex flex-col gap-7 lg:col-span-5 ${flip ? "lg:col-start-1" : "lg:col-start-8"}`}>
          <Reveal className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">
            <span className="text-accent-ink">0{i + 1}</span>
            <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
            {GROUPS[s.id]}
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id={`${s.id}-title`} className="text-[clamp(1.9rem,1.4rem+1.8vw,2.9rem)] font-medium leading-[1.05] tracking-[-0.03em]">
              {s.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-fg-muted md:text-[17px]">{s.body}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">What&apos;s included</h3>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {s.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px]">
                  <Check size={15} weight="bold" className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.14} className="flex flex-col gap-5 border-t border-line pt-6">
            <p className="text-[15px] leading-relaxed text-fg-muted">
              <span className="text-fg">Ideal for: </span>
              {s.idealFor}
            </p>
            <Link
              href={`/contact?service=${s.id}`}
              className="group inline-flex w-fit items-center gap-2 border-b border-line-strong pb-1 text-[15px] font-medium transition-colors hover:border-accent"
            >
              Discuss {s.short}
              <ArrowRight size={16} className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Seven services. One team accountable for your <Accent>growth.</Accent>
          </>
        }
        lead="One team for your digital growth—from increasing search visibility and generating leads to building websites and custom applications that support your long-term goals."
      >
        <nav aria-label="Jump to a service">
          <ul className="flex flex-wrap gap-2 pt-2">
            {services.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-2 text-[13.5px] text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
                >
                  <span className="font-mono text-[10.5px] text-fg-subtle group-hover:text-accent-ink">0{i + 1}</span>
                  {s.short}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div>
        {services.map((s, i) => (
          <ServiceRow key={s.id} s={s} i={i} />
        ))}
      </div>

      <section aria-labelledby="starts-title" className="theme-bone py-24 md:py-36">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal>
              <Eyebrow>Not sure where to start?</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="starts-title" className="text-headline font-medium">
                The right mix depends on where you <Accent>are.</Accent>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[46ch] text-base leading-relaxed text-fg-muted md:text-lg">
                These are common starting points. In a free consultation we look at your goals and budget and recommend the
                combination that will move the needle first.
              </p>
            </Reveal>
          </div>
          <Stagger as="ul" className="lg:col-span-7" gap={0.1}>
            {STARTS.map((row) => (
              <StaggerItem
                as="li"
                key={row.who}
                className="flex flex-col gap-4 border-t border-line py-7 last:border-b md:flex-row md:items-center md:justify-between"
              >
                <span className="text-xl font-medium tracking-[-0.02em]">{row.who}</span>
                <span className="flex flex-wrap gap-2">
                  {row.mix.map((m) => (
                    <span key={m} className="rounded-full border border-line-strong bg-surface px-3 py-1.5 text-[13px] text-fg-muted">
                      {m}
                    </span>
                  ))}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Process id="services-process" showHeader={false} />
      <FinalCta />
    </>
  );
}
