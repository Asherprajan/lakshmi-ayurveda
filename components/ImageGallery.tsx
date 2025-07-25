"use client"

import { useState, useRef, useEffect } from "react"
import { useTouchNavigation } from "@/hooks/useTouchNavigation"

interface ImageGalleryProps {
  images: Array<{ src: string; caption: string }>
  onClose: () => void
  initialIndex?: number
}

export default function ImageGallery({ images, onClose, initialIndex = 0 }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [imageScale, setImageScale] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextImage = () => {
    if (currentIndex < images.length - 1 && !isTransitioning) {
      setIsTransitioning(true)
      setImageScale(1)
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setIsTransitioning(false)
      }, 150)
    }
  }

  const prevImage = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true)
      setImageScale(1)
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1)
        setIsTransitioning(false)
      }, 150)
    }
  }

  const closeGallery = () => {
    setImageScale(1)
    onClose()
  }

  const { onTouchStart, onTouchMove, onTouchEnd } = useTouchNavigation({
    onSwipeLeft: nextImage,
    onSwipeRight: prevImage,
    onSwipeDown: closeGallery,
  })

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault()
          nextImage()
          break
        case 'ArrowLeft':
          e.preventDefault()
          prevImage()
          break
        case 'Escape':
          e.preventDefault()
          closeGallery()
          break
        case '+':
        case '=':
          e.preventDefault()
          setImageScale(prev => Math.min(prev + 0.5, 3))
          break
        case '-':
          e.preventDefault()
          setImageScale(prev => Math.max(prev - 0.5, 0.5))
          break
        case '0':
          setImageScale(1)
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, isTransitioning])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleImageDoubleClick = () => {
    setImageScale(prev => prev === 1 ? 2 : 1)
  }

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current) {
      closeGallery()
    }
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={handleContainerClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Close Button */}
      <button
        onClick={closeGallery}
        className="absolute top-4 right-4 z-20 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Zoom Controls */}
      <div className="absolute top-4 left-4 z-20 flex gap-2">
        <button
          onClick={() => setImageScale(prev => Math.max(prev - 0.5, 0.5))}
          className="text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        <button
          onClick={() => setImageScale(1)}
          className="text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full px-3 py-2 text-sm backdrop-blur-sm"
        >
          Reset
        </button>
        <button
          onClick={() => setImageScale(prev => Math.min(prev + 0.5, 3))}
          className="text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image Container */}
      <div className="relative max-w-5xl max-h-full mx-4 overflow-hidden">
        <div
          className={`transition-opacity duration-300 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          }`}
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].caption}
            className="max-w-full max-h-[90vh] object-contain rounded-lg transition-transform duration-300 select-none"
            style={{ transform: `scale(${imageScale})` }}
            onDoubleClick={handleImageDoubleClick}
            draggable={false}
          />
        </div>
        
        {/* Image Caption */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg backdrop-blur-sm">
          <p className="text-lg font-medium">{images[currentIndex].caption}</p>
          <p className="text-sm opacity-80 mt-1">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Touch Instructions */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/60 text-sm text-center z-20">
        <p>Swipe left/right to navigate • Double-tap to zoom • Swipe down to close</p>
        <p className="text-xs mt-1">Use + / - keys or buttons to zoom</p>
      </div>
    </div>
  )
} 