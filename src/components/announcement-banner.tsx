'use client'

import { Flame, Truck, Sparkles } from 'lucide-react'

const announcements = [
  { icon: Flame, text: 'Soldes d\'été -30% sur toute la collection tissus' },
  { icon: Truck, text: 'Livraison gratuite dès 50 000 FCFA' },
  { icon: Sparkles, text: 'Nouvelle collection printemps disponible' },
  { icon: Flame, text: 'Soldes d\'été -30% sur toute la collection tissus' },
  { icon: Truck, text: 'Livraison gratuite dès 50 000 FCFA' },
  { icon: Sparkles, text: 'Nouvelle collection printemps disponible' },
]

export default function AnnouncementBanner() {
  return (
    <div className="w-full bg-[#B8860B] text-white overflow-hidden py-1.5">
      <div className="animate-marquee flex whitespace-nowrap">
        {announcements.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-1.5 mx-6 text-[10px] font-medium"
          >
            <span>{item.text}</span>
            <span className="text-white/40 mx-3">•</span>
          </div>
        ))}
      </div>
    </div>
  )
}
