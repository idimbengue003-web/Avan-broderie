'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E8DCC8]/50">
      <div className="flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2">
          <Image
            src="/logo-boutique.png"
            alt="Avan Broderie"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-lg font-bold text-[#5C3D2E]">
            Avan <span className="text-[#B8860B]">Broderie</span>
          </span>
        </a>
      </div>
    </header>
  )
}
