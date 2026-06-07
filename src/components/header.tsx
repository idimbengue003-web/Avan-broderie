'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, ShoppingBag, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Collections', href: '#collections' },
  { label: 'Tissus', href: '#tissus' },
  { label: 'Promotions', href: '#promotions' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount] = useState(3)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2">
          <Image
            src="/logo-boutique.png"
            alt="Maison Élégance"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold tracking-tight text-[#5C3D2E]">
            Maison <span className="text-[#B8860B]">Élégance</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-[#5C3D2E] rounded-md transition-colors hover:bg-[#F5EDE0] hover:text-[#B8860B]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side icons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex text-[#5C3D2E] hover:text-[#B8860B]">
            <Search className="size-5" />
          </Button>

          <Button variant="ghost" size="icon" className="relative text-[#5C3D2E] hover:text-[#B8860B]">
            <ShoppingBag className="size-5" />
            {cartCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] bg-[#B8860B] text-white border-0">
                {cartCount}
              </Badge>
            )}
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-[#5C3D2E]">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Image
                    src="/logo-boutique.png"
                    alt="Maison Élégance"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-[#5C3D2E]">Maison <span className="text-[#B8860B]">Élégance</span></span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 mt-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center px-3 py-3 text-base font-medium text-[#5C3D2E] rounded-lg transition-colors hover:bg-[#F5EDE0] hover:text-[#B8860B]"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto px-4 pb-6">
                <Button className="w-full bg-[#B8860B] hover:bg-[#8B6508] text-white">
                  <ShoppingBag className="size-4 mr-2" />
                  Mon Panier ({cartCount})
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
