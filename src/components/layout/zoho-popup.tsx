'use client'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

export function ZohoPopup() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const zohoReady = useRef(false)

  useEffect(() => {
    const openPopup = () => setOpen(true)
    window.addEventListener('open-email-popup', openPopup)

    // Timer fires independently — Zoho loading never blocks it
    const timer = setTimeout(() => setOpen(true), 3000)

    // Zoho loaded in background; wrapped so Edge tracking-protection errors can't crash the component
    let iframe: HTMLIFrameElement | null = null
    let script: HTMLScriptElement | null = null
    try {
      iframe = document.createElement('iframe')
      iframe.name = 'zoho-sink'
      iframe.style.display = 'none'
      document.body.appendChild(iframe)

      script = document.createElement('script')
      script.src = 'https://campaigns.zoho.eu/js/optin.min.js'
      script.onerror = () => { /* Zoho blocked — popup still works, emails won't sync */ }
      script.onload = () => {
        try {
          if (typeof (window as any).loadZCPopup === 'function') {
            ;(window as any).loadZCPopup(
              '3z9ba00add35d13b43926cf4d828f82193fd0672a7ccfa2fdd9558dd7645b5f715',
              'ZCFORMVIEW',
              '3z834b858570054b8a30ab29dd9462a6d8'
            )
          }
          setTimeout(() => {
            try {
              document.querySelectorAll<HTMLElement>(
                '#zc_signUpFormWrapper, [id*="ZCPopup"], [id*="zcPopup"], [id*="ZC_POPUP"]'
              ).forEach((el) => {
                const overlay = el.closest<HTMLElement>('[style*="position: fixed"], [style*="position:fixed"]')
                if (overlay) overlay.style.setProperty('display', 'none', 'important')
                el.style.setProperty('display', 'none', 'important')
              })
              document.querySelectorAll<HTMLFormElement>('#zc_signUpFormWrapper form, [id*="ZC"] form').forEach((f) => {
                f.target = 'zoho-sink'
              })
              zohoReady.current = true
            } catch (_) {}
          }, 400)
        } catch (_) {}
      }
      document.body.appendChild(script)
    } catch (_) {}

    return () => {
      clearTimeout(timer)
      window.removeEventListener('open-email-popup', openPopup)
      try { script?.remove() } catch (_) {}
      try { iframe?.remove() } catch (_) {}
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Populate Zoho's hidden form and click its submit button
    const zcForm = document.querySelector<HTMLFormElement>(
      '#zc_signUpFormWrapper form, [id*="ZC"] form'
    )
    if (zcForm) {
      const nameInput = zcForm.querySelector<HTMLInputElement>('input[type="text"]')
      const emailInput = zcForm.querySelector<HTMLInputElement>('input[type="email"]')
      if (nameInput) { nameInput.value = name; nameInput.dispatchEvent(new Event('input', { bubbles: true })) }
      if (emailInput) { emailInput.value = email; emailInput.dispatchEvent(new Event('input', { bubbles: true })) }
      const submitBtn = zcForm.querySelector<HTMLElement>('input[type="submit"], button[type="submit"]')
      if (submitBtn) submitBtn.click()
    }
    setSubmitted(true)
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
                className="w-full rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Keep me posted
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
