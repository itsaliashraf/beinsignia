import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeader";

export default function PageHero({ eyebrow, title, lead, children, aside }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line">
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -right-[15%] -top-[45%] -z-10 aspect-square w-[min(900px,110vw)] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgb(230 108 55 / 0.16), transparent)" }}
      />
      <div className="container-x grid grid-cols-1 gap-12 pb-16 pt-36 md:pb-24 md:pt-44 lg:grid-cols-12 lg:items-end">
        <Stagger className="flex flex-col gap-7 lg:col-span-8" gap={0.09}>
          <StaggerItem>
            <Eyebrow>{eyebrow}</Eyebrow>
          </StaggerItem>
          <StaggerItem>
            <h1 className="max-w-[17ch] text-display font-medium">{title}</h1>
          </StaggerItem>
          {lead && (
            <StaggerItem>
              <p className="max-w-[58ch] text-base leading-relaxed text-fg-muted md:text-lg">{lead}</p>
            </StaggerItem>
          )}
          {children && <StaggerItem>{children}</StaggerItem>}
        </Stagger>
        {aside && <div className="lg:col-span-4">{aside}</div>}
      </div>
    </section>
  );
}
