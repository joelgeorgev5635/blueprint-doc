import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'
import { BlueprintDocLogo } from '@/components/layout/logo'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'BlueprintDoc privacy policy - how we collect, use, and protect your data.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-32 max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link href="/">
            <BlueprintDocLogo size="lg" />
          </Link>
        </div>
      </header>

      <main className="blueprint-grid bg-background py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Legal</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: May 2025</p>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-base font-medium text-foreground">1. Who we are</h2>
              <p className="mt-3">
                BlueprintDoc is a medical education platform operated by BlueprintDoc Ltd. Our website is{' '}
                <a href="https://blueprintdoc.co.uk" className="text-primary hover:underline">
                  blueprintdoc.co.uk
                </a>
                . If you have questions about this policy, contact us at{' '}
                <a href="mailto:hello@blueprintdoc.co.uk" className="text-primary hover:underline">
                  hello@blueprintdoc.co.uk
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-base font-medium text-foreground">2. What data we collect</h2>
              <p className="mt-3">We collect the following personal data when you use our services:</p>
              <ul className="mt-3 space-y-2 pl-4">
                <li className="flex gap-2"><span className="text-primary">·</span> Email address (when you subscribe or make a purchase)</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Name (when you purchase a product)</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Payment information (processed securely by Stripe - we do not store card details)</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Usage data (pages visited, time spent - via analytics)</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Device and browser information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-medium text-foreground">3. How we use your data</h2>
              <p className="mt-3">We use your data to:</p>
              <ul className="mt-3 space-y-2 pl-4">
                <li className="flex gap-2"><span className="text-primary">·</span> Process and fulfil purchases</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Send you products and order confirmations</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Send you updates and offers you have opted into</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Improve our content and platform</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal data to third parties. We do not use your data to generate advertising profiles.
              </p>
            </section>

            <section>
              <h2 className="text-base font-medium text-foreground">4. Legal basis for processing (GDPR)</h2>
              <p className="mt-3">
                Where GDPR applies, we process your data under the following lawful bases:
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                <li className="flex gap-2"><span className="text-primary">·</span> <strong className="text-foreground">Contract:</strong> to fulfil purchases you make</li>
                <li className="flex gap-2"><span className="text-primary">·</span> <strong className="text-foreground">Consent:</strong> for marketing emails (you can withdraw at any time)</li>
                <li className="flex gap-2"><span className="text-primary">·</span> <strong className="text-foreground">Legitimate interests:</strong> to improve our services and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-medium text-foreground">5. Third-party services</h2>
              <p className="mt-3">We use the following third-party services which may process your data:</p>
              <ul className="mt-3 space-y-2 pl-4">
                <li className="flex gap-2"><span className="text-primary">·</span> <strong className="text-foreground">Gumroad / Stripe:</strong> payment processing</li>
                <li className="flex gap-2"><span className="text-primary">·</span> <strong className="text-foreground">Vercel:</strong> hosting and infrastructure</li>
                <li className="flex gap-2"><span className="text-primary">·</span> <strong className="text-foreground">Email provider:</strong> transactional and marketing emails</li>
              </ul>
              <p className="mt-3">
                Each of these providers has their own privacy policy. We ensure data processing agreements are in place where required by GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-base font-medium text-foreground">6. Data retention</h2>
              <p className="mt-3">
                We retain your data for as long as necessary to provide our services and comply with legal obligations. Purchase records are retained for 7 years for tax and accounting purposes. Marketing data is deleted within 30 days of unsubscription.
              </p>
            </section>

            <section>
              <h2 className="text-base font-medium text-foreground">7. Your rights</h2>
              <p className="mt-3">Under UK GDPR, you have the right to:</p>
              <ul className="mt-3 space-y-2 pl-4">
                <li className="flex gap-2"><span className="text-primary">·</span> Access the personal data we hold about you</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Correct inaccurate data</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Request deletion of your data</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Object to processing</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Data portability</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Withdraw consent at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email{' '}
                <a href="mailto:hello@blueprintdoc.co.uk" className="text-primary hover:underline">
                  hello@blueprintdoc.co.uk
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-base font-medium text-foreground">8. Cookies</h2>
              <p className="mt-3">
                We use essential cookies for site functionality and analytics cookies to understand how the site is used. You can manage cookie preferences in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-base font-medium text-foreground">9. Changes to this policy</h2>
              <p className="mt-3">
                We may update this policy from time to time. Material changes will be communicated by email to active subscribers. The date at the top of this page reflects the most recent revision.
              </p>
            </section>

            <section>
              <h2 className="text-base font-medium text-foreground">10. Intellectual Property and Copyright</h2>
              <p className="mt-3">
                All content on this website and within BlueprintDoc products - including but not limited to written guides, clinical frameworks, decision trees, reference materials, and design - is the intellectual property of BlueprintDoc Ltd and is protected by UK copyright law.
              </p>
              <p className="mt-3">
                You may not reproduce, redistribute, resell, or republish any BlueprintDoc content in any form - in whole or in part - without prior written permission from BlueprintDoc Ltd. This includes sharing purchased PDF guides with third parties or uploading them to any platform, website, or file-sharing service.
              </p>
              <p className="mt-3">
                Personal, non-commercial use of purchased content is permitted. If you wish to use BlueprintDoc content for educational, institutional, or commercial purposes, contact us at{' '}
                <a href="mailto:hello@blueprintdoc.co.uk" className="text-primary hover:underline">
                  hello@blueprintdoc.co.uk
                </a>{' '}
                to discuss licensing.
              </p>
              <p className="mt-3">
                © {new Date().getFullYear()} BlueprintDoc Ltd. All rights reserved.
              </p>
            </section>

            <section>
              <h2 className="text-base font-medium text-foreground">11. Contact</h2>
              <p className="mt-3">
                For any privacy-related queries:{' '}
                <a href="mailto:hello@blueprintdoc.co.uk" className="text-primary hover:underline">
                  hello@blueprintdoc.co.uk
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
