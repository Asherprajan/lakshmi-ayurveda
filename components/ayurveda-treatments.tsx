"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Scale, Shield, Activity, Flower } from "lucide-react"

const treatments = [
  {
    id: 1,
    name: "Panchakarma",
    icon: Heart,
    color: "#E74C3C",
    description: "A deep detoxification therapy to cleanse the body of toxins, balance the doshas (body energies), and restore optimal health through five traditional purification methods.",
    duration: "14-21 days",
    benefits: ["Deep cleansing", "Restored balance", "Improved vitality"],
    image: "/panchakarma.jpeg"
  },
  {
    id: 2,
    name: "Stress & Anxiety Management",
    icon: Brain,
    color: "#3498DB",
    description: "Tailored treatments using calming oils, Shirodhara, and relaxation therapies to soothe the nervous system, reduce anxiety, and promote mental clarity.",
    duration: "7-14 days", 
    benefits: ["Mental clarity", "Anxiety relief", "Nervous system balance"],
    image: "/stress.jpeg"
  },
  {
    id: 3,
    name: "Weight Management",
    icon: Scale,
    color: "#2ECC71", 
    description: "A holistic program focusing on Ayurvedic diet, herbal medicines, massage, and lifestyle practices to support healthy and sustainable weight loss.",
    duration: "21-28 days",
    benefits: ["Healthy weight loss", "Improved metabolism", "Sustainable habits"],
    image: "/weight.jpeg"
  },
  {
    id: 4,
    name: "Rejuvenation & Immunity",
    icon: Shield,
    color: "#9B59B6", 
    description: "Designed to revitalize the body, strengthen immunity, and improve energy levels using nourishing therapies and Rasayana (rejuvenating) herbs.",
    duration: "14 days",
    benefits: ["Enhanced immunity", "Increased vitality", "Cellular rejuvenation"],
    image: "/rejuvination.jpeg"
  },
  {
    id: 5,
    name: "Joint Pain & Arthritis",
    icon: Activity,
    color: "#F39C12", 
    description: "Effective therapies like Abhyanga (oil massage), Pizhichil, and herbal steam to relieve joint stiffness, reduce inflammation, and support mobility.",
    duration: "14-21 days",
    benefits: ["Pain relief", "Improved mobility", "Joint health"],
    image: "/joint.jpeg"
  },
  {
    id: 6,
    name: "Women's Health",
    icon: Flower,
    color: "#34495E", 
    description: "Customized Ayurvedic care for hormonal balance, menstrual issues, fertility, postpartum recovery, and overall wellness in every phase of a woman's life.",
    duration: "14-28 days",
    benefits: ["Hormonal harmony", "Fertility support", "Postpartum healing"],
    image: "/women.jpeg"
  },
]

export default function AyurvedaTreatments() {
  const [selectedTreatment, setSelectedTreatment] = useState<number | null>(null)

  return (
    <section className="bg-gradient-to-br from-[#6A4C3B] to-[#8D5E4C] py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-[#F5ECE0] font-serif">
            Ayurvedic Treatment Packages
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#F5ECE0] opacity-90">
            Discover our specialized Ayurvedic treatment packages, each carefully designed to address specific health concerns and promote holistic healing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <motion.div
              key={treatment.id}
              layoutId={`treatment-card-${treatment.id}`}
              className="relative h-full"
              onClick={() => setSelectedTreatment(selectedTreatment === treatment.id ? null : treatment.id)}
            >
              <Card 
                className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden h-full flex flex-col"
                style={{ 
                  backgroundColor: selectedTreatment === treatment.id ? treatment.color : '#F5ECE0',
                  color: selectedTreatment === treatment.id ? '#FFFFFF' : '#3C1F0F'
                }}
              >
                <div className="h-48 overflow-hidden flex-shrink-0">
                  <img 
                    src={treatment.image} 
                    alt={treatment.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <div 
                        className="p-3 rounded-full mr-4 transition-colors"
                        style={{ 
                          backgroundColor: selectedTreatment === treatment.id ? 'rgba(255,255,255,0.2)' : treatment.color,
                          color: selectedTreatment === treatment.id ? '#FFFFFF' : '#F5ECE0'
                        }}
                      >
                        <treatment.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-semibold font-serif">
                        {treatment.name}
                      </h3>
                    </div>
                    
                    <p className="text-sm leading-relaxed mb-4 opacity-80">
                      {treatment.description}
                    </p>
                  </div>

                  {selectedTreatment !== treatment.id && (
                    <p className="text-sm opacity-70 mt-auto">
                      Click to explore package details
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedTreatment && (
            <motion.div 
              layoutId={`treatment-card-${selectedTreatment}`}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTreatment(null)}
            >
              <motion.div 
                className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden my-8 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {selectedTreatment && (
                  <>
                    <button 
                      onClick={() => setSelectedTreatment(null)}
                      className="absolute top-4 right-4 z-10 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="h-64 md:h-80 overflow-hidden">
                      <img 
                        src={treatments.find(t => t.id === selectedTreatment)?.image}
                        alt={treatments.find(t => t.id === selectedTreatment)?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row items-center mb-6">
                      
                        <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#3C1F0F] text-center md:text-left">
                          {treatments.find(t => t.id === selectedTreatment)?.name}
                        </h3>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-[#3C1F0F] leading-relaxed">
                          {treatments.find(t => t.id === selectedTreatment)?.description}
                        </p>
                        
                        <div className="flex items-center text-[#B24D1F]">
                          <span className="font-semibold">Duration: </span>
                          <span className="ml-2">
                            {treatments.find(t => t.id === selectedTreatment)?.duration}
                          </span>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-[#3C1F0F]">Key Benefits:</h4>
                          <ul className="space-y-2">
                            {treatments.find(t => t.id === selectedTreatment)?.benefits.map((benefit, index) => (
                              <li 
                                key={index} 
                                className="flex items-center text-[#3C1F0F]"
                              >
                                <div 
                                  className="w-2 h-2 rounded-full mr-3"
                                  style={{ 
                                    backgroundColor: treatments.find(t => t.id === selectedTreatment)?.color 
                                  }}
                                />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
