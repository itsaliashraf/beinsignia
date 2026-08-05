import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <span className="brand__mark" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 3l11 6.5v13L16 29 5 22.5v-13L16 3z"
                    stroke="#2ee6c8"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path d="M16 10l5.5 3.2v6.4L16 22.9l-5.5-3.3v-6.4L16 10z" fill="#2ee6c8" />
                </svg>
              </span>
              Be Insignia
            </Link>
            <p>
              A custom software development company in Lahore building web, mobile, SaaS and AI
              solutions for ambitious teams.
            </p>
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
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/portfolio">Projects</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/services">Custom Software</Link>
              </li>
              <li>
                <Link href="/services">Web Development</Link>
              </li>
              <li>
                <Link href="/services">Mobile Apps</Link>
              </li>
              <li>
                <Link href="/services">SaaS Development</Link>
              </li>
              <li>
                <Link href="/services">AI Solutions</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:ali.ashraf4915@gmail.com">ali.ashraf4915@gmail.com</a>
              </li>
              <li>
                <a href="tel:+923224561875">0322 4561875</a>
              </li>
              <li>Lahore, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Be Insignia. All rights reserved.</span>
          <span>Custom software, web, mobile, SaaS &amp; AI development.</span>
        </div>
      </div>
    </footer>
  );
}
