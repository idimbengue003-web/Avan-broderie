'use client'

import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react'

const footerLinks = {
  collections: [
    { label: 'Tissus Africains', href: '#tissus' },
    { label: 'Robes & Tenues', href: '#collections' },
    { label: 'Mode Homme', href: '#collections' },
    { label: 'Mode Enfant', href: '#collections' },
    { label: 'Accessoires', href: '#collections' },
  ],
  service: [
    { label: 'Suivi de commande', href: '#' },
    { label: 'Livraison & Retours', href: '#' },
    { label: 'Guide des tailles', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contactez-nous', href: '#contact' },
  ],
  about: [
    { label: 'Notre histoire', href: '#' },
    { label: 'Nos artisans', href: '#' },
    { label: 'Engagement éthique', href: '#' },
    { label: 'Carrières', href: '#' },
    { label: 'Presse', href: '#' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
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
              Votre destination mode pour l&apos;élégance africaine moderne. Des vêtements et tissus 
              d&apos;exception alliant tradition et contemporanéité depuis 2015.
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

          {/* Service Client */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Client</h4>
            <ul className="space-y-2.5">
              {footerLinks.service.map((link) => (
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
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B8860B] transition-colors"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
