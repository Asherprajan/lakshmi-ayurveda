"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutVilla() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4" style={{ backgroundColor: "#FFF7F0" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div
            className={`relative overflow-hidden rounded-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <img
              src="/hello.png"
              alt="Heritage Villa"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="border-l-4 pl-6 mb-8" style={{ borderColor: "#F1AD60" }}>
              <h2 className="font-serif-custom text-4xl md:text-5xl font-bold mb-4" style={{ color: "#3C1F0F" }}>
                About the Villa
              </h2>
              <p className="font-sans-custom text-lg opacity-80" style={{ color: "#3C1F0F" }}>
                Built in 1938, restored in 2020
              </p>
            </div>

            <div className="space-y-6 font-sans-custom text-lg leading-relaxed" style={{ color: "#3C1F0F" }}>
              <p>
                Nestled in the heart of Kerala, our heritage villa stands as a testament to timeless elegance and
                traditional craftsmanship. Originally built in 1938, this architectural gem has been lovingly restored
                to blend authentic heritage with modern luxury.
              </p>

              <p>
                Every corner of our villa tells a story of Kerala's rich cultural heritage, from the traditional wooden
                architecture to the carefully curated artifacts that adorn our spaces. The restoration process honored
                the original design while incorporating contemporary amenities for the discerning modern traveler.
              </p>

              <p>
                Surrounded by lush tropical gardens and offering panoramic views of the Arabian Sea, our villa provides
                the perfect sanctuary for those seeking authentic Ayurvedic healing in an atmosphere of unparalleled
                tranquility.
              </p>
            </div>

            {/* Decorative element */}
            <div className="mt-8 flex items-center">
              <div className="w-16 h-1 rounded" style={{ backgroundColor: "#F1AD60" }}></div>
              <svg className="w-8 h-8 ml-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                  fill="#F1AD60"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
