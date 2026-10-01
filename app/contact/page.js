import { Suspense } from "react";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import ContactForm, { ContactFormSkeleton } from "@/components/contact/ContactForm";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Accent, Eyebrow } from "@/components/ui/SectionHeader";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact — Get a Free Consultation",
  description:
    "Talk to Click & Code about SEO, AEO & GEO, Google Ads, Meta Ads, websites, WordPress or custom apps. Get a free consultation with our team in Lahore.",
  alternates: { canonical: "/contact" },
};

const CHANNELS = [
  { icon: EnvelopeSimple, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: MapPin, label: "Based in", value: `${site.city}, ${site.country}` },
];

const NEXT = [
  { step: "01", title: "We review your message", body: "We look at your business, goals and anything you've shared." },
  { step: "02", title: "Free consultation", body: "A call to understand your audience, challenges and priorities." },
  { step: "03", title: "A clear roadmap", body: "The right digital strategy for your project, and how we'll get there." },
];

export default function ContactPage() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -left-[20%] top-[10%] -z-10 aspect-square w-[min(900px,110vw)] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgb(230 108 55 / 0.14), transparent)" }}
      />

      <div className="container-x grid grid-cols-1 gap-14 pb-24 pt-36 md:pb-36 md:pt-44 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-10 lg:col-span-5">
          <Stagger className="flex flex-col gap-7" gap={0.09}>
            <StaggerItem>
              <Eyebrow>Contact</Eyebrow>
            </StaggerItem>
            <StaggerItem>
              <h1 className="max-w-[12ch] text-display font-medium">
                Let&apos;s talk about your next <Accent>move.</Accent>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="max-w-[44ch] text-base leading-relaxed text-fg-muted md:text-lg">
                Tell us about your business and goals. We&apos;ll recommend the right mix of marketing and technology, starting
                with a free consultation.
              </p>
            </StaggerItem>
          </Stagger>

          <Reveal delay={0.2}>
            <ul className="divide-y divide-line border-y border-line">
              {CHANNELS.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line-strong text-fg-muted transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-subtle">{label}</span>
                      <span className="truncate text-[15.5px]">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="group flex items-center gap-4 py-4">
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 py-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.25} className="flex flex-col gap-5">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">What happens next</h2>
            <ol className="flex flex-col gap-5">
              {NEXT.map((n) => (
                <li key={n.step} className="grid grid-cols-[2.25rem_1fr] gap-3">
                  <span className="font-serif text-2xl italic leading-none text-accent-ink">{n.step}</span>
                  <span className="flex flex-col gap-1">
                    <span className="text-[15.5px] font-medium">{n.title}</span>
                    <span className="text-[14.5px] leading-relaxed text-fg-muted">{n.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <Suspense fallback={<ContactFormSkeleton />}>
            <ContactForm />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}
