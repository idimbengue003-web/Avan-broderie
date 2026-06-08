'use client'

import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { Facebook, Instagram, MapPin, Phone, Mail, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '221771234567'

export default function Footer() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour, je souhaite avoir des informations sur vos produits.')}`

  return (
    <footer id="contact" className="bg-[#1A1209] text-white/80 pb-20">
      <div className="px-4 pt-8 pb-6">
        {/* Brand */}
        <div className="flex items-center gap-2 mb-3">
          <Image
            src="/logo-boutique.png"
            alt="Avan Broderie"
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="text-base font-bold text-white">
            Avan <span className="text-[#D4A843]">Broderie</span>
          </span>
        </div>
        <p className="text-white/40 text-xs leading-relaxed mb-4">
          Votre catalogue de broderie africaine artisanale. Contactez-nous sur WhatsApp pour commander.
        </p>

        {/* Contact info */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <MapPin className="size-3 text-[#D4A843] flex-shrink-0" />
            <span>HLM, Dakar, Sénégal</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <Phone className="size-3 text-[#D4A843] flex-shrink-0" />
            <span>+221 77 123 45 67</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <Mail className="size-3 text-[#D4A843] flex-shrink-0" />
            <span>contact@avan-broderie.com</span>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#25D366] active:bg-[#1ebe57] text-white font-semibold px-4 py-2 rounded-lg text-xs transition-colors mb-6"
        >
          <MessageCircle className="size-3.5" />
          Nous contacter sur WhatsApp
        </a>

        <Separator className="bg-white/10 mb-5" />

        {/* Quick links */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div>
            <h4 className="text-white text-xs font-semibold mb-2">Collections</h4>
            <ul className="space-y-1">
              <li><a href="#tissus" className="text-[10px] text-white/40 active:text-[#D4A843]">Tissus</a></li>
              <li><a href="#collections" className="text-[10px] text-white/40 active:text-[#D4A843]">Robes</a></li>
              <li><a href="#collections" className="text-[10px] text-white/40 active:text-[#D4A843]">Homme</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold mb-2">Infos</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-[10px] text-white/40 active:text-[#D4A843]">Tailles</a></li>
              <li><a href="#" className="text-[10px] text-white/40 active:text-[#D4A843]">Livraison</a></li>
              <li><a href="#" className="text-[10px] text-white/40 active:text-[#D4A843]">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold mb-2">À propos</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-[10px] text-white/40 active:text-[#D4A843]">Histoire</a></li>
              <li><a href="#" className="text-[10px] text-white/40 active:text-[#D4A843]">Artisans</a></li>
              <li><a href="#" className="text-[10px] text-white/40 active:text-[#D4A843]">Presse</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-4" />

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <p className="text-[10px] text-white/20">
            © 2025 Avan Broderie
          </p>
          <div className="flex items-center gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center active:opacity-80"
            >
              <MessageCircle className="size-3" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center active:bg-[#1877F2]"
            >
              <Facebook className="size-3" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"
            >
              <Instagram className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
