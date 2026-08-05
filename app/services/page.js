import Link from "next/link";

export const metadata = {
  title: "Services — Custom Software, Web, Mobile, SaaS & AI Development | Be Insignia",
  description:
    "Explore Be Insignia's software development services: custom software, web and mobile app development, SaaS, AI solutions, UI/UX design, cloud, DevOps and more. Book a free consultation.",
  keywords:
    "custom software development, web development services, mobile app development, SaaS development, AI development services, UI UX design services, cloud application development, DevOps, API integration",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Software Development Services | Be Insignia",
    description: "20 specialised services across custom software, web, mobile, SaaS, AI, cloud and more.",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Software Development",
  provider: {
    "@type": "Organization",
    name: "Be Insignia",
    email: "ali.ashraf4915@gmail.com",
    telephone: "+92-322-4561875",
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Solutions" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does custom software development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project is scoped individually. After a free consultation we provide a fixed estimate and timeline based on your requirements, from lightweight MVPs to enterprise platforms.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build an MVP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most MVPs reach a working, testable state within about six weeks, depending on scope and integrations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer software maintenance, monitoring and technical support, plus continued iteration as your product grows.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with our existing team and codebase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We integrate with in-house teams, extend existing systems and handle API integration and digital transformation for legacy software.",
      },
    },
  ],
};

