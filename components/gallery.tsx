"use client"

import { useState } from "react"
import Link from "next/link"
import { galleryImages } from "@/lib/gallery-images"

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const displayedImages = galleryImages.slice(0, 6)

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#FFF7F0" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif-custom text-4xl md:text-5xl font-bold mb-6" style={{ color: "#3C1F0F" }}>
            Gallery
          </h2>
          <p className="font-sans-custom text-xl max-w-3xl mx-auto opacity-80" style={{ color: "#3C1F0F" }}>
            A visual journey through our heritage villa and the transformative experiences that await you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${
                index % 3 === 0 ? "md:col-span-2" : ""
              } ${index % 5 === 0 ? "lg:row-span-2" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.caption}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />

              {/* Mandala mask overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <mask id={`mandala-mask-${index}`}>
                      <rect width="100" height="100" fill="white" />
                      <circle cx="50" cy="50" r="30" fill="black" opacity="0.3" />
                    </mask>
                  </defs>
                  <rect width="100" height="100" fill="rgba(154, 62, 15, 0.2)" mask={`url(#mandala-mask-${index})`} />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link href="/gallery">
            <button className="px-8 py-3 bg-[#3C1F0F] text-white rounded-xl hover:bg-[#3C1F0F]/90 transition-colors text-lg font-medium">
              View Full Gallery
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
