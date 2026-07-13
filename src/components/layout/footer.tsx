import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { BlueprintDocLogo } from '@/components/layout/logo'

const footerLinks = {
  product: [
    { label: 'Finals to Foundation', href: '/finals-to-foundation-series' },
    { label: 'Core Guide', href: '/finals-to-foundation-series#core' },
    { label: 'Specialty Guides', href: '/finals-to-foundation-series#specialty' },
    { label: 'Resources', href: '/resources' },
  ],
  references: [
    { label: 'NICE CKS', href: 'https://cks.nice.org.uk', external: true },
    { label: 'BNF Online', href: 'https://bnf.nice.org.uk', external: true },
    { label: 'MDCalc', href: 'https://www.mdcalc.com', external: true },
    { label: 'Resus UK', href: 'https://www.resus.org.uk', external: true },
  ],
  company: [
    { label: 'About', href: '/#about' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Contact', href: 'mailto:hello@blueprintdoc.co.uk', external: true },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <BlueprintDocLogo size="sm" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              Practical medical education for final-year students and new foundation resident doctors navigating the NHS ward.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              For education only. Always follow your trust protocols.
            </p>
            <a
              href="https://www.instagram.com/blueprint_doc/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
              @blueprint_doc
            </a>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Product</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">References</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.references.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BlueprintDoc. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            For education only. Always verify with your local trust.
          </p>
        </div>
      </div>
    </footer>
  )
}
