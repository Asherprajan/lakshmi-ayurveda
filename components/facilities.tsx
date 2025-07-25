"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Waves, Building, Users, Car, Wifi, Utensils, Activity } from "lucide-react"
import ContactModal from "./contact-modal"

const facilities = [
  {
    icon: <Activity className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Yoga Shala",
    description: "Serene yoga pavilion with traditional wooden flooring, natural ventilation and panoramic views of nature.",
    color: "from-[#9A3E0F] to-[#B24D1F]",
    bgColor: "from-[#F5ECE0]/20 to-[#F1AD60]/20"
  },
  {
    icon: <Building className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Ayurveda Hall",
    description: "Dedicated treatment spaces with traditional architecture and modern therapeutic equipment.",
    color: "from-[#B24D1F] to-[#9A3E0F]",
    bgColor: "from-[#F1AD60]/20 to-[#F5ECE0]/20"
  },
  {
    icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Concierge Service",
    description: "24/7 personalized assistance for all your needs, from dining to local excursions.",
    color: "from-[#9A3E0F] to-[#F1AD60]",
    bgColor: "from-[#F5ECE0]/20 to-[#F1AD60]/20"
  },
  {
    icon: <Car className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Valet Parking",
    description: "Secure covered parking with valet service for your convenience and peace of mind.",
    color: "from-[#B24D1F] to-[#9A3E0F]",
    bgColor: "from-[#F1AD60]/20 to-[#F5ECE0]/20"
  },
  {
    icon: <Wifi className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "High-Speed WiFi",
    description: "Complimentary high-speed internet throughout the property for staying connected.",
    color: "from-[#9A3E0F] to-[#B24D1F]",
    bgColor: "from-[#F5ECE0]/20 to-[#F1AD60]/20"
  },
  {
    icon: <Utensils className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Organic Kitchen",
    description: "Farm-to-table dining with Ayurvedic principles and locally sourced ingredients.",
    color: "from-[#B24D1F] to-[#F1AD60]",
    bgColor: "from-[#F1AD60]/20 to-[#F5ECE0]/20"
  },
]

export default function Facilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
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
            Our Amenities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#3C1F0F] font-serif leading-tight">
            World-Class Facilities
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-[#3C1F0F]/70 leading-relaxed px-4">
            Every amenity thoughtfully designed to enhance your wellness journey and ensure complete comfort.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((facility, index) => (
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
              className="group cursor-pointer"
            >
              <div className="relative h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div 
                    className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${facility.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 w-fit`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {facility.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3C1F0F] mb-3 sm:mb-4 group-hover:text-[#B24D1F] transition-colors duration-300">
                    {facility.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#3C1F0F]/70 leading-relaxed text-sm sm:text-base group-hover:text-[#3C1F0F]/80 transition-colors duration-300">
                    {facility.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${facility.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-3xl`} />
              </div>
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
              Experience Our Facilities
            </h3>
            <p className="text-[#3C1F0F]/70 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto">
              Discover how our world-class amenities can enhance your wellness journey and provide the perfect environment for healing and relaxation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#3C1F0F] to-[#B24D1F] text-white rounded-xl sm:rounded-2xl hover:from-[#B24D1F] hover:to-[#3C1F0F] transition-all duration-300 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setContactModalOpen(true)}
              >
                Book Your Stay
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
