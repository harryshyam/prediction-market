'use client'

import Link from '@/i18n/navigation'

interface HeaderLogoProps {
  labelSuffix?: string
}

export default function HeaderLogo({ labelSuffix }: HeaderLogoProps) {
  return (
    <Link
      href="/"
      className="flex h-10 shrink-0 items-center gap-2 text-2xl font-black tracking-wider transition-opacity hover:opacity-90"
    >
      <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
        SOLOMON
      </span>
    </Link>
  )
}
