'use client'
import { Button } from '@/components/ui/button'

export function NotifyButton() {
  return (
    <Button
      className="mt-6 rounded-full"
      onClick={() => window.dispatchEvent(new CustomEvent('open-email-popup'))}
    >
      Notify me
    </Button>
  )
}
