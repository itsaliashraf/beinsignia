import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Magnetic from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, Eyebrow } from "@/components/ui/SectionHeader";
import { site } from "@/lib/site";

export default function FinalCta({
  eyebrow = "Start a project",
  title = (
    <>
      Ready to turn your idea into <Accent>results?</Accent>
    </>
  ),
  cta = "Let's Talk",
}) {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden border-t border-line py-24 md:py-36">
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -bottom-1/2 right-0 -z-10 aspect-square w-[min(900px,110vw)] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgb(230 108 55 / 0.16), transparent)" }}
      />

      <div className="container-x grid grid-cols-1 items-end gap-14 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-8">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="cta-title" className="max-w-[13ch] text-mega font-medium">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-2 text-[15px] text-fg-muted sm:flex-row sm:gap-8">
            <a href={`mailto:${site.email}`} className="w-fit transition-colors hover:text-fg">
              {site.email}
            </a>
            <a href={site.phoneHref} className="w-fit transition-colors hover:text-fg">
              {site.phone}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex lg:col-span-4 lg:justify-end">
          <div className="relative grid size-44 place-items-center md:size-52">
            <span aria-hidden="true" className="absolute inset-0 animate-ring rounded-full border border-accent/50" />
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ring rounded-full border border-accent/40"
              style={{ animationDelay: "1.2s" }}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ring rounded-full border border-accent/30"
              style={{ animationDelay: "2.4s" }}
            />
            <Magnetic strength={0.35}>
              <Link
                href="/contact"
                className="group relative grid size-44 place-items-center rounded-full bg-accent text-on-accent transition-[transform,background-color] duration-500 ease-out-expo hover:scale-[1.04] hover:bg-accent-hover active:scale-[0.97] md:size-52"
              >
                <span className="flex flex-col items-center gap-2 text-lg font-medium tracking-[-0.02em]">
                  <ArrowUpRight
                    size={30}
                    className="transition-transform duration-500 ease-out-expo group-hover:rotate-45"
                    aria-hidden="true"
                  />
                  {cta}
                </span>
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
