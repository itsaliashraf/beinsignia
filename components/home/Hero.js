import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Accent, Eyebrow } from "@/components/ui/SectionHeader";
import HeroConsole from "@/components/home/HeroConsole";
import { heroTags } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Atmosphere */}
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -right-[20%] -top-[30%] -z-10 aspect-square w-[min(1100px,120vw)] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgb(230 108 55 / 0.22), rgb(230 108 55 / 0.06) 55%, transparent)" }}
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-b from-transparent to-canvas" />

      <div className="container-x grid min-h-[100dvh] grid-cols-1 items-center gap-14 pb-20 pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-36">
        <Stagger className="flex flex-col gap-7 lg:col-span-7" gap={0.09}>
          <StaggerItem>
            <Eyebrow className="leading-relaxed">
              Digital marketing &amp; software development company · Lahore, Pakistan
            </Eyebrow>
          </StaggerItem>

          <StaggerItem as="div">
            <h1 className="max-w-[14ch] text-display font-medium">
              Digital solutions that turn your ideas into <Accent>growth.</Accent>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-[58ch] text-base leading-relaxed text-fg-muted md:text-lg">
              We help startups, small businesses, and growing companies build a stronger digital presence through{" "}
              <strong className="font-medium text-fg">
                SEO, AEO &amp; GEO, Google Ads, Meta Ads, custom websites, WordPress development, and custom applications
              </strong>
              —designed to attract customers, increase conversions, and scale with your business.
            </p>
          </StaggerItem>

          <StaggerItem className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic className="w-full sm:w-auto">
              <Button href="/contact" size="lg" full className="sm:w-auto">
                Get a Free Consultation
              </Button>
            </Magnetic>
            <Button href="/services" variant="ghost" size="lg" arrow={false}>
              Explore Our Services
            </Button>
          </StaggerItem>

          <StaggerItem>
            <ul aria-label="Services" className="flex flex-wrap gap-2 pt-2">
              {heroTags.map((tag) => (
                <li
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-muted"
                >
                  <span aria-hidden="true" className="size-1 rounded-[1px] bg-accent" />
                  {tag}
                </li>
              ))}
            </ul>
          </StaggerItem>
        </Stagger>

        <div className="lg:col-span-5">
          <HeroConsole />
        </div>
      </div>
    </section>
  );
}
