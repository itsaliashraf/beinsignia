import Link from "next/link";

export const metadata = {
  title: "About Be Insignia — Your Software Development Partner in Lahore",
  description:
    "Meet Be Insignia, a Lahore-based software development company. Learn about our approach to custom software, full stack development and digital transformation for startups and enterprises.",
  keywords:
    "software development company, full stack development, digital transformation services, custom software development Lahore",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Be Insignia",
    description:
      "A Lahore-based software development company engineering products for startups, SMEs and enterprises.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Be Insignia",
  url: "/about",
  mainEntity: {
    "@type": "Organization",
    name: "Be Insignia",
    email: "ali.ashraf4915@gmail.com",
    telephone: "+92-322-4561875",
    address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  },
};

export default function AboutPage() {
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
              <li>About</li>
            </ol>
            <div className="split split--wide-left">
              <h1 className="display reveal">
                We&rsquo;re the engineering partner behind products that ship.
              </h1>
              <p className="lead reveal d1">
                Be Insignia is a full-stack software development company in Lahore, Pakistan. We
                help entrepreneurs, startups, SMEs and enterprises design, build and scale
                software that earns its place in the business.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION with illustration */}
        <section className="section">
          <div className="container">
            <div className="split">
              <div className="illus reveal" aria-hidden="true">
                <div className="mock float--slow">
                  <div className="mock__bar">
                    <div className="mock__dots">
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <span className="mock__ttl">Product roadmap</span>
                    <span className="mock__pill">Sprint 4</span>
                  </div>
                  <div className="mock__body">
                    <div className="mock__row mock__row--active">
                      <span className="mock__idx">01</span>
                      <div className="mock__nm">Discovery &amp; scoping</div>
                      <div className="mock__meta">
                        <span className="mock__tag mock__tag--g">Done</span>
                      </div>
                    </div>
                    <div className="mock__row">
                      <span className="mock__idx">02</span>
                      <div className="mock__nm">UI/UX &amp; architecture</div>
                      <div className="mock__meta">
                        <span className="mock__tag mock__tag--g">Done</span>
                      </div>
                    </div>
                    <div className="mock__row">
                      <span className="mock__idx">03</span>
                      <div className="mock__nm">Full-stack build</div>
                      <div className="mock__meta">
                        <span className="mock__tag mock__tag--y">Active</span>
                      </div>
                    </div>
                    <div className="mock__row">
                      <span className="mock__idx">04</span>
                      <div className="mock__nm">QA &amp; release</div>
                      <div className="mock__meta">
                        <span className="mock__tag">Next</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stack reveal d1">
                <p className="eyebrow">Why we exist</p>
                <h2 className="h2">Great software should feel inevitable — never improvised.</h2>
                <p>
                  Too many teams inherit software that fights them: brittle systems, mismatched
                  tools, and features that never quite fit. We started Be Insignia to change that —
                  pairing senior full-stack engineering with disciplined product thinking so what
                  we build is dependable from day one.
                </p>
                <p>
                  We work as a genuine extension of your team. That means clear communication,
                  realistic timelines, and code we&rsquo;re proud to hand over — whether you need
                  an MVP validated, a SaaS platform scaled, or a decade-old system modernised
                  through digital transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="section">
          <div className="container">
            <p className="eyebrow reveal">What guides us</p>
            <h2
              className="h2 reveal"
              style={{ marginBottom: "var(--space-6)", maxWidth: "22ch" }}
            >
              The principles behind every engagement.
            </h2>
            <div className="grid grid-3">
              <article className="card reveal">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3l7 3v6c0 4-3 6.5-7 9-4-2.5-7-5-7-9V6l7-3z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Engineering integrity</h3>
                <p>
                  Clean architecture, tested code and honest estimates. We build for the version
                  of your product that exists in three years.
                </p>
              </article>
              <article className="card reveal d1">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 12h16M4 6h16M4 18h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Radical clarity</h3>
                <p>No jargon, no surprises. You always know what&rsquo;s being built, why, and when it lands.</p>
              </article>
              <article className="card reveal d2">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Delivery you can plan around</h3>
                <p>Two-week sprints, working demos and a fixed point of contact keep momentum visible.</p>
              </article>
              <article className="card reveal">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3v18M5 8l7-5 7 5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Built to scale</h3>
                <p>Cloud-native foundations and clean APIs mean your software grows without a rewrite.</p>
              </article>
              <article className="card reveal d1">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>User-first design</h3>
                <p>Research-led UI/UX so the people who use your software actually enjoy it.</p>
              </article>
              <article className="card reveal d2">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Long-term partnership</h3>
                <p>Most clients return for their next build. We optimise for the relationship, not the invoice.</p>
              </article>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="section">
          <div className="container">
            <div className="panel" style={{ padding: "var(--space-6)" }}>
              <div className="split split--wide-left" style={{ marginBottom: "var(--space-5)" }}>
                <div className="reveal">
                  <p className="eyebrow">By the numbers</p>
                  <h2 className="h2">A track record built one product at a time.</h2>
                </div>
                <p className="lead reveal d1">
                  We measure ourselves by what happens after launch, not the size of the proposal.
                </p>
              </div>
              <div className="stats">
                <div className="stat reveal">
                  <div className="stat__num">
                    8<span>+</span>
                  </div>
                  <p className="stat__label">Years building software for global clients</p>
                </div>
                <div className="stat reveal d1">
                  <div className="stat__num">
                    120<span>+</span>
                  </div>
                  <p className="stat__label">Web, mobile, SaaS &amp; AI products delivered</p>
                </div>
                <div className="stat reveal d2">
                  <div className="stat__num">4</div>
                  <p className="stat__label">Audiences served — startups to enterprises</p>
                </div>
                <div className="stat reveal d3">
                  <div className="stat__num">22</div>
                  <p className="stat__label">Specialised services under one roof</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="section section--lg">
          <div className="container">
            <div className="split">
              <div className="stack reveal">
                <p className="eyebrow">Our approach</p>
                <h2 className="h2">Senior engineers, embedded in your problem.</h2>
                <p>
                  You won&rsquo;t be handed off to a junior team after the kickoff. The people who
                  scope your project are the people who build it — full-stack engineers, product
                  designers and DevOps specialists who care about outcomes, not ticket counts.
                </p>
                <p>
                  From your first free consultation, we treat your roadmap as our own:
                  prioritising ruthlessly, shipping early, and adjusting as real users tell us
                  what matters.
                </p>
                <div className="btn-row">
                  <Link className="btn btn--primary" href="/contact">
                    Book a Free Consultation
                  </Link>
                  <Link className="btn btn--ghost" href="/services">
                    See what we build
                  </Link>
                </div>
              </div>
              <div className="illus reveal d1" aria-hidden="true">
                <div className="mock float--slow">
                  <div className="mock__bar">
                    <div className="mock__dots">
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <span className="mock__ttl">Team · Sprint board</span>
                    <span className="mock__pill">On track</span>
                  </div>
                  <div className="mock__body">
                    <div className="mock__stats">
                      <div className="mock__stat">
                        <b>24</b>
                        <span>Shipped</span>
                      </div>
                      <div className="mock__stat">
                        <b>6</b>
                        <span>In review</span>
                      </div>
                      <div className="mock__stat">
                        <b>2</b>
                        <span>Blocked</span>
                      </div>
                    </div>
                    <div className="mock__row">
                      <div className="mock__av">JS</div>
                      <div className="mock__nm">Payments API integration</div>
                      <div className="mock__meta">
                        <span className="mock__tag mock__tag--g">Merged</span>
                      </div>
                    </div>
                    <div className="mock__row">
                      <div className="mock__av">UX</div>
                      <div className="mock__nm">Onboarding redesign</div>
                      <div className="mock__meta">
                        <span className="mock__tag mock__tag--y">Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cta-band reveal">
              <p className="eyebrow">Work with us</p>
              <h2 className="h2">Let&rsquo;s talk about what you&rsquo;re building.</h2>
              <p className="lead">
                A 30-minute call is often enough to give you a clear next step. It&rsquo;s free,
                and there&rsquo;s no obligation.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact">
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
