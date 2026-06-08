'use client'

import { ImageIcon } from 'lucide-react'

interface PlaceholderImageProps {
  label?: string
  className?: string
}

export default function PlaceholderImage({ label = 'Image à remplacer', className = '' }: PlaceholderImageProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-[#F5EDE0] text-[#B8860B]/50 ${className}`}
    >
      <ImageIcon className="size-12 mb-2 opacity-40" />
      <span className="text-sm font-medium opacity-50 text-center px-4">{label}</span>
    </div>
  )
}