const SERVICES = [
  { title: "Custom Software Development", desc: "Bespoke platforms engineered around your exact workflows and business logic.", icon: <path d="M8 6l-5 6 5 6M16 6l5 6-5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /> },
  { title: "Web Development", desc: "Fast, accessible, SEO-ready web apps built on modern full-stack foundations.", icon: <><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M3 8h18M8 21h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></> },
  { title: "Mobile App Development", desc: "Native and cross-platform iOS and Android apps users keep coming back to.", icon: <><rect x="7" y="2" width="10" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.6" /><path d="M11 18h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></> },
  { title: "SaaS Development", desc: "Multi-tenant, subscription-ready platforms built to scale from launch.", icon: <path d="M6 19a4 4 0 010-8 6 6 0 0111.6-1.6A4.5 4.5 0 0117 19H6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /> },
  { title: "AI Solutions", desc: "Automation, assistants and data intelligence powered by practical AI.", icon: <><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></> },
  { title: "UI/UX Design", desc: "Research-led product design that makes complex software feel effortless.", icon: <><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.6" /></> },
  { title: "MVP Development", desc: "A credible, testable product in weeks so you can validate with real users.", icon: <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 21l-4.9 2.6.9-5.5-4-3.9L9.5 8 12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /> },
  { title: "API Integration", desc: "Connect payments, CRMs and third-party systems with reliable, secure APIs.", icon: <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /> },
  { title: "Cloud Solutions", desc: "Cloud-native architecture and cloud application development that scales on demand.", icon: <><path d="M6 16a4 4 0 010-8 5 5 0 019.6-1.4A3.5 3.5 0 0117 16H6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M12 12v6M9.5 15.5L12 18l2.5-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></> },
  { title: "E-commerce Development", desc: "Conversion-focused storefronts and checkout flows built to sell.", icon: <><circle cx="9" cy="21" r="1.5" fill="currentColor" /><circle cx="18" cy="21" r="1.5" fill="currentColor" /><path d="M3 4h2l2 12h11l2-8H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></> },
  { title: "CMS Development", desc: "Flexible content platforms your team can update without touching code.", icon: <><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M7 8h10M7 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></> },
  { title: "DevOps", desc: "CI/CD pipelines, infrastructure-as-code and automated, repeatable deployments.", icon: <><path d="M4 12a8 8 0 0116 0M4 12a8 8 0 0016 0" stroke="currentColor" strokeWidth="1.6" /><path d="M12 4v16" stroke="currentColor" strokeWidth="1.6" /></> },
  { title: "QA & Testing", desc: "Automated and manual testing that catches issues before your users do.", icon: <><path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /></> },
  { title: "Software Maintenance", desc: "Proactive updates, monitoring and fixes to keep systems healthy.", icon: <><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" /></> },
  { title: "IT Consulting", desc: "Strategic guidance on architecture, tooling and technology decisions.", icon: <><path d="M12 3a9 9 0 100 18 9 9 0 000-18z" stroke="currentColor" strokeWidth="1.6" /><path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></> },
  { title: "Digital Transformation", desc: "Modernise legacy systems and processes for a faster, data-driven business.", icon: <path d="M4 20l6-6M14 4l6 6M9 3l12 12-6 6L3 9z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /> },
  { title: "Automation Solutions", desc: "Replace repetitive manual work with workflows that run themselves.", icon: <path d="M12 2v6M12 22v-4M4 6l3 3M17 15l3 3M2 12h6M22 12h-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /> },
  { title: "Product Design", desc: "End-to-end product thinking, from user research to a polished design system.", icon: <><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="M8 8h8v8H8z" stroke="currentColor" strokeWidth="1.6" /></> },
  { title: "Database Development", desc: "Well-modelled, performant databases that keep your data trustworthy.", icon: <><ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.6" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" stroke="currentColor" strokeWidth="1.6" /></> },
  { title: "Technical Support", desc: "Responsive support so your team and your customers are never left waiting.", icon: <path d="M12 3a9 9 0 00-9 9v4a2 2 0 002 2h2v-6H5a7 7 0 0114 0h-2v6h2a2 2 0 002-2v-4a9 9 0 00-9-9z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /> },
  { title: "SEO Optimization", desc: "Technical and on-page SEO that helps the right customers find you on Google.", icon: <><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" /><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></> },
  { title: "Digital Marketing", desc: "Performance campaigns, social and content that turn traffic into qualified leads.", icon: <path d="M3 11l16-7-4 16-4-5-8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /> },
];

const REVEAL_DELAYS = ["", "d1", "d2"];

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main id="main">
        <section className="page-head">
          <div className="container">
            <ol className="breadcrumb" aria-label="Breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Services</li>
            </ol>
            <div className="split split--wide-left">
              <h1 className="display reveal">
                Everything you need to design, build and scale software.
              </h1>
              <div className="reveal d1">
                <p className="lead">
                  Twenty-two specialised software development and growth services under one roof
                  — so you can move from idea to production without stitching together five
                  different vendors.
                </p>
                <div className="btn-row" style={{ marginTop: "var(--space-4)" }}>
                  <Link className="btn btn--primary" href="/pricing">
                    Get a price estimate
                  </Link>
                  <Link className="btn btn--ghost" href="/contact">
                    Book a consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: "var(--space-4)" }}>
          <div className="container">
            <div className="grid grid-3">
              {SERVICES.map((svc, i) => (
                <article className={`card card--link reveal ${REVEAL_DELAYS[i % 3]}`} key={svc.title}>
                  <div className="card__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      {svc.icon}
                    </svg>
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section">
          <div className="container">
            <div className="split split--wide-left" style={{ marginBottom: "var(--space-5)" }}>
              <div className="reveal">
                <p className="eyebrow">Why Be Insignia</p>
                <h2 className="h2">One partner instead of many trade-offs.</h2>
              </div>
              <p className="lead reveal d1">
                How a full-stack partner compares to the usual alternatives when you need software
                built and kept alive.
              </p>
            </div>
            <div className="table-wrap reveal">
              <table className="compare">
                <caption
                  className="text-muted"
                  style={{ textAlign: "left", padding: "12px 20px", fontSize: "13px" }}
                >
                  Comparison of common software delivery options
                </caption>
                <thead>
                  <tr>
                    <th scope="col">What matters</th>
                    <th scope="col" className="is-us">
                      Be Insignia
                    </th>
                    <th scope="col">Freelancers</th>
                    <th scope="col">In-house hire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Full-stack team under one roof</th>
                    <td className="is-us">
                      <span className="yes">Yes</span>
                    </td>
                    <td className="no">Rarely</td>
                    <td className="no">Costly</td>
                  </tr>
                  <tr>
                    <th scope="row">Design, engineering &amp; DevOps together</th>
                    <td className="is-us">
                      <span className="yes">Yes</span>
                    </td>
                    <td className="no">No</td>
                    <td className="no">Partial</td>
                  </tr>
                  <tr>
                    <th scope="row">Ships an MVP in ~6 weeks</th>
                    <td className="is-us">
                      <span className="yes">Yes</span>
                    </td>
                    <td>Varies</td>
                    <td className="no">Months to staff</td>
                  </tr>
                  <tr>
                    <th scope="row">Ongoing maintenance &amp; support</th>
                    <td className="is-us">
                      <span className="yes">Yes</span>
                    </td>
                    <td className="no">Uncertain</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th scope="row">Scales up or down on demand</th>
                    <td className="is-us">
                      <span className="yes">Yes</span>
                    </td>
                    <td>Limited</td>
                    <td className="no">Slow</td>
                  </tr>
                  <tr>
                    <th scope="row">Fixed point of contact</th>
                    <td className="is-us">
                      <span className="yes">Yes</span>
                    </td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--lg">
          <div className="container">
            <div className="split split--wide-left" style={{ marginBottom: "var(--space-5)" }}>
              <div className="reveal">
                <p className="eyebrow">Good to know</p>
                <h2 className="h2">Questions we hear before every project.</h2>
              </div>
              <p className="lead reveal d1">
                Still unsure about something? Your free consultation is the fastest way to get a
                straight answer.
              </p>
            </div>
            <div className="faq">
              <details open className="reveal">
                <summary>
                  How much does custom software development cost?
                  <span className="plus" aria-hidden="true"></span>
                </summary>
                <p>
                  Every project is scoped individually. After a free consultation we give you a
                  fixed estimate and timeline based on your requirements — from lightweight MVPs
                  for entrepreneurs to enterprise-grade platforms.
                </p>
              </details>
              <details className="reveal">
                <summary>
                  How long does it take to build an MVP?
                  <span className="plus" aria-hidden="true"></span>
                </summary>
                <p>
                  Most MVPs reach a working, testable state in around six weeks, depending on
                  scope and integrations. We prioritise ruthlessly so you can get in front of real
                  users quickly.
                </p>
              </details>
              <details className="reveal">
                <summary>
                  Do you provide support after launch?
                  <span className="plus" aria-hidden="true"></span>
                </summary>
                <p>
                  Yes. We offer software maintenance, monitoring and technical support, plus
                  continued iteration and new features as your product grows.
                </p>
              </details>
              <details className="reveal">
                <summary>
                  Can you work with our existing team and codebase?
                  <span className="plus" aria-hidden="true"></span>
                </summary>
                <p>
                  Absolutely. We integrate with in-house teams, extend existing systems, and
                  handle API integration and digital transformation for legacy software.
                </p>
              </details>
              <details className="reveal">
                <summary>
                  Which technologies do you build with?
                  <span className="plus" aria-hidden="true"></span>
                </summary>
                <p>
                  We&rsquo;re full-stack and pragmatic — choosing modern, well-supported web,
                  mobile, cloud and AI technologies based on what your product actually needs, not
                  what&rsquo;s fashionable.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cta-band reveal">
              <p className="eyebrow">Get started</p>
              <h2 className="h2">Not sure which service you need? Let&rsquo;s figure it out together.</h2>
              <p className="lead">
                Book a free consultation and we&rsquo;ll recommend the right approach for your
                goals and budget.
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
