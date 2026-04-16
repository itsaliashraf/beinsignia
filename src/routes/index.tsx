import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Be Insignia — Branding & Digital Strategy Agency" },
      {
        name: "description",
        content:
          "Be Insignia builds iconic brands through strategy, identity, and digital experience. A futuristic, tech-first agency.",
      },
      { property: "og:title", content: "Be Insignia — Build Brands That Mean Something" },
      {
        property: "og:description",
        content: "Strategy. Identity. Digital. We craft brands that lead.",
      },
    ],
  }),
  component: Landing,
});

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#why" },
  { label: "About", href: "#process" },
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
    title: "Brand Identity",
    desc: "Logos, systems, and visual languages engineered to be unmistakable across every touchpoint.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="14" />
        <circle cx="24" cy="24" r="6" />
        <path d="M24 4v8M24 36v8M4 24h8M36 24h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Digital Strategy",
    desc: "Positioning, messaging, and growth frameworks built on data — not guesswork.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 38L18 22l8 8 16-20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 10h12v12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Web & Tech",
    desc: "High-performance websites, products, and AI automations that scale with ambition.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="8" width="36" height="28" rx="2" />
        <path d="M6 16h36M14 24l-4 4 4 4M22 32l4-12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const STATS = [
  { k: "3+", v: "Years Experience" },
  { k: "40+", v: "Brands Shaped" },
  { k: "AI", v: "Tech-First Approach" },
  { k: "01", v: "Strategy Before Design" },
];

const PROCESS = [
  { n: "01", t: "Discover", d: "Audit, research, deep listening." },
  { n: "02", t: "Strategize", d: "Positioning and roadmap." },
  { n: "03", t: "Design", d: "Identity and digital systems." },
  { n: "04", t: "Launch", d: "Ship, measure, iterate." },
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
  const [email, setEmail] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-black text-lg tracking-[0.2em]">
            BE<span className="text-primary">.</span>INSIGNIA
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm font-sub tracking-[0.15em] uppercase">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-muted-foreground hover:text-primary transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setNavOpen((v) => !v)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {navOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-6 py-4 flex flex-col gap-4 font-sub uppercase tracking-[0.15em] text-sm">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setNavOpen(false)} className="text-muted-foreground hover:text-primary">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/30 rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
          <div className="max-w-4xl">
            <p className="font-sub uppercase tracking-[0.4em] text-xs text-primary mb-8 reveal">
              ◆ Branding · Strategy · Digital
            </p>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight reveal">
              We Build <br />
              <span className="text-primary text-glow">Brands</span> That <br />
              Mean Something.
            </h1>
            <p className="mt-8 max-w-xl font-sub text-lg text-muted-foreground reveal">
              A futuristic studio for strategy, identity, and digital experience —
              engineered for brands ready to lead, not follow.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 reveal">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-sub font-medium uppercase tracking-[0.2em] text-sm hover:bg-primary/90 transition-all"
              >
                Start a Project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 border border-border px-8 py-4 font-sub font-medium uppercase tracking-[0.2em] text-sm hover:border-primary hover:text-primary transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-6 overflow-hidden bg-card">
        <div className="flex marquee-track whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {MARQUEE.map((m) => (
                <span key={`${i}-${m}`} className="font-display font-bold text-2xl md:text-4xl px-8 flex items-center gap-8 text-foreground/80">
                  {m}
                  <span className="text-primary text-3xl">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 reveal">
            <p className="font-sub uppercase tracking-[0.4em] text-xs text-primary mb-4">— Services</p>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-tight max-w-3xl">
              What We Craft.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="reveal group relative p-10 border border-border bg-card hover:border-primary transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-primary mb-8">{s.icon}</div>
                <h3 className="font-display font-bold text-2xl mb-4">{s.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="absolute top-6 right-6 font-sub text-xs tracking-[0.2em] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-32 px-6 lg:px-10 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 reveal">
            <p className="font-sub uppercase tracking-[0.4em] text-xs text-primary mb-4">— Why Us</p>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-tight max-w-3xl">
              Built Different.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {STATS.map((s, i) => (
              <div
                key={s.v}
                className="reveal bg-background p-10 hover:bg-card transition-colors"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="font-display font-black text-5xl md:text-6xl text-primary mb-4 text-glow">
                  {s.k}
                </div>
                <div className="font-sub uppercase tracking-[0.2em] text-sm text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-32 px-6 lg:px-10 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 reveal">
            <p className="font-sub uppercase tracking-[0.4em] text-xs text-primary mb-4">— Process</p>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-tight max-w-3xl">
              Discover. Strategize. <br />
              Design. <span className="text-primary">Launch.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {PROCESS.map((p, i) => (
              <div key={p.n} className="reveal relative" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="border-t border-primary/40 pt-6">
                  <div className="font-display font-black text-primary text-sm tracking-[0.3em] mb-6">
                    {p.n}
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-3">{p.t}</h3>
                  <p className="font-body text-muted-foreground text-sm">{p.d}</p>
                </div>
                {i < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute top-7 -right-3 text-primary/60">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6 lg:px-10 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 radial-glow opacity-70" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-5xl mx-auto text-center">
          <p className="font-sub uppercase tracking-[0.4em] text-xs text-primary mb-6 reveal">
            ◆ Let's Build
          </p>
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] mb-10 reveal">
            Ready to Build <br />
            Something <span className="text-primary text-glow">Iconic?</span>
          </h2>
          <p className="font-sub text-lg text-muted-foreground max-w-xl mx-auto mb-12 reveal">
            Drop your email. We'll respond within 24 hours with next steps.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) {
                alert(`Thanks! We'll be in touch at ${email}`);
                setEmail("");
              }
            }}
            className="reveal flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-card border border-border px-6 py-4 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-4 font-sub font-medium uppercase tracking-[0.2em] text-sm hover:bg-primary/90 transition-all"
            >
              Get Started →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-12">
            <div>
              <a href="#top" className="font-display font-black text-2xl tracking-[0.2em]">
                BE<span className="text-primary">.</span>INSIGNIA
              </a>
              <p className="mt-4 font-sub text-muted-foreground max-w-sm">
                Strategy. Identity. Digital. Crafted for brands that refuse to blend in.
              </p>
            </div>
            <div className="flex gap-4">
              {["IG", "X", "LI", "BE"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-11 h-11 border border-border flex items-center justify-center font-sub text-xs tracking-[0.15em] text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 pt-8 border-t border-border font-sub text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <p>© 2025 Be Insignia. All rights reserved.</p>
            <p>Crafted in the Future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
