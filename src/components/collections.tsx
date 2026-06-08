'use client'

import PlaceholderImage from '@/components/placeholder-image'
import { ArrowRight } from 'lucide-react'

const collections = [
  {
    title: 'Tissus Africains',
    placeholder: 'Photo - Tissus',
    count: 45,
    href: '#tissus',
  },
  {
    title: 'Robes & Tenues',
    placeholder: 'Photo - Robes',
    count: 62,
    href: '#collections',
  },
  {
    title: 'Mode Homme',
    placeholder: 'Photo - Hommes',
    count: 38,
    href: '#collections',
  },
  {
    title: 'Mode Enfant',
    placeholder: 'Photo - Enfants',
    count: 29,
    href: '#collections',
  },
  {
    title: 'Accessoires',
    placeholder: 'Photo - Accessoires',
    count: 54,
    href: '#collections',
  },
]

export default function Collections() {
  return (
    <section id="collections" className="py-6 bg-[#FFF8F0]">
      <div className="px-4 mb-4">
        <h2 className="text-xl font-bold text-[#2C1810]">
          Nos <span className="text-[#B8860B]">Collections</span>
        </h2>
        <p className="text-xs text-[#8B7355] mt-1">
          Tradition africaine et style contemporain
        </p>
      </div>

      {/* Horizontal scroll - Android carousel style */}
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide snap-x snap-mandatory">
        {collections.map((collection) => (
          <a
            key={collection.title}
            href={collection.href}
            className="flex-shrink-0 w-[140px] snap-start active:scale-[0.97] transition-transform"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <PlaceholderImage label={collection.placeholder} className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-bold text-white leading-tight">
                  {collection.title}
                </h3>
                <p className="text-[10px] text-white/60 mt-0.5">
                  {collection.count} articles
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
