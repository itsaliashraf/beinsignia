import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Be Insignia — Branding & Digital Strategy Studio" },
      {
        name: "description",
        content:
          "Be Insignia is an editorial branding studio crafting strategy, identity, and digital experience for brands that lead.",
      },
      { property: "og:title", content: "Be Insignia — Brands of Consequence" },
      {
        property: "og:description",
        content: "Strategy. Identity. Digital. An editorial studio for brands that mean something.",
      },
    ],
  }),
  component: Landing,
});

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const MARQUEE = [
  "Brand Strategy",
  "Visual Identity",
  "Digital Experience",
  "Web Development",
  "AI Automation",
  "Growth Marketing",
];

const SERVICES = [
  {
    n: "I.",
    title: "Brand Identity",
    desc: "Marks, systems, and visual languages composed with editorial precision — designed to endure across every surface.",
  },
  {
    n: "II.",
    title: "Digital Strategy",
    desc: "Positioning, narrative, and growth architecture built on research, not rhetoric. Strategy you can defend.",
  },
  {
    n: "III.",
    title: "Web & Technology",
    desc: "Considered websites, products, and AI-driven systems engineered to scale with the ambition of the brand.",
  },
];

const STATS = [
  { k: "03+", v: "Years in Practice" },
  { k: "100%", v: "Client Focused" },
  { k: "AI", v: "Tech-First Method" },
  { k: "01", v: "Strategy Before Design" },
];

