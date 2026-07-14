import Image from 'next/image'
import { cn } from '@/lib/utils'

export function BlueprintDocLogo({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const heights: Record<string, number> = { sm: 52, md: 72, lg: 120 }
  const h = heights[size]
  const w = Math.round(h * 3.2)

  return (
    <Image
      src="/logo.png"
      alt="BlueprintDoc: Ward Ready"
      width={w}
      height={h}
      className={cn('object-contain', className)}
      priority
    />
  )
}
