'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <section className="py-16 sm:py-20 bg-[#2C1810] relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(212,168,67,0.3) 20px, rgba(212,168,67,0.3) 21px)`,
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#B8860B]/20 px-4 py-1.5 mb-4">
            <Mail className="size-4 text-[#D4A843]" />
            <span className="text-sm font-medium text-[#D4A843]">Newsletter</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Recevez nos offres <span className="text-[#D4A843]">exclusives</span>
          </h2>

          <p className="text-white/60 mb-8">
            Inscrivez-vous à notre newsletter et soyez les premiers informés de nos nouvelles collections, 
            promotions et arrivages exclusifs.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-6 py-3 rounded-xl"
            >
              <CheckCircle className="size-5" />
              <span className="font-medium">Merci pour votre inscription !</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl focus-visible:border-[#D4A843] focus-visible:ring-[#D4A843]/50"
              />
              <Button
                type="submit"
                className="h-12 bg-[#B8860B] hover:bg-[#8B6508] text-white font-semibold px-6 rounded-xl whitespace-nowrap"
              >
                S&apos;inscrire
              </Button>
            </form>
          )}

          <p className="text-white/30 text-xs mt-4">
            En vous inscrivant, vous acceptez de recevoir nos communications. Désabonnement possible à tout moment.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
