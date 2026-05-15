"use client";

import { TemplateNavbar } from "@/components/TemplateNavbar";
import { Footer } from "@/components/Footer";

const LAST_UPDATED = "May 15, 2026";
const EFFECTIVE_DATE = "May 15, 2026";

export function PrivacyPolicyBody() {
  return (
    <div className="main dh-legal-page">
      <TemplateNavbar />

      <header className="dh-legal-hero">
        <div className="dh-legal-inner">
          <span className="dh-legal-badge">Legal</span>
          <h1 className="dh-legal-title">
            Privacy{" "}
            <span className="dh-legal-italic">policy.</span>
          </h1>
          <p className="dh-legal-lede">
            Your trust is the foundation of every partnership we build. This
            policy explains what information we collect, why we collect it,
            and how we protect it across every engagement with DevelopersHub
            Corporation.
          </p>
          <div className="dh-legal-meta">
            <span>Effective {EFFECTIVE_DATE}</span>
            <span className="dh-legal-meta-dot" aria-hidden />
            <span>Last updated {LAST_UPDATED}</span>
          </div>
        </div>
      </header>

      <main className="dh-legal-body">
        <div className="dh-legal-inner">
          <p className="dh-legal-intro">
            DevelopersHub Corporation (&ldquo;DevelopersHub,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            respects your privacy and is committed to protecting the personal
            information you share with us. This Privacy Policy describes how
            we collect, use, disclose, and safeguard information when you
            visit{" "}
            <a href="https://developershub.com">developershub.com</a>, engage
            our services, or otherwise interact with us. By using our website
            or services, you agree to the practices described below.
          </p>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">01</span>
              Information we collect
            </h2>
            <p>
              We collect information that helps us deliver, secure, and
              improve our services. The information we collect falls into the
              following categories:
            </p>

            <h3>Information you provide to us</h3>
            <ul>
              <li>
                <strong>Contact details</strong> — name, email address, phone
                number, company name, and job title submitted through contact
                forms, proposal requests, or course enrollment.
              </li>
              <li>
                <strong>Project information</strong> — briefs, requirements,
                source files, brand assets, and any materials you share with
                us to scope or deliver work.
              </li>
              <li>
                <strong>Account and billing data</strong> — billing address,
                tax identifiers, and payment details (processed by our
                payment partners; we do not store full card numbers on our
                servers).
              </li>
              <li>
                <strong>Communications</strong> — emails, messages, call
                notes, and other correspondence with our team.
              </li>
              <li>
                <strong>Applications</strong> — résumés, portfolios, work
                samples, and other career-related materials submitted through
                our careers page or internship applications.
              </li>
            </ul>

            <h3>Information we collect automatically</h3>
            <ul>
              <li>
                <strong>Usage data</strong> — pages visited, referring URLs,
                time on site, clicks, and similar engagement metrics.
              </li>
              <li>
                <strong>Device and technical data</strong> — IP address,
                browser type, operating system, device identifiers, and
                language preferences.
              </li>
              <li>
                <strong>Cookies and similar technologies</strong> — used to
                remember preferences, measure traffic, and improve
                performance. See the &ldquo;Cookies&rdquo; section below.
              </li>
            </ul>

            <h3>Information from third parties</h3>
            <p>
              We may receive information from analytics, advertising, and
              productivity partners (for example, Google Analytics, LinkedIn
              Insight Tag, Meta Pixel, and CRM integrations) to better
              understand how visitors interact with our content and
              campaigns.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">02</span>
              How we use information
            </h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>
                Provide, operate, and maintain our website, services, and
                client deliverables.
              </li>
              <li>
                Respond to inquiries, schedule consultations, and prepare
                proposals.
              </li>
              <li>
                Deliver, manage, and improve software development, design,
                marketing, AI, and creative projects we&apos;re engaged for.
              </li>
              <li>
                Process payments, invoicing, and contract administration.
              </li>
              <li>
                Send service updates, project communications, and (with your
                consent) marketing emails or newsletters.
              </li>
              <li>
                Evaluate job and internship applications and communicate with
                candidates.
              </li>
              <li>
                Monitor and analyze performance, prevent fraud, and protect
                the security and integrity of our systems.
              </li>
              <li>Comply with legal, regulatory, and contractual obligations.</li>
            </ul>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">03</span>
              Legal bases for processing
            </h2>
            <p>
              Where required by law (including the EU/UK GDPR), we rely on
              one of the following legal bases when processing your personal
              information:
            </p>
            <ul>
              <li>
                <strong>Contract</strong> — to perform a contract with you or
                take steps at your request before entering into one.
              </li>
              <li>
                <strong>Legitimate interests</strong> — to run, improve, and
                secure our business in a way that does not override your
                rights.
              </li>
              <li>
                <strong>Consent</strong> — where you have opted in (for
                example, marketing emails or non-essential cookies). You may
                withdraw consent at any time.
              </li>
              <li>
                <strong>Legal obligation</strong> — to comply with applicable
                laws, court orders, or regulatory requests.
              </li>
            </ul>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">04</span>
              How we share information
            </h2>
            <p>
              We do not sell your personal information. We share information
              only as needed to operate our business and deliver our services:
            </p>
            <ul>
              <li>
                <strong>Service providers</strong> — vetted vendors who help
                us run our business (hosting, analytics, CRM, payment
                processing, email, cloud storage, and AI tooling). These
                providers are bound by confidentiality and data-protection
                obligations.
              </li>
              <li>
                <strong>Project collaborators</strong> — when a project
                requires it, we may share project-specific materials with
                contractors or partners working under nondisclosure
                agreements.
              </li>
              <li>
                <strong>Legal and safety</strong> — to comply with applicable
                law, enforce our agreements, or protect the rights, property,
                or safety of DevelopersHub, our clients, our people, or the
                public.
              </li>
              <li>
                <strong>Business transfers</strong> — in connection with a
                merger, acquisition, financing, or sale of assets, subject to
                the terms of this policy.
              </li>
            </ul>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">05</span>
              Cookies and tracking technologies
            </h2>
            <p>
              We and our partners use cookies, pixels, and similar
              technologies to remember your preferences, analyze traffic, and
              measure the effectiveness of our campaigns. You can control
              cookies through your browser settings and, where available,
              through our cookie preference controls. Disabling some cookies
              may affect the functionality of our website.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">06</span>
              Data retention
            </h2>
            <p>
              We retain personal information only for as long as necessary to
              fulfill the purposes described in this policy, including to
              meet legal, accounting, or reporting requirements. Project
              files and client deliverables are retained for the duration of
              our engagement and a reasonable archival period thereafter
              unless otherwise agreed in writing.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">07</span>
              Data security
            </h2>
            <p>
              We use administrative, technical, and physical safeguards
              designed to protect personal information against accidental
              loss, unauthorized access, or misuse. These include encrypted
              transport (TLS), access controls, environment isolation,
              regular backups, and vendor due diligence. While we work hard
              to protect your information, no system is completely secure;
              we cannot guarantee absolute security.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">08</span>
              International data transfers
            </h2>
            <p>
              DevelopersHub operates globally, with headquarters in the
              United States and Pakistan. Your information may be processed
              in countries other than your own. When we transfer personal
              data internationally, we rely on appropriate safeguards such
              as Standard Contractual Clauses or equivalent mechanisms
              recognized under applicable law.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">09</span>
              Your rights and choices
            </h2>
            <p>
              Depending on where you live, you may have the right to:
            </p>
            <ul>
              <li>Access the personal information we hold about you.</li>
              <li>Correct or update inaccurate or incomplete information.</li>
              <li>Request deletion of personal information.</li>
              <li>
                Object to or restrict certain processing, including direct
                marketing.
              </li>
              <li>
                Request data portability for information you provided to us.
              </li>
              <li>
                Withdraw consent where processing is based on your consent.
              </li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a href="mailto:info@developershubcorp.com">
                info@developershubcorp.com
              </a>
              . We may need to verify your identity before responding. You
              also have the right to lodge a complaint with your local data
              protection authority.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">10</span>
              Children&apos;s privacy
            </h2>
            <p>
              Our services are not directed to children under 16, and we do
              not knowingly collect personal information from children. If
              you believe a child has provided us personal information,
              please contact us and we will take appropriate steps to remove
              it.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">11</span>
              Third-party links
            </h2>
            <p>
              Our website may link to third-party sites, tools, or services
              that are not operated by DevelopersHub. We are not responsible
              for the privacy practices of those third parties; we encourage
              you to review their policies before sharing information.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">12</span>
              Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, or legal requirements.
              The &ldquo;Last updated&rdquo; date at the top of this page
              shows when it was most recently revised. Material changes will
              be communicated through our website or other appropriate
              channels.
            </p>
          </section>

          <div className="dh-legal-contact-card">
            <h3>Questions about this policy?</h3>
            <p>
              If you have questions, concerns, or requests related to your
              personal information, please reach out to our privacy team.
            </p>
            <p>
              <strong>DevelopersHub Corporation</strong>
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, USA
              <br />
              Bahria Town Islamabad, Intellectual Village, Business District,
              Pakistan
              <br />
              Email:{" "}
              <a href="mailto:info@developershubcorp.com">
                info@developershubcorp.com
              </a>
              <br />
              Phone: <a href="tel:+13074272883">+1 (307) 427-2883</a>
              <br />
              WhatsApp:{" "}
              <a
                href="https://wa.me/447429732973"
                target="_blank"
                rel="noopener noreferrer"
              >
                +44 7429 732973
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
