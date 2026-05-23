import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'
import { BlueprintDocLogo } from '@/components/layout/logo'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Clinical Resources',
  description: 'Curated reference links for FY1 doctors — NICE CKS, BNF, MDCalc, Resus UK, and more.',
}

const resources = [
  {
    category: 'Guidelines & Protocols',
    items: [
      {
        name: 'NICE CKS',
        description: 'Clinical Knowledge Summaries — concise, evidence-based guidance for primary and secondary care.',
        href: 'https://cks.nice.org.uk',
        tag: 'Guidelines',
      },
      {
        name: 'NICE Guidelines',
        description: 'Full NICE guidance for specific conditions, procedures, and public health topics.',
        href: 'https://www.nice.org.uk/guidance',
        tag: 'Guidelines',
      },
      {
        name: 'SIGN Guidelines',
        description: 'Scottish Intercollegiate Guidelines Network — evidence-based clinical practice guidelines.',
        href: 'https://www.sign.ac.uk',
        tag: 'Guidelines',
      },
    ],
  },
  {
    category: 'Prescribing & Medicines',
    items: [
      {
        name: 'BNF Online',
        description: 'British National Formulary — drug doses, interactions, contraindications, and monitoring.',
        href: 'https://bnf.nice.org.uk',
        tag: 'Prescribing',
      },
      {
        name: 'BNFc Online',
        description: 'British National Formulary for Children — paediatric doses and guidance.',
        href: 'https://bnfc.nice.org.uk',
        tag: 'Prescribing',
      },
    ],
  },
  {
    category: 'Clinical Calculators',
    items: [
      {
        name: 'MDCalc',
        description: 'Medical calculators and decision tools — NEWS2, CURB-65, Wells scores, and hundreds more.',
        href: 'https://www.mdcalc.com',
        tag: 'Calculators',
      },
      {
        name: 'QRisk3',
        description: 'Cardiovascular risk calculator used in UK primary care and cardiology.',
        href: 'https://qrisk.org/three',
        tag: 'Calculators',
      },
    ],
  },
  {
    category: 'Emergency & Resuscitation',
    items: [
      {
        name: 'Resuscitation Council UK',
        description: 'ALS, ILS, and PALS algorithms. Arrest protocols, post-ROSC care, and peri-arrest guidance.',
        href: 'https://www.resus.org.uk',
        tag: 'Emergency',
      },
      {
        name: 'Sepsis Trust UK',
        description: 'Sepsis screening tools, Sepsis 6, and escalation guidance for ward-based clinicians.',
        href: 'https://sepsistrust.org',
        tag: 'Emergency',
      },
    ],
  },
  {
    category: 'NHS Tools & Apps',
    items: [
      {
        name: 'Accurx',
        description: 'NHS-wide clinical communication platform — message patients, request documents, and coordinate care directly from your desktop.',
        href: 'https://www.accurx.com',
        tag: 'NHS Tool',
      },
    ],
  },
  {
    category: 'Professional & Regulatory',
    items: [
      {
        name: 'GMC Good Medical Practice',
        description: 'Core professional standards for doctors in the UK — duties, ethics, and responsibilities.',
        href: 'https://www.gmc-uk.org/professional-standards/good-medical-practice',
        tag: 'Professional',
      },
      {
        name: 'NHS Foundation Programme',
        description: 'Official FY1/FY2 curriculum, e-Portfolio guidance, and assessment information.',
        href: 'https://foundationprogramme.nhs.uk',
        tag: 'Professional',
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <>
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link href="/">
            <BlueprintDocLogo size="lg" />
          </Link>
          <nav className="hidden gap-8 text-sm lg:flex">
            <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">Home</Link>
            <Link href="/finals-to-foundation-series" className="text-muted-foreground transition-colors hover:text-foreground">Finals to Foundation</Link>
            <Link href="/resources" className="font-medium text-foreground">Resources</Link>
          </nav>
          <Button asChild size="sm" className="rounded-full">
            <Link href="/finals-to-foundation-series">Get the guide</Link>
          </Button>
        </div>
      </header>

      <main className="blueprint-grid bg-background py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Reference Links</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">Clinical Resources</h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Curated links to the reference tools used daily on the ward. All external — opens in a new tab.
          </p>

          <div className="mt-12 space-y-12">
            {resources.map((group) => (
              <div key={group.category}>
                <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{group.category}</h2>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors duration-150 hover:border-primary/30 hover:bg-primary/5"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium">{item.name}</p>
                          <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{item.tag}</span>
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                      <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-border bg-muted/30 p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Disclaimer</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              These are links to independent third-party resources. BlueprintDoc is not affiliated with any of these organisations. Always verify clinical information against your local trust protocols and current guidelines before acting.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
