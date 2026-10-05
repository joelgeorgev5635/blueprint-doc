'use client'
import { useState, useEffect } from 'react'
import { ChevronRight, X } from 'lucide-react'

interface ToolEmbedProps {
  src: string
  title: string
  description: string
}

export function ToolEmbed({ src, title, description }: ToolEmbedProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="group p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="2" width="12" height="20" rx="2"/><line x1="10" y1="7" x2="14" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="14" y2="15"/>
              </svg>
            </div>
            <span className="text-xs font-medium text-primary">Free to use</span>
          </div>
          <h3 className="mt-4 text-base font-medium">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
          <button
            onClick={() => setOpen(true)}
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors duration-150 hover:text-primary/80"
          >
            Launch tool
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background">
          <div className="flex h-12 shrink-0 items-center justify-between border-b border-border px-6">
            <span className="text-sm font-medium text-muted-foreground">{title}</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <iframe
            src={src}
            title={title}
            className="flex-1 w-full border-0"
          />
        </div>
      )}
    </>
  )
}
