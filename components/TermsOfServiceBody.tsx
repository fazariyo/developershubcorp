"use client";

import { TemplateNavbar } from "@/components/TemplateNavbar";
import { Footer } from "@/components/Footer";

const LAST_UPDATED = "May 15, 2026";
const EFFECTIVE_DATE = "May 15, 2026";

export function TermsOfServiceBody() {
  return (
    <div className="main dh-legal-page">
      <TemplateNavbar />

      <header className="dh-legal-hero">
        <div className="dh-legal-inner">
          <span className="dh-legal-badge">Legal</span>
          <h1 className="dh-legal-title">
            Terms of{" "}
            <span className="dh-legal-italic">service.</span>
          </h1>
          <p className="dh-legal-lede">
            These terms set the ground rules for using our website and
            working with DevelopersHub Corporation. They&apos;re written to
            be clear, fair, and to protect both your business and ours.
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
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access
            to and use of the website, content, and services provided by
            DevelopersHub Corporation (&ldquo;DevelopersHub,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By
            accessing our website or engaging our services, you agree to be
            bound by these Terms. If you do not agree, please do not use our
            website or services.
          </p>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">01</span>
              Acceptance of terms
            </h2>
            <p>
              By using{" "}
              <a href="https://developershubcorp.com">developershubcorp.com</a>,
              submitting a contact form, signing a statement of work, or
              otherwise engaging our services, you confirm that you have read,
              understood, and agreed to these Terms and our{" "}
              <a href="/privacy-policy">Privacy Policy</a>. If you are
              entering into these Terms on behalf of an organization, you
              represent that you have authority to bind that organization.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">02</span>
              Services we provide
            </h2>
            <p>
              DevelopersHub Corporation provides specialized services across
              four divisions: Growth Marketing, Creative Production, Digital
              Products, and AI Automation. These services include, but are
              not limited to, software development, web and mobile
              applications, AI systems and automation, brand identity, video
              and content production, performance marketing, SEO, paid
              advertising, training, and consulting.
            </p>
            <p>
              The specific scope, deliverables, timelines, fees, and terms
              of each engagement are defined in a separate statement of work
              (&ldquo;SOW&rdquo;), proposal, or written agreement. In the
              event of conflict between these Terms and a signed agreement,
              the signed agreement controls for that engagement.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">03</span>
              Use of the website
            </h2>
            <p>
              You agree to use our website lawfully and respectfully. You
              will not:
            </p>
            <ul>
              <li>
                Use the website for any unlawful, fraudulent, or harmful
                purpose.
              </li>
              <li>
                Attempt to interfere with, disrupt, or compromise the
                security or integrity of our systems.
              </li>
              <li>
                Reverse engineer, scrape, or copy substantial portions of
                the website except as permitted by law.
              </li>
              <li>
                Use automated tools, bots, or crawlers without our prior
                written permission, except for well-behaved search engine
                indexing.
              </li>
              <li>
                Impersonate another person, misrepresent your affiliation,
                or submit false information.
              </li>
              <li>
                Upload or transmit malicious code, viruses, or any content
                that infringes third-party rights.
              </li>
            </ul>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">04</span>
              Intellectual property
            </h2>
            <h3>Our content</h3>
            <p>
              All website content, including text, graphics, logos, code,
              case studies, designs, illustrations, and trademarks, is the
              property of DevelopersHub Corporation or its licensors and is
              protected by copyright, trademark, and other intellectual
              property laws. You may not reproduce, distribute, modify, or
              create derivative works from our content without our prior
              written permission, except for personal, non-commercial use.
            </p>

            <h3>Client materials</h3>
            <p>
              You retain ownership of all materials you provide to us
              (logos, brand assets, content, data, and other inputs). You
              grant us a non-exclusive license to use these materials solely
              to perform the services described in the applicable SOW.
            </p>

            <h3>Deliverables</h3>
            <p>
              Ownership of final deliverables (custom code, designs, written
              content, etc.) is defined in the applicable SOW and typically
              transfers to the client upon full payment, unless otherwise
              agreed. We retain ownership of pre-existing tools, frameworks,
              libraries, methodologies, and know-how (&ldquo;Background
              IP&rdquo;) used in the creation of deliverables, and grant a
              perpetual license to use Background IP as part of the
              delivered work.
            </p>

            <h3>Portfolio rights</h3>
            <p>
              Unless restricted by a signed NDA or written agreement, we
              reserve the right to feature completed work in our portfolio,
              case studies, and marketing materials, including the use of
              your name and logo as a client reference.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">05</span>
              Client responsibilities
            </h2>
            <p>To enable timely and effective delivery, you agree to:</p>
            <ul>
              <li>
                Provide accurate, complete, and timely information and
                materials.
              </li>
              <li>
                Designate a primary point of contact with authority to make
                project decisions.
              </li>
              <li>
                Review deliverables and provide feedback within the
                timeframes agreed in the SOW.
              </li>
              <li>
                Ensure you have the rights to all materials you supply
                (assets, content, data, trademarks).
              </li>
              <li>
                Pay invoices on time in accordance with the agreed payment
                schedule.
              </li>
            </ul>
            <p>
              Delays or missing information from your side may shift agreed
              timelines and may result in additional fees as outlined in the
              SOW.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">06</span>
              Fees, payments, and refunds
            </h2>
            <p>
              Fees, milestones, and payment schedules are set out in the
              applicable SOW or proposal. Unless otherwise stated:
            </p>
            <ul>
              <li>
                Invoices are payable within fifteen (15) days of issue.
              </li>
              <li>
                Overdue amounts may accrue late fees and result in pausing
                work until balances are settled.
              </li>
              <li>
                Fees are exclusive of applicable taxes, duties, and
                third-party costs (such as ad spend, software licenses, or
                stock assets), which are billed at cost or pass-through.
              </li>
              <li>
                Deposits and milestone payments are non-refundable once work
                has commenced, except as expressly required by the SOW or
                applicable law.
              </li>
            </ul>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">07</span>
              Confidentiality
            </h2>
            <p>
              Both parties agree to keep confidential any non-public
              information disclosed during an engagement, including
              business plans, strategies, technical information, and client
              data. Confidential information will be used only for the
              purpose of performing the services and will be protected with
              the same degree of care as one&apos;s own confidential
              information, and in no event less than reasonable care.
              Confidentiality obligations survive termination of the
              engagement.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">08</span>
              Third-party services
            </h2>
            <p>
              Our services may involve third-party platforms, APIs, hosting
              providers, advertising networks, or AI models. We are not
              responsible for the availability, accuracy, terms, or
              performance of any third-party service, and your use of those
              services is governed by their own terms and policies.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">09</span>
              Warranties and disclaimers
            </h2>
            <p>
              We perform our services in a professional and workmanlike
              manner in accordance with industry standards. Beyond that
              limited warranty, our website and services are provided
              &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without
              warranties of any kind, whether express or implied, including
              warranties of merchantability, fitness for a particular
              purpose, non-infringement, or uninterrupted operation.
            </p>
            <p>
              We do not guarantee specific business results, rankings,
              revenue, traffic, or other outcomes that depend on factors
              outside our control. Estimates, projections, and forecasts are
              good-faith approximations and not promises.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">10</span>
              Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by law, DevelopersHub
              Corporation, its officers, employees, contractors, and
              affiliates will not be liable for any indirect, incidental,
              special, consequential, exemplary, or punitive damages, or for
              loss of profits, revenue, data, goodwill, or business
              opportunities, arising out of or related to your use of our
              website or services, even if advised of the possibility of
              such damages.
            </p>
            <p>
              Our total aggregate liability for any claim arising out of or
              related to an engagement will not exceed the fees paid to us
              for the specific services giving rise to the claim during the
              three (3) months immediately preceding the claim.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">11</span>
              Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless DevelopersHub
              Corporation and its team from any claims, damages, losses, and
              expenses (including reasonable legal fees) arising from
              (a) materials, content, or instructions you provide to us;
              (b) your use of deliverables in violation of these Terms or
              applicable law; or (c) your breach of these Terms or any
              applicable agreement.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">12</span>
              Termination
            </h2>
            <p>
              Either party may terminate an engagement in accordance with
              the termination provisions of the applicable SOW. Upon
              termination, you remain responsible for fees earned for work
              performed up to the termination date, plus any non-cancellable
              third-party costs already committed. Sections that by their
              nature should survive termination (including intellectual
              property, confidentiality, indemnification, and limitation of
              liability) will survive.
            </p>
            <p>
              We may suspend or terminate access to our website at any time
              if we believe these Terms have been violated, or if we are
              required to do so by law.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">13</span>
              Governing law and disputes
            </h2>
            <p>
              These Terms are governed by and construed in accordance with
              the laws applicable to DevelopersHub Corporation&apos;s
              principal place of business, without regard to conflict of
              laws principles. The parties will attempt in good faith to
              resolve any dispute through direct negotiation. If unresolved,
              disputes will be submitted to binding arbitration or to the
              courts of competent jurisdiction at our headquarters location,
              unless otherwise required by applicable law.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">14</span>
              Force majeure
            </h2>
            <p>
              Neither party will be liable for any failure or delay in
              performance caused by events beyond reasonable control,
              including natural disasters, war, terrorism, civil unrest,
              pandemics, government actions, internet or utility outages,
              or other similar events.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">15</span>
              Changes to these terms
            </h2>
            <p>
              We may update these Terms from time to time to reflect changes
              in our services, technology, or legal requirements. The
              &ldquo;Last updated&rdquo; date at the top of this page shows
              when they were most recently revised. Continued use of our
              website or services after changes are posted constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          <section className="dh-legal-section">
            <h2>
              <span className="dh-legal-num">16</span>
              Miscellaneous
            </h2>
            <p>
              If any provision of these Terms is held to be unenforceable,
              the remaining provisions will remain in full force and
              effect. Our failure to enforce a right or provision is not a
              waiver of that right or provision. You may not assign your
              rights under these Terms without our prior written consent;
              we may assign our rights to an affiliate or successor in a
              business transfer. These Terms, together with any applicable
              SOW and our Privacy Policy, constitute the entire agreement
              between you and DevelopersHub Corporation regarding the
              subject matter herein.
            </p>
          </section>

          <div className="dh-legal-contact-card">
            <h3>Need to talk to us about these terms?</h3>
            <p>
              For questions about these Terms, an active engagement, or to
              request a custom agreement, please contact us.
            </p>
            <p>
              <strong>DevelopersHub Corporation</strong>
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, USA
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
