import Link from "next/link";
import { ArrowUpRight, EnvelopeSimple, MapPin, Phone, User } from "@phosphor-icons/react/dist/ssr";
import Logo from "@/components/ui/Logo";
import { services, site } from "@/lib/site";

const company = [
  { label: "About", href: "/about" },
  { label: "How we work", href: "/#process" },
  { label: "GBP Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-canvas">
      <div className="container-x grid grid-cols-1 gap-12 pb-10 pt-20 md:grid-cols-12 md:gap-8">
        <div className="flex flex-col gap-6 md:col-span-4">
          <Logo />
          <p className="max-w-[38ch] text-[15px] leading-relaxed text-fg-muted">
            A digital marketing and software development company in {site.city}, {site.country}. SEO, paid ads, websites and
            custom apps, run by one team.
          </p>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 border-b border-line-strong pb-1 text-[15px] font-medium transition-colors hover:border-accent"
          >
            Get a free consultation
            <ArrowUpRight size={16} className="transition-transform duration-500 ease-out-expo group-hover:rotate-45" aria-hidden="true" />
          </Link>
        </div>

        <nav aria-label="Services" className="md:col-span-3">
          <h2 className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">Services</h2>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`} className="text-[15px] text-fg-muted transition-colors hover:text-fg">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="md:col-span-2">
          <h2 className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">Company</h2>
          <ul className="flex flex-col gap-2.5">
            {company.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-[15px] text-fg-muted transition-colors hover:text-fg">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">Contact</h2>
          <ul className="flex flex-col gap-3 text-[15px] text-fg-muted">
            <li className="inline-flex items-center gap-2">
              <User size={16} className="shrink-0" aria-hidden="true" />
              {site.owner}, {site.ownerTitle}
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-start gap-2 [overflow-wrap:anywhere] transition-colors hover:text-fg">
                <EnvelopeSimple size={16} className="mt-1 shrink-0" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-fg">
                <Phone size={16} className="shrink-0" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin size={16} className="shrink-0" aria-hidden="true" />
              {site.city}, {site.country}
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x" aria-hidden="true">
        <p className="select-none whitespace-nowrap text-center text-[clamp(3.5rem,15.5vw,15rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-outline">
          Click<span className="font-serif font-normal italic">&amp;</span>Code
        </p>
      </div>

      <div className="container-x flex flex-col gap-2 border-t border-line py-6 text-[13px] text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {site.name}. All rights reserved.</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em]">Marketing × Technology · {site.city}</p>
      </div>
    </footer>
  );
}
