"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function OnamEvents() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a0e07 0%, #3C1F0F 60%, #B24D1F 100%)",
      }}
    >
      {/* Glassmorphic background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-gradient-to-br from-[#F5ECE0]/10 to-[#F1AD60]/10 rounded-full blur-3xl z-0" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-tl from-[#F1AD60]/10 to-[#B24D1F]/10 rounded-full blur-3xl z-0" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#B24D1F]/10 to-[#3C1F0F]/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <div className="flex items-center mb-6">
              <Calendar className="w-8 h-8 mr-3" style={{ color: "#F1AD60" }} />
              <span className="font-sans-custom text-lg font-semibold" style={{ color: "#F1AD60" }}>
                Grand Inauguration
              </span>
            </div>

            <h2 className="font-serif-custom text-4xl md:text-5xl font-bold mb-6" style={{ color: "#F5ECE0" }}>
              Our Inauguration Ceremony
            </h2>

            <p className="font-sans-custom text-lg leading-relaxed mb-8" style={{ color: "#F5ECE0", opacity: 0.92 }}>
              Step into a new chapter of wellness and tradition at Ayurveda Heritage Villa. Our inauguration was a vibrant celebration, blending Kerala’s timeless rituals with heartfelt community spirit. Watch the highlights of our opening ceremony, where blessings, music, and joy marked the beginning of our journey to bring authentic Ayurvedic healing and cultural richness to every guest.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full mr-3" style={{ backgroundColor: "#F1AD60" }}></span>
                <span className="font-sans-custom" style={{ color: "#F5ECE0" }}>
                  Traditional lamp lighting & blessings
                </span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full mr-3" style={{ backgroundColor: "#F1AD60" }}></span>
                <span className="font-sans-custom" style={{ color: "#F5ECE0" }}>
                  Cultural performances & music
                </span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full mr-3" style={{ backgroundColor: "#F1AD60" }}></span>
                <span className="font-sans-custom" style={{ color: "#F5ECE0" }}>
                  Community gathering & festive feast
                </span>
              </div>
            </div>

            <Button
              size="lg"
              className="font-sans-custom text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
              style={{
                background: "rgba(245, 236, 224, 0.15)",
                color: "#F5ECE0",
                backdropFilter: "blur(8px)",
                border: "1.5px solid #F1AD60",
                boxShadow: "0 4px 32px 0 rgba(241, 173, 96, 0.10)",
            }}
              onClick={() => setShowModal(true)}
            >
              Watch Full Ceremony
            </Button>
          </div>

          {/* Video Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white/5 to-[#3C1F0F]/30 backdrop-blur-lg border border-[#F5ECE0]/10">
              <video
                className="w-full aspect-video object-cover"
                src="/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                poster="/video-thumbnail.jpg"
                title="Ayurveda Heritage Villa Inauguration Highlights"
                style={{
                  filter: "brightness(0.85) saturate(1.1)",
                }}
              />
              {/* Optional overlay for video title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a0e07]/80 to-transparent px-6 py-4">
                <span className="text-[#F5ECE0] font-semibold text-lg font-serif-custom drop-shadow">
                  Inauguration Highlights
                </span>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
              style={{ background: "linear-gradient(135deg, #F1AD60 0%, #F5ECE0 100%)", filter: "blur(2px)" }}
            ></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-30"
              style={{ background: "linear-gradient(135deg, #F1AD60 0%, #F5ECE0 100%)", filter: "blur(1px)" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Video Preview Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative rounded-3xl shadow-2xl max-w-3xl w-full p-0 overflow-hidden"
              style={{
                background: "rgba(30, 18, 10, 0.85)",
                backdropFilter: "blur(24px)",
                border: "1.5px solid #F1AD60",
                boxShadow: "0 8px 48px 0 rgba(241, 173, 96, 0.10)",
              }}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-[#1a0e07]/80 backdrop-blur-md rounded-full p-2 hover:bg-[#3C1F0F]/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-[#F1AD60]/30"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <X className="w-6 h-6 text-[#F1AD60]" />
              </button>
              <video
                className="w-full aspect-video object-cover rounded-3xl"
                src="/video.mp4"
                controls
                autoPlay
                poster="/video-thumbnail.jpg"
                title="Ayurveda Heritage Villa Inauguration Full Ceremony"
                style={{
                  background: "#1a0e07",
                  filter: "brightness(0.92) saturate(1.1)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a0e07]/90 to-transparent px-6 py-4 pointer-events-none">
                <span className="text-[#F5ECE0] font-semibold text-lg font-serif-custom drop-shadow">
                  Inauguration Ceremony – Full Video
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
