"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Flower, Droplets, Hand, Leaf, Sun, Moon } from "lucide-react"

const treatments = [
  {
    id: 1,
    name: "Chavitti Tirumal",
    icon: Hand,
    color: "#E74C3C",
    description:
      "A traditional Kerala massage performed with the feet, using controlled pressure and rhythmic movements to release deep-seated tension and improve circulation.",
    duration: "90 minutes",
    benefits: ["Deep tissue relief", "Improved flexibility", "Enhanced circulation"],
  },
  {
    id: 2,
    name: "Sirodhara",
    icon: Droplets,
    color: "#3498DB",
    description:
      "The signature Ayurvedic treatment where warm herbal oil is poured in a continuous stream over the forehead, inducing deep relaxation and mental clarity.",
    duration: "60 minutes",
    benefits: ["Stress relief", "Mental clarity", "Better sleep"],
  },
  {
    id: 3,
    name: "Abhyanga",
    icon: Leaf,
    color: "#2ECC71",
    description:
      "A full-body massage with warm herbal oils, synchronized with breathing and performed by two therapists to balance the doshas and nourish the skin.",
    duration: "75 minutes",
    benefits: ["Dosha balancing", "Skin nourishment", "Muscle relaxation"],
  },
  {
    id: 4,
    name: "Panchakarma",
    icon: Flower,
    color: "#9B59B6",
    description:
      "A comprehensive detoxification program that cleanses the body of toxins and restores natural balance through five therapeutic procedures.",
    duration: "7-21 days",
    benefits: ["Complete detox", "Immunity boost", "Rejuvenation"],
  },
  {
    id: 5,
    name: "Nasya",
    icon: Sun,
    color: "#F39C12",
    description:
      "Nasal administration of medicated oils and herbal preparations to cleanse the head and neck region, improving respiratory health.",
    duration: "45 minutes",
    benefits: ["Respiratory health", "Mental clarity", "Sinus relief"],
  },
  {
    id: 6,
    name: "Karna Purana",
    icon: Moon,
    color: "#34495E",
    description:
      "Therapeutic ear treatment using warm medicated oils to improve hearing, reduce ear infections, and promote overall ear health.",
    duration: "30 minutes",
    benefits: ["Ear health", "Hearing improvement", "Infection prevention"],
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
            Ayurveda Treatments
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#F5ECE0] opacity-90">
            Experience authentic healing through time-tested Ayurvedic therapies, each designed to restore balance and promote holistic wellness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <motion.div
              key={treatment.id}
              layoutId={`treatment-card-${treatment.id}`}
              className="relative"
              onClick={() => setSelectedTreatment(selectedTreatment === treatment.id ? null : treatment.id)}
            >
              <Card 
                className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ 
                  backgroundColor: selectedTreatment === treatment.id ? treatment.color : '#F5ECE0',
                  color: selectedTreatment === treatment.id ? '#FFFFFF' : '#3C1F0F'
                }}
              >
                <CardContent className="p-6">
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

                  {selectedTreatment !== treatment.id && (
                    <p className="text-sm opacity-70 mt-2">
                      Click to explore treatment details
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
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTreatment(null)}
            >
              <motion.div 
                className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {selectedTreatment && (
                  <>
                    <div className="flex items-center mb-6">
                      <div 
                        className="p-4 rounded-full mr-6"
                        style={{ 
                          backgroundColor: treatments.find(t => t.id === selectedTreatment)?.color,
                          color: '#FFFFFF'
                        }}
                      >
                        {React.createElement(treatments.find(t => t.id === selectedTreatment)!.icon, { className: "w-12 h-12" })}
                      </div>
                      <h3 className="text-3xl font-bold font-serif text-[#3C1F0F]">
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
                        <h4 className="font-semibold mb-2 text-[#3C1F0F]">Benefits:</h4>
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
