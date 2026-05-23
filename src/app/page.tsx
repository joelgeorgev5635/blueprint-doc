import { HeroSection } from '@/components/blocks/hero-section-5'
import { Footer } from '@/components/layout/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { ChevronRight, BookOpen, Stethoscope, ClipboardList, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'FY1 Survival Guides',
    description:
      "Everything you need before your first ward round. Prescribing, escalation, clerking, handover — written by doctors who've been there.",
  },
  {
    icon: Stethoscope,
    title: 'Specialty Rotation Guides',
    description:
      'Rotation-specific packs for General Medicine, Surgery, Paediatrics, Psychiatry, O&G, and Emergency Medicine.',
  },
  {
    icon: ClipboardList,
    title: 'Clinical Frameworks',
    description:
      'Decision trees, SBAR templates, NEWS2 guides, CURB-65, and escalation frameworks — structured thinking under pressure.',
  },
  {
    icon: ShieldCheck,
    title: 'Guideline Aligned',
    description:
      'Written with reference to current UK clinical guidelines. Trust-specific variations are flagged throughout.',
  },
]

const testimonials = [
  {
    quote: "I started my General Surgery rotation feeling completely lost. This guide told me exactly what was expected, what the unwritten rules were, and how to escalate when I wasn't sure. I actually felt prepared.",
    name: 'Sophie R.',
    role: 'FY1, General Surgery',
  },
  {
    quote: 'The prescribing section alone was worth it. Real doses, real scenarios, and actual red flags. Not the textbook version that nobody uses on a ward.',
    name: 'James T.',
    role: 'FY1, General Medicine',
  },
  {
    quote: "Read it on the train to my first Paediatrics shift. The tone felt like getting advice from a registrar who actually wanted to help.",
    name: 'Priya M.',
    role: 'FY1, Paediatrics',
  },
  {
    quote: "The SBAR section changed how I bleep registrars. I stopped getting that silence on the other end where they're waiting for me to get to the point.",
    name: 'Daniel O.',
    role: 'FY1, Acute Medicine',
  },
  {
    quote: "Honestly wish I had this before my first on-call. The triage framework for bleeps is exactly what no one tells you but everyone expects you to know.",
    name: 'Caitlin F.',
    role: 'FY1, General Surgery',
  },
  {
    quote: "The burnout chapter hit differently at month four. Good to know it was normal and that there were actual steps to take, not just 'look after yourself' advice.",
    name: 'Marcus L.',
    role: 'FY1, Psychiatry',
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Features section */}
      <section className="blueprint-grid bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">What's inside</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              The internal knowledge layer that experienced doctors carry in their head
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Medical school teaches you to pass exams. BlueprintDoc teaches you to function on the ward.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl bg-muted/50 p-6 transition-colors duration-150 hover:bg-muted">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-medium">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product highlight */}
      <section className="border-y border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Available now</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Finals to Foundation: Core
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The 30-page survival guide for starting FY1. Everything the lecture hall forgot to teach you — written at the level of a capable FY1, not a consultant.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  'Reading guidelines (NICE, SIGN navigation)',
                  'Prescribing safely — avoiding the common FY1 errors',
                  'Escalating correctly with confident communication',
                  'Clerking efficiently: speed and structure',
                  'Handover that actually protects patient safety',
                  'Nights and on-calls: managing pressure',
                  'The unwritten rules of ward culture',
                  'Self-care and avoiding burnout',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center gap-4">
                <div>
                  <span className="text-2xl font-semibold">£15.20</span>
                  <span className="ml-2 text-sm text-muted-foreground line-through">£19</span>
                  <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">20% off</span>
                </div>
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/finals-to-foundation-series">
                    Get the Core Guide
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="blueprint-grid relative overflow-hidden rounded-2xl border border-border bg-background p-8">
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Quick reference</p>
                  <p className="mt-2 font-mono text-sm">NEWS2 · SBAR · CURB-65</p>
                  <p className="mt-1 font-mono text-sm">Blood reference ranges</p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="text-xs font-medium text-primary">Red flag</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Paracetamol <span className="font-mono">1g QDS</span>, max <span className="font-mono">4g/24h</span> — reduce to <span className="font-mono">500mg QDS</span> if &lt;50kg
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Escalation</p>
                  <p className="mt-1 text-sm text-muted-foreground">Situation · Background · Assessment · Recommendation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="blueprint-grid bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">From FY1 doctors</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
              Written by doctors. Trusted by doctors.
            </h2>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <InfiniteSlider speed={35} gap={24}>
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="w-80 shrink-0 rounded-xl border border-border bg-card p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-primary" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </InfiniteSlider>
          <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-24" direction="left" blurIntensity={1} />
          <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-24" direction="right" blurIntensity={1} />
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">About BlueprintDoc</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Bridging the gap between the lecture hall and the ward
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                We built BlueprintDoc because we remembered what starting as an FY1 actually felt like — the gap between what medical school teaches and what the ward demands on day one. That gap is real, it is wide, and most people only discover it when they're already on shift.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our guides are written by doctors who have completed foundation training successfully and want to pass on the things that actually helped — not the things that look good in a curriculum document.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Developed by doctors',
                  body: 'Every guide is written by clinicians who have been through foundation training. We write what we wished someone had told us.',
                },
                {
                  title: 'Grounded in experience',
                  body: 'Carefully curated lessons from real ward situations — not textbook scenarios. The pearls a consultant carries in their head, made accessible.',
                },
                {
                  title: 'Built for the transition',
                  body: 'Specifically designed for final-year students and new FY1 doctors navigating the shift from medical school to the NHS.',
                },
                {
                  title: 'For our colleagues',
                  body: 'We are genuinely invested in helping the next generation of junior doctors start their careers with more confidence and less overwhelm.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-muted/30 p-5">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Your first shift is closer than you think.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Don't arrive on the ward hoping it'll click. Get the guide that tells you exactly what to expect, what to do, and when to ask for help.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/finals-to-foundation-series">
                Get Finals to Foundation
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            For education and preparation only. Always follow your trust's protocols and escalate appropriately.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
