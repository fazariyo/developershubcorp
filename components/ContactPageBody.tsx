"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { Footer } from "@/components/Footer";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

const ARROW_DARK = "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67a9e2599fa438b2b5ca91b6_arrow-top-right.png";
const ARROW_LIGHT = "/assets/figma-case-study-details/icon-arrow-on-dark.svg";
const ICON_LINKEDIN = "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67b02256c742c6b7cb28f718_si-linkedin.svg";
const ICON_TWITTER = "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67b02255b31413b811c048ab_si-twitter.svg";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2.5" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.003a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.04 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.876 11.876 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.453 3.488z" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5 L10 17.5 L19.5 7" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg viewBox="0 0 10 11" fill="none" stroke="currentColor" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M0.832 1.3335H9.1654M9.1654 1.3335V9.6668M9.1654 1.3335L0.832 9.6668" />
  </svg>
);

const CHANNELS: { label: string; value: string; href: string; hint: string; icon: ReactNode }[] = [
  {
    label: "Email us",
    value: "info@developershubcorp.com",
    href: "mailto:info@developershubcorp.com",
    hint: "Replies within one business day",
    icon: <MailIcon />,
  },
  {
    label: "Call us",
    value: "+1 (307) 427-2883",
    href: "tel:+13074272883",
    hint: "Mon – Fri, 9:00–18:00 MT",
    icon: <PhoneIcon />,
  },
  {
    label: "WhatsApp",
    value: "+44 7429 732973",
    href: "https://wa.me/447429732973",
    hint: "Chat with us — typically replies within an hour",
    icon: <WhatsAppIcon />,
  },
  {
    label: "USA Headquarters",
    value: "30 N Gould St Ste R, Sheridan, WY 82801",
    href: "https://maps.google.com/?q=30+N+Gould+St+Ste+R,+Sheridan,+WY+82801",
    hint: "By appointment only",
    icon: <PinIcon />,
  },
  {
    label: "Pakistan Headquarters",
    value: "Bahria Town Islamabad, Intellectual Village, Business District",
    href: "https://maps.google.com/?q=Bahria+Town+Islamabad+Intellectual+Village+Business+District",
    hint: "By appointment only",
    icon: <PinIcon />,
  },
];

const BUDGETS = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
  "Not sure yet",
];

const SERVICES = [
  "Brand Strategy",
  "Brand Identity",
  "UX / UI Design",
  "Web Design & Build",
  "Content & Copy",
  "Marketing",
];

const FAQS = [
  {
    q: "How quickly will I hear back?",
    a: "We reply to every enquiry within one business day — usually the same afternoon if it lands before noon PKT.",
  },
  {
    q: "What should I include in my message?",
    a: "A short overview of your business, what you're trying to achieve, any deadline you're working to, and your rough budget. It helps us point you to the right starting point.",
  },
  {
    q: "Do you sign NDAs before a first call?",
    a: "Happily. Send yours over with your enquiry, or ask for our mutual NDA and we'll return it signed before we meet.",
  },
  {
    q: "I only have a small budget — is it worth reaching out?",
    a: "Yes. We run focused packages for early-stage teams and we'll tell you straight if we aren't the right fit — often with a suggestion of who is.",
  },
];

