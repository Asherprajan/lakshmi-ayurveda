"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { treatments } from "@/lib/treatments-data"
import ContactModal from "./contact-modal"

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])
  return isMobile
}

export default function AyurvedaTreatments() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isMobile = useIsMobile()

  // Contact modal state and handler
  const [contactModalOpen, setContactModalOpen] = React.useState(false)
  const handleContactSubmit = async (data: { name: string; phone: string; message: string }) => {
    // You can add your submission logic here (e.g., API call)
    console.log("Consultation form submitted:", data)
  }

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: "#FFF7F0" }}>
      {/* Enhanced Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#3C1F0F]/10 to-[#B24D1F]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#3C1F0F]/10 to-[#F1AD60]/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#B24D1F]/5 to-[#3C1F0F]/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-[#3C1F0F]/10 to-[#B24D1F]/10 rounded-full text-[#3C1F0F]/80 font-medium mb-8 border border-[#3C1F0F]/20"
          >
            Holistic Healing
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#3C1F0F] font-serif">
            Ayurvedic Treatment Packages
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#3C1F0F]/70 leading-relaxed">
            Experience transformative healing through our carefully curated Ayurvedic treatments, 
            designed to restore balance and promote holistic wellness.
          </p>
        </motion.div>

        {/* Enhanced Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {treatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + (idx * 0.15),
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
              className="group"
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl">
                {/* Enhanced Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <motion.img 
                    src={treatment.image} 
                    alt={treatment.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Enhanced Duration Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl text-sm font-semibold text-[#3C1F0F] shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {treatment.duration}
                  </motion.div>

                  {/* Premium Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#B24D1F] to-[#F1AD60] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    PREMIUM
                  </div>
                </div>

                <CardContent className="p-8">
                  {/* Enhanced Header */}
                  <div className="mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#3C1F0F] mb-3 group-hover:text-[#B24D1F] transition-colors duration-300">
                        {treatment.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-4">
                        <span className="text-sm text-[#3C1F0F]/60 font-medium">★★★★★ 5.0</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Description */}
                  <p className="text-[#3C1F0F]/70 leading-relaxed mb-6 line-clamp-3 text-base">
                    {treatment.description}
                  </p>

                  {/* Enhanced Benefits Preview */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-[#3C1F0F] mb-3">
                      Key Benefits:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {treatment.benefits.slice(0, 2).map((benefit, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1.5 bg-gradient-to-r from-[#3C1F0F]/5 to-[#B24D1F]/5 text-[#3C1F0F]/80 text-xs rounded-full font-medium border border-[#3C1F0F]/10"
                        >
                          {benefit}
                        </span>
                      ))}
                      {treatment.benefits.length > 2 && (
                        <span className="px-3 py-1.5 bg-gradient-to-r from-[#3C1F0F]/10 to-[#B24D1F]/10 text-[#3C1F0F]/60 text-xs rounded-full font-medium border border-[#3C1F0F]/20">
                          +{treatment.benefits.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#3C1F0F]/5 to-[#B24D1F]/5 rounded-3xl p-8 border border-[#3C1F0F]/10">
            <p className="text-lg text-[#3C1F0F]/70 mb-8 max-w-2xl mx-auto">
              Ready to begin your wellness journey? Book a consultation with our expert practitioners and experience the transformative power of Ayurvedic healing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-[#3C1F0F] to-[#B24D1F] text-white rounded-2xl hover:from-[#B24D1F] hover:to-[#3C1F0F] transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setContactModalOpen(true)}
              >
                Book Consultation
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
