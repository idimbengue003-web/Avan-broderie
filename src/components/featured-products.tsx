'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import PlaceholderImage from '@/components/placeholder-image'
import {
  Star,
  Check,
  MessageCircle,
  Truck,
  Shield,
  HeadphonesIcon,
} from 'lucide-react'

const WHATSAPP_NUMBER = '221771234567'

export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  badge?: 'Nouveau' | 'Promo'
  placeholder: string
  description: string
  sizes: string[]
  colors: { name: string; hex: string }[]
  rating: number
  reviews: number
  inStock: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Robe Ankara Élégante',
    price: 35000,
    originalPrice: 45000,
    badge: 'Promo',
    placeholder: 'Photo - Robe Ankara',
    description: 'Magnifique robe en tissu Ankara authentique, confectionnée à la main avec des motifs traditionnels. Parfaite pour les occasions spéciales et les événements élégants, elle allie confort et raffinement.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Or', hex: '#D4A843' },
      { name: 'Rouge', hex: '#C41E3A' },
      { name: 'Bleu Marine', hex: '#1B3A5C' },
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: 2,
    name: 'Tissu Wax Premium',
    price: 15000,
    badge: 'Nouveau',
    placeholder: 'Photo - Tissu Wax',
    description: 'Tissu Wax de qualité premium importé directement d\'Afrique de l\'Ouest. Motifs vibrants et couleurs éclatantes pour vos créations uniques. 6 yards de pur style africain.',
    sizes: ['6 yards', '12 yards'],
    colors: [
      { name: 'Multicolore', hex: '#FF6B35' },
      { name: 'Vert', hex: '#2D7D3A' },
      { name: 'Jaune', hex: '#F5C518' },
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: 'Costume Homme Kente',
    price: 85000,
    badge: 'Nouveau',
    placeholder: 'Photo - Costume Kente',
    description: 'Costume trois pièces en tissu Kente royal, taillé sur mesure pour un look distingué. Idéal pour les mariages traditionnels et les cérémonies officielles.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Or & Noir', hex: '#B8860B' },
      { name: 'Vert & Or', hex: '#2D7D3A' },
    ],
    rating: 4.7,
    reviews: 56,
    inStock: true,
  },
  {
    id: 4,
    name: 'Ensemble Enfant Ankara',
    price: 18000,
    originalPrice: 22000,
    badge: 'Promo',
    placeholder: 'Photo - Ensemble Enfant',
    description: 'Adorable ensemble enfant en tissu Ankara coloré. Comprend un haut et un pantalon assortis, parfait pour les fêtes et cérémonies familiales. Confortable et élégant.',
    sizes: ['2-3 ans', '4-5 ans', '6-7 ans', '8-9 ans', '10-11 ans'],
    colors: [
      { name: 'Rose', hex: '#E75480' },
      { name: 'Bleu', hex: '#4A90D9' },
      { name: 'Jaune', hex: '#F5C518' },
    ],
    rating: 4.6,
    reviews: 73,
    inStock: true,
  },
  {
    id: 5,
    name: 'Sac à Main Cuir Tressé',
    price: 28000,
    badge: 'Nouveau',
    placeholder: 'Photo - Sac Cuir',
    description: 'Sac à main en cuir véritable tressé à la main par nos artisans locaux. Design unique mêlant tradition et modernité, avec finitions dorées élégantes.',
    sizes: ['Standard'],
    colors: [
      { name: 'Marron', hex: '#8B4513' },
      { name: 'Noir', hex: '#2C1810' },
      { name: 'Camel', hex: '#C19A6B' },
    ],
    rating: 4.9,
    reviews: 98,
    inStock: true,
  },
  {
    id: 6,
    name: 'Boubou Grand Modèle',
    price: 42000,
    originalPrice: 55000,
    badge: 'Promo',
    placeholder: 'Photo - Boubou',
    description: 'Boubou grand modèle en tissu bazin riche, brodé à la main avec des motifs floraux dorés. Une pièce maîtresse pour les grandes occasions et célébrations.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Blanc Or', hex: '#FAF0E6' },
      { name: 'Bleu Ciel', hex: '#87CEEB' },
      { name: 'Rose Pâle', hex: '#FFB6C1' },
    ],
    rating: 4.8,
    reviews: 145,
    inStock: true,
  },
  {
    id: 7,
    name: 'Pagne Kita Traditionnel',
    price: 12000,
    badge: 'Nouveau',
    placeholder: 'Photo - Pagne Kita',
    description: 'Pagne Kita authentique tissé à la main, symbole de la royauté et du prestige africain. Chaque pièce est unique avec ses motifs symboliques traditionnels.',
    sizes: ['Standard', 'Grand format'],
    colors: [
      { name: 'Or & Vert', hex: '#B8860B' },
      { name: 'Rouge & Or', hex: '#C41E3A' },
      { name: 'Noir & Or', hex: '#2C1810' },
    ],
    rating: 5.0,
    reviews: 67,
    inStock: true,
  },
  {
    id: 8,
    name: 'Chemise Lin Africain',
    price: 22000,
    badge: 'Nouveau',
    placeholder: 'Photo - Chemise Lin',
    description: 'Chemise en lin naturel avec impressions africaines subtilement intégrées. Coupe décontractée mais élégante, idéale pour les journées ensoleillées.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Naturel', hex: '#F5F0E1' },
      { name: 'Terracotta', hex: '#CC5500' },
      { name: 'Sable', hex: '#C2B280' },
    ],
    rating: 4.5,
    reviews: 42,
    inStock: true,
  },
]

