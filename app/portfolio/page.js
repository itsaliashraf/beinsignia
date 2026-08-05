import Link from "next/link";

export const metadata = {
  title: "Projects — Software, Web, Mobile & SaaS Case Studies | Be Insignia",
  description:
    "See how Be Insignia builds custom software, web apps, mobile apps, SaaS platforms and AI solutions for startups, SMEs and enterprises. Real projects, real outcomes.",
  keywords:
    "software development portfolio, custom software case studies, mobile app development, SaaS development, web development services",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Projects | Be Insignia",
    description:
      "A selection of software, web, mobile and SaaS products we've designed and shipped.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Be Insignia Projects",
  url: "/portfolio",
  about: "Software development case studies across web, mobile, SaaS and AI.",
  publisher: { "@type": "Organization", name: "Be Insignia" },
};

export default function PortfolioPage() {
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
              <li>Projects</li>
            </ol>
            <div className="split split--wide-left">
              <h1 className="display reveal">Products we&rsquo;ve designed, built and shipped.</h1>
              <p className="lead reveal d1">
                A selection of software we&rsquo;ve delivered across web, mobile, SaaS and AI —
                for founders validating a first idea and enterprises modernising at scale.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: "var(--space-4)" }}>
          <div className="container">
            <div className="bento">
              {/* A: FinLedger SaaS dashboard (wide + tall) */}
              <article className="bento__item bento__item--wide reveal">
                <div className="bento__shot" aria-hidden="true">
                  <div className="mock float--slow">
                    <div className="mock__bar">
                      <div className="mock__dots">
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                      <span className="mock__ttl">FinLedger · Overview</span>
                      <span className="mock__pill">Live</span>
                    </div>
                    <div className="mock__body">
                      <div className="mock__stats">
                        <div className="mock__stat">
                          <b>$48.2k</b>
                          <span>Revenue</span>
                        </div>
                        <div className="mock__stat">
                          <b>1,204</b>
                          <span>Invoices</span>
                        </div>
                        <div className="mock__stat">
                          <b>98%</b>
                          <span>On{" "}time</span>
                        </div>
                      </div>
                      <div className="mock__chart">
                        <div className="mock__bars">
                          <i style={{ height: "42%" }}></i>
                          <i style={{ height: "64%" }}></i>
                          <i style={{ height: "82%" }}></i>
                          <i className="mut" style={{ height: "54%" }}></i>
                          <i style={{ height: "96%" }}></i>
                          <i className="mut" style={{ height: "72%" }}></i>
                          <i style={{ height: "60%" }}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bento__body">
                  <span className="bento__cat">Featured · SaaS Development</span>
                  <h3>FinLedger — SaaS accounting platform</h3>
                  <p>
                    From concept to a live, multi-tenant SaaS product in six weeks, then scaled to
                    thousands of businesses — full-stack build, cloud infrastructure and API
                    integrations.
                  </p>
                  <div className="bento__tags">
                    <span className="tag">SaaS</span>
                    <span className="tag">Cloud</span>
                    <span className="tag">API Integration</span>
                    <span className="tag">UI/UX</span>
                  </div>
                </div>
              </article>

              {/* B: Nomad Retail mobile */}
              <article className="bento__item reveal d1">
                <div className="bento__shot" aria-hidden="true">
                  <div className="mock mock--phone">
                    <div className="mock__bar">
                      <span className="mock__notch"></span>
                    </div>
                    <div className="mock__body">
                      <div className="mock__prod">
                        <div className="ph" style={{ height: "72px" }}></div>
                        <div className="ln"></div>
                        <div className="ln s"></div>
                      </div>
                      <div className="mock__row" style={{ padding: "8px 10px" }}>
                        <div className="mock__av">N</div>
                        <div className="mock__nm" style={{ fontSize: "12px" }}>
                          Add to cart
                        </div>
                        <div className="mock__meta">
                          <span className="mock__tag mock__tag--g">$29</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bento__body">
                  <span className="bento__cat">Mobile App</span>
                  <h3>Nomad Retail</h3>
                  <p>
                    A cross-platform shopping app with offline carts and personalised
                    recommendations.
                  </p>
                  <div className="bento__tags">
                    <span className="tag">iOS</span>
                    <span className="tag">Android</span>
                  </div>
                </div>
              </article>

              {/* C: HelpDesk AI chat (1x1) */}
              <article className="bento__item reveal d2">
                <div className="bento__shot" aria-hidden="true">
                  <div className="mock">
                    <div className="mock__bar">
                      <div className="mock__dots">
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                      <span className="mock__ttl">HelpDesk AI</span>
                      <span className="mock__pill">Online</span>
                    </div>
                    <div className="mock__body">
                      <div className="mock__msg mock__msg--in">How do I reset my password?</div>
                      <div className="mock__msg mock__msg--out">
                        Tap &ldquo;Forgot password&rdquo; and I&rsquo;ll send a secure link.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bento__body">
                  <span className="bento__cat">AI Solutions</span>
                  <h3>HelpDesk AI</h3>
                  <p>Support assistant that resolves routine tickets instantly.</p>
                </div>
              </article>

              {/* D: Bloom & Co e-commerce (1x1) */}
              <article className="bento__item reveal d3">
                <div className="bento__shot" aria-hidden="true">
                  <div className="mock">
                    <div className="mock__bar">
                      <div className="mock__dots">
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                      <span className="mock__ttl">Bloom &amp; Co</span>
                      <span className="mock__pill">Shop</span>
                    </div>
                    <div className="mock__body">
                      <div className="mock__prods">
                        <div className="mock__prod">
                          <div className="ph"></div>
                          <div className="ln"></div>
                          <div className="ln s"></div>
                        </div>
                        <div className="mock__prod">
                          <div className="ph"></div>
                          <div className="ln"></div>
                          <div className="ln s"></div>
                        </div>
                        <div className="mock__prod">
                          <div className="ph"></div>
                          <div className="ln"></div>
                          <div className="ln s"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bento__body">
                  <span className="bento__cat">Web &amp; E-commerce</span>
                  <h3>Bloom &amp; Co</h3>
                  <p>Headless storefront with a custom CMS.</p>
                </div>
              </article>

              {/* E: Meridian logistics table */}
              <article className="bento__item reveal">
                <div className="bento__shot" aria-hidden="true">
                  <div className="mock">
                    <div className="mock__bar">
                      <div className="mock__dots">
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                      <span className="mock__ttl">Dispatch board · Today</span>
                      <span className="mock__pill">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
                          <path
                            d="M5 12l5 5L20 7"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Synced
                      </span>
                    </div>
                    <div className="mock__body">
                      <div className="mock__row">
                        <span className="mock__idx">01</span>
                        <div className="mock__av">LH</div>
                        <div className="mock__nm">Lahore → Multan</div>
                        <div className="mock__meta">
                          <span className="mock__tag mock__tag--g">On{" "}route</span>
                        </div>
                      </div>
                      <div className="mock__row mock__row--active">
                        <span className="mock__idx">02</span>
                        <div className="mock__av">KR</div>
                        <div className="mock__nm">Karachi → Hyderabad</div>
                        <div className="mock__meta">
                          <span className="mock__tag mock__tag--y">Loading</span>
                        </div>
                      </div>
                      <div className="mock__row">
                        <span className="mock__idx">03</span>
                        <div className="mock__av">IS</div>
                        <div className="mock__nm">Islamabad → Peshawar</div>
                        <div className="mock__meta">
                          <span className="mock__tag mock__tag--g">On{" "}route</span>
                        </div>
                      </div>
                    </div>
                    <div className="mock__foot">
                      <span>
                        <b>128</b> active
                      </span>
                      <span>
                        <b>12</b> loading
                      </span>
                      <span className="mock__cta">Assign</span>
                    </div>
                  </div>
                </div>
                <div className="bento__body">
                  <span className="bento__cat">Custom Software</span>
                  <h3>Meridian — logistics operations platform</h3>
                  <p>
                    Replaced spreadsheets and three disconnected tools with one custom platform,
                    cutting manual operations work sharply.
                  </p>
                  <div className="bento__tags">
                    <span className="tag">Custom Software</span>
                    <span className="tag">Automation</span>
                    <span className="tag">API</span>
                  </div>
                </div>
              </article>

              {/* F: Vantage cloud deploy console (wide) */}
              <article className="bento__item bento__item--wide reveal d1">
                <div className="bento__shot" aria-hidden="true">
                  <div className="mock">
                    <div className="mock__bar">
                      <div className="mock__dots">
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                      <span className="mock__ttl">Vantage · Deployments</span>
                      <span className="mock__pill">Cloud</span>
                    </div>
                    <div className="mock__body">
                      <div className="mock__row">
                        <span className="mock__idx">▲</span>
                        <div className="mock__nm">
                          api-gateway{" "}
                          <span className="text-muted" style={{ fontWeight: 400 }}>
                            v2.4.1
                          </span>
                        </div>
                        <div className="mock__meta">
                          <span className="mock__tag mock__tag--g">Live</span>
                        </div>
                      </div>
                      <div className="mock__row">
                        <span className="mock__idx">▲</span>
                        <div className="mock__nm">
                          billing-service{" "}
                          <span className="text-muted" style={{ fontWeight: 400 }}>
                            v1.9.0
                          </span>
                        </div>
                        <div className="mock__meta">
                          <span className="mock__tag mock__tag--y">Deploying</span>
                        </div>
                      </div>
                      <div className="mock__row">
                        <span className="mock__idx">▲</span>
                        <div className="mock__nm">
                          web-app{" "}
                          <span className="text-muted" style={{ fontWeight: 400 }}>
                            v5.2.0
                          </span>
                        </div>
                        <div className="mock__meta">
                          <span className="mock__tag mock__tag--g">Live</span>
                        </div>
                      </div>
                    </div>
                    <div className="mock__foot">
                      <span>
                        <b>0</b> downtime
                      </span>
                      <span>
                        <b>3</b> regions
                      </span>
                      <span className="mock__cta">Ship</span>
                    </div>
                  </div>
                </div>
                <div className="bento__body">
                  <span className="bento__cat">Digital Transformation</span>
                  <h3>Vantage — legacy to cloud migration</h3>
                  <p>
                    Modernised a decade-old enterprise system onto cloud-native infrastructure with
                    zero downtime at cutover.
                  </p>
                  <div className="bento__tags">
                    <span className="tag">Cloud</span>
                    <span className="tag">DevOps</span>
                    <span className="tag">Enterprise</span>
                  </div>
                </div>
              </article>

              {/* G: SEO growth report */}
              <article className="bento__item bento__item--wide reveal d2">
                <div className="bento__shot" aria-hidden="true">
                  <div className="mock">
                    <div className="mock__bar">
                      <div className="mock__dots">
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                      <span className="mock__ttl">Search Console · Traffic</span>
                      <span className="mock__pill">SEO</span>
                    </div>
                    <div className="mock__body">
                      <div className="mock__stats">
                        <div className="mock__stat">
                          <b>+212%</b>
                          <span>Clicks</span>
                        </div>
                        <div className="mock__stat">
                          <b>#1–3</b>
                          <span>Rankings</span>
                        </div>
                        <div className="mock__stat">
                          <b>18k</b>
                          <span>Impr./day</span>
                        </div>
                      </div>
                      <div className="mock__chart">
                        <div className="mock__bars">
                          <i style={{ height: "30%" }}></i>
                          <i style={{ height: "40%" }}></i>
                          <i style={{ height: "52%" }}></i>
                          <i style={{ height: "64%" }}></i>
                          <i style={{ height: "78%" }}></i>
                          <i style={{ height: "88%" }}></i>
                          <i style={{ height: "100%" }}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bento__body">
                  <span className="bento__cat">SEO Optimization</span>
                  <h3>Rankfirst — organic growth engine</h3>
                  <p>
                    Technical SEO and content overhaul that tripled organic clicks and pushed
                    target keywords into Google&rsquo;s top three.
                  </p>
                  <div className="bento__tags">
                    <span className="tag">SEO</span>
                    <span className="tag">Content</span>
                    <span className="tag">Analytics</span>
                  </div>
                </div>
              </article>

              {/* H: Digital marketing campaign dashboard (wide) */}
              <article className="bento__item bento__item--wide reveal d3">
                <div className="bento__shot" aria-hidden="true">
                  <div className="mock">
                    <div className="mock__bar">
                      <div className="mock__dots">
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                      <span className="mock__ttl">Ads Manager · Campaigns</span>
                      <span className="mock__pill">Live</span>
                    </div>
                    <div className="mock__body">
                      <div className="mock__row">
                        <span className="mock__idx">01</span>
                        <div className="mock__av">MG</div>
                        <div className="mock__nm">Lead-gen · Meta</div>
                        <div className="mock__meta">
                          <span className="mock__tag mock__tag--g">3.8× ROAS</span>
                        </div>
                      </div>
                      <div className="mock__row mock__row--active">
                        <span className="mock__idx">02</span>
                        <div className="mock__av">GG</div>
                        <div className="mock__nm">Search · Google Ads</div>
                        <div className="mock__meta">
                          <span className="mock__tag mock__tag--g">4.1× ROAS</span>
                        </div>
                      </div>
                      <div className="mock__row">
                        <span className="mock__idx">03</span>
                        <div className="mock__av">IG</div>
                        <div className="mock__nm">Retargeting · Instagram</div>
                        <div className="mock__meta">
                          <span className="mock__tag mock__tag--y">Testing</span>
                        </div>
                      </div>
                    </div>
                    <div className="mock__foot">
                      <span>
                        <b>Rs 62</b> cost / lead
                      </span>
                      <span>
                        <b>1,940</b> leads
                      </span>
                      <span className="mock__cta">Optimize</span>
                    </div>
                  </div>
                </div>
                <div className="bento__body">
                  <span className="bento__cat">Digital Marketing</span>
                  <h3>Zephyr — performance marketing engine</h3>
                  <p>
                    Full-funnel paid social and search campaigns that cut cost-per-lead in half
                    while nearly tripling qualified leads.
                  </p>
                  <div className="bento__tags">
                    <span className="tag">Paid Ads</span>
                    <span className="tag">Social</span>
                    <span className="tag">Analytics</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="panel" style={{ padding: "var(--space-6)" }}>
              <div className="stats">
                <div className="stat reveal">
                  <div className="stat__num">
                    6<span>wk</span>
                  </div>
                  <p className="stat__label">From kickoff to a working MVP</p>
                </div>
                <div className="stat reveal d1">
                  <div className="stat__num">
                    40<span>%</span>
                  </div>
                  <p className="stat__label">Average drop in manual operations</p>
                </div>
                <div className="stat reveal d2">
                  <div className="stat__num">0</div>
                  <p className="stat__label">Downtime at enterprise cutover</p>
                </div>
                <div className="stat reveal d3">
                  <div className="stat__num">
                    98<span>%</span>
                  </div>
                  <p className="stat__label">Clients who return for the next build</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-band reveal">
              <p className="eyebrow">Your project next</p>
              <h2 className="h2">Have something in mind? Let&rsquo;s scope it together.</h2>
              <p className="lead">
                Book a free consultation and we&rsquo;ll show you exactly how we&rsquo;d approach
                your build.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact">
                  Book a Free Consultation
                </Link>
                <Link className="btn btn--ghost" href="/pricing">
                  Get a price estimate
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
