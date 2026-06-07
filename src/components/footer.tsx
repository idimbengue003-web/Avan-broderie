'use client'

import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { Facebook, Instagram, MapPin, Phone, Mail, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '2250712345678'

const footerLinks = {
  collections: [
    { label: 'Tissus Africains', href: '#tissus' },
    { label: 'Robes & Tenues', href: '#collections' },
    { label: 'Mode Homme', href: '#collections' },
    { label: 'Mode Enfant', href: '#collections' },
    { label: 'Accessoires', href: '#collections' },
  ],
  informations: [
    { label: 'Guide des tailles', href: '#' },
    { label: 'Entretien des tissus', href: '#' },
    { label: 'Livraison', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Conditions générales', href: '#' },
  ],
  about: [
    { label: 'Notre histoire', href: '#' },
    { label: 'Nos artisans', href: '#' },
    { label: 'Engagement éthique', href: '#' },
    { label: 'Presse', href: '#' },
  ],
}

export default function Footer() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour, je souhaite avoir des informations sur vos produits.')}`

  return (
    <footer id="contact" className="bg-[#1A1209] text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-boutique.png"
                alt="Maison Élégance"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-white">
                Maison <span className="text-[#D4A843]">Élégance</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Votre catalogue mode pour l&apos;élégance africaine moderne. Des vêtements et tissus 
              d&apos;exception alliant tradition et contemporanéité. Contactez-nous directement sur WhatsApp pour commander.
            </p>

            {/* Contact info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <MapPin className="size-4 text-[#D4A843] flex-shrink-0" />
                <span>Cocody Riviera, Abidjan, Côte d&apos;Ivoire</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Phone className="size-4 text-[#D4A843] flex-shrink-0" />
                <span>+225 07 12 34 56 78</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Mail className="size-4 text-[#D4A843] flex-shrink-0" />
                <span>contact@maison-elegance.com</span>
              </div>
            </div>

            {/* WhatsApp CTA in footer */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              <MessageCircle className="size-4" />
              Nous contacter sur WhatsApp
            </a>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-white font-semibold mb-4">Collections</h4>
            <ul className="space-y-2.5">
              {footerLinks.collections.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[#D4A843] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Informations</h4>
            <ul className="space-y-2.5">
              {footerLinks.informations.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[#D4A843] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* À Propos */}
          <div>
            <h4 className="text-white font-semibold mb-4">À Propos</h4>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[#D4A843] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © 2025 Maison Élégance. Tous droits réservés.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] transition-colors"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
