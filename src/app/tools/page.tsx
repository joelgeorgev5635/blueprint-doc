import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/layout/footer'
import { BlueprintDocLogo } from '@/components/layout/logo'
import { ToolEmbed } from '@/components/layout/tool-embed'

export const metadata: Metadata = {
  title: 'Tools | BlueprintDoc',
  description: 'Free practical tools for resident doctors and medical educators. Built to use on the ward.',
}

const tools = [
  {
    src: '/teaching-planner.html',
    title: 'B.R.I.E.F by BlueprintDoc',
    description:
      'Blueprint Resident Instructional Education Framework. Plan and execute a peer teaching session in under 10 minutes: objectives, clinical scenario, evidence-based delivery framework, and take-home messages. One printable plan.',
  },
]

export default function ToolsPage() {
  return (
    <>
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-32 max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link href="/">
            <BlueprintDocLogo size="lg" />
          </Link>
          <nav className="hidden gap-2 text-sm lg:flex">
            <Link href="/" className="block rounded-full border border-border px-4 py-1.5 text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground">Home</Link>
            <Link href="/finals-to-foundation-series" className="block rounded-full border border-border px-4 py-1.5 text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground">Finals to Foundation</Link>
            <Link href="/tools" className="block rounded-full border border-border bg-muted px-4 py-1.5 font-medium text-foreground transition-colors duration-150">Tools</Link>
          </nav>
          <Button asChild size="sm" className="rounded-full">
            <a href="https://blueprintdoc.gumroad.com/l/ovqegd" target="_blank" rel="noopener noreferrer">
              Buy now: £4.99
            </a>
          </Button>
        </div>
      </header>

      <main>
        <section className="blueprint-grid border-b border-border bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Tools
              </p>
              <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Built to use, not just read
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Practical tools for the ward. No login. No faff. Free to use.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {tools.map((tool) => (
                <ToolEmbed key={tool.title} {...tool} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-background py-12">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-xs leading-relaxed text-muted-foreground">
              BlueprintDoc tools are for education and preparation only. Always follow your trust's protocols and escalate to a senior colleague when in doubt.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
