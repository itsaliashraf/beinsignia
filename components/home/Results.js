import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Accent, Eyebrow } from "@/components/ui/SectionHeader";
import ResultGraphic from "@/components/home/ResultGraphic";
import { results } from "@/lib/site";

export default function Results() {
  return (
    <section aria-labelledby="results-title" className="theme-bone relative overflow-hidden py-24 md:py-36">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-8">
            <Reveal>
              <Eyebrow>Results that matter</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="results-title" className="text-headline font-medium">
                More visibility. More customers. Better digital <Accent>experiences.</Accent>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-4 lg:self-end">
            <p className="text-base leading-relaxed text-fg-muted md:text-lg">
              We combine strategy, creativity, technology, and performance marketing to create digital solutions that are built
              around measurable business outcomes.
            </p>
          </Reveal>
        </div>

        <Stagger
          as="ul"
          gap={0.12}
          className="mt-16 grid grid-cols-1 border-t border-line sm:grid-cols-2 md:mt-24 lg:grid-cols-4"
        >
          {results.map((r, i) => (
            <StaggerItem
              as="li"
              key={r.id}
              className={`flex flex-col gap-8 border-b border-line py-10 sm:px-8 lg:border-b-0 lg:py-12 ${
                i % 2 === 1 ? "sm:border-l" : ""
              } ${i > 0 ? "lg:border-l" : ""} ${i === 0 ? "sm:pl-0" : ""} ${i === 2 ? "sm:pl-0 lg:pl-8" : ""}`}
            >
              <ResultGraphic id={r.id} />
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-ink">{r.label}</span>
                <h3 className="text-2xl font-medium tracking-[-0.025em] md:text-[1.7rem]">{r.title}</h3>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
