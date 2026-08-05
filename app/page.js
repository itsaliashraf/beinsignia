import Link from "next/link";

export const metadata = {
  title: "Be Insignia — Custom Software Development Company in Lahore",
  description:
    "Be Insignia is a software development company in Lahore building custom software, web and mobile apps, SaaS platforms and AI solutions for startups, SMEs and enterprises. Book a free consultation.",
  keywords:
    "software development company, custom software development, web development services, mobile app development, SaaS development, AI development services, full stack development",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Be Insignia — Custom Software Development Company",
    description:
      "Custom software, web, mobile, SaaS and AI solutions engineered for growth. Book a free consultation.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Be Insignia",
  description:
    "Software development company offering custom software, web, mobile app, SaaS and AI development services.",
  url: "/",
  email: "ali.ashraf4915@gmail.com",
  telephone: "+92-322-4561875",
  areaServed: ["Startups", "SMEs", "Enterprises", "Entrepreneurs"],
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  makesOffer: [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "SaaS Development",
    "AI Solutions",
    "UI/UX Design",
    "Cloud Solutions",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main">
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div className="hero__grid">
              <div className="stack reveal">
                <span className="eyebrow">Software Development Company · Lahore, Pakistan</span>
                <h1 className="display">
                  Software that turns your next idea into an advantage.
                </h1>
                <p className="lead">
                  We are a full-stack custom software development company partnering with
                  startups, SMEs and enterprises to design, build and scale web apps, mobile apps,
                  SaaS platforms and AI solutions — engineered to grow with you.
                </p>
                <div className="btn-row">
                  <Link className="btn btn--primary" href="/contact">
                    Book a Free Consultation
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <Link className="btn btn--ghost" href="/services">
                    Explore Services
                  </Link>
                </div>
                <ul className="chips" aria-label="Core capabilities">
                  <li className="chip">Custom Software</li>
                  <li className="chip">Web &amp; Mobile</li>
                  <li className="chip">SaaS Platforms</li>
                  <li className="chip">AI Solutions</li>
                  <li className="chip">Cloud &amp; DevOps</li>
                </ul>
              </div>
              <div className="illus reveal d2" aria-hidden="true">
                <div className="mock float--slow">
                  <div className="mock__bar">
                    <div className="mock__dots">
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <span className="mock__ttl">Insignia Console · Overview</span>
                    <span className="mock__pill">Live</span>
                  </div>
                  <div className="mock__body">
                    <div className="mock__stats">
                      <div className="mock__stat">
                        <b>$126k</b>
                        <span>MRR</span>
                      </div>
                      <div className="mock__stat">
                        <b>18.4k</b>
                        <span>Users</span>
                      </div>
                      <div className="mock__stat">
                        <b>99.9%</b>
                        <span>Uptime</span>
                      </div>
                    </div>
                    <div className="mock__chart">
                      <div className="mock__bars">
                        <i style={{ height: "46%" }}></i>
                        <i style={{ height: "66%" }}></i>
                        <i style={{ height: "80%" }}></i>
                        <i className="mut" style={{ height: "56%" }}></i>
                        <i style={{ height: "94%" }}></i>
                        <i className="mut" style={{ height: "70%" }}></i>
                        <i style={{ height: "62%" }}></i>
                      </div>
                    </div>
                    <div className="mock__row">
                      <span className="mock__idx">01</span>
                      <div className="mock__av">AI</div>
                      <div className="mock__nm">Automation run completed</div>
                      <div className="mock__meta">
                        <span className="mock__tag mock__tag--g">Done</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="section">
          <div className="container">
            <p className="eyebrow reveal">Who we build for</p>
            <div className="split split--wide-left" style={{ marginBottom: "var(--space-5)" }}>
              <h2 className="h2 reveal">
                From first MVP to enterprise scale, we meet you where your product is.
              </h2>
              <p className="lead reveal d1">
                Whether you are an entrepreneur validating an idea or an enterprise modernising
                legacy systems, we bring senior full-stack engineering, clear communication and
                delivery you can plan around.
              </p>
            </div>
            <div className="grid grid-4">
              <article className="card reveal">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 21l-4.9 2.6.9-5.5-4-3.9L9.5 8 12 3z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Startups</h3>
                <p>Ship a credible MVP fast, then iterate with real users.</p>
              </article>
              <article className="card reveal d1">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 20V9l8-5 8 5v11"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </div>
                <h3>SMEs</h3>
                <p>Automate operations and replace spreadsheets with software that scales.</p>
              </article>
              <article className="card reveal d2">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 21h18M6 21V8h5v13M13 21V4h5v17"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Enterprises</h3>
                <p>Modernise legacy systems, integrate APIs and transform digitally.</p>
              </article>
              <article className="card reveal d3">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2v6M12 22v-4M4.2 6.2l3 3M16.8 14.8l3 3M2 12h6M22 12h-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3>Entrepreneurs</h3>
                <p>Turn a concept into a product with a partner who owns delivery.</p>
              </article>
            </div>
          </div>
        </section>

        {/* SERVICES SNAPSHOT */}
        <section className="section">
          <div className="container">
            <div className="split" style={{ marginBottom: "var(--space-5)" }}>
              <div className="reveal">
                <p className="eyebrow">What we do</p>
                <h2 className="h2">Full-stack development, end to end.</h2>
              </div>
              <p className="lead reveal d1">
                One team for design, engineering and delivery — so your product stays coherent
                from the first wireframe to production.
              </p>
            </div>
            <div className="grid grid-3">
              <article className="card card--link reveal">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 6l-5 6 5 6M16 6l5 6-5 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Custom Software Development</h3>
                <p>Tailored platforms built around your workflows, not off-the-shelf compromises.</p>
              </article>
              <article className="card card--link reveal d1">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M3 8h18M8 21h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Web Development Services</h3>
                <p>Fast, accessible, SEO-ready web apps built on modern full-stack foundations.</p>
              </article>
              <article className="card card--link reveal d2">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="7" y="2" width="10" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M11 18h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Mobile App Development</h3>
                <p>Native and cross-platform iOS and Android apps your users keep coming back to.</p>
              </article>
              <article className="card card--link reveal">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 19a4 4 0 010-8 6 6 0 0111.6-1.6A4.5 4.5 0 0117 19H6z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>SaaS Development</h3>
                <p>Multi-tenant, subscription-ready platforms designed to scale from day one.</p>
              </article>
              <article className="card card--link reveal d1">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
                    <path
                      d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3>AI Solutions</h3>
                <p>Practical AI development services — automation, assistants and data intelligence.</p>
              </article>
              <article className="card card--link reveal d2">
                <div className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </div>
                <h3>UI/UX Design Services</h3>
                <p>Research-led product design that makes complex software feel effortless.</p>
              </article>
            </div>
            <p style={{ marginTop: "var(--space-4)" }} className="reveal">
              <Link href="/services">View all 22 services →</Link>
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="section">
          <div className="container">
            <div className="panel" style={{ padding: "var(--space-6)" }}>
              <p className="eyebrow reveal">Results, not just deliverables</p>
              <h2
                className="h2 reveal"
                style={{ maxWidth: "20ch", marginBottom: "var(--space-5)" }}
              >
                Measured by the outcomes we help you reach.
              </h2>
              <div className="stats">
                <div className="stat reveal">
                  <div className="stat__num">
                    120<span>+</span>
                  </div>
                  <p className="stat__label">Products shipped across web, mobile &amp; cloud</p>
                </div>
                <div className="stat reveal d1">
                  <div className="stat__num">
                    40<span>%</span>
                  </div>
                  <p className="stat__label">Average reduction in manual operations after automation</p>
                </div>
                <div className="stat reveal d2">
                  <div className="stat__num">
                    98<span>%</span>
                  </div>
                  <p className="stat__label">Client retention — most partners return for the next build</p>
                </div>
                <div className="stat reveal d3">
                  <div className="stat__num">
                    6<span>wk</span>
                  </div>
                  <p className="stat__label">Typical time from kickoff to a working MVP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="section section--lg">
          <div className="container">
            <div className="split split--wide-left" style={{ marginBottom: "var(--space-6)" }}>
              <div className="reveal">
                <p className="eyebrow">How we work</p>
                <h2 className="h2">A delivery process you can plan around.</h2>
              </div>
              <p className="lead reveal d1">
                No black boxes. Every engagement moves through five clear stages with visible
                progress and a fixed point of contact.
              </p>
            </div>
            <ol className="timeline">
              <li className="timeline__item reveal">
                <span className="timeline__marker">1</span>
                <div className="timeline__body">
                  <span className="timeline__step">Discover</span>
                  <h3>Free consultation &amp; scoping</h3>
                  <p>
                    We map your goals, users and constraints, then translate them into a clear,
                    prioritised product roadmap.
                  </p>
                </div>
              </li>
              <li className="timeline__item reveal d1">
                <span className="timeline__marker">2</span>
                <div className="timeline__body">
                  <span className="timeline__step">Design</span>
                  <h3>UI/UX &amp; architecture</h3>
                  <p>
                    Research-led interface design paired with a scalable technical architecture
                    and API strategy.
                  </p>
                </div>
              </li>
              <li className="timeline__item reveal d2">
                <span className="timeline__marker">3</span>
                <div className="timeline__body">
                  <span className="timeline__step">Build</span>
                  <h3>Full-stack development</h3>
                  <p>Senior engineers build in two-week sprints with working software you can review at every step.</p>
                </div>
              </li>
              <li className="timeline__item reveal d3">
                <span className="timeline__marker">4</span>
                <div className="timeline__body">
                  <span className="timeline__step">Launch</span>
                  <h3>QA, DevOps &amp; release</h3>
                  <p>Automated testing, CI/CD pipelines and cloud deployment get you to production with confidence.</p>
                </div>
              </li>
              <li className="timeline__item reveal d4">
                <span className="timeline__marker">5</span>
                <div className="timeline__body">
                  <span className="timeline__step">Scale</span>
                  <h3>Maintenance &amp; growth</h3>
                  <p>Ongoing support, monitoring and iteration so your software keeps pace with your business.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section">
          <div className="container">
            <p className="eyebrow center reveal">Trusted by teams like yours</p>
            <h2 className="h2 center reveal" style={{ marginBottom: "var(--space-6)" }}>
              What our partners say.
            </h2>
            <div className="testi-grid">
              <figure className="card quote reveal">
                <div className="stars" aria-hidden="true">
                  ★★★★★
                </div>
                <blockquote>
                  &ldquo;Be Insignia delivered our SaaS MVP in six weeks and the quality held up as
                  we scaled to thousands of users.&rdquo;
                </blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden="true">
                    SM
                  </span>
                  <span>
                    <strong>Sara Malik</strong>Founder, FinLedger
                  </span>
                </figcaption>
              </figure>
              <figure className="card quote reveal d1">
                <div className="stars" aria-hidden="true">
                  ★★★★★
                </div>
                <blockquote>
                  &ldquo;They rebuilt our internal tools and integrated three APIs we&rsquo;d
                  struggled with for years. Manual work dropped sharply.&rdquo;
                </blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden="true">
                    DA
                  </span>
                  <span>
                    <strong>Daniyal Ahmed</strong>COO, Meridian Logistics
                  </span>
                </figcaption>
              </figure>
              <figure className="card quote reveal d2">
                <div className="stars" aria-hidden="true">
                  ★★★★★
                </div>
                <blockquote>
                  &ldquo;A genuinely professional partner. Clear communication, realistic
                  timelines, and a mobile app our customers love.&rdquo;
                </blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden="true">
                    AK
                  </span>
                  <span>
                    <strong>Ayesha Khan</strong>Product Lead, Nomad Retail
                  </span>
                </figcaption>
              </figure>
              <figure className="card quote reveal d3">
                <div className="stars" aria-hidden="true">
                  ★★★★★
                </div>
                <blockquote>
                  &ldquo;Our SEO and new site doubled inbound leads in a quarter — build and
                  marketing handled as one team.&rdquo;
                </blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden="true">
                    HT
                  </span>
                  <span>
                    <strong>Hamza Tariq</strong>Founder, Bloom &amp; Co
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <div className="cta-band reveal">
              <p className="eyebrow">Let&rsquo;s build something</p>
              <h2 className="h2">Ready to start? Your first consultation is free.</h2>
              <p className="lead">
                Tell us about your product and we&rsquo;ll come back with a clear plan, timeline
                and estimate — no obligation.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact">
                  Book a Free Consultation
                </Link>
                <Link className="btn btn--ghost" href="/portfolio">
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
