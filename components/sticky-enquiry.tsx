"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function StickyEnquiry() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsApp = () => {
    window.open("https://wa.me/919747205046", "_blank")
  }

  const handleCall = () => {
    window.open("tel:+919747205046", "_self")
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white shadow-2xl rounded-2xl p-4 flex flex-col space-y-3 w-64"
          >
            <button 
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h4 className="text-lg font-semibold text-[#9A3E0F] text-center mb-2">
              Get in Touch
            </h4>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="flex items-center justify-center w-full py-3 rounded-full text-white font-semibold space-x-2"
              style={{ backgroundColor: "#25D366" }}
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="flex items-center justify-center w-full py-3 rounded-full text-white font-semibold space-x-2"
              style={{ 
                backgroundColor: "#9A3E0F",
                color: "#F5ECE0"
              }}
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="flex flex-col space-y-3"
          >
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
              style={{ backgroundColor: "#25D366" }}
            >
              <FaWhatsapp className="w-6 h-6 text-white" />
            </motion.button>

           
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
