'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { BlueprintDocLogo } from '@/components/layout/logo'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'motion/react'

const trustBadges = [
  'NEWS2',
  'SBAR',
  'CURB-65',
  'Sepsis 6',
  'ABCDE',
  'BNF Reference',
  'NICE CKS',
  'Prescribing Safety',
  'Handover Frameworks',
  'On-Call Survival',
]

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="relative bg-background dark:bg-[hsl(222,47%,5%)]">
          <div className="blueprint-grid-dark absolute inset-0 opacity-60" />
          <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Finals to Foundation: Core — available now
                </div>

                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-display font-semibold tracking-tight md:text-6xl lg:mt-6 xl:text-7xl">
                  Ready for your first shift as a doctor?
                </h1>
                <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground leading-relaxed">
                  Practical guides that bridge the gap between medical school and the NHS ward. Written by doctors who remember what day one actually felt like.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full pl-5 pr-3 text-base">
                    <Link href="/finals-to-foundation-series">
                      <span className="text-nowrap">Explore Finals to Foundation</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover opacity-30 dark:opacity-20"
                src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
              />
            </div>
          </div>
        </section>

        <section className="bg-background pb-2">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-52 md:border-r md:border-border md:pr-6">
                <p className="text-end text-sm text-muted-foreground">What's covered</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-13rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={80}>
                  {trustBadges.map((badge) => (
                    <div
                      key={badge}
                      className="flex items-center rounded-full border border-border bg-muted px-4 py-1.5">
                      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">{badge}</span>
                    </div>
                  ))}
                </InfiniteSlider>

                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const menuItems = [
  { name: 'Finals to Foundation', href: '/finals-to-foundation-series' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/#about' },
]

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.03)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header>
      <nav
        data-state={menuState ? 'active' : undefined}
        className="group fixed z-20 w-full pt-2">
        <div
          className={cn(
            'mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12',
            scrolled && 'bg-background/80 backdrop-blur-2xl shadow-sm',
          )}>
          <motion.div
            className={cn(
              'relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6',
              scrolled && 'lg:py-4',
            )}>
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link href="/" aria-label="BlueprintDoc home">
                <BlueprintDocLogo size="lg" />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close menu' : 'Open menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground block transition-colors duration-150">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground block transition-colors duration-150">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild variant="outline" size="sm" className="rounded-full">
                  <Link href="https://blueprintdoc.gumroad.com/l/ovqegd" target="_blank" rel="noopener noreferrer">
                    Shop
                  </Link>
                </Button>
                <Button asChild size="sm" className="rounded-full">
                  <Link href="/finals-to-foundation-series">
                    Get started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  )
}
