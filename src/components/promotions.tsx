'use client'

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Clock, Zap, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '2250712345678'

const promos = [
  {
    id: 1,
    title: 'Soldes d\'Été',
    description: 'Profitez de -30% sur toute la collection de tissus africains. Offre limitée, ne manquez pas cette occasion unique !',
    discount: 30,
    image: '/collection-tissus.png',
    tag: 'Limité',
    productName: 'Soldes d\'Été - Tissus Africains',
  },
  {
    id: 2,
    title: 'Nouvelle Collection',
    description: 'Découvrez en avant-première notre nouvelle collection printemps-été. Des pièces exclusives qui allient tradition et modernité.',
    discount: 15,
    image: '/collection-robes.png',
    tag: 'Exclusif',
    productName: 'Nouvelle Collection Printemps-Été',
  },
  {
    id: 3,
    title: 'Pack Famille',
    description: 'Achetez 3 articles et obtenez -20% sur l\'ensemble du pack. Mode femme, homme et enfant à prix réduit !',
    discount: 20,
    image: '/collection-enfants.png',
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
    <section id="promotions" className="py-16 sm:py-20 bg-[#F5EDE0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C1810] mb-3">
            Annonces & <span className="text-[#B8860B]">Promotions</span>
          </h2>
          <p className="text-[#8B7355] max-w-xl mx-auto">
            Des offres exceptionnelles sur nos plus belles pièces. Contactez-nous sur WhatsApp pour en profiter !
          </p>
          <div className="w-20 h-1 bg-[#B8860B] rounded-full mx-auto mt-4" />
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src={promos[current].image}
                    alt={promos[current].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2C1810]/20 md:bg-none" />
                </div>

                {/* Content */}
                <div className="bg-white p-6 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-red-500 text-white border-0 px-3 py-1">
                      <Zap className="size-3 mr-1" />
                      -{promos[current].discount}%
                    </Badge>
                    <Badge variant="outline" className="border-[#B8860B] text-[#B8860B]">
                      <Clock className="size-3 mr-1" />
                      {promos[current].tag}
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#2C1810] mb-3">
                    {promos[current].title}
                  </h3>

                  <p className="text-[#8B7355] leading-relaxed mb-6">
                    {promos[current].description}
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-fit bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold px-8 h-12 rounded-xl transition-colors shadow-md"
                  >
                    <MessageCircle className="size-5" />
                    En profiter via WhatsApp
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-colors z-10"
          >
            <ChevronLeft className="size-5 text-[#5C3D2E]" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-colors z-10"
          >
            <ChevronRight className="size-5 text-[#5C3D2E]" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {promos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'w-8 bg-[#B8860B]' : 'w-2 bg-[#E8DCC8]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
