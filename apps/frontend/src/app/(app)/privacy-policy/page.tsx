import { LogoTextComponent } from '@gitroom/frontend/components/ui/logo-text.component';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Postiz',
  description:
    'Privacy Policy for the Postiz service at postiz.stepkurniawan.com.',
};

const sectionClassName = 'space-y-3';
const headingClassName = 'text-xl font-semibold text-white';
const subheadingClassName = 'text-base font-semibold text-white';
const listClassName = 'list-disc space-y-2 pl-6';
const linkClassName =
  'text-[#FC69FF] underline underline-offset-4 hover:text-white';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] px-5 py-10 text-[#D6D3D1] sm:px-8 sm:py-14">
      <article className="mx-auto max-w-3xl">
        <header className="mb-10 border-b border-white/10 pb-8">
          <Link
            href="/auth"
            aria-label="Go to Postiz"
            className="mb-8 inline-block text-white"
          >
            <LogoTextComponent />
          </Link>
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#FC69FF]">
            Legal
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-[#A8A29E]">
            Last updated: August 3, 2026
          </p>
        </header>

        <div className="space-y-10 text-[15px] leading-7 sm:text-base">
          <section className={sectionClassName}>
            <p>
              This Privacy Policy explains how Postiz (“Postiz”, “we”, “us” or
              “our”) collects, uses, shares, and protects personal data in
              connection with the Postiz social-media scheduling, publishing,
              analytics, and team-collaboration service available at{' '}
              <strong className="font-medium text-white">
                postiz.stepkurniawan.com
              </strong>{' '}
              (the “Service”). It applies to visitors, account holders, members
              of customer workspaces, and anyone else who interacts with the
              Service.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>1. Who We Are</h2>
            <p>
              The Service is operated by Stephen Kurniawan, 20535 Hamburg,
              Germany. Stephen Kurniawan is the data controller for account,
              Service-usage, support, and security data processed through the
              Service.
            </p>
            <p>
              For privacy questions, requests, or complaints, email{' '}
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
            <h2 className={headingClassName}>2. The Service in Brief</h2>
            <p>
              Postiz lets you connect Facebook, Instagram, YouTube, TikTok, and
              LinkedIn accounts to centrally prepare, schedule, publish,
              analyse, and collaborate on social-media content. The Service
              includes a publishing calendar, media library, publishing queue,
              social-media analytics, AI-assisted content features, and team and
              workspace management. Available features depend on the platform
              you connect and the permissions you grant.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>3. The Data We Collect</h2>

            <div className={sectionClassName}>
              <h3 className={subheadingClassName}>
                3.1 Account and identity data
              </h3>
              <ul className={listClassName}>
                <li>
                  Your name, email address, password hash, company or
                  organisation name, role, language, timezone, and account
                  preferences.
                </li>
                <li>
                  Basic profile information returned by an authentication
                  provider if you use social or third-party login.
                </li>
                <li>
                  Workspace and team membership, invitations, and permissions.
                </li>
              </ul>
            </div>

            <div className={sectionClassName}>
              <h3 className={subheadingClassName}>
                3.2 Connected social-platform data
              </h3>
              <p>
                When you connect Facebook, Instagram, YouTube, TikTok, or
                LinkedIn, the Service may receive and store data made available
                through that platform’s API, including:
              </p>
              <ul className={listClassName}>
                <li>
                  OAuth access and refresh tokens, granted permissions, platform
                  usernames and identifiers, profile information, page or
                  channel identifiers, and similar account metadata.
                </li>
                <li>
                  Content and performance data needed to provide requested
                  features, such as scheduled and published posts, comments or
                  replies, and available engagement or analytics information.
                </li>
              </ul>
              <p>
                For YouTube features, the Service uses YouTube API Services.
                Your use of those features is also subject to the{' '}
                <a
                  href="https://www.youtube.com/t/terms"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  YouTube Terms of Service
                </a>{' '}
                and the{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  Google Privacy Policy
                </a>
                . You can revoke the Service’s access to your Google data
                through your{' '}
                <a
                  href="https://security.google.com/settings/security/permissions"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  Google security settings
                </a>
                .
              </p>
              <p>
                The Service’s use and transfer of information received from
                Google APIs adheres to the{' '}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
            </div>

            <div className={sectionClassName}>
              <h3 className={subheadingClassName}>3.3 Content you provide</h3>
              <p>
                We process text, images, video, audio, captions, links,
                hashtags, schedules, prompts, comments, approval notes, calendar
                metadata, and other content you upload to or generate within the
                Service.
              </p>
            </div>

            <div className={sectionClassName}>
              <h3 className={subheadingClassName}>
                3.4 Logs, usage, and device data
              </h3>
              <p>
                The Service may process IP address, user agent, browser and
                operating-system information, language preference, referrer,
                request timestamps, pages and features used, publishing results,
                API activity, error reports, session information, login
                activity, and security events.
              </p>
            </div>

            <div className={sectionClassName}>
              <h3 className={subheadingClassName}>
                3.5 Communications and support data
              </h3>
              <p>
                We process messages, feedback, and other information you provide
                when you contact the Service operator for support or privacy
                requests.
              </p>
            </div>

            <div className={sectionClassName}>
              <h3 className={subheadingClassName}>
                3.6 Cookies and similar technologies
              </h3>
              <p>
                The Service uses cookies and browser storage required for
                authentication, security, language selection, preferences, and
                core functionality. Blocking necessary cookies may prevent the
                Service from working correctly.
              </p>
            </div>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              4. How We Use Data and Our Legal Bases
            </h2>
            <p>We process personal data for the following purposes:</p>
            <ul className={listClassName}>
              <li>
                <strong className="font-medium text-white">
                  Providing the Service
                </strong>
                : authenticating users, managing accounts and workspaces,
                storing and publishing content, retrieving social-media
                analytics, and providing support. The legal basis is performance
                of a contract or steps taken at your request before entering a
                contract.
              </li>
              <li>
                <strong className="font-medium text-white">
                  Securing the Service
                </strong>
                : detecting abuse, fraud, unauthorised access, spam, and
                technical threats and investigating incidents. The legal basis
                is our legitimate interest in operating a safe and reliable
                Service and, where applicable, compliance with legal
                obligations.
              </li>
              <li>
                <strong className="font-medium text-white">
                  Operating and improving the Service
                </strong>
                : troubleshooting, monitoring performance, and understanding how
                features work. The legal basis is our legitimate interest in
                maintaining and improving the Service.
              </li>
              <li>
                <strong className="font-medium text-white">
                  Communicating with you
                </strong>
                : responding to requests and sending account, security, or
                publishing-related messages. The legal basis is performance of a
                contract or our legitimate interest in communicating about the
                Service.
              </li>
              <li>
                <strong className="font-medium text-white">
                  Complying with law
                </strong>
                : responding to lawful requests, enforcing rights, and defending
                claims. The legal basis is compliance with legal obligations or
                our legitimate interests.
              </li>
            </ul>
            <p>
              We do not use your scheduled posts, connected-platform content, or
              private communications to send you advertising, and we do not sell
              personal data.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>5. AI-Assisted Features</h2>
            <p>
              The Service offers optional AI-assisted features. When you choose
              to use one, the prompts and content needed to fulfil your request
              are transmitted to OpenAI for processing. AI output may be
              inaccurate, and you are responsible for reviewing it before using
              or publishing it. Do not submit sensitive personal data unless it
              is necessary and you are authorised to do so.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              6. Postiz as Controller and Processor
            </h2>
            <p>
              For account, Service-usage, support, and security data, Stephen
              Kurniawan acts as the data controller.
            </p>
            <p>
              For content you publish through the Service and personal data
              about your audience, followers, customers, or contacts that is
              processed on your instructions, Stephen Kurniawan acts as a
              processor on your behalf and you remain the controller. You are
              responsible for having an appropriate legal basis, providing
              required notices, and respecting the rights of those individuals.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>7. Who We Share Data With</h2>
            <p>
              We do not sell or rent personal data. We share data only with:
            </p>
            <ul className={listClassName}>
              <li>
                <strong className="font-medium text-white">
                  Connected platforms
                </strong>
                : Facebook, Instagram, YouTube, TikTok, or LinkedIn when needed
                to perform the actions you request.
              </li>
              <li>
                <strong className="font-medium text-white">
                  Service providers
                </strong>
                : providers supporting hosting, storage, email delivery, and AI
                processing, only as needed to operate the Service.
              </li>
              <li>
                <strong className="font-medium text-white">
                  Workspace members
                </strong>
                : people in a workspace you join may see its content, schedules,
                comments, and activity according to their permissions.
              </li>
              <li>
                <strong className="font-medium text-white">
                  Authorities and advisers
                </strong>
                : where disclosure is required by law or necessary to establish,
                exercise, or defend legal claims or protect the Service and its
                users.
              </li>
              <li>
                <strong className="font-medium text-white">
                  A successor operator
                </strong>
                : in connection with a transfer or reorganisation of the
                Service, subject to applicable data-protection requirements.
              </li>
            </ul>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              8. International Data Transfers
            </h2>
            <p>
              Some connected platforms and service providers may process
              personal data outside Germany or the European Economic Area. Where
              required by law, we use an applicable transfer mechanism or rely
              on safeguards made available by the relevant provider to protect
              transferred data.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>9. Data Retention</h2>
            <p>
              We keep personal data only for as long as needed to provide the
              Service, fulfil the purposes described in this Policy, and meet
              applicable legal obligations. The retention period depends on the
              type of data, whether your account or social-platform connection
              is active, why the data is needed, and legal or security
              requirements.
            </p>
            <p>
              You can disconnect a social platform from the Service. You can
              also revoke access through that platform’s settings. Revoking
              platform access does not by itself delete your Postiz account or
              data already stored in the Service. To request deletion, use the
              contact details in section 1.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>10. Security</h2>
            <p>
              We use reasonable technical and organisational measures intended
              to protect personal data against accidental or unlawful
              destruction, loss, alteration, disclosure, or access. No internet
              service or storage system is completely secure, so absolute
              security cannot be guaranteed. Keep your login credentials
              confidential and contact us if you suspect unauthorised access.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>11. Your Rights</h2>
            <p>
              Under the GDPR, subject to its conditions and exceptions, you may
              have the right to:
            </p>
            <ul className={listClassName}>
              <li>access your personal data and receive a copy;</li>
              <li>correct inaccurate or incomplete data;</li>
              <li>request deletion of your data;</li>
              <li>restrict or object to certain processing;</li>
              <li>receive certain data in a portable format;</li>
              <li>
                withdraw consent at any time where processing relies on consent,
                without affecting earlier processing; and
              </li>
              <li>lodge a complaint with a data-protection authority.</li>
            </ul>
            <p>
              To exercise a right, email{' '}
              <a
                href="mailto:stepkurniawan@gmail.com"
                className={linkClassName}
              >
                stepkurniawan@gmail.com
              </a>
              . We may need to verify your identity before acting on your
              request.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>12. Children</h2>
            <p>
              The Service is intended for professional social-media management
              and is not directed to children. If you believe a child has
              provided personal data through the Service, contact us so that we
              can review and address the situation.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>13. Third-Party Services</h2>
            <p>
              The Service integrates with and may link to third-party services.
              Their handling of personal data is governed by their own privacy
              policies and terms. Review the policies of every social platform
              you connect to Postiz.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>14. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy when the Service or legal
              requirements change. If a change is material, we will provide
              reasonable notice where appropriate. The date at the top
              identifies the latest version.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>15. Contact and Complaints</h2>
            <p>For privacy questions, requests, or complaints, contact:</p>
            <address className="not-italic">
              Stephen Kurniawan
              <br />
              20535 Hamburg
              <br />
              Germany
              <br />
              <a
                href="mailto:stepkurniawan@gmail.com"
                className={linkClassName}
              >
                stepkurniawan@gmail.com
              </a>
            </address>
            <p>
              You may also lodge a complaint with the competent supervisory
              authority. In Hamburg, this is the{' '}
              <a
                href="https://datenschutz-hamburg.de/service-information/beschwerde-oder-hinweis-einreichen"
                target="_blank"
                rel="noreferrer"
                className={linkClassName}
              >
                Hamburg Commissioner for Data Protection and Freedom of
                Information (HmbBfDI)
              </a>
              .
            </p>
          </section>
        </div>

        <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-[#A8A29E]">
          <Link href="/auth" className={linkClassName}>
            Return to Postiz
          </Link>
        </footer>
      </article>
    </main>
  );
}
