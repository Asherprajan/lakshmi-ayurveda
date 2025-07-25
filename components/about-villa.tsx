"use client"

import { useEffect, useRef, useState } from "react"
import { motion, Variants } from "framer-motion"
import ContactModal from "./contact-modal"

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.18,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
}

export default function AboutVilla() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const sectionRef = useRef<HTMLElement>(null)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  useEffect(() => {
    let hasAnimated = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          hasAnimated = true
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // The text paragraphs to animate
  const aboutTexts = [
    "A Serene Sanctuary in Nature's Lap. Welcome to Lakshmi Ayurvedic Villa, your tranquil escape nestled in the heart of Kerala.",
    "Surrounded by lush greenery and peaceful gardens, our beautifully designed traditional villa blends classic South Indian architecture with modern comforts. With a peaceful atmosphere and nature all around, it's the perfect setting for healing, relaxation, and self-discovery.",
  ]

  const features = [
    "Spacious Traditional Kerala-style Architecture with elegant woodwork and open balconies",
    "Peaceful Garden Courtyard ideal for yoga, meditation, or quiet reflection",
    "Private Rooms with natural light, wooden furniture, and calming interiors",
    "Dedicated Ayurvedic Therapy Spaces and consultation areas",
    "Walking distance to Beach and local nature spots and cultural experiences",
  ]

  const idealFor = [
    "Ayurvedic healing and wellness retreats",
    "Yoga teacher training programs",
    "Nature getaways or peaceful long stays",
    "Digital detox or mindful living experiences",
  ]

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'experiences', label: 'Experiences' }
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden" style={{ backgroundColor: "#FFF7F0" }}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-[#3C1F0F]/5 to-[#B24D1F]/5 rounded-full blur-2xl sm:blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-tl from-[#3C1F0F]/5 to-[#F1AD60]/5 rounded-full blur-2xl sm:blur-3xl transform translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-[#3C1F0F]/10 to-[#B24D1F]/10 rounded-full text-[#3C1F0F]/80 font-medium mb-4 sm:mb-6 border border-[#3C1F0F]/20 text-sm sm:text-base">
            Our Sanctuary
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#3C1F0F] font-serif leading-tight">
            About The Lakshmi Ayurvedic Villa
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-[#3C1F0F]/70 leading-relaxed px-4">
            A Serene Sanctuary in Nature's Lap
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-none"
          >
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl">
              <img
                src="/g5.jpeg"
                alt="Lakshmi Ayurvedic Villa"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Floating Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg sm:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#3C1F0F] mb-1">Traditional Kerala Villa</h4>
                    <p className="text-[#3C1F0F]/70 text-xs sm:text-sm">Nestled in nature's embrace</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg sm:text-2xl font-bold text-[#B24D1F]">★★★★★</div>
                    <p className="text-xs text-[#3C1F0F]/60">Guest Rating</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-none"
          >
            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex space-x-1 bg-[#3C1F0F]/5 rounded-xl sm:rounded-2xl p-1"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                    activeTab === tab.id
                      ? 'bg-white text-[#3C1F0F] shadow-md sm:shadow-lg'
                      : 'text-[#3C1F0F]/60 hover:text-[#3C1F0F]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <div className="min-h-[350px] sm:min-h-[400px]">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 sm:space-y-6"
                >
                  {aboutTexts.map((text, i) => (
                    <motion.p
                      key={i}
                      custom={i}
                      variants={textVariants as unknown as Variants}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      className="text-base sm:text-lg leading-relaxed text-[#3C1F0F]/80"
                    >
                      {text}
                    </motion.p>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-r from-[#3C1F0F]/5 to-[#B24D1F]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#3C1F0F]/10"
                  >
                    <p className="text-[#3C1F0F]/80 leading-relaxed text-sm sm:text-base">
                      At Lakshmi Villa, each detail has been thoughtfully curated to provide a space for deep rest, holistic healing, and personal growth. Whether you're here for Ayurvedic treatments, yoga practice, or simply a rejuvenating stay, our home welcomes you with warmth and authenticity.
                    </p>
                  </motion.div>
                </motion.div>
              )}

              {/* Features Tab */}
              {activeTab === 'features' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3C1F0F] mb-3 sm:mb-4">
                    Features & Highlights
                  </h3>
                  <div className="grid gap-3 sm:gap-4">
                    {features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                        className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/50 rounded-xl sm:rounded-2xl border border-[#3C1F0F]/10 hover:bg-white/70 transition-all duration-300"
                      >
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-[#B24D1F] to-[#F1AD60] mt-1.5 sm:mt-2 flex-shrink-0" />
                        <p className="text-[#3C1F0F]/80 leading-relaxed text-sm sm:text-base">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Experiences Tab */}
              {activeTab === 'experiences' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3C1F0F] mb-3 sm:mb-4">
                    Ideal For
                  </h3>
                  <div className="grid gap-3 sm:gap-4">
                    {idealFor.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                        className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-[#3C1F0F]/5 to-[#B24D1F]/5 rounded-xl sm:rounded-2xl border border-[#3C1F0F]/10 hover:from-[#3C1F0F]/10 hover:to-[#B24D1F]/10 transition-all duration-300"
                      >
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-[#B24D1F] to-[#F1AD60] mt-1.5 sm:mt-2 flex-shrink-0" />
                        <p className="text-[#3C1F0F]/80 leading-relaxed font-medium text-sm sm:text-base">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="bg-gradient-to-r from-[#3C1F0F] to-[#B24D1F] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white"
                  >
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Ready to Experience?</h4>
                    <p className="text-white/90 mb-3 sm:mb-4 text-sm sm:text-base">
                      Begin your journey of healing and transformation at our serene villa.
                    </p>
                    <button
                      className="w-full sm:w-auto bg-white text-[#3C1F0F] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-white/90 transition-colors text-sm sm:text-base"
                      onClick={() => setContactModalOpen(true)}
                    >
                      Book Your Stay
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <ContactModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </section>
  )
}
