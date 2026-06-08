'use client'

import { useState } from 'react'
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
    <section className="py-6 bg-[#2C1810]">
      <div className="px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8860B]/20 px-3 py-1 mb-3">
            <Mail className="size-3 text-[#D4A843]" />
            <span className="text-[10px] font-medium text-[#D4A843]">Newsletter</span>
          </div>

          <h2 className="text-lg font-bold text-white mb-1">
            Recevez nos offres <span className="text-[#D4A843]">exclusives</span>
          </h2>

          <p className="text-[10px] text-white/50 mb-4 max-w-xs mx-auto">
            Soyez les premiers informés de nos nouvelles collections et promotions.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-400 px-4 py-2 rounded-lg">
              <CheckCircle className="size-4" />
              <span className="text-xs font-medium">Merci pour votre inscription !</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-xs mx-auto">
              <Input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-9 bg-white/10 border-white/20 text-white placeholder:text-white/30 rounded-lg text-xs focus-visible:border-[#D4A843]"
              />
              <Button
                type="submit"
                className="h-9 bg-[#B8860B] active:bg-[#8B6508] text-white font-semibold px-4 rounded-lg text-xs whitespace-nowrap"
              >
                S&apos;inscrire
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
