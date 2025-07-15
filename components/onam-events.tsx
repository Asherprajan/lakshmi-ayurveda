"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Users, Music } from "lucide-react"

export default function OnamEvents() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#B24D1F" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <div className="flex items-center mb-6">
              <Calendar className="w-8 h-8 mr-3" style={{ color: "#F1AD60" }} />
              <span className="font-sans-custom text-lg font-semibold" style={{ color: "#F1AD60" }}>
                Special Events
              </span>
            </div>

            <h2 className="font-serif-custom text-4xl md:text-5xl font-bold mb-6" style={{ color: "#F5ECE0" }}>
              Celebrate Onam with Us
            </h2>

            <p className="font-sans-custom text-lg leading-relaxed mb-8" style={{ color: "#F5ECE0", opacity: 0.9 }}>
              Experience the grandeur of Kerala's most beloved festival at our heritage villa. Join us for traditional
              Onam celebrations featuring authentic Sadhya feasts, classical performances, and cultural activities that
              showcase the rich heritage of God's Own Country.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3" style={{ color: "#F1AD60" }} />
                <span className="font-sans-custom" style={{ color: "#F5ECE0" }}>
                  Traditional Sadhya on Banana Leaves
                </span>
              </div>
              <div className="flex items-center">
                <Music className="w-5 h-5 mr-3" style={{ color: "#F1AD60" }} />
                <span className="font-sans-custom" style={{ color: "#F5ECE0" }}>
                  Classical Dance & Music Performances
                </span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3" style={{ color: "#F1AD60" }} />
                <span className="font-sans-custom" style={{ color: "#F5ECE0" }}>
                  Pookalam (Flower Carpet) Workshops
                </span>
              </div>
            </div>

            <Button
              size="lg"
              className="font-sans-custom text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#F5ECE0",
                color: "#B24D1F",
              }}
            >
              Reserve Your Celebration
            </Button>
          </div>

          {/* Video Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="aspect-video bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center cursor-pointer group"
                style={{ backgroundColor: "#F1AD60" }}
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                  <p className="font-sans-custom text-white text-lg font-semibold">Watch Onam Celebrations</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
              style={{ backgroundColor: "#F1AD60" }}
            ></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-30"
              style={{ backgroundColor: "#F1AD60" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
