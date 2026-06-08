'use client'

import { useState, useEffect, useCallback } from 'react'
import { Badge } from '@/components/ui/badge'
import PlaceholderImage from '@/components/placeholder-image'
import { ChevronLeft, ChevronRight, Clock, Zap, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '221771234567'

const promos = [
  {
    id: 1,
    title: 'Soldes d\'Été',
    description: 'Profitez de -30% sur toute la collection de tissus africains. Offre limitée !',
    discount: 30,
    placeholder: 'Photo - Promo Tissus',
    tag: 'Limité',
    productName: 'Soldes d\'Été - Tissus Africains',
  },
  {
    id: 2,
    title: 'Nouvelle Collection',
    description: 'Découvrez notre nouvelle collection printemps-été. Des pièces exclusives.',
    discount: 15,
    placeholder: 'Photo - Nouvelle Collection',
    tag: 'Exclusif',
    productName: 'Nouvelle Collection Printemps-Été',
  },
  {
    id: 3,
    title: 'Pack Famille',
    description: 'Achetez 3 articles et obtenez -20% sur l\'ensemble du pack !',
    discount: 20,
    placeholder: 'Photo - Pack Famille',
    tag: 'Spécial',
    productName: 'Pack Famille - Promo 3 articles',
  },
]

export default function Promotions() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % promos.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + promos.length) % promos.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour ! Je suis intéressé(e) par l'offre : ${promos[current].productName}. Pouvez-vous m'en dire plus ?`)}`

  return (
    <section id="promotions" className="py-6 bg-[#F5EDE0]">
      <div className="px-4 mb-4">
        <h2 className="text-xl font-bold text-[#2C1810]">
          Annonces & <span className="text-[#B8860B]">Promos</span>
        </h2>
      </div>

      {/* Full-width card style */}
      <div className="px-4">
        <div className="relative rounded-xl overflow-hidden">
          {/* Image */}
          <div className="relative aspect-[16/9]">
            <PlaceholderImage label={promos[current].placeholder} className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 to-transparent" />
          </div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <Badge className="bg-red-500 text-white border-0 px-2 py-0.5 text-[10px]">
                <Zap className="size-2.5 mr-0.5" />
                -{promos[current].discount}%
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white text-[10px] px-2 py-0.5">
                <Clock className="size-2.5 mr-0.5" />
                {promos[current].tag}
              </Badge>
            </div>

            <h3 className="text-lg font-bold text-white mb-1">
              {promos[current].title}
            </h3>

            <p className="text-xs text-white/70 mb-3 line-clamp-2">
              {promos[current].description}
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] active:bg-[#1ebe57] text-white font-semibold px-4 h-9 rounded-lg text-xs transition-colors"
            >
              <MessageCircle className="size-3.5" />
              En profiter via WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/70 backdrop-blur-sm shadow-sm active:bg-white transition-colors z-10"
          >
            <ChevronLeft className="size-4 text-[#5C3D2E]" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/70 backdrop-blur-sm shadow-sm active:bg-white transition-colors z-10"
          >
            <ChevronRight className="size-4 text-[#5C3D2E]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {promos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current ? 'w-6 bg-[#B8860B]' : 'w-1.5 bg-[#E8DCC8]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
