import PageHero from "@/components/ui/PageHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import Faq from "@/components/pricing/Faq";
import FinalCta from "@/components/home/FinalCta";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, Eyebrow } from "@/components/ui/SectionHeader";
import { plans, pricingFaq, site } from "@/lib/site";

export const metadata = {
  title: "GBP Pricing — Google Business Profile Plans",
  description:
    "Google Business Profile management plans from Click & Code: Starter $400, Momentum $450 and Pioneer $500 per month. Local citations, NAP consistency, technical SEO and more.",
  alternates: { canonical: "/pricing" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const offersLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Business Profile management",
  provider: { "@type": "ProfessionalService", name: site.name },
  offers: plans.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.price.toFixed(2),
    priceCurrency: "USD",
    description: p.features.join(", "),
  })),
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqLd, offersLd]) }} />
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Simple monthly plans for local <Accent>visibility.</Accent>
          </>
        }
        lead="Our Google Business Profile plans cover everything from listing management and local citations to marketing assets and social media. Every other service is scoped to your goals."
      />

      <PricingPlans id="plans" />

      <section aria-labelledby="faq-title" className="py-24 md:py-36">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Reveal>
              <Eyebrow>Questions</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="faq-title" className="text-headline font-medium">
                Good to <Accent>know.</Accent>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[36ch] text-base leading-relaxed text-fg-muted">
                Can&apos;t find your answer? Call{" "}
                <a href={site.phoneHref} className="text-fg underline decoration-line-strong underline-offset-4 hover:decoration-accent">
                  {site.phone}
                </a>{" "}
                or send us a message.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <Faq items={pricingFaq} />
          </Reveal>
        </div>
      </section>

      <FinalCta
        eyebrow="Still deciding?"
        title={
          <>
            Not sure which plan fits? Let&apos;s <Accent>talk.</Accent>
          </>
        }
      />
    </>
  );
}
