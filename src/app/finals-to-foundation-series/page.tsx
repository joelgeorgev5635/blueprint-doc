import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/layout/footer'
import { NotifyButton } from '@/components/layout/notify-button'
import { BlueprintDocLogo } from '@/components/layout/logo'
import { ChevronRight, Lock, Clock, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Finals to Foundation Series',
  description:
    'Practical guides for your pathway from medical school to the NHS. The Finals to Foundation series bridges the lecture hall and the ward.',
}

const coreTopics = [
  { title: 'Reading Guidelines', description: 'Navigating NICE, SIGN, and local trust protocols without losing an hour per query.' },
  { title: 'Prescribing Safely', description: 'The common FY1 prescribing errors, why they happen, and how to avoid them.' },
  { title: 'Escalating Correctly', description: 'Confident communication with registrars and consultants. SBAR in practice.' },
  { title: 'Clerking Efficiently', description: 'Speed and structure without missing the red flags.' },
  { title: 'Handover That Works', description: 'SBAR handover that protects patients and doesn\'t take 20 minutes.' },
  { title: 'Nights and On-Calls', description: 'Managing pressure, bleeps, and uncertainty at 3am.' },
  { title: 'The Unwritten Rules', description: 'Ward culture, hierarchy, and the things no one in medical school told you.' },
  { title: 'Self-Care and Burnout', description: 'Recognising when you\'re running on empty and what to do about it.' },
  { title: 'Bonus: Portfolio & ARCP', description: 'e-Portfolio, CBDs, workplace assessments, and staying on track for your ARCP.' },
]

const specialtyGuides = [
  { name: 'General Medicine', status: 'coming-soon' },
  { name: 'General Surgery', status: 'coming-soon' },
  { name: 'Paediatrics', status: 'coming-soon' },
  { name: 'Psychiatry', status: 'coming-soon' },
  { name: 'Obstetrics & Gynaecology', status: 'coming-soon' },
  { name: 'Emergency Medicine', status: 'coming-soon' },
  { name: 'Elderly Medicine', status: 'future' },
  { name: 'Oncology', status: 'future' },
  { name: 'Respiratory', status: 'future' },
  { name: 'Cardiology', status: 'future' },
  { name: 'Gastroenterology', status: 'future' },
  { name: 'Neurology', status: 'future' },
]

export default function FinalsToFoundationPage() {
  return (
    <>
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-32 max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link href="/">
            <BlueprintDocLogo size="lg" />
          </Link>
          <nav className="hidden gap-2 text-sm lg:flex">
            <Link href="/" className="block rounded-full border border-border px-4 py-1.5 text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground">Home</Link>
            <Link href="/finals-to-foundation-series" className="block rounded-full border border-border bg-muted px-4 py-1.5 font-medium text-foreground transition-colors duration-150">Finals to Foundation</Link>
            <Link href="/resources" className="block rounded-full border border-border px-4 py-1.5 text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground">Resources</Link>
          </nav>
          <Button asChild size="sm" className="rounded-full">
            <a href="https://blueprintdoc.gumroad.com/l/ovqegd" target="_blank" rel="noopener noreferrer">
              Buy now: £15.20
            </a>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="blueprint-grid border-b border-border bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Finals to Foundation Series
              </p>
              <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Practical guides for your pathway from medical school to the NHS
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Written with reference to current UK clinical guidelines. Practical and direct - at the level of a capable FY1, not a consultant.
              </p>
            </div>
          </div>
        </section>

        {/* Core guide */}
        <section id="core" className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Available now
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  Finals to Foundation: Core
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The 30-page survival guide for starting FY1. Everything the lecture hall forgot - written by a doctor who remembers what day one felt like.
                </p>

                <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <FileText className="h-4 w-4" />
                    30+ pages
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    1–2 hour read
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {coreTopics.map((topic) => (
                    <div
                      key={topic.title}
                      className="rounded-lg border border-border bg-muted/30 p-4">
                      <p className="text-sm font-medium">{topic.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{topic.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">Also includes</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Quick reference guides for <span className="font-mono text-foreground">NEWS2</span>, <span className="font-mono text-foreground">SBAR</span>, <span className="font-mono text-foreground">CURB-65</span>, and standard blood reference ranges.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div>
                    <span className="text-3xl font-semibold">£15.20</span>
                    <span className="ml-2 text-sm text-muted-foreground line-through">£19</span>
                    <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">20% off this week</span>
                  </div>
                </div>
                <Button asChild size="lg" className="mt-4 rounded-full">
                  <a href="https://blueprintdoc.gumroad.com/l/ovqegd" target="_blank" rel="noopener noreferrer">
                    Get the Core Guide
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">
                  Instant PDF download via Gumroad.
                </p>
              </div>

              {/* Preview card */}
              <div className="flex items-start justify-center lg:justify-end">
                <div className="blueprint-grid w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
                  <div className="border-b border-border bg-muted/50 px-6 py-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Inside the guide</p>
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-3">
                      <p className="text-xs font-medium text-destructive">Red flag - escalate immediately</p>
                      <p className="mt-1 text-sm text-muted-foreground">NEWS2 ≥7, or any single parameter score of 3</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Prescribing rule</p>
                      <p className="mt-1 font-mono text-sm">Paracetamol 1g QDS</p>
                      <p className="mt-0.5 font-mono text-xs text-muted-foreground">Max 4g/24h · ↓ 500mg if &lt;50kg</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">SBAR</p>
                      <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                        <p><span className="font-medium text-foreground">S</span>ituation - what is happening now</p>
                        <p><span className="font-medium text-foreground">B</span>ackground - relevant clinical history</p>
                        <p><span className="font-medium text-foreground">A</span>ssessment - what you think is wrong</p>
                        <p><span className="font-medium text-foreground">R</span>ecommendation - what you need</p>
                      </div>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">CURB-65</p>
                      <p className="mt-1 text-xs text-muted-foreground">Confusion · Urea &gt;7 · RR ≥30 · BP &lt;90/60 · Age ≥65</p>
                      <p className="mt-1 font-mono text-xs">Score ≥2 → consider hospital admission</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty guides */}
        <section id="specialty" className="border-t border-border bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Coming soon</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Specialty Rotation Guides
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Rotation-specific packs that tell you exactly what each specialty expects, what the common presentations are, and how to survive your first week.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {specialtyGuides.map((guide) => (
                <div
                  key={guide.name}
                  className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
                  <span className="text-sm font-medium">{guide.name}</span>
                  <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-border bg-background p-8 text-center">
              <h3 className="text-base font-medium">Get notified when specialty guides launch</h3>
              <p className="mt-2 text-sm text-muted-foreground">Subscribe for early access and exclusive offers.</p>
              <NotifyButton />
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-border bg-background py-12">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-xs leading-relaxed text-muted-foreground">
              BlueprintDoc content is for education and preparation only. It is not a substitute for clinical judgement, local trust protocols, or senior clinical guidance. Always follow your trust's protocols and escalate to a senior colleague when in doubt. Drug doses should be verified against the BNF and local formulary before prescribing.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
