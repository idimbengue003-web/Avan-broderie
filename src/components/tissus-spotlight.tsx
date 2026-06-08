'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Gem, Palette, ShieldCheck } from 'lucide-react'
import PlaceholderImage from '@/components/placeholder-image'

const features = [
  {
    icon: Gem,
    title: 'Qualité Premium',
    description: 'Tissus sélectionnés avec soin pour leur qualité supérieure.',
  },
  {
    icon: Palette,
    title: 'Motifs Uniques',
    description: 'Des designs exclusifs inspirés de la richesse culturelle africaine.',
  },
  {
    icon: ShieldCheck,
    title: 'Authenticité Garantie',
    description: 'Chaque tissu est certifié authentique, des meilleurs tisseurs.',
  },
]

export default function TissusSpotlight() {
  return (
    <section id="tissus" className="py-6 bg-white">
      <div className="px-4">
        {/* Image */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
          <PlaceholderImage label="Photo - Tissus Africains" className="w-full h-full" />
        </div>

        {/* Text */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#F5EDE0] px-3 py-1 mb-3">
          <span className="text-xs font-medium text-[#B8860B]">Collection Tissus</span>
        </div>

        <h2 className="text-xl font-bold text-[#2C1810] mb-2">
          Tissus d&apos;Exception <span className="text-[#B8860B]">d&apos;Afrique</span>
        </h2>

        <p className="text-xs text-[#8B7355] leading-relaxed mb-5">
          Du Wax hollandais au Kente ghanéen, du Bazin riche au Bogolan malien, chaque tissu 
          raconte une histoire et porte en lui des siècles de tradition.
        </p>

        {/* Features */}
        <div className="space-y-3 mb-5">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#F5EDE0] flex items-center justify-center">
                <feature.icon className="size-4 text-[#B8860B]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#2C1810] text-xs mb-0.5">
                  {feature.title}
                </h4>
                <p className="text-[10px] text-[#8B7355]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button
          asChild
          className="bg-[#B8860B] active:bg-[#8B6508] text-white font-semibold px-6 h-9 text-sm rounded-lg"
        >
          <a href="#collections">
            Voir tous les tissus
            <ArrowRight className="size-3.5 ml-1.5" />
          </a>
        </Button>
      </div>
    </section>
  )
}
