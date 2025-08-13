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
import Header from "@/components/Header"
import Footer from "@/components/footer"
  
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
      <Header />
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
      <Footer />
    </div>
  )
}