export function ContactPageBody() {
  const heroRef = useHeroAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    const name = ((data.get("name") as string | null) ?? "").trim();
    const email = ((data.get("email") as string | null) ?? "").trim();
    const message = ((data.get("message") as string | null) ?? "").trim();
    const budget = (data.get("budget") as string | null) ?? "";
    const services = data.getAll("services").map(String);

    if (!name || !email) {
      setErrorMsg("Please share your name and email so we can reply.");
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);
    try {
      const res = await fetch("https://formspree.io/f/xvzllgaw", {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify({
          source: "Contact Page",
          name,
          email,
          services: services.join(", "),
          budget,
          message,
          _subject: `New Contact Page enquiry from ${name}`,
        }),
      });
      const body = (await res.json().catch(() => ({}))) as {
        errors?: { message?: string }[];
      };
      if (!res.ok) {
        throw new Error(body.errors?.[0]?.message ?? "Something went wrong");
      }
      setSubmitted(true);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="main qs-contact-page">
      <TemplateNavbar />

      {/* Hero */}
      <header className="qs-contact-hero">
        <div className="qs-inner">
          <div className="qs-contact-eyebrow">
            <span className="qs-contact-eyebrow-bar" />
            <p className="qs-contact-eyebrow-text">Contact</p>
          </div>
          <h1 ref={heroRef} className="qs-contact-title">
            Let&apos;s start a{" "}
            <span className="qs-contact-italic">conversation</span>
          </h1>
          <p className="qs-contact-lede">
            Tell us about your brand, your goals, and what you need. Whether
            you&apos;re exploring an idea or ready to brief a project — we&apos;d
            love to hear from you.
          </p>
          <div className="qs-contact-trust">
            <span className="qs-contact-trust-line" />
            <p className="qs-contact-trust-text">
              Replies within one business day
            </p>
            <span className="qs-contact-trust-line is-right" />
          </div>
        </div>
      </header>

      {/* Channels */}
      <section className="qs-contact-channels">
        <div className="qs-inner">
          <div className="qs-contact-channels-grid">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="qs-contact-channel"
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="qs-contact-channel-icon" aria-hidden="true">
                  {c.icon}
                </span>
                <div className="qs-contact-channel-text">
                  <p className="qs-contact-channel-label">{c.label}</p>
                  <p className="qs-contact-channel-value">{c.value}</p>
                  <p className="qs-contact-channel-hint">{c.hint}</p>
                </div>
                <span className="qs-contact-channel-arrow" aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + aside */}
      <section className="qs-contact-form-section">
        <div className="qs-inner">
          <div className="qs-contact-form-grid">
            <aside className="qs-contact-aside">
              <div className="qs-contact-eyebrow">
                <span className="qs-contact-eyebrow-bar" />
                <p className="qs-contact-eyebrow-text">Tell us about it</p>
              </div>
              <h2 className="qs-contact-aside-title">
                A few details help us{" "}
                <span className="qs-contact-italic">reply well</span>
              </h2>
              <p className="qs-contact-aside-text">
                The more context you share, the more specific our first reply
                can be. None of the fields are required — start anywhere.
              </p>
              <ul className="qs-contact-aside-list">
                <li>
                  <span className="qs-contact-aside-check" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  Fixed-scope proposals, no hourly billing
                </li>
                <li>
                  <span className="qs-contact-aside-check" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  Senior team on every project
                </li>
                <li>
                  <span className="qs-contact-aside-check" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  Honest advice if we&apos;re not the right fit
                </li>
              </ul>
              <div className="qs-contact-aside-socials">
                <p className="qs-contact-aside-socials-label">
                  Or find us on
                </p>
                <div className="qs-contact-aside-socials-row">
                  <a
                    href="https://www.linkedin.com"
                    aria-label="Awake on LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={ICON_LINKEDIN} alt="" />
                  </a>
                  <a
                    href="https://x.com"
                    aria-label="Awake on X"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={ICON_TWITTER} alt="" />
                  </a>
                </div>
              </div>
            </aside>

            <div className="qs-contact-form-card">
              {submitted ? (
                <div className="qs-contact-success" role="status">
                  <span className="qs-contact-success-icon" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <h3 className="qs-contact-success-title">
                    Thanks — your message is on its way
                  </h3>
                  <p className="qs-contact-success-text">
                    We&apos;ll reply within one business day. In the meantime,
                    you can explore our recent work.
                  </p>
                  <div className="qs-contact-success-row">
                    <Link href="/case-studies" className="qs-btn-primary">
                      <span>See Our Work</span>
                      <span className="qs-btn-arrow" aria-hidden="true">
                        <img src={ARROW_DARK} alt="" />
                      </span>
                    </Link>
                  </div>
                </div>
              ) : (
                <form className="qs-contact-form" onSubmit={onSubmit} noValidate>
                  <div className="qs-contact-field-row">
                    <label className="qs-contact-field">
                      <span className="qs-contact-field-label">Your name</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Jane Smith"
                        autoComplete="name"
                      />
                    </label>
                    <label className="qs-contact-field">
                      <span className="qs-contact-field-label">Work email</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="jane@company.com"
                        autoComplete="email"
                      />
                    </label>
                  </div>

                  <div className="qs-contact-field">
                    <span className="qs-contact-field-label">
                      What do you need?
                    </span>
                    <div className="qs-contact-chip-row">
                      {SERVICES.map((s) => (
                        <label key={s} className="qs-contact-chip">
                          <input type="checkbox" name="services" value={s} />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="qs-contact-field">
                    <span className="qs-contact-field-label">
                      Estimated budget
                    </span>
                    <div className="qs-contact-chip-row">
                      {BUDGETS.map((b) => (
                        <label key={b} className="qs-contact-chip">
                          <input type="radio" name="budget" value={b} />
                          <span>{b}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <label className="qs-contact-field">
                    <span className="qs-contact-field-label">
                      What Exactly You Want Our Specialist To Help You With?
                    </span>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="A short overview — goals, timeline, anything that'd help us reply well."
                    />
                  </label>

                  {errorMsg && (
                    <p className="qs-contact-form-error" role="alert" style={{ color: "#b00020", margin: "8px 0 0", fontSize: 13 }}>
                      {errorMsg}
                    </p>
                  )}
                  <div className="qs-contact-form-foot">
                    <p className="qs-contact-form-note">
                      By sending this, you agree to our handling of the details
                      above solely to reply to your enquiry.
                    </p>
                    <button type="submit" className="qs-btn-primary" disabled={submitting}>
                      <span>{submitting ? "Sending…" : "Send Message"}</span>
                      <span className="qs-btn-arrow" aria-hidden="true">
                        <img src={ARROW_DARK} alt="" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="qs-contact-faq">
        <div className="qs-inner">
          <div className="qs-contact-faq-head">
            <h2 className="qs-contact-faq-title">
              Before you <span className="qs-contact-italic">hit send</span>
            </h2>
            <p className="qs-contact-faq-sub">
              A few questions we&apos;re often asked at first contact.
            </p>
          </div>
          <div className="qs-contact-faq-grid">
            {FAQS.map((f) => (
              <article key={f.q} className="qs-contact-faq-card">
                <h3 className="qs-contact-faq-q">{f.q}</h3>
                <p className="qs-contact-faq-a">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="qs-contact-cta">
        <div className="qs-inner">
          <div className="qs-contact-cta-card">
            <h2 className="qs-contact-cta-title">
              Prefer a{" "}
              <span className="qs-contact-italic">quick call?</span>
            </h2>
            <p className="qs-contact-cta-sub">
              Book a 45-minute discovery call and we&apos;ll walk through your
              brief together.
            </p>
            <div className="qs-contact-cta-row">
              <a href="mailto:info@developershubcorp.com" className="qs-btn-light">
                <span>Email the Studio</span>
                <span className="qs-btn-arrow" aria-hidden="true">
                  <img src={ARROW_LIGHT} alt="" />
                </span>
              </a>
              <Link href="/services" className="qs-btn-ghost">
                <span>Explore Services</span>
                <span className="qs-btn-arrow" aria-hidden="true">
                  <img src={ARROW_LIGHT} alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
