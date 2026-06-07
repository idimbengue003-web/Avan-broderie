'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import AnnouncementBanner from '@/components/announcement-banner'
import Collections from '@/components/collections'
import FeaturedProducts from '@/components/featured-products'
import Promotions from '@/components/promotions'
import TissusSpotlight from '@/components/tissus-spotlight'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/footer'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '2250712345678'
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour, je suis intéressé(e) par vos produits. Pouvez-vous m\'aider ?')}`

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0]">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnnouncementBanner />
        <Collections />
        <FeaturedProducts />
        <Promotions />
        <TissusSpotlight />
        <Newsletter />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="size-6" />
        <span className="hidden sm:inline text-sm">Besoin d&apos;aide ?</span>
      </a>
    </div>
  )
}
