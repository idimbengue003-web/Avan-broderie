'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import PlaceholderImage from '@/components/placeholder-image'

export default function Hero() {
  return (
    <section id="accueil" className="relative w-full">
      {/* Background */}
      <div className="relative w-full aspect-[3/4] max-h-[70vh]">
        <PlaceholderImage label="Bannière principale" className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/50 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 pb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8860B]/20 backdrop-blur-sm border border-[#B8860B]/30 px-3 py-1 mb-3">
            <Sparkles className="size-3 text-[#D4A843]" />
            <span className="text-xs font-medium text-[#D4A843]">Nouvelle Collection 2025</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white mb-2">
            L&apos;Art de la <span className="text-[#D4A843]">Broderie</span> Africaine
          </h1>

          <p className="text-sm text-white/70 mb-5 max-w-xs">
            Vêtements brodés et tissus d&apos;exception, tradition africaine et savoir-faire artisanal.
          </p>

          <div className="flex gap-2">
            <Button
              asChild
              size="sm"
              className="bg-[#B8860B] hover:bg-[#8B6508] text-white font-semibold h-10 text-sm rounded-lg"
            >
              <a href="#collections">
                Collections
                <ArrowRight className="size-3.5 ml-1.5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold h-10 text-sm rounded-lg"
            >
              <a href="#tissus">Nos Tissus</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
