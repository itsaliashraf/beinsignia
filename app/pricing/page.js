import Link from "next/link";
import PricingCalculator from "@/components/PricingCalculator";

export const metadata = {
  title: "Pricing — Estimate Your Software Project Budget | Be Insignia",
  description:
    "Get a transparent, instant estimate for custom software, web, mobile app, SaaS and AI development. Adjust scope, pages and add-ons to see your budget. Book a free consultation.",
  keywords:
    "software development pricing, custom software cost, web development pricing, mobile app development cost, SaaS development pricing",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing & Estimates | Be Insignia",
    description: "An instant, transparent estimate for your software project — adjust scope and see your budget.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Be Insignia Pricing",
  url: "/pricing",
  description: "Estimate the budget for a custom software, web, mobile, SaaS or AI development project.",
};

const CHECK = (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main">
        <section className="page-head">
          <div className="container">
            <ol className="breadcrumb" aria-label="Breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Pricing</li>
            </ol>
            <div className="split split--wide-left">
              <h1 className="display reveal">Transparent pricing, tailored to your scope.</h1>
              <p className="lead reveal d1">
                Move the sliders to shape your project and watch your estimate update instantly.
                It&rsquo;s an indicative range — your free consultation confirms the exact figure.
              </p>
            </div>
          </div>
        </section>

        {/* CALCULATOR */}
        <section className="section" style={{ paddingTop: "var(--space-4)" }}>
          <div className="container">
            <PricingCalculator />
          </div>
        </section>

        {/* TIERS */}
        <section className="section">
          <div className="container">
            <div className="split split--wide-left" style={{ marginBottom: "var(--space-5)" }}>
              <div className="reveal">
                <p className="eyebrow">Ways to work with us</p>
                <h2 className="h2">Engagement models built around your stage.</h2>
              </div>
              <p className="lead reveal d1">
                Prefer a fixed shape? These starting points cover most projects — every one begins
                with a free consultation.
              </p>
            </div>
            <div className="tiers">
              <div className="tier reveal">
                <div className="tier__name">Launch</div>
                <div className="tier__price">
                  Rs 40k<span> / from</span>
                </div>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  For entrepreneurs validating an idea.
                </p>
                <ul>
                  <li>{CHECK}MVP or marketing site</li>
                  <li>{CHECK}Core UI/UX design</li>
                  <li>{CHECK}~6-week delivery</li>
                </ul>
                <Link className="btn btn--ghost" href="/contact">
                  Get started
                </Link>
              </div>
              <div className="tier tier--featured reveal d1">
                <span className="badge">Most popular</span>
                <div className="tier__name">Scale</div>
                <div className="tier__price">
                  Rs 150k<span> / from</span>
                </div>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  For startups &amp; SMEs building a real product.
                </p>
                <ul>
                  <li>{CHECK}Full-stack web or mobile app</li>
                  <li>{CHECK}API integrations &amp; cloud</li>
                  <li>{CHECK}QA, DevOps &amp; support</li>
                </ul>
                <Link className="btn btn--primary" href="/contact">
                  Get started
                </Link>
              </div>
              <div className="tier reveal d2">
                <div className="tier__name">Enterprise</div>
                <div className="tier__price">Custom</div>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  For enterprises modernising at scale.
                </p>
                <ul>
                  <li>{CHECK}SaaS or multi-system builds</li>
                  <li>{CHECK}Digital transformation</li>
                  <li>{CHECK}Dedicated senior team</li>
                </ul>
                <Link className="btn btn--ghost" href="/contact">
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cta-band reveal">
              <p className="eyebrow">No surprises</p>
              <h2 className="h2">Turn your estimate into a fixed quote.</h2>
              <p className="lead">
                Book a free consultation and we&rsquo;ll confirm scope, timeline and a fixed price
                — no obligation.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact">
                  Book a Free Consultation
                </Link>
                <Link className="btn btn--ghost" href="/services">
                  Browse services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
