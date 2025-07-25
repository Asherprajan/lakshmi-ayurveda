"use client"

import { useState, useEffect, JSX } from "react"  // Added JSX import
import { FiPhone, FiMail, FiMapPin, FiWifi, FiTruck, FiDroplet, FiSun, FiTrendingUp } from "react-icons/fi"
import { FaFacebook, FaInstagram, FaWhatsapp, FaLeaf, FaSeedling, FaYoutube, FaSnapchat } from "react-icons/fa"
import Hero from "@/components/hero"
import AboutVilla from "@/components/about-villa"
import AyurvedaTreatments from "@/components/ayurveda-treatments"
import Facilities from "@/components/facilities"
import AttractionsNearby from "@/components/attractions-nearby"
import Gallery from "@/components/gallery"
import OnamEvents from "@/components/onam-events"
import Contact from "@/components/contact"
import StickyEnquiry from "@/components/sticky-enquiry"
import DoctorsSection from "@/components/ui/DoctorsSection"

interface Treatment {
  name: string
  icon: JSX.Element
  description: string
}

interface Facility {
  name: string
  icon: JSX.Element 
}

interface Attraction {
  name: string
  distance: string
  image: string
}

export default function AyurvedaRetreat() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)
  const [showStickyContact, setShowStickyContact] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyContact(window.scrollY > 800)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const treatments: Treatment[] = [
    {
      name: "Chavitti Tirumal",
      icon: <FaLeaf className="w-8 h-8" />,
      description:
        "A traditional Kerala massage performed with the feet, using controlled pressure and rhythmic movements to release deep-seated tension and improve circulation.",
    },
    {
      name: "Sirodhara",
      icon: <FiSun className="w-8 h-8" />,
      description:
        "Continuous pouring of warm herbal oil on the forehead to calm the nervous system, reduce stress, and promote deep relaxation and mental clarity.",
    },
    {
      name: "Abhyanga",
      icon: <FaSeedling className="w-8 h-8" />,
      description:
        "Full-body oil massage using warm herbal oils, synchronized hand movements to nourish the skin, improve circulation, and balance the doshas.",
    },
    {
      name: "Panchakarma",
      icon: <FiTrendingUp className="w-8 h-8" />,
      description:
        "Complete detoxification and rejuvenation program combining five therapeutic procedures to cleanse the body of toxins and restore natural balance.",
    },
  ]

  const facilities: Facility[] = [
    { name: "Private Pool", icon: <FiDroplet className="w-6 h-6" /> },
    { name: "Ayurveda Hall", icon: <FaSeedling className="w-6 h-6" /> },
    { name: "Concierge", icon: <FiPhone className="w-6 h-6" /> },
    { name: "Parking", icon: <FiTruck className="w-6 h-6" /> },
    { name: "WiFi", icon: <FiWifi className="w-6 h-6" /> },
    { name: "Garden Therapy", icon: <FaLeaf className="w-6 h-6" /> },
  ]

  const attractions: Attraction[] = [
    { name: "Kovalam Beach", distance: "15 min", image: "/placeholder.svg?height=200&width=300" },
    { name: "Padmanabhaswamy Temple", distance: "25 min", image: "/placeholder.svg?height=200&width=300" },
    { name: "Trivandrum Airport", distance: "20 min", image: "/placeholder.svg?height=200&width=300" },
    { name: "Napier Museum", distance: "30 min", image: "/placeholder.svg?height=200&width=300" },
  ]

  const galleryImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=500&width=400",
    "/placeholder.svg?height=300&width=500",
    "/placeholder.svg?height=450&width=350",
    "/placeholder.svg?height=350&width=550",
    "/placeholder.svg?height=400&width=400",
  ]

  return (
    <div className="min-h-screen bg-[#FFF7F0] text-[#3C1F0F] font-['Manrope']">
      {/* Hero Section */}
      <Hero />

      {/* About the Villa */}
      <AboutVilla />

      {/* Ayurveda Treatments */}
      <AyurvedaTreatments/>  

      {/* Facilities */}
      <Facilities  />

      {/* Attractions Nearby */}
      <AttractionsNearby  />

      {/* Gallery */}
      <Gallery  />

      {/* Celebrate Onam */}
      <OnamEvents />

      {/* Our Doctors */}
      <DoctorsSection />

      {/* Contact Form */}
      <Contact />

      {/* Sticky Contact Bar */}
      <StickyEnquiry  />

      {/* Footer */}
      <footer className="relative bg-[#1a0e07] text-[#F5ECE0] py-12 overflow-hidden">
        {/* Glassmorphic background blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-gradient-to-br from-[#F5ECE0]/10 to-[#F1AD60]/10 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-gradient-to-tl from-[#F1AD60]/10 to-[#B24D1F]/10 rounded-full blur-2xl z-0" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#B24D1F]/10 to-[#3C1F0F]/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 z-0" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div
            className="grid md:grid-cols-3 gap-8 rounded-3xl bg-[#1a0e07]/80 backdrop-blur-xl border border-[#F1AD60]/20 shadow-2xl p-8"
            style={{
              background: "linear-gradient(135deg, rgba(26,14,7,0.92) 60%, rgba(178,77,31,0.10) 100%)",
              boxShadow: "0 8px 48px 0 rgba(241, 173, 96, 0.10)",
              border: "1.5px solid #F1AD60",
              backdropFilter: "blur(18px)",
            }}
          >
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4 drop-shadow">Ayurveda Heritage Villa</h3>
              <p className="opacity-80 leading-relaxed">
                Where ancient wisdom meets modern luxury in the heart of Kerala.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-[#F1AD60] transition-colors"
                >
                  <FaFacebook size={22} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#F1AD60] transition-colors"
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href="https://wa.me/919747205046"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="hover:text-[#F1AD60] transition-colors"
                >
                  <FaWhatsapp size={22} />
                </a>
                <a
                  href="https://www.youtube.com/@ayurvedaheritagevilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="hover:text-[#F1AD60] transition-colors"
                >
                  <FaYoutube size={22} /> 
                </a>
                <a
                  href="https://www.snapchat.com/add/ayurvedaheritagevilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Snapchat"
                  className="hover:text-[#F1AD60] transition-colors"
                >
                  {/* Snapchat icon SVG */}
                  <FaSnapchat size={22} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 opacity-80">
                <div className="flex items-center space-x-2">
                  <FiPhone className="w-4 h-4" />
                  <span>+91 9747205046</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiMail className="w-4 h-4" />
                  <span>Lakshmiayurvedakerala@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiMapPin className="w-4 h-4" />
                  <span>Oluppuvila Veedu, Kannankodu, Vellar, Kovalam, Trivandrum, Kerala 695527</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Experience</h4>
              <div className="space-y-2 opacity-80">
                <p>Treatments</p>
                <p>Accommodation</p>
                <p>Wellness Programs</p>
                <p>Cultural Events</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#F1AD60]/40 mt-8 pt-8 text-center opacity-70 bg-[#1a0e07]/70 rounded-b-3xl backdrop-blur-md">
            <p>&copy; 2024 Ayurveda Heritage Villa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
