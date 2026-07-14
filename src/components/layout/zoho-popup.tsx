'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

export function ZohoPopup() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const openPopup = () => setOpen(true)
    window.addEventListener('open-email-popup', openPopup)
    const timer = setTimeout(() => setOpen(true), 3000)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('open-email-popup', openPopup)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })
    } catch (_) {
      // Network error — still show success, don't punish the user
    }
    setSubmitted(true)
    setSubmitting(false)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
    >
      <div className="relative mx-4 w-full max-w-sm rounded-2xl border border-border bg-background p-8 shadow-xl">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <p className="font-medium">You&apos;re in.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              We&apos;ll let you know when new guides drop.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-5 flex justify-center">
              <Image
                src="/logo.png"
                alt="BlueprintDoc"
                width={130}
                height={36}
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <h2 className="text-center text-xl font-semibold tracking-tight">
              New guides. No spam.
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Be first to know when new clinical guides drop.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-shadow focus:ring-2 focus:ring-ring"
              />
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-shadow focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                {submitting ? 'Saving…' : 'Keep me posted'}
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Unsubscribe any time. No third-party sharing.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
