"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { galleryImages } from "@/lib/gallery-images"
import ContactModal from "./contact-modal"                
export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" })
  const displayedImages = galleryImages.slice(0, 6)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const handleContactSubmit = async (data: { name: string; phone: string; message: string }) => {
    console.log("Contact form submitted:", data)
  }
  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden" style={{ backgroundColor: "#FFF7F0" }}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-[#3C1F0F]/5 to-[#B24D1F]/5 rounded-full blur-2xl sm:blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-tl from-[#3C1F0F]/5 to-[#F1AD60]/5 rounded-full blur-2xl sm:blur-3xl transform translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-[#3C1F0F]/10 to-[#B24D1F]/10 rounded-full text-[#3C1F0F]/80 font-medium mb-4 sm:mb-6 border border-[#3C1F0F]/20 text-sm sm:text-base">
            Visual Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#3C1F0F] font-serif leading-tight">
            Gallery
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-[#3C1F0F]/70 leading-relaxed px-4">
            A visual journey through our heritage villa and the transformative experiences that await you.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {displayedImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + (index * 0.1),
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`group cursor-pointer relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index % 3 === 0 ? "md:col-span-2" : ""
              } ${index % 5 === 0 ? "lg:row-span-2" : ""}`}
            >
              {/* Image */}
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.caption}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-[#3C1F0F]/60 via-transparent to-transparent transition-opacity duration-500 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`} />

              {/* Content overlay */}
              <div className={`absolute inset-0 flex flex-col justify-end p-6 sm:p-8 transition-all duration-500 ${
                hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                <div className="text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 font-serif">
                    {image.caption}
                  </h3>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#9A3E0F] to-[#B24D1F] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-3xl`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#3C1F0F]/5 to-[#B24D1F]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#3C1F0F]/10">
            <h3 className="text-xl sm:text-2xl font-bold text-[#3C1F0F] mb-3 sm:mb-4">
              Explore Our Gallery
            </h3>
            <p className="text-[#3C1F0F]/70 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto">
              Immerse yourself in the beauty and tranquility of our heritage villa through our curated collection of images.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/gallery">
                <motion.button 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#3C1F0F] to-[#B24D1F] text-white rounded-xl sm:rounded-2xl hover:from-[#B24D1F] hover:to-[#3C1F0F] transition-all duration-300 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Full Gallery
                </motion.button>
              </Link>
              <motion.button 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#3C1F0F] rounded-xl sm:rounded-2xl hover:bg-[#3C1F0F]/5 transition-all duration-300 text-sm sm:text-base font-semibold border-2 border-[#3C1F0F]/20 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setContactModalOpen(true)}
              >
                Book a Tour
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      <ContactModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onSubmit={handleContactSubmit}
        title="Book Ayurvedic Consultation"
      />
    </section>
  )
}
