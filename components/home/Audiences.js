import { Lightbulb, RocketLaunch, Storefront, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { LogoMark } from "@/components/ui/Logo";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Accent, Eyebrow } from "@/components/ui/SectionHeader";
import { audiences } from "@/lib/site";

const ICONS = { rocket: RocketLaunch, storefront: Storefront, trend: TrendUp, lightbulb: Lightbulb };

function OrbitBadge() {
  return (
    <div className="relative grid size-44 place-items-center" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="absolute inset-0 size-full animate-[spin_36s_linear_infinite]">
        <defs>
          <path id="orbit" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
        </defs>
        <text className="fill-fg-muted font-mono text-[10.5px] uppercase">
          <textPath href="#orbit" textLength="510" lengthAdjust="spacing">Startups · SMBs · Growing brands · Entrepreneurs ·</textPath>
        </text>
      </svg>
      <span className="grid size-20 place-items-center rounded-full border border-line-strong bg-surface shadow-[var(--shadow-inset),var(--shadow-diffuse)]">
        <LogoMark className="size-9" />
      </span>
    </div>
  );
}

export default function Audiences() {
  return (
    <section aria-labelledby="audiences-title" className="theme-bone relative py-24 md:py-36">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-6 lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow>Who we build for</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="audiences-title" className="text-headline font-medium">
                From growing startups to established businesses, we build around your <Accent>goals.</Accent>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[48ch] text-base leading-relaxed text-fg-muted md:text-lg">
                Whether you are launching a new business, expanding your online presence, or looking to improve your digital
                performance, Click &amp; Code brings marketing and technology together to help you move forward with confidence.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="hidden pt-6 lg:block">
              <OrbitBadge />
            </Reveal>
          </div>
        </div>

        <Stagger as="ol" className="lg:col-span-7" gap={0.1}>
          {audiences.map((a, i) => {
            const Icon = ICONS[a.icon];
            return (
              <StaggerItem
                as="li"
                key={a.id}
                className="group relative grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 border-t border-line py-9 last:border-b md:grid-cols-[auto_1fr_1.15fr] md:gap-x-8 md:py-11"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-out-expo group-hover:w-full"
                />
                <span className="pt-1.5 font-mono text-xs text-fg-subtle">0{i + 1}</span>
                <h3 className="flex items-center gap-3 text-2xl font-medium tracking-[-0.025em] md:text-[1.75rem]">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line-strong bg-surface text-fg transition-colors duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  {a.title}
                </h3>
                <p className="col-start-2 max-w-[46ch] text-[15.5px] leading-relaxed text-fg-muted md:col-start-3 md:pt-1">
                  {a.body}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
