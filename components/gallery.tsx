"use client"

import { useState } from "react"

const galleryImages = [
  { src: "/placeholder.svg?height=400&width=600", caption: "Heritage Villa Exterior" },
  { src: "/placeholder.svg?height=500&width=400", caption: "Traditional Treatment Room" },
  { src: "/placeholder.svg?height=400&width=600", caption: "Infinity Pool at Sunset" },
  { src: "/placeholder.svg?height=600&width=400", caption: "Ayurveda Therapy Session" },
  { src: "/placeholder.svg?height=400&width=500", caption: "Organic Garden" },
  { src: "/placeholder.svg?height=500&width=600", caption: "Meditation Pavilion" },
  { src: "/placeholder.svg?height=400&width=400", caption: "Traditional Kerala Architecture" },
  { src: "/placeholder.svg?height=600&width=500", caption: "Seaside Dining Area" },
]

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
          {galleryImages.map((image, index) => (
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

              <div
                className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-transform duration-500 ${
                  hoveredIndex === index ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <p className="font-serif-custom text-white text-lg font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
