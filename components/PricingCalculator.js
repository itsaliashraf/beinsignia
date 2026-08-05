"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const SERVICES = [
  { value: "web", label: "Web Development", base: 25000, per: 6000 },
  { value: "custom", label: "Custom Software", base: 120000, per: 15000 },
  { value: "mobile", label: "Mobile App", base: 90000, per: 12000 },
  { value: "saas", label: "SaaS Platform", base: 180000, per: 18000 },
  { value: "ai", label: "AI Solution", base: 150000, per: 15000 },
  { value: "ecom", label: "E-commerce", base: 60000, per: 9000 },
  { value: "seo", label: "SEO & Marketing", base: 25000, per: 4000 },
];

const COMPLEXITIES = [
  { value: "standard", label: "Standard", mult: 1 },
  { value: "advanced", label: "Advanced", mult: 1.4 },
  { value: "enterprise", label: "Enterprise", mult: 1.9 },
];

const ADDONS = [
  { value: "UI/UX design", label: "UI/UX Design", add: 20000 },
  { value: "API integrations", label: "API Integrations", add: 25000 },
  { value: "Cloud & DevOps", label: "Cloud & DevOps", add: 30000 },
  { value: "QA & testing", label: "QA & Testing", add: 18000 },
];

function money(n) {
  return "Rs " + (Math.round(n / 1000) * 1000).toLocaleString("en-US");
}

export default function PricingCalculator() {
  const [service, setService] = useState("web");
  const [pages, setPages] = useState(8);
  const [complexity, setComplexity] = useState("standard");
  const [addons, setAddons] = useState([]);

  const toggleAddon = (value) => {
    setAddons((prev) => (prev.includes(value) ? prev.filter((a) => a !== value) : [...prev, value]));
  };

  const result = useMemo(() => {
    const svc = SERVICES.find((s) => s.value === service);
    const cx = COMPLEXITIES.find((c) => c.value === complexity);
    const addonDefs = ADDONS.filter((a) => addons.includes(a.value));
    const addonsTotal = addonDefs.reduce((sum, a) => sum + a.add, 0);

    const scope = svc.base + svc.per * pages;
    const subtotal = scope * cx.mult + addonsTotal;
    const low = subtotal;
    const high = subtotal * 1.3;

    const weeks = Math.max(3, Math.round((pages * cx.mult) / 3) + addonDefs.length);

    return {
      svc,
      cx,
      addonDefs,
      addonsTotal,
      scope,
      low,
      high,
      timeStr: `${weeks}–${weeks + 3} weeks`,
    };
  }, [service, pages, complexity, addons]);

  const pct = ((pages - 1) / (40 - 1)) * 100;

  return (
    <div className="pricing-grid">
      {/* CONFIG */}
      <div className="panel reveal" style={{ padding: "var(--space-5)" }}>
        <form className="price-config" aria-label="Project estimate calculator">
          <div className="price-block">
            <h3>1 · Choose a service</h3>
            <div className="opt-grid" role="radiogroup" aria-label="Service">
              {SERVICES.map((s) => (
                <label className="opt" key={s.value}>
                  <input
                    type="radio"
                    name="service"
                    value={s.value}
                    checked={service === s.value}
                    onChange={() => setService(s.value)}
                  />
                  <span>{s.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="price-block">
            <h3 id="pages-label">2 · Number of pages / screens</h3>
            <div className="slider-wrap">
              <div className="slider-head">
                <span>Scope</span>
                <span className="val">
                  <span>{pages >= 40 ? "40+" : pages}</span> pages
                </span>
              </div>
              <input
                className="slider"
                type="range"
                min="1"
                max="40"
                step="1"
                value={pages}
                aria-labelledby="pages-label"
                aria-valuetext={`${pages} pages`}
                onChange={(e) => setPages(Number(e.target.value))}
                style={{ "--fill": `${pct}%` }}
              />
              <div className="slider-ticks">
                <span>1</span>
                <span>10</span>
                <span>20</span>
                <span>30</span>
                <span>40+</span>
              </div>
            </div>
          </div>

          <div className="price-block">
            <h3>3 · Complexity</h3>
            <div className="opt-grid" role="radiogroup" aria-label="Complexity">
              {COMPLEXITIES.map((c) => (
                <label className="opt" key={c.value}>
                  <input
                    type="radio"
                    name="complexity"
                    value={c.value}
                    checked={complexity === c.value}
                    onChange={() => setComplexity(c.value)}
                  />
                  <span>{c.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="price-block">
            <h3>4 · Add-ons</h3>
            <div className="opt-grid">
              {ADDONS.map((a) => (
                <label className="opt opt--check" key={a.value}>
                  <input
                    type="checkbox"
                    name="addon"
                    value={a.value}
                    checked={addons.includes(a.value)}
                    onChange={() => toggleAddon(a.value)}
                  />
                  <span>{a.label}</span>
                </label>
              ))}
            </div>
          </div>
        </form>
      </div>

      {/* ESTIMATE */}
      <aside className="estimate reveal d1" aria-live="polite">
        <p className="eyebrow">Your estimate</p>
        <div className="estimate__num">
          {money(result.low)} – {money(result.high)}
        </div>
        <p className="estimate__sub">{result.svc.label} · one-time project</p>
        <ul className="estimate__list">
          <li>
            <span>Base &amp; scope</span>
            <span>{money(result.scope)}</span>
          </li>
          <li>
            <span>Complexity</span>
            <span>
              {result.cx.label}
              {result.cx.mult > 1 ? ` (×${result.cx.mult})` : ""}
            </span>
          </li>
          <li>
            <span>Add-ons</span>
            <span>
              {result.addonDefs.length
                ? `${result.addonDefs.map((a) => a.label).join(", ")} (${money(result.addonsTotal)})`
                : "None"}
            </span>
          </li>
          <li>
            <span>Est. timeline</span>
            <span>{result.timeStr}</span>
          </li>
        </ul>
        <Link className="btn btn--primary" href="/contact">
          Book a Free Consultation
        </Link>
        <small>
          Indicative only. Final scope, timeline and price are confirmed in your free
          consultation. Maintenance retainers are quoted separately.
        </small>
      </aside>
    </div>
  );
}
