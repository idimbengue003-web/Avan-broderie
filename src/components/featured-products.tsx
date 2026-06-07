'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import {
  Eye,
  Heart,
  ShoppingBag,
  Star,
  Minus,
  Plus,
  Check,
  Truck,
  RefreshCw,
  Shield,
} from 'lucide-react'

export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  badge?: 'Nouveau' | 'Promo'
  image: string
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
    image: '/collection-robes.png',
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
    image: '/collection-tissus.png',
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
    image: '/collection-hommes.png',
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
    image: '/collection-enfants.png',
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
    image: '/collection-accessoires.png',
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
    image: '/collection-robes.png',
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
    image: '/collection-tissus.png',
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
    image: '/collection-hommes.png',
    description: 'Chemise en lin naturel avec impressions africaines subtilement intégrées. Coupe décontractée mais élégante, idéale pour les journées ensoleillées et les soirées décontractées.',
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

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden border border-[#E8DCC8] shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden cursor-pointer" onClick={onClick}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3">
              <Badge
                className={`${
                  product.badge === 'Promo'
                    ? 'bg-red-500 hover:bg-red-600 text-white border-0'
                    : 'bg-[#B8860B] hover:bg-[#8B6508] text-white border-0'
                } px-3 py-1 text-xs font-semibold`}
              >
                {product.badge === 'Promo' ? `-${discount}%` : product.badge}
              </Badge>
            </div>
          )}

          {/* Quick view overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <Button
              onClick={onClick}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white/95 hover:bg-white text-[#5C3D2E] shadow-lg rounded-full px-6"
            >
              <Eye className="size-4 mr-2" />
              Aperçu rapide
            </Button>
          </div>

          {/* Wishlist button */}
          <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors opacity-0 group-hover:opacity-100 duration-300">
            <Heart className="size-4 text-[#5C3D2E]" />
          </button>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-semibold text-[#2C1810] mb-1 text-sm sm:text-base line-clamp-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`size-3 ${
                    i < Math.floor(product.rating) ? 'text-[#D4A843] fill-[#D4A843]' : 'text-[#E8DCC8]'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-[#8B7355]">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#B8860B]">
              {product.price.toLocaleString('fr-FR')} FCFA
            </span>
            {product.originalPrice && (
              <span className="text-sm text-[#8B7355] line-through">
                {product.originalPrice.toLocaleString('fr-FR')} FCFA
              </span>
            )}
          </div>
        </div>
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
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = () => {
    // Reset after add
    setSelectedSize(null)
    setSelectedColor(null)
    setQuantity(1)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto p-0 gap-0 bg-white rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[500px] bg-[#F5EDE0]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
            {product.badge && (
              <div className="absolute top-4 left-4">
                <Badge
                  className={`${
                    product.badge === 'Promo'
                      ? 'bg-red-500 hover:bg-red-600 text-white border-0'
                      : 'bg-[#B8860B] hover:bg-[#8B6508] text-white border-0'
                  } px-3 py-1 text-sm font-semibold`}
                >
                  {product.badge === 'Promo' ? `-${discount}%` : product.badge}
                </Badge>
              </div>
            )}
          </div>

          {/* Details side */}
          <div className="p-6 sm:p-8 flex flex-col">
            <DialogHeader className="p-0 mb-4">
              <DialogTitle className="text-xl sm:text-2xl font-bold text-[#2C1810] text-left">
                {product.name}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Détails du produit {product.name}
              </DialogDescription>
            </DialogHeader>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${
                      i < Math.floor(product.rating) ? 'text-[#D4A843] fill-[#D4A843]' : 'text-[#E8DCC8]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#8B7355]">
                {product.rating} ({product.reviews} avis)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-2xl sm:text-3xl font-bold text-[#B8860B]">
                {product.price.toLocaleString('fr-FR')} FCFA
              </span>
              {product.originalPrice && (
                <span className="text-lg text-[#8B7355] line-through">
                  {product.originalPrice.toLocaleString('fr-FR')} FCFA
                </span>
              )}
            </div>

            {/* Stock status */}
            <div className="flex items-center gap-2 mb-4">
              <div className={`size-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className={`text-sm font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}`}>
                {product.inStock ? 'En stock' : 'Rupture de stock'}
              </span>
            </div>

            <Separator className="bg-[#E8DCC8] mb-4" />

            {/* Description */}
            <p className="text-sm text-[#5C3D2E] leading-relaxed mb-5">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-5">
              <label className="text-sm font-semibold text-[#2C1810] mb-2 block">
                Taille
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'border-[#B8860B] bg-[#B8860B] text-white'
                        : 'border-[#E8DCC8] text-[#5C3D2E] hover:border-[#B8860B] hover:bg-[#F5EDE0]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="mb-5">
              <label className="text-sm font-semibold text-[#2C1810] mb-2 block">
                Couleur: <span className="font-normal text-[#8B7355]">{selectedColor || 'Choisir'}</span>
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-9 h-9 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-[#B8860B] scale-110'
                        : 'border-[#E8DCC8] hover:border-[#D4A843]'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor === color.name && (
                      <Check className="size-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-md" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-[#2C1810] mb-2 block">
                Quantité
              </label>
              <div className="flex items-center gap-1 w-fit rounded-lg border border-[#E8DCC8]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-[#F5EDE0] rounded-l-lg transition-colors"
                >
                  <Minus className="size-4 text-[#5C3D2E]" />
                </button>
                <span className="px-4 py-2 text-sm font-medium text-[#2C1810] min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-[#F5EDE0] rounded-r-lg transition-colors"
                >
                  <Plus className="size-4 text-[#5C3D2E]" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              className="w-full bg-[#B8860B] hover:bg-[#8B6508] text-white font-semibold h-12 text-base rounded-xl"
              disabled={!product.inStock}
            >
              <ShoppingBag className="size-5 mr-2" />
              Ajouter au panier
            </Button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-2 mt-5">
              <div className="flex flex-col items-center text-center gap-1 p-2">
                <Truck className="size-4 text-[#B8860B]" />
                <span className="text-[10px] text-[#8B7355]">Livraison rapide</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1 p-2">
                <RefreshCw className="size-4 text-[#B8860B]" />
                <span className="text-[10px] text-[#8B7355]">Retour 30 jours</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1 p-2">
                <Shield className="size-4 text-[#B8860B]" />
                <span className="text-[10px] text-[#8B7355]">Paiement sécurisé</span>
              </div>
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
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C1810] mb-3">
            Produits <span className="text-[#B8860B]">Vedettes</span>
          </h2>
          <p className="text-[#8B7355] max-w-xl mx-auto">
            Nos pièces les plus prisées, sélectionnées pour leur qualité et leur style unique.
          </p>
          <div className="w-20 h-1 bg-[#B8860B] rounded-full mx-auto mt-4" />
        </div>

        {/* Products Grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      </div>

      {/* Product Dialog */}
      <ProductDialog
        product={selectedProduct}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  )
}
