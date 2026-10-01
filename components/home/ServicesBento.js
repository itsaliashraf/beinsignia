import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, Eyebrow } from "@/components/ui/SectionHeader";
import { serviceVisuals } from "@/components/visuals";
import { services } from "@/lib/site";

// Asymmetric 12-col bento: 7/5 · 4/3/5 · 5/7
const SPANS = {
  seo: "md:col-span-6 lg:col-span-7",
  "aeo-geo": "md:col-span-6 lg:col-span-5",
  "google-ads": "md:col-span-3 lg:col-span-4",
  "meta-ads": "md:col-span-3 lg:col-span-3",
  "custom-websites": "md:col-span-6 lg:col-span-5",
  wordpress: "md:col-span-3 lg:col-span-5",
  "custom-apps": "md:col-span-3 lg:col-span-7",
};

export default function ServicesBento() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <Reveal>
              <Eyebrow>What we do</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="services-title" className="text-headline font-medium">
                Marketing, websites, and technology built to move your business <Accent>forward.</Accent>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-fg-muted md:text-lg">
              One team for your digital growth—from increasing search visibility and generating leads to building websites and
              custom applications that support your long-term goals.
            </p>
            <Link
              href="/services"
              className="group inline-flex w-fit items-center gap-2 border-b border-line-strong pb-1 text-[15px] font-medium transition-colors hover:border-accent"
            >
              View All Services
              <ArrowRight size={16} className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-5 gap-y-12 md:mt-20 md:grid-cols-6 lg:grid-cols-12">
          {services.map((s, i) => {
            const Visual = serviceVisuals[s.id];
            return (
              <Reveal key={s.id} delay={(i % 3) * 0.06} className={SPANS[s.id]}>
                <article className="group relative flex h-full flex-col gap-5">
                  <div className="relative h-[300px] overflow-hidden rounded-card border border-line bg-surface shadow-[var(--shadow-inset)] transition-[border-color,transform] duration-700 ease-out-expo group-hover:-translate-y-1 group-hover:border-line-strong md:h-[320px]">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                      style={{ background: "radial-gradient(closest-side, rgb(230 108 55 / 0.16), transparent)" }}
                    />
                    <Visual />
                  </div>
                  <div className="flex flex-col gap-2 px-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-xl font-medium tracking-[-0.02em]">
                        <Link href={`/services#${s.id}`} className="after:absolute after:inset-0 after:content-['']">
                          <span className="mr-2.5 font-mono text-xs font-normal text-fg-subtle">0{i + 1}</span>
                          {s.title}
                        </Link>
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-fg-subtle transition-[transform,color] duration-500 ease-out-expo group-hover:rotate-45 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="max-w-[56ch] text-[15px] leading-relaxed text-fg-muted">{s.body}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
