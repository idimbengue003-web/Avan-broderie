'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import PlaceholderImage from '@/components/placeholder-image'

export default function Hero() {
  return (
    <section id="accueil" className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <PlaceholderImage label="Bannière principale" className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/85 via-[#2C1810]/60 to-[#2C1810]/40" />
      </div>

      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 z-[1] opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(184,134,11,0.1) 35px, rgba(184,134,11,0.1) 36px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#B8860B]/20 backdrop-blur-sm border border-[#B8860B]/30 px-4 py-1.5 mb-6">
              <Sparkles className="size-4 text-[#D4A843]" />
              <span className="text-sm font-medium text-[#D4A843]">Nouvelle Collection 2025</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4"
          >
            L&apos;Art de la
            <br />
            <span className="text-[#D4A843]">Broderie</span> Africaine
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/80 mb-8 max-w-lg"
          >
            Découvrez nos collections uniques de vêtements brodés et tissus d&apos;exception, 
            alliant tradition africaine et savoir-faire artisanal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#B8860B] hover:bg-[#8B6508] text-white font-semibold px-8 h-12 text-base"
            >
              <a href="#collections">
                Explorer les Collections
                <ArrowRight className="size-4 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-8 h-12 text-base backdrop-blur-sm"
            >
              <a href="#tissus">Nos Tissus</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-[#D4A843]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
