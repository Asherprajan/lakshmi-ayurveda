"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#9A3E0F" }}
    >
      {/* Mandala Background SVG */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full animate-float" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="150" stroke="#F5ECE0" strokeWidth="2" fill="none" opacity="0.3" />
          <circle cx="200" cy="200" r="120" stroke="#F5ECE0" strokeWidth="1" fill="none" opacity="0.4" />
          <circle cx="200" cy="200" r="90" stroke="#F5ECE0" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M200 50 L220 180 L200 200 L180 180 Z" fill="#F5ECE0" opacity="0.2" />
          <path d="M350 200 L220 220 L200 200 L220 180 Z" fill="#F5ECE0" opacity="0.2" />
          <path d="M200 350 L180 220 L200 200 L220 220 Z" fill="#F5ECE0" opacity="0.2" />
          <path d="M50 200 L180 180 L200 200 L180 220 Z" fill="#F5ECE0" opacity="0.2" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className="font-serif-custom text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up"
          style={{ color: "#F5ECE0", lineHeight: "1.1" }}
        >
          Where Ayurveda Meets Stillness
        </h1>

        <p
          className="font-sans-custom text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up"
          style={{ color: "#F5ECE0", animationDelay: "0.2s" }}
        >
          A luxury heritage retreat rooted in tradition
        </p>

        <Button
          size="lg"
          className="font-sans-custom text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 animate-fade-in-up"
          style={{
            backgroundColor: "#F5ECE0",
            color: "#9A3E0F",
            animationDelay: "0.4s",
          }}
        >
          Begin Your Journey
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8" style={{ color: "#F5ECE0" }} />
      </div>
    </section>
  )
}
