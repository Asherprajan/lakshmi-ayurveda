"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, MapPin, Wifi, Car, Waves, Flower2, Leaf, Sun, Mountain } from "lucide-react"
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
      icon: <Leaf className="w-8 h-8" />,
      description:
        "A traditional Kerala massage performed with the feet, using controlled pressure and rhythmic movements to release deep-seated tension and improve circulation.",
    },
    {
      name: "Sirodhara",
      icon: <Sun className="w-8 h-8" />,
      description:
        "Continuous pouring of warm herbal oil on the forehead to calm the nervous system, reduce stress, and promote deep relaxation and mental clarity.",
    },
    {
      name: "Abhyanga",
      icon: <Flower2 className="w-8 h-8" />,
      description:
        "Full-body oil massage using warm herbal oils, synchronized hand movements to nourish the skin, improve circulation, and balance the doshas.",
    },
    {
      name: "Panchakarma",
      icon: <Mountain className="w-8 h-8" />,
      description:
        "Complete detoxification and rejuvenation program combining five therapeutic procedures to cleanse the body of toxins and restore natural balance.",
    },
  ]

  const facilities: Facility[] = [
    { name: "Private Pool", icon: <Waves className="w-6 h-6" /> },
    { name: "Ayurveda Hall", icon: <Flower2 className="w-6 h-6" /> },
    { name: "Concierge", icon: <Phone className="w-6 h-6" /> },
    { name: "Parking", icon: <Car className="w-6 h-6" /> },
    { name: "WiFi", icon: <Wifi className="w-6 h-6" /> },
    { name: "Garden Therapy", icon: <Leaf className="w-6 h-6" /> },
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
      <AyurvedaTreatments treatments={treatments} activeCard={activeCard} setActiveCard={setActiveCard} />

      {/* Facilities */}
      <Facilities facilities={facilities} />

      {/* Attractions Nearby */}
      <AttractionsNearby attractions={attractions} />

      {/* Gallery */}
      <Gallery
        galleryImages={galleryImages}   
        currentGalleryIndex={currentGalleryIndex}
        setCurrentGalleryIndex={setCurrentGalleryIndex}
      />

      {/* Celebrate Onam */}
      <OnamEvents />

      {/* Our Doctors */}
      <DoctorsSection />

      {/* Contact Form */}
      <Contact />

      {/* Sticky Contact Bar */}
      <StickyEnquiry showStickyContact={showStickyContact} />

      {/* Footer */}
      <footer className="bg-[#3C1F0F] text-[#F5ECE0] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4">Ayurveda Heritage Villa</h3>
              <p className="opacity-80 leading-relaxed">
                Where ancient wisdom meets modern luxury in the heart of Kerala.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 opacity-80">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 9747205046</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Lakshmiayurvedakerala@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
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
          <div className="border-t border-[#F1AD60] mt-8 pt-8 text-center opacity-60">
            <p>&copy; 2024 Ayurveda Heritage Villa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