function getWhatsAppLink(product: Product, selectedSize?: string | null, selectedColor?: string | null) {
  const sizeText = selectedSize ? `\nTaille : ${selectedSize}` : ''
  const colorText = selectedColor ? `\nCouleur : ${selectedColor}` : ''
  const priceText = product.originalPrice
    ? `${product.price.toLocaleString('fr-FR')} FCFA (au lieu de ${product.originalPrice.toLocaleString('fr-FR')} FCFA)`
    : `${product.price.toLocaleString('fr-FR')} FCFA`

  const message = `Bonjour ! Je suis intéressé(e) par ce produit :\n\n${product.name}\nPrix : ${priceText}${sizeText}${colorText}\n\nPouvez-vous me donner plus d'informations ?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div
      className="bg-white rounded-xl overflow-hidden border border-[#E8DCC8] shadow-sm active:scale-[0.98] transition-transform"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-square">
        <PlaceholderImage label={product.placeholder} className="w-full h-full" />
        {product.badge && (
          <div className="absolute top-2 left-2">
            <Badge
              className={`${
                product.badge === 'Promo'
                  ? 'bg-red-500 text-white border-0'
                  : 'bg-[#B8860B] text-white border-0'
              } px-2 py-0.5 text-[10px] font-semibold`}
            >
              {product.badge === 'Promo' ? `-${discount}%` : product.badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="font-semibold text-[#2C1810] text-sm line-clamp-1 mb-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`size-2.5 ${
                  i < Math.floor(product.rating) ? 'text-[#D4A843] fill-[#D4A843]' : 'text-[#E8DCC8]'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-[#8B7355]">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-base font-bold text-[#B8860B]">
            {product.price.toLocaleString('fr-FR')} F
          </span>
          {product.originalPrice && (
            <span className="text-xs text-[#8B7355] line-through">
              {product.originalPrice.toLocaleString('fr-FR')} F
            </span>
          )}
        </div>

        <a
          href={getWhatsAppLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center gap-1.5 w-full bg-[#25D366] active:bg-[#1ebe57] text-white font-semibold py-2 rounded-lg text-xs transition-colors"
        >
          <MessageCircle className="size-3.5" />
          Commander
        </a>
      </div>
    </div>
  )
}

function ProductDialog({
  product,
  open,
  onOpenChange,
}: {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  if (!product) return null

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-full sm:max-w-lg max-h-[85vh] overflow-y-auto p-0 gap-0 bg-white rounded-t-2xl sm:rounded-2xl">
        {/* Image */}
        <div className="relative aspect-square">
          <PlaceholderImage label={product.placeholder} className="w-full h-full" />
          {product.badge && (
            <div className="absolute top-3 left-3">
              <Badge
                className={`${
                  product.badge === 'Promo'
                    ? 'bg-red-500 text-white border-0'
                    : 'bg-[#B8860B] text-white border-0'
                } px-2.5 py-0.5 text-xs font-semibold`}
              >
                {product.badge === 'Promo' ? `-${discount}%` : product.badge}
              </Badge>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="p-4">
          <DialogHeader className="p-0 mb-3">
            <DialogTitle className="text-lg font-bold text-[#2C1810] text-left">
              {product.name}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Détails du produit {product.name}
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`size-3.5 ${
                    i < Math.floor(product.rating) ? 'text-[#D4A843] fill-[#D4A843]' : 'text-[#E8DCC8]'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-[#8B7355]">
              {product.rating} ({product.reviews} avis)
            </span>
          </div>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-xl font-bold text-[#B8860B]">
              {product.price.toLocaleString('fr-FR')} FCFA
            </span>
            {product.originalPrice && (
              <span className="text-sm text-[#8B7355] line-through">
                {product.originalPrice.toLocaleString('fr-FR')} F
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 mb-3">
            <div className={`size-1.5 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className={`text-xs font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}`}>
              {product.inStock ? 'Disponible' : 'Rupture de stock'}
            </span>
          </div>

          <Separator className="bg-[#E8DCC8] mb-3" />

          <p className="text-xs text-[#5C3D2E] leading-relaxed mb-4">
            {product.description}
          </p>

          {/* Size Selector */}
          <div className="mb-4">
            <label className="text-xs font-semibold text-[#2C1810] mb-1.5 block">
              Taille
            </label>
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-medium transition-all ${
                    selectedSize === size
                      ? 'border-[#B8860B] bg-[#B8860B] text-white'
                      : 'border-[#E8DCC8] text-[#5C3D2E] active:border-[#B8860B] active:bg-[#F5EDE0]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div className="mb-4">
            <label className="text-xs font-semibold text-[#2C1810] mb-1.5 block">
              Couleur : <span className="font-normal text-[#8B7355]">{selectedColor || 'Choisir'}</span>
            </label>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`relative w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === color.name
                      ? 'border-[#B8860B] scale-110'
                      : 'border-[#E8DCC8]'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  {selectedColor === color.name && (
                    <Check className="size-3.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-md" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={getWhatsAppLink(product, selectedSize, selectedColor)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] active:bg-[#1ebe57] text-white font-semibold h-11 text-sm rounded-xl transition-colors shadow-md"
          >
            <MessageCircle className="size-4" />
            Commander via WhatsApp
          </a>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="flex flex-col items-center text-center gap-0.5">
              <Truck className="size-3.5 text-[#B8860B]" />
              <span className="text-[9px] text-[#8B7355]">Livraison rapide</span>
            </div>
            <div className="flex flex-col items-center text-center gap-0.5">
              <Shield className="size-3.5 text-[#B8860B]" />
              <span className="text-[9px] text-[#8B7355]">Paiement sécurisé</span>
            </div>
            <div className="flex flex-col items-center text-center gap-0.5">
              <HeadphonesIcon className="size-3.5 text-[#B8860B]" />
              <span className="text-[9px] text-[#8B7355]">Support 24/7</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setDialogOpen(true)
  }

  return (
    <section className="py-6 bg-white">
      <div className="px-4 mb-4">
        <h2 className="text-xl font-bold text-[#2C1810]">
          Produits <span className="text-[#B8860B]">Vedettes</span>
        </h2>
        <p className="text-xs text-[#8B7355] mt-1">
          Contactez-nous sur WhatsApp pour commander
        </p>
      </div>

      {/* Grid 2 columns on mobile */}
      <div className="grid grid-cols-2 gap-3 px-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>

      <ProductDialog
        product={selectedProduct}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  )
}
