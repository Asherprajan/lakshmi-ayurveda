"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export default function StickyEnquiry() {
  const [isVisible, setIsVisible] = useState(false)

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
      <div className="flex flex-col space-y-3">
        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsApp}
          size="lg"
          className="w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
        </Button>

        {/* Enquire Now Button */}
        <Button
          onClick={handleCall}
          size="lg"
          className="px-6 py-3 rounded-full shadow-lg font-sans-custom font-semibold transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "#9A3E0F",
            color: "#F5ECE0",
          }}
        >
          <Phone className="w-5 h-5 mr-2" />
          Enquire Now
        </Button>
      </div>
    </div>
  )
}