const PROCESS = [
  { n: "01", t: "Discover", d: "Audit, research, listening — the foundation." },
  { n: "02", t: "Strategize", d: "Position, narrative, and roadmap committed." },
  { n: "03", t: "Design", d: "Identity systems and digital surfaces composed." },
  { n: "04", t: "Launch", d: "Ship, measure, refine — without compromise." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Landing() {
  useReveal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden paper-grain">
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-sm border-b border-foreground/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-black text-3xl md:text-4xl tracking-tight">
            Be Insignia<span className="text-primary">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-10 text-xs font-sub uppercase tracking-[0.2em]">
            {NAV.map((n, i) => (
              <a key={n.href} href={n.href} className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                <span className="font-mono text-[10px] text-foreground/40">0{i + 1}</span>
                {n.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setNavOpen((v) => !v)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {navOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 7h18M3 17h18" />}
            </svg>
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden border-t border-foreground/15 bg-background">
            <div className="px-6 py-5 flex flex-col gap-4 font-sub uppercase tracking-[0.2em] text-xs">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setNavOpen(false)} className="text-foreground/70 hover:text-primary">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 border-b border-foreground/15">
        <div className="absolute inset-0 rule-grid opacity-60 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Editorial top meta bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-16 lg:mb-24 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60 reveal">
            <span className="hidden sm:inline">An Editorial Studio for Modern Brands</span>
            <span>Est. MMXXV</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <p className="font-mono uppercase tracking-[0.25em] text-[11px] text-primary mb-8 reveal">
                — Branding · Strategy · Digital
              </p>
              <h1 className="font-display font-black text-[14vw] lg:text-[10rem] leading-[0.88] tracking-[-0.04em] reveal">
                Brands <span className="display-italic font-normal text-primary">of</span><br />
                Consequence,<br />
                <span className="display-italic font-normal">composed</span> with<br />
                care.
              </h1>
            </div>
            <div className="lg:col-span-3 lg:pb-6 reveal">
              <div className="border-t border-foreground/40 pt-4">
                <p className="font-body text-base text-foreground/75 leading-relaxed">
                  An editorial studio practising strategy, identity, and digital experience for the brands that intend to lead — not follow.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-between bg-foreground text-background px-5 py-3 font-sub text-xs uppercase tracking-[0.25em] hover:bg-primary transition-colors"
                  >
                    Start a Project
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-between border border-foreground/40 px-5 py-3 font-sub text-xs uppercase tracking-[0.25em] hover:border-primary hover:text-primary transition-colors"
                  >
                    Read the Index
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-b border-foreground/15 py-5 overflow-hidden bg-foreground text-background">
        <div className="flex marquee-track whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {MARQUEE.map((m) => (
                <span key={`${i}-${m}`} className="font-display italic font-normal text-3xl md:text-5xl px-10 flex items-center gap-10">
                  {m}
                  <span className="text-primary">✻</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 lg:py-40 px-6 lg:px-12 border-b border-foreground/15">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-3 reveal">
              <p className="font-mono uppercase tracking-[0.25em] text-[11px] text-primary">§ Chapter One</p>
              <p className="font-mono uppercase tracking-[0.25em] text-[11px] text-foreground/50 mt-2">Services</p>
            </div>
            <div className="lg:col-span-9 reveal">
              <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
                What we <span className="display-italic font-normal">craft</span> — three disciplines,<br />
                one editorial standard.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 border-t border-foreground/30">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`reveal group relative py-12 lg:py-16 lg:px-10 ${i > 0 ? "md:border-l" : ""} border-foreground/15 hover:bg-card transition-colors`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="font-mono text-xs tracking-[0.25em] text-primary mb-8">{s.n}</div>
                <h3 className="font-display font-black text-3xl lg:text-4xl mb-6 leading-tight tracking-[-0.02em]">
                  {s.title}
                </h3>
                <p className="font-body text-foreground/70 leading-relaxed max-w-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-28 lg:py-40 px-6 lg:px-12 border-b border-foreground/15">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-3 reveal">
              <p className="font-mono uppercase tracking-[0.25em] text-[11px] text-primary">§ Chapter Two</p>
              <p className="font-mono uppercase tracking-[0.25em] text-[11px] text-foreground/50 mt-2">By the Numbers</p>
            </div>
            <div className="lg:col-span-9 reveal">
              <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
                A studio measured <span className="display-italic font-normal">not</span> in volume,<br />
                but in <span className="text-primary display-italic font-normal">consequence</span>.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-foreground/30">
            {STATS.map((s, i) => (
              <div
                key={s.v}
                className={`reveal py-12 lg:py-16 lg:px-8 ${i > 0 ? "lg:border-l" : ""} ${i % 2 === 1 ? "border-l lg:border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""} border-foreground/15`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="font-display font-black text-6xl md:text-8xl text-foreground mb-6 leading-none tracking-[-0.04em]">
                  {s.k}
                </div>
                <div className="font-mono uppercase tracking-[0.2em] text-[11px] text-foreground/60">
                  — {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-28 lg:py-40 px-6 lg:px-12 border-b border-foreground/15">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-3 reveal">
              <p className="font-mono uppercase tracking-[0.25em] text-[11px] text-primary">§ Chapter Three</p>
              <p className="font-mono uppercase tracking-[0.25em] text-[11px] text-foreground/50 mt-2">The Method</p>
            </div>
            <div className="lg:col-span-9 reveal">
              <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
                Discover. Strategize.<br />
                Design. <span className="text-primary display-italic font-normal">Launch.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-4 border-t border-foreground/30">
            {PROCESS.map((p, i) => (
              <div
                key={p.n}
                className={`reveal relative py-12 lg:py-14 lg:px-8 ${i > 0 ? "md:border-l" : ""} border-foreground/15`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-mono text-xs tracking-[0.25em] text-primary">{p.n}</span>
                  <span className="flex-1 h-px bg-foreground/20" />
                </div>
                <h3 className="font-display font-black text-3xl mb-4 tracking-[-0.02em]">{p.t}</h3>
                <p className="font-body text-foreground/70 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-28 lg:py-40 px-6 lg:px-12 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "4px 4px" }}
        />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono uppercase tracking-[0.25em] text-[11px] text-primary mb-8 reveal">
                — Correspondence
              </p>
              <h2 className="font-display font-black text-6xl md:text-8xl leading-[0.9] tracking-[-0.04em] reveal">
                Ready to build<br />
                something <span className="display-italic font-normal text-primary">iconic?</span>
              </h2>
            </div>
            <div className="lg:col-span-4 reveal">
              <p className="font-body text-background/75 mb-8 max-w-sm">
                Send a note. We respond within twenty-four hours, with measured next steps and an honest assessment.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (name && email && message) {
                    alert(`Thank you, ${name}. We'll be in touch at ${email}`);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }
                }}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="rounded-none bg-transparent border-b border-background/40 px-1 py-3 font-body text-background placeholder:text-background/40 focus:border-primary focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="rounded-none bg-transparent border-b border-background/40 px-1 py-3 font-body text-background placeholder:text-background/40 focus:border-primary focus:outline-none transition-colors"
                />
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project"
                  className="rounded-none bg-transparent border-b border-background/40 px-1 py-3 font-body text-background placeholder:text-background/40 focus:border-primary focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-between bg-primary text-primary-foreground px-5 py-3 font-sub text-xs uppercase tracking-[0.25em] hover:bg-background hover:text-foreground transition-colors"
                >
                  Send Inquiry <span>→</span>
                </button>
              </form>
              <p className="mt-6 font-body text-sm text-background/70">
                Or reach us directly — <a href="mailto:hello@beinsignia.com" className="text-primary hover:underline">hello@beinsignia.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 lg:px-12 border-t border-foreground/15">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-5">
              <a href="#top" className="font-display font-black text-3xl tracking-tight">
                Be Insignia<span className="text-primary">.</span>
              </a>
              <p className="mt-4 font-body text-foreground/70 max-w-sm">
                Strategy. Identity. Digital. An editorial studio for brands that refuse to blend in.
              </p>
            </div>
            <div className="lg:col-span-4">
              <p className="font-mono uppercase tracking-[0.25em] text-[11px] text-foreground/50 mb-4">— Index</p>
              <ul className="space-y-2 font-body text-sm">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-primary transition-colors">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <p className="font-mono uppercase tracking-[0.25em] text-[11px] text-foreground/50 mb-4">— Contact</p>
              <a href="mailto:hello@beinsignia.com" className="font-body text-sm hover:text-primary transition-colors">
                hello@beinsignia.com
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 pt-8 border-t border-foreground/20 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60">
            <p>© MMXXV — Be Insignia. All rights reserved.</p>
            <p>Composed with care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
