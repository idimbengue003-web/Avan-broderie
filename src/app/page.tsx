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
import BottomNav from '@/components/bottom-nav'

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
      <BottomNav />
    </div>
  )
}
