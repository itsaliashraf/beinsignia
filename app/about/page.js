import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Accent, Eyebrow } from "@/components/ui/SectionHeader";
import Audiences from "@/components/home/Audiences";
import FinalCta from "@/components/home/FinalCta";
import { principles, services, site } from "@/lib/site";

export const metadata = {
  title: "About — Marketing and Technology Under One Roof",
  description:
    "Click & Code is a digital marketing and software development company in Lahore, Pakistan, bringing SEO, paid ads, websites and custom apps together in one team.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Click & Code"
        title={
          <>
            Marketing and technology, under one <Accent>roof.</Accent>
          </>
        }
        lead="Whether you are launching a new business, expanding your online presence, or looking to improve your digital performance, Click & Code brings marketing and technology together to help you move forward with confidence."
      />

      {/* Story */}
      <section aria-labelledby="story-title" className="theme-bone py-24 md:py-36">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <Reveal>
              <Eyebrow>Why we exist</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="story-title" className="text-headline font-medium">
                Growth breaks down between the agency, the developer and the <Accent>ad account.</Accent>
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col gap-6 text-base leading-relaxed text-fg-muted md:text-lg lg:col-span-5 lg:col-start-8 lg:pt-14">
            <Reveal>
              <p>
                Most businesses hire one team for SEO, another for ads and a freelancer for the website, then spend their time
                making them talk to each other. Campaigns send traffic to pages that weren&apos;t built to convert. Websites
                launch without the tracking marketing needs.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                <span className="text-fg">Click &amp; Code</span> is a digital marketing and software development company in{" "}
                {site.city}, {site.country}. We help startups, small businesses and growing companies build a stronger digital
                presence, with strategy, campaigns and the websites and apps they point to planned and built together.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>The result is simple: more visibility, more customers and better digital experiences.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-title" className="py-24 md:py-36">
        <div className="container-x">
          <div className="flex max-w-3xl flex-col gap-6">
            <Reveal>
              <Eyebrow>How we think</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="principles-title" className="text-headline font-medium">
                Four principles behind every <Accent>project.</Accent>
              </h2>
            </Reveal>
          </div>

          <Stagger className="mt-16 grid grid-cols-1 gap-x-10 md:mt-20 md:grid-cols-2" gap={0.1}>
            {principles.map((p, i) => (
              <StaggerItem
                key={p.title}
                className={`flex flex-col gap-4 border-t border-line py-10 ${i % 2 === 1 ? "md:translate-y-16" : ""}`}
              >
                <span className="font-serif text-5xl italic leading-none text-accent-ink">0{i + 1}</span>
                <h3 className="text-2xl font-medium tracking-[-0.025em] md:text-[1.75rem]">{p.title}</h3>
                <p className="max-w-[48ch] text-[15.5px] leading-relaxed text-fg-muted">{p.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Capabilities index */}
      <section aria-labelledby="capabilities-title" className="border-t border-line py-24 md:pb-36 md:pt-40">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Reveal>
              <Eyebrow>Capabilities</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="capabilities-title" className="text-headline font-medium">
                One team, seven <Accent>disciplines.</Accent>
              </h2>
            </Reveal>
          </div>
          <Stagger as="ul" className="lg:col-span-7 lg:col-start-6" gap={0.06}>
            {services.map((s, i) => (
              <StaggerItem as="li" key={s.id} className="border-t border-line last:border-b">
                <Link
                  href={`/services#${s.id}`}
                  className="group flex items-center gap-6 py-6"
                >
                  <span className="flex flex-1 items-center gap-6 transition-transform duration-500 ease-out-expo group-hover:translate-x-3">
                    <span className="font-mono text-xs text-fg-subtle">0{i + 1}</span>
                    <span className="text-xl font-medium tracking-[-0.02em] md:text-2xl">{s.title}</span>
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-fg-subtle transition-[transform,color] duration-500 ease-out-expo group-hover:rotate-45 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Audiences />
      <FinalCta />
    </>
  );
}
