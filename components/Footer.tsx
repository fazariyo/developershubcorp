import Link from "next/link";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about-us" },
  { label: "Careers", href: "/careers" },
  { label: "Courses", href: "/courses" },
  { label: "Blog", href: "/blog" },
];

const COMPANY_LINKS: { label: string; href: string }[] = [
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/developershubcorp?igsh=MWFsdmZxZnB0Y2Izbw==",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1GVAk5a16B/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M13.5 22v-8.4h2.8l.42-3.25h-3.22V8.27c0-.94.26-1.58 1.6-1.58H17V3.78c-.31-.04-1.38-.13-2.62-.13-2.6 0-4.38 1.59-4.38 4.5v2.2H7v3.25h2.99V22h3.5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/developershub-corporation/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6 0h3.8v1.55h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.4h-4v-4.79c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.82 1.24-1.82 2.52v4.87H9v-11Z" />
      </svg>
    ),
  },
];

const PinIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M8 1.5c-2.7 0-5 2.2-5 4.9 0 3.5 5 8.1 5 8.1s5-4.6 5-8.1c0-2.7-2.3-4.9-5-4.9Z" />
    <circle cx="8" cy="6.4" r="1.7" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
    <polyline points="2 5 8 9.5 14 5" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14.5 11.4v2a1.3 1.3 0 0 1-1.4 1.3 13 13 0 0 1-5.7-2 12.9 12.9 0 0 1-4-4 13 13 0 0 1-2-5.7A1.3 1.3 0 0 1 2.6 1.5h2a1.3 1.3 0 0 1 1.3 1.13c.08.63.24 1.25.46 1.85a1.3 1.3 0 0 1-.3 1.4l-.85.84a10.6 10.6 0 0 0 4 4l.85-.85a1.3 1.3 0 0 1 1.4-.3c.6.23 1.22.38 1.85.46a1.3 1.3 0 0 1 1.13 1.32Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
  </svg>
);

const ArrowOut = () => (
  <svg viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="2" y1="5" x2="8" y2="5" />
    <polyline points="5 2 8 5 5 8" />
  </svg>
);

export function Footer() {
  return (
    <footer className="dh-footer">
      <div className="dh-footer-bg" aria-hidden>
        <span className="dh-footer-orb dh-footer-orb-a" />
        <span className="dh-footer-orb dh-footer-orb-b" />
        <div className="dh-footer-grid-pattern" />
        <div className="dh-footer-top-glow" />
      </div>

      <div className="dh-footer-inner">
        <div className="dh-footer-grid">
          {/* Brand */}
          <div className="dh-footer-brand-col">
            <Link href="/" className="dh-footer-logo">
              <img
                src="/assets/logo/developershub-icon-black.png"
                alt="DevelopersHub Corporation"
                className="dh-footer-logo-img"
                loading="lazy"
              />
              <span className="dh-footer-logo-text">
                <span className="dh-footer-logo-strong">DevelopersHub</span>
                <span className="dh-footer-logo-em">Corporation</span>
              </span>
            </Link>
            <p className="dh-footer-tagline">
              Empowering businesses with innovative AI and digital solutions.
              Let&apos;s create something amazing together.
            </p>
            <div className="dh-footer-social">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dh-footer-social-link"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <nav className="dh-footer-nav" aria-label="Sitemap">
            <div className="dh-footer-col-title">Sitemap</div>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="dh-footer-link">
                    <span className="dh-footer-link-arrow" aria-hidden>
                      →
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav className="dh-footer-nav" aria-label="Company">
            <div className="dh-footer-col-title">Company</div>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="dh-footer-link">
                    <span className="dh-footer-link-arrow" aria-hidden>
                      →
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="dh-footer-contact-col">
            <div className="dh-footer-col-title">Reach us</div>

            <div className="dh-footer-hq">
              <span className="dh-footer-hq-label">
                <PinIcon />
                USA Headquarters
              </span>
              <p>30 N Gould St Ste R, Sheridan, WY 82801</p>
            </div>

            <a
              href="mailto:info@developershubcorp.com"
              className="dh-footer-contact-line"
            >
              <span className="dh-footer-contact-icon">
                <MailIcon />
              </span>
              info@developershubcorp.com
            </a>

            <a href="tel:+13074272883" className="dh-footer-contact-line">
              <span className="dh-footer-contact-icon">
                <PhoneIcon />
              </span>
              +1 (307) 427-2883
            </a>

            <a
              href="https://wa.me/447429732973"
              target="_blank"
              rel="noopener noreferrer"
              className="dh-footer-contact-line"
            >
              <span className="dh-footer-contact-icon">
                <WhatsAppIcon />
              </span>
              WhatsApp: +44 7429 732973
            </a>
          </div>
        </div>

        <div className="dh-footer-bottom">
          <div className="dh-footer-copy">
            © {new Date().getFullYear()} DevelopersHub Corporation. All rights
            reserved.
          </div>
          <div className="dh-footer-legal">
            <Link href="/privacy-policy">Privacy</Link>
            <span aria-hidden>·</span>
            <Link href="/terms">Terms</Link>
            <span aria-hidden>·</span>
            <Link href="/contact" className="dh-footer-legal-cta">
              Contact <ArrowOut />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
