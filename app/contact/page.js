import Link from "next/link";

export const metadata = {
  title: "Contact Be Insignia — Book a Free Software Consultation | Lahore",
  description:
    "Get in touch with Be Insignia in Lahore. Book a free consultation for custom software, web, mobile app, SaaS or AI development. Email or call us today.",
  keywords:
    "software development company Lahore, book free consultation, custom software development contact, hire software developers",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Be Insignia",
    description: "Book a free software development consultation with Be Insignia in Lahore.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Be Insignia",
  url: "/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Be Insignia",
    email: "ali.ashraf4915@gmail.com",
    telephone: "+92-322-4561875",
    address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "ali.ashraf4915@gmail.com",
      telephone: "+92-322-4561875",
    },
  },
};

export default function ContactPage() {
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
              <li>Contact</li>
            </ol>
            <div className="split split--wide-left">
              <h1 className="display reveal">Book your free consultation.</h1>
              <p className="lead reveal d1">
                Tell us about your product or challenge and we&rsquo;ll come back within one
                business day with a clear next step — a plan, a timeline, and an honest estimate.
                No obligation.
              </p>
            </div>
          </div>
        </section>

        {/* FORM (full width) */}
        <section className="section" style={{ paddingTop: "var(--space-4)" }}>
          <div className="container">
            <div className="card reveal" style={{ padding: "var(--space-5)" }}>
              <h2
                className="h3"
                id="consultation-form"
                style={{ fontSize: "1.5rem", marginBottom: "var(--space-4)" }}
              >
                Send us the details
              </h2>
              <form
                className="form"
                action="mailto:ali.ashraf4915@gmail.com"
                method="post"
                encType="text/plain"
                aria-label="Consultation request form"
              >
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">
                      Full name{" "}
                      <span className="req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input type="text" id="name" name="name" autoComplete="name" required placeholder="Ali Ashraf" />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Your business (optional)"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="email">
                      Email{" "}
                      <span className="req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input type="email" id="email" name="email" autoComplete="email" required placeholder="you@company.com" />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      placeholder="03XX XXXXXXX"
                      pattern="[0-9+ ()-]{7,}"
                    />
                    <span className="hint">Digits, spaces and + only.</span>
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="service">
                      What can we help with?{" "}
                      <span className="req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <select id="service" name="service" required defaultValue="">
                      <option value="" disabled>
                        Choose a service…
                      </option>
                      <option>Custom Software Development</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>SaaS Development</option>
                      <option>AI Solutions</option>
                      <option>UI/UX Design</option>
                      <option>MVP Development</option>
                      <option>Cloud &amp; DevOps</option>
                      <option>Digital Transformation</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="budget">Estimated budget</label>
                    <select id="budget" name="budget" defaultValue="">
                      <option value="" disabled>
                        Optional
                      </option>
                      <option>Under $5,000</option>
                      <option>$5,000 – $15,000</option>
                      <option>$15,000 – $50,000</option>
                      <option>$50,000+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="message">
                    Tell us about your project{" "}
                    <span className="req" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    placeholder="What are you building, who is it for, and what would success look like?"
                  ></textarea>
                </div>
                <div className="field">
                  <label className="checkbox-row">
                    <input type="checkbox" name="consent" required />
                    <span>
                      I agree to be contacted about my enquiry.{" "}
                      <span className="req" aria-hidden="true">
                        *
                      </span>
                    </span>
                  </label>
                </div>
                <div>
                  <button type="submit" className="btn btn--primary">
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
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* INFO: Reach us directly (LEFT) + What happens next (RIGHT) */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="contact-grid">
              <div className="card reveal" style={{ padding: "var(--space-5)" }}>
                <p className="eyebrow">Reach us directly</p>
                <h2 className="h3" style={{ fontSize: "1.4rem", marginBottom: "var(--space-4)" }}>
                  Prefer to talk first?
                </h2>
                <ul className="contact-list">
                  <li>
                    <span className="ic" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>
                      <strong>Email</strong>
                      <a href="mailto:ali.ashraf4915@gmail.com">ali.ashraf4915@gmail.com</a>
                    </span>
                  </li>
                  <li>
                    <span className="ic" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>
                      <strong>Phone</strong>
                      <a href="tel:+923224561875">0322 4561875</a>
                    </span>
                  </li>
                  <li>
                    <span className="ic" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </span>
                    <span>
                      <strong>Studio</strong>Lahore, Pakistan
                    </span>
                  </li>
                  <li>
                    <span className="ic" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>
                      <strong>Response time</strong>Within one business day
                    </span>
                  </li>
                </ul>
                <hr className="divider" />
                <div className="socials">
                  <a href="#" aria-label="Be Insignia on LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14.3V21h-4v-5.9c0-1.4-.02-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21h-4z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Be Insignia on X">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.5 3h3l-7 8 8.2 10h-6.4l-5-6.1L8 21H5l7.4-8.4L4.6 3H11l4.5 5.6zm-1 16h1.7L8.1 4.7H6.3z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Be Insignia on GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="card reveal d1" style={{ padding: "var(--space-5)" }}>
                <p className="eyebrow">What happens next</p>
                <h2 className="h3" style={{ fontSize: "1.4rem", marginBottom: "var(--space-4)" }}>
                  Three simple steps
                </h2>
                <ol className="timeline">
                  <li className="timeline__item">
                    <span className="timeline__marker">1</span>
                    <div className="timeline__body">
                      <h3 style={{ fontSize: "1.05rem" }}>We review your enquiry</h3>
                      <p>and reply within one business day.</p>
                    </div>
                  </li>
                  <li className="timeline__item">
                    <span className="timeline__marker">2</span>
                    <div className="timeline__body">
                      <h3 style={{ fontSize: "1.05rem" }}>Free 30-minute call</h3>
                      <p>to understand your goals and constraints.</p>
                    </div>
                  </li>
                  <li className="timeline__item">
                    <span className="timeline__marker">3</span>
                    <div className="timeline__body">
                      <h3 style={{ fontSize: "1.05rem" }}>A clear proposal</h3>
                      <p>with scope, timeline and a fixed estimate.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
