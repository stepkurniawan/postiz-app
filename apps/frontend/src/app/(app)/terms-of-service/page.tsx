import { LogoTextComponent } from '@gitroom/frontend/components/ui/logo-text.component';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Postiz',
  description:
    'Terms of Service for the Postiz service at postiz.stepkurniawan.com.',
};

const sectionClassName = 'space-y-3';
const headingClassName = 'text-xl font-semibold text-white';
const paragraphClassName = 'leading-7 text-zinc-300';
const listClassName = 'list-disc space-y-2 pl-6 leading-7 text-zinc-300';
const linkClassName =
  'text-[#FC69FF] underline underline-offset-4 hover:text-[#fd91ff]';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] px-5 py-10 text-white sm:px-8 sm:py-14">
      <article className="mx-auto max-w-3xl rounded-2xl border border-zinc-800 bg-[#1A1919] px-6 py-8 shadow-2xl sm:px-10 sm:py-12">
        <header className="mb-10 border-b border-zinc-800 pb-8">
          <Link
            href="/auth"
            aria-label="Go to Postiz"
            className="mb-8 inline-flex text-white"
          >
            <LogoTextComponent />
          </Link>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#FC69FF]">
            Legal
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-zinc-400">
            Last updated: August 3, 2026
          </p>
        </header>

        <div className="space-y-9">
          <section className={sectionClassName}>
            <p className={paragraphClassName}>
              Welcome to Postiz (the “Service”), a social media scheduling,
              publishing, analytics, and team-collaboration platform available
              at postiz.stepkurniawan.com and related subdomains (collectively,
              the “Site”). References in these Terms to the “Service” include
              the Site. These Terms of Service (“Terms”) govern your access to
              and use of the Site and the Service. By creating an account,
              accessing, or using the Service, you agree to be bound by these
              Terms. If you do not agree, do not use the Service.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>1. The Operator Behind Postiz</h2>
            <p className={paragraphClassName}>
              This Postiz instance is operated by Stephen Kurniawan, 20535
              Hamburg, Germany. References in these Terms to “Postiz”, “we”,
              “us”, or “our” mean Stephen Kurniawan as the operator of the
              Service.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>2. Eligibility and Accounts</h2>
            <p className={paragraphClassName}>
              You must be at least 18 years old, or the age of majority in your
              jurisdiction, and capable of entering into a binding contract to
              use the Service. If you use the Service on behalf of an
              organisation, you represent that you have authority to bind that
              organisation, and “you” in these Terms refers to both you
              individually and that organisation.
            </p>
            <p className={paragraphClassName}>
              You are responsible for maintaining the confidentiality of your
              account credentials, for all activity that occurs under your
              account, and for keeping your account information accurate and
              current. You must promptly report unauthorised use of your account
              to{' '}
              <a
                href="mailto:stepkurniawan@gmail.com"
                className={linkClassName}
              >
                stepkurniawan@gmail.com
              </a>
              .
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>3. The Service</h2>
            <p className={paragraphClassName}>
              Postiz provides tools to schedule, publish, analyse, manage, and
              collaborate on content distributed to social-media and chat
              channels. These tools may include a calendar and scheduling
              engine, a media library, analytics, AI-assisted content
              generation, team and workspace management, and integrations with
              third-party platforms. Available features, channels, and limits
              may change from time to time.
            </p>
            <p className={paragraphClassName}>
              We may add, remove, modify, suspend, or discontinue any feature,
              integration, or channel at any time, including where a third-party
              platform changes or revokes API access. We will use commercially
              reasonable efforts to give notice of material changes that
              adversely affect users.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>4. Free and Beta Features</h2>
            <p className={paragraphClassName}>
              We may offer features marked as “beta”, “preview”, or similar.
              Such features are provided “as is”, may be subject to additional
              limits, and may be modified or discontinued at any time without
              notice. We make no warranties of any kind in respect of beta or
              preview features.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>5. Your Content</h2>
            <p className={paragraphClassName}>
              “Your Content” means any text, images, video, audio, links,
              metadata, schedules, prompts, configurations, and other materials
              you upload to, generate within, or transmit through the Service.
              As between you and Postiz, you retain all ownership and
              intellectual-property rights in Your Content.
            </p>
            <p className={paragraphClassName}>
              You grant Postiz a worldwide, non-exclusive, royalty-free licence
              to host, store, reproduce, transmit, display, adapt, and
              distribute Your Content solely for the purposes of operating,
              providing, securing, and improving the Service, including
              transmitting Your Content to the third-party social-media
              platforms you have connected and generating analytics, previews,
              and related outputs.
            </p>
            <p className={paragraphClassName}>
              You represent and warrant that you own, or have all necessary
              rights, licences, and permissions in, Your Content; that Your
              Content and its publication through connected platforms do not
              infringe any third-party right; and that Your Content complies
              with these Terms, applicable law, and the terms of every
              third-party platform to which it is published.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>6. Acceptable Use</h2>
            <p className={paragraphClassName}>
              You agree not to use the Service to, and not to allow any third
              party to:
            </p>
            <ul className={listClassName}>
              <li>
                publish, distribute, or store content that is unlawful,
                defamatory, harassing, hateful, threatening, sexually
                exploitative of minors, or that infringes intellectual-property,
                privacy, or publicity rights;
              </li>
              <li>
                send spam, engage in coordinated inauthentic behaviour, run
                undisclosed bots, mass-create fake engagement, or otherwise
                violate the platform rules of any connected third-party network;
              </li>
              <li>
                circumvent rate limits, technical restrictions, or access
                controls of the Service or any connected third-party platform;
              </li>
              <li>
                reverse engineer, decompile, scrape, or attempt to derive the
                source code of the Service except to the extent expressly
                permitted by applicable law or an open-source licence covering
                specific components;
              </li>
              <li>
                resell, sublicense, white-label, or otherwise commercialise the
                Service without our prior written agreement; or
              </li>
              <li>
                upload malware, attempt to gain unauthorised access to the
                Service, or interfere with the integrity or performance of the
                Service or its underlying infrastructure.
              </li>
            </ul>
            <p className={paragraphClassName}>
              We may suspend or terminate accounts that violate this section,
              with or without notice, and may remove offending content. We may
              also be required to disclose violations to affected third-party
              platforms.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              7. Third-Party Platforms and Integrations
            </h2>
            <p className={paragraphClassName}>
              The Service publishes Your Content to third-party platforms,
              including X / Twitter, Meta Platforms, LinkedIn, YouTube, TikTok,
              Pinterest, Reddit, Bluesky, Mastodon, Discord, Slack, Telegram,
              and others. To do so, you authenticate your accounts on those
              platforms and authorise Postiz to act on your behalf within the
              permissions you approve.
            </p>
            <p className={paragraphClassName}>
              Your use of any third-party platform through the Service is also
              governed by that platform’s terms and privacy policy, including:
            </p>
            <ul className={listClassName}>
              <li>
                YouTube — by connecting a YouTube account, you agree to the{' '}
                <a
                  href="https://www.youtube.com/t/terms"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  YouTube Terms of Service
                </a>{' '}
                and acknowledge{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  Google’s Privacy Policy
                </a>
                . Postiz uses YouTube API Services.
              </li>
              <li>
                X / Twitter — the{' '}
                <a
                  href="https://x.com/en/tos"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  X Terms
                </a>
                .
              </li>
              <li>
                Meta Platforms — the{' '}
                <a
                  href="https://www.facebook.com/legal/terms"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  Meta Terms of Service and Platform Terms
                </a>
                .
              </li>
              <li>
                LinkedIn — the{' '}
                <a
                  href="https://www.linkedin.com/legal/user-agreement"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  LinkedIn User Agreement
                </a>
                .
              </li>
              <li>
                TikTok — the{' '}
                <a
                  href="https://www.tiktok.com/legal/terms-of-service"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  TikTok Terms of Service
                </a>
                .
              </li>
            </ul>
            <p className={paragraphClassName}>
              You can revoke Postiz’s access to any connected platform at any
              time from your account settings or directly from that platform’s
              app or permissions page. Revoking access will stop future
              scheduled posts to that platform.
            </p>
            <p className={paragraphClassName}>
              Postiz is not responsible for the availability, behaviour,
              policies, fees, content-moderation decisions, account suspensions,
              rate-limit changes, or removal of features of any third-party
              platform. Where a third-party platform changes its API, terminates
              its developer programme, or modifies its terms in a way that
              affects the Service, we may modify or discontinue the affected
              integration without liability.
            </p>
            <p className={paragraphClassName}>
              Postiz is an independent service and is not TikTok or represented
              as being sponsored, endorsed, or operated by TikTok.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>8. AI Features</h2>
            <p className={paragraphClassName}>
              The Service may offer AI-assisted features that generate text,
              images, video, captions, hashtags, summaries, or analytics (“AI
              Output”). AI Output is generated probabilistically and may be
              inaccurate, incomplete, or unsuitable for your purpose. You are
              solely responsible for reviewing AI Output before publishing it,
              ensuring that it complies with applicable law, third-party
              platform rules, and the rights of any persons depicted, and
              disclosing AI involvement where required.
            </p>
            <p className={paragraphClassName}>
              To provide AI features, we may transmit your prompts and selected
              inputs to third-party model providers. Further information about
              this processing is provided in our Privacy Policy.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              9. Intellectual Property of Postiz
            </h2>
            <p className={paragraphClassName}>
              The Service, the Site, and all software, designs, text, graphics,
              logos, trademarks, and other materials made available through the
              Service, excluding Your Content and components made available
              under their own open-source licences, are the property of their
              respective owners or licensors and are protected by
              intellectual-property laws. Subject to your compliance with these
              Terms, we grant you a limited, non-exclusive, non-transferable,
              revocable licence to access and use the Service for its intended
              purpose.
            </p>
            <p className={paragraphClassName}>
              Postiz’s open-source components are governed by the licences
              distributed with them. Nothing in these Terms restricts your
              rights under those licences in respect of the relevant components.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>10. Feedback</h2>
            <p className={paragraphClassName}>
              If you provide feedback, suggestions, or ideas about the Service,
              you grant us a perpetual, irrevocable, worldwide, royalty-free
              licence to use them for any purpose, without obligation or
              compensation to you.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              11. Privacy and Data Protection
            </h2>
            <p className={paragraphClassName}>
              Our processing of personal data in connection with the Service is
              described in our{' '}
              <Link href="/privacy-policy" className={linkClassName}>
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>12. Suspension and Termination</h2>
            <p className={paragraphClassName}>
              You may terminate your account at any time through your account
              settings or by contacting us. We may suspend or terminate your
              access to the Service immediately if you breach these Terms, use
              the Service in a way that exposes Postiz or any third-party
              platform to legal, security, or reputational risk, or where
              required by law.
            </p>
            <p className={paragraphClassName}>
              On termination, your right to access the Service ends. We may
              delete Your Content and account data after a reasonable retention
              period as described in the Privacy Policy. Provisions that by
              their nature should survive termination, including sections on
              Your Content licences, intellectual property, disclaimers,
              limitation of liability, indemnification, governing law, and
              dispute resolution, survive.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>13. Disclaimers</h2>
            <p className={paragraphClassName}>
              To the maximum extent permitted by law, the Service and the Site
              are provided “as is” and “as available”, without warranties of any
              kind, whether express, implied, or statutory, including warranties
              of merchantability, fitness for a particular purpose,
              non-infringement, accuracy, and uninterrupted or error-free
              operation. We do not warrant that scheduled posts will always be
              delivered on time, that connected platforms will accept them, or
              that analytics returned by third-party platforms will be accurate
              or complete.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>14. Limitation of Liability</h2>
            <p className={paragraphClassName}>
              To the maximum extent permitted by law, Postiz will not be liable
              for indirect, incidental, special, consequential, exemplary, or
              punitive damages, or for loss of profits, revenue, data, goodwill,
              business opportunity, or anticipated savings, arising out of or in
              connection with these Terms, the Site, or the Service, whether
              based in contract, tort, strict liability, or otherwise, even if
              advised of the possibility of such damages.
            </p>
            <p className={paragraphClassName}>
              To the maximum extent permitted by law, our aggregate liability
              arising out of or in connection with these Terms, the Site, or the
              Service will not exceed USD 100.
            </p>
            <p className={paragraphClassName}>
              Nothing in these Terms limits liability for intent, gross
              negligence, injury to life, body, or health, or any other
              liability that cannot be excluded or limited under applicable law.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>15. Indemnification</h2>
            <p className={paragraphClassName}>
              To the extent permitted by applicable law, you agree to indemnify,
              defend, and hold harmless the operator from claims, liabilities,
              damages, losses, and expenses, including reasonable legal fees,
              arising out of or in connection with: (a) Your Content; (b) your
              use of the Service; (c) your breach of these Terms; (d) your
              violation of applicable law or any third-party right, including a
              third-party platform’s terms; or (e) a dispute between you and a
              third party related to content you published through the Service.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              16. Newsletter and Marketing Communications
            </h2>
            <p className={paragraphClassName}>
              If you subscribe to a newsletter or opt in to marketing
              communications, you agree to receive product, promotional, and
              educational emails from Postiz. You can unsubscribe at any time
              using the “unsubscribe” link in any such email. Transactional and
              account-related emails, such as security alerts and service
              notices, are not optional while your account is active.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>17. Cookies</h2>
            <p className={paragraphClassName}>
              We use cookies and similar technologies on the Site for
              authentication, preferences, security, analytics, and marketing,
              as described in our Privacy Policy. By using the Site, you consent
              to our use of cookies in accordance with that policy and any
              cookie preferences you have set.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>18. Changes to the Terms</h2>
            <p className={paragraphClassName}>
              We may update these Terms from time to time. If a change is
              material, we will give reasonable advance notice by email or
              in-product notice. Changes are effective on the date stated at the
              top of the updated Terms. Your continued use of the Service after
              that date constitutes acceptance.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              19. Governing Law and Dispute Resolution
            </h2>
            <p className={paragraphClassName}>
              These Terms and any non-contractual obligations arising out of or
              in connection with them are governed by the laws of the Federal
              Republic of Germany, without regard to conflict-of-laws
              principles. To the extent permitted by applicable law, the courts
              of Hamburg, Germany have exclusive jurisdiction over disputes
              arising out of or in connection with these Terms or the Service.
            </p>
            <p className={paragraphClassName}>
              Nothing in this section limits any non-waivable consumer rights
              you may have under the mandatory law of your country of residence.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>20. General</h2>
            <p className={paragraphClassName}>
              These Terms, together with the Privacy Policy and any additional
              terms you accept, constitute the entire agreement between you and
              Postiz in respect of the Service. If any provision is held invalid
              or unenforceable, the remaining provisions remain in full force.
              Our failure to enforce any right or provision is not a waiver of
              that right or provision. You may not assign these Terms without
              our prior written consent. We may assign these Terms in connection
              with a transfer of the Service, subject to applicable law.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>21. Contact</h2>
            <p className={paragraphClassName}>
              If you have questions about these Terms, contact:
            </p>
            <address className="not-italic leading-7 text-zinc-300">
              Stephen Kurniawan
              <br />
              20535 Hamburg, Germany
              <br />
              <a
                href="mailto:stepkurniawan@gmail.com"
                className={linkClassName}
              >
                stepkurniawan@gmail.com
              </a>
            </address>
          </section>
        </div>
      </article>
    </main>
  );
}
