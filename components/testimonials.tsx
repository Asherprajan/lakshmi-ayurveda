"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Calendar, User } from "lucide-react"
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
  const [cardsToShow, setCardsToShow] = useState(1)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3)
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2)
      } else {
        setCardsToShow(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visibleTestimonials = []
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length
      visibleTestimonials.push({ ...testimonials[index], displayIndex: i })
    }
    return visibleTestimonials
  }

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-amber-25/30 to-amber-50/50 relative overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-4 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-amber-200/20 to-[#9A3E0F]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-8 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-gradient-to-br from-[#9A3E0F]/15 to-amber-400/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-amber-100/20 to-[#9A3E0F]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-amber-100 text-[#9A3E0F] text-sm font-medium mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-4 h-4 fill-current" />
            <span>Guest Stories</span>
          </motion.div>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 font-['Playfair_Display'] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transformative Healing
            <span className="block text-[#9A3E0F]">Experiences</span>
          </motion.h2>
          
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Real stories from guests who discovered wellness through authentic Ayurvedic treatments
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          <div className="hidden sm:flex justify-between items-center absolute inset-y-0 -left-4 -right-4 lg:-left-8 lg:-right-8 z-10 pointer-events-none">
            <button
              onClick={prevSlide}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-amber-100 text-[#9A3E0F] hover:text-[#7A3009] hover:bg-amber-50 transition-all duration-300 flex items-center justify-center pointer-events-auto group"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-amber-100 text-[#9A3E0F] hover:text-[#7A3009] hover:bg-amber-50 transition-all duration-300 flex items-center justify-center pointer-events-auto group"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Cards Container */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-xl border border-amber-50 hover:border-amber-100 transition-all duration-500 h-full flex flex-col group-hover:scale-[1.02]">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-amber-400 to-[#9A3E0F] flex items-center justify-center shadow-md">
                          <User className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg">
                            {testimonial.name}
                          </h4>
                          <div className="flex items-center gap-1 text-[#9A3E0F] text-xs sm:text-sm">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{testimonial.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Treatment Info */}
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-amber-50 text-[#9A3E0F] rounded-full text-xs sm:text-sm font-medium">
                        <Quote className="w-3 h-3" />
                        {testimonial.treatment}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                        <Calendar className="w-3 h-3" />
                        {testimonial.stayDuration}
                      </span>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed flex-grow italic mb-4 line-clamp-4 sm:line-clamp-none">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Quote Decoration */}
                    <div className="flex justify-end">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center opacity-60">
                        <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-[#9A3E0F]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="sm:hidden flex justify-center items-center gap-4 mb-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white shadow-md border border-amber-100 text-[#9A3E0F] hover:bg-amber-50 transition-colors duration-200 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-[#9A3E0F] w-6"
                      : "bg-amber-200 hover:bg-amber-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white shadow-md border border-amber-100 text-[#9A3E0F] hover:bg-amber-50 transition-colors duration-200 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Dots */}
          <div className="hidden sm:flex justify-center gap-2 lg:gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#9A3E0F] scale-125"
                    : "bg-amber-200 hover:bg-amber-300 hover:scale-110"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
  
      </div>
    </section>
  )
}
