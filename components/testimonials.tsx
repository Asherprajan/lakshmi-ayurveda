"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote, Play, Pause } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  avatar?: string
  treatment?: string
  stayDuration?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "London, UK",
    rating: 5,
    treatment: "Panchakarma Detox",
    stayDuration: "14 days",
    text: "My stay at Lakshmi Ayurveda was transformative. The authentic treatments and serene environment helped me find true wellness. The staff's knowledge of Ayurveda is exceptional, and the villa's heritage charm made it a truly special experience."
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    treatment: "Stress Relief Package",
    stayDuration: "10 days",
    text: "I came here seeking relief from chronic stress, and I found so much more. The personalized Panchakarma treatment plan was life-changing. The doctors are highly skilled, and the peaceful surroundings enhanced my healing journey."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    treatment: "Rejuvenation Therapy",
    stayDuration: "21 days",
    text: "The authentic Ayurvedic experience here is unmatched. From the traditional treatments to the organic meals, everything was perfect. I felt completely rejuvenated and will definitely return for another wellness retreat."
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Melbourne, Australia",
    rating: 5,
    treatment: "Chavitti Massage",
    stayDuration: "7 days",
    text: "As someone who's tried many wellness centers, Lakshmi Ayurveda stands out for its genuine approach to healing. The Chavitti treatment was incredible, and the staff's dedication to authentic Ayurveda is remarkable."
  },
  {
    id: 5,
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    treatment: "Traditional Ayurveda",
    stayDuration: "28 days",
    text: "Being from India, I'm very particular about authentic Ayurveda. This place exceeded my expectations. The treatments are traditional, the doctors are knowledgeable, and the atmosphere is truly healing."
  }
]

export default function Testimonials() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" })

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const paginate = (newDirection: number) => {
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-orange-50 via-orange-25 to-orange-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 border border-orange-200 rounded-full opacity-40"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-orange-300 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-32 w-20 h-20 border border-orange-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 border border-orange-300 rounded-full opacity-35"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-6 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium tracking-wide uppercase mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Guest Experiences
          </motion.span>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-800 mb-6 font-['Playfair_Display']"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Healing Stories
          </motion.h2>
          
          <motion.p
            className="text-lg text-orange-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover how our authentic Ayurvedic treatments have transformed lives and brought wellness to guests from around the world
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Main Testimonial */}
          <div className="relative h-[400px] md:h-[350px] mb-8">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <div className="w-full max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Treatment Badge */}
                  <div className="text-center mb-6">
                    <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                      {testimonials[currentIndex].treatment} • {testimonials[currentIndex].stayDuration}
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-center text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-400 fill-current mx-0.5" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 text-lg mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-orange-600 text-sm">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center">
            {/* Previous Button */}
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-orange-200 text-orange-600 hover:bg-orange-50 transition-colors duration-200 flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Center Controls */}
            <div className="flex items-center space-x-4">
              {/* Auto-play Toggle */}
              <button
                onClick={toggleAutoPlay}
                className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors duration-200 flex items-center justify-center"
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex
                        ? "bg-orange-500"
                        : "bg-orange-200 hover:bg-orange-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-orange-200 text-orange-600 hover:bg-orange-50 transition-colors duration-200 flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "500+", label: "Happy Guests" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "15+", label: "Years Experience" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white rounded-xl shadow-md border border-orange-100"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
