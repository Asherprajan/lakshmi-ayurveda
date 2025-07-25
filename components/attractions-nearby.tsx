"use client"

import { useState } from "react"
import { MapPin, Clock, Star, X, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ContactModal from "./contact-modal"

const ATTRACTIONS = [
  {
    name: "Samudra Beach Park",
    distance: "0.6 km",
    time: "8 min walk",
    image: "/beach.jpeg",
    rating: 4.8,
    category: "Nature & Relaxation",
    description:
      "A tranquil coastal retreat offering pristine beaches, gentle waves, and perfect sunset views. Ideal for meditation and beach yoga sessions.",
  },
  {
    name: "Kovalam Beach",
    distance: "3.5 km",
    time: "9 min drive",
    image: "/kovalam.jpeg",
    rating: 4.9,
    category: "Beach & Water Sports",
    description:
      "World-famous crescent-shaped beach with golden sands, crystal-clear waters, and excellent surfing conditions. Perfect for water activities.",
  },
  {
    name: "Vellayani Lake",
    distance: "7.8 km",
    time: "17 min drive",
    image: "/lake.jpeg",
    rating: 4.7,
    category: "Eco-Tourism",
    description:
      "Kerala's largest freshwater lake surrounded by lush greenery. Experience traditional boat rides, bird watching, and authentic village life.",
  },
  {
    name: "Aazhimala Shiva Temple",
    distance: "8.7 km",
    time: "16 min drive",
    image: "/azhimala.jpeg",
    rating: 4.6,
    category: "Cultural Heritage",
    description:
      "Majestic temple featuring the tallest Shiva sculpture in Kerala, perched dramatically on coastal cliffs with breathtaking ocean views.",
  },
  {
    name: "Sree Padmanabhaswamy Temple",
    distance: "13 km",
    time: "22 min drive",
    image: "/temple.jpeg",
    rating: 4.9,
    category: "Spiritual & Historical",
    description:
      "One of India's most revered temples with stunning Dravidian architecture, intricate carvings, and profound spiritual significance.",
  },
]

function AttractionModal({ attraction, onClose }: { attraction: typeof ATTRACTIONS[number], onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
        <img
          src={attraction.image}
          alt={attraction.name}
          className="w-full h-56 object-cover rounded-2xl mb-6"
        />
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">{attraction.category}</span>
          <span className="flex items-center gap-1 text-yellow-500 text-xs font-semibold">
            <Star className="w-4 h-4 fill-yellow-400" />
            {attraction.rating}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{attraction.name}</h3>
        <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{attraction.time}</span>
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{attraction.distance}</span>
        </div>
        <p className="text-gray-700 text-base leading-relaxed">{attraction.description}</p>
      </motion.div>
    </motion.div>
  )
}

function AttractionTile({
  attraction,
  onClick,
}: {
  attraction: typeof ATTRACTIONS[number]
  onClick: () => void
}) {
  return (
    <motion.div
      className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden border border-gray-100"
      whileHover={{ y: -6, scale: 1.025 }}
      onClick={onClick}
      tabIndex={0}
      aria-label={attraction.name}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      layout
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 shadow">
          {attraction.category}
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full text-xs font-semibold text-yellow-500 shadow">
          <Star className="w-3 h-3 fill-yellow-400" />
          {attraction.rating}
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full text-xs text-white font-medium shadow">
          <MapPin className="w-3 h-3" />
          {attraction.distance}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between p-5">
        <h4 className="text-lg font-bold text-gray-900 mb-1">{attraction.name}</h4>
        <div className="flex items-center gap-3 text-gray-500 text-xs mb-2">
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{attraction.time}</span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-3 mb-3">{attraction.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.round(attraction.rating) ? "fill-current" : "fill-gray-200"}`}
              />
            ))}
          </span>
          <span className="flex items-center gap-1 text-blue-600 font-medium text-xs group-hover:underline">
            <Info className="w-4 h-4" />
            Details
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function AttractionsNearby() {
  const [selected, setSelected] = useState<null | typeof ATTRACTIONS[number]>(null)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const handleContactSubmit = async (data: { name: string; phone: string; message: string }) => {
    console.log("Contact form submitted:", data)
  }
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-[#f5ece0] via-[#fff7f0] to-[#e0f2fe] overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-100/0 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-gradient-to-tr from-orange-100/40 to-orange-50/0 rounded-full blur-3xl z-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide shadow-sm">
            Explore Kerala's Wonders
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3C1F0F] mb-4 font-serif-custom">
            Nearby Attractions
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Uncover the beauty, culture, and serenity just steps away from your stay. From sun-kissed beaches to ancient temples, adventure awaits.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {ATTRACTIONS.map((attraction) => (
              <AttractionTile
                key={attraction.name}
                attraction={attraction}
                onClick={() => setSelected(attraction)}
              />
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#3C1F0F] to-[#B24D1F] text-white font-semibold text-lg shadow-lg hover:from-[#B24D1F] hover:to-[#3C1F0F] transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setContactModalOpen(true)}
          >
            Plan Your Kerala Adventure
          </motion.a>
          <span className="mt-4 text-gray-500 text-sm">Contact us for personalized sightseeing recommendations!</span>
        </div>
      </div>
      <AnimatePresence>
        {selected && (
          <AttractionModal
            attraction={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
      <ContactModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onSubmit={handleContactSubmit}
        title="Book Ayurvedic Consultation"
      />
    </section>
  )
}
