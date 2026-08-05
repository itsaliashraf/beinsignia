"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const ctaHref = pathname === "/contact" ? "#consultation-form" : "/contact";

  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav" aria-label="Primary">
          <Link className="brand" href="/">
            <span className="brand__mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 3l11 6.5v13L16 29 5 22.5v-13L16 3z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path d="M16 10l5.5 3.2v6.4L16 22.9l-5.5-3.3v-6.4L16 10z" fill="currentColor" />
              </svg>
            </span>
            Be Insignia
          </Link>
          <input
            type="checkbox"
            id="nav-toggle"
            className="nav__toggle-cb"
            aria-hidden="true"
            tabIndex={-1}
            defaultChecked={false}
          />
          <label htmlFor="nav-toggle" className="nav__toggle" aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul className="nav__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="nav__cta">
              <Link className="btn btn--primary" href={ctaHref}>
                Book a Free Consultation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
