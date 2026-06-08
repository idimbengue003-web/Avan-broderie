'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Gem, Palette, ShieldCheck } from 'lucide-react'
import PlaceholderImage from '@/components/placeholder-image'

const features = [
  {
    icon: Gem,
    title: 'Qualité Premium',
    description: 'Tissus sélectionnés avec soin pour leur qualité supérieure et leur durabilité exceptionnelle.',
  },
  {
    icon: Palette,
    title: 'Motifs Uniques',
    description: 'Des designs exclusifs créés par nos artisans, inspirés de la richesse culturelle africaine.',
  },
  {
    icon: ShieldCheck,
    title: 'Authenticité Garantie',
    description: 'Chaque tissu est certifié authentique, importé directement des meilleurs tisseurs africains.',
  },
]

export default function TissusSpotlight() {
  return (
    <section id="tissus" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <PlaceholderImage label="Photo - Tissus Africains" className="w-full h-full" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-[#B8860B]/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-[#D4A843]/10 -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F5EDE0] px-4 py-1.5 mb-4">
              <span className="text-sm font-medium text-[#B8860B]">Collection Tissus</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C1810] mb-4">
              Tissus d&apos;Exception
              <br />
              <span className="text-[#B8860B]">d&apos;Afrique</span>
            </h2>

            <p className="text-[#8B7355] leading-relaxed mb-8">
              Notre collection de tissus africains vous offre le meilleur de l&apos;artisanat textile. 
              Du Wax hollandais au Kente ghanéen, du Bazin riche au Bogolan malien, chaque tissu 
              raconte une histoire et porte en lui des siècles de tradition.
            </p>

            {/* Features */}
            <div className="space-y-5 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F5EDE0] flex items-center justify-center">
                    <feature.icon className="size-5 text-[#B8860B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C1810] text-sm mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-[#8B7355] text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-[#B8860B] hover:bg-[#8B6508] text-white font-semibold px-8 rounded-xl"
            >
              <a href="#collections">
                Voir tous les tissus
                <ArrowRight className="size-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
