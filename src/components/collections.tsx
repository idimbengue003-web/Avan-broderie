'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const collections = [
  {
    title: 'Tissus Africains',
    image: '/collection-tissus.png',
    count: 45,
    href: '#tissus',
  },
  {
    title: 'Robes & Tenues',
    image: '/collection-robes.png',
    count: 62,
    href: '#collections',
  },
  {
    title: 'Mode Homme',
    image: '/collection-hommes.png',
    count: 38,
    href: '#collections',
  },
  {
    title: 'Mode Enfant',
    image: '/collection-enfants.png',
    count: 29,
    href: '#collections',
  },
  {
    title: 'Accessoires',
    image: '/collection-accessoires.png',
    count: 54,
    href: '#collections',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: {},
  visible: {
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Collections() {
  return (
    <section id="collections" className="py-16 sm:py-20 bg-[#FFF8F0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C1810] mb-3">
            Nos <span className="text-[#B8860B]">Collections</span>
          </h2>
          <p className="text-[#8B7355] max-w-xl mx-auto">
            Explorez nos collections soigneusement sélectionnées, alliant tradition africaine et style contemporain.
          </p>
          <div className="w-20 h-1 bg-[#B8860B] rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {collections.map((collection) => (
            <motion.div
              key={collection.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <a href={collection.href} className="block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/90 via-[#2C1810]/30 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {collection.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-3">
                      {collection.count} articles
                    </p>
                    <div className="inline-flex items-center gap-2 text-[#D4A843] text-sm font-medium group-hover:gap-3 transition-all">
                      Découvrir
                      <ArrowRight className="size-4" />
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#B8860B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
