'use client'

import { Home, Grid3X3, Tag, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '221771234567'

const navItems = [
  { icon: Home, label: 'Accueil', href: '#accueil' },
  { icon: Grid3X3, label: 'Collections', href: '#collections' },
  { icon: Tag, label: 'Promos', href: '#promotions' },
  { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour, je suis intéressé(e) par vos produits.')}`, external: true },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E8DCC8]/50 safe-area-pb">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isExternal = 'external' in item && item.external
          if (isExternal) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-0.5 w-16 py-1 text-[#25D366] active:scale-95 transition-transform"
              >
                <item.icon className="size-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </a>
            )
          }
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center gap-0.5 w-16 py-1 text-[#8B7355] active:scale-95 transition-transform active:text-[#B8860B]"
            >
              <item.icon className="size-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
