"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Flower, Droplets, Hand, Leaf, Sun, Moon } from "lucide-react"

const treatments = [
  {
    id: 1,
    name: "Chavitti Tirumal",
    icon: Hand,git init
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
    <section className="bg-gradient-to-br from-[#6A4C3B] to-[#8D5E3C] py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6 text-[#F5ECE0] font-serif"
          >
            Ayurveda Treatments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl max-w-3xl mx-auto text-[#F5ECE0] text-opacity-90"
          >
            Experience authentic healing through time-tested Ayurvedic therapies, each designed to restore balance and
            promote holistic wellness.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <motion.div
              key={treatment.id}
              layoutId={`treatment-card-${treatment.id}`}
              className="relative"
              onClick={() => setSelectedTreatment(treatment.id)}
            >
              <Card 
                className="cursor-pointer h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ 
                  backgroundColor: selectedTreatment === treatment.id ? treatment.color : '#F5ECE0',
                  color: selectedTreatment === treatment.id ? '#FFFFFF' : '#3C1F0F'
                }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div 
                      className="p-3 rounded-full mr-4 transition-colors duration-300"
                      style={{ 
                        backgroundColor: treatment.color,
                        color: '#F5ECE0'
                      }}
                    >
                      <treatment.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold font-serif">
                      {treatment.name}
                    </h3>
                  </div>

                  {selectedTreatment !== treatment.id && (
                    <p className="text-sm mt-auto opacity-70">
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
              onClick={() => setSelectedTreatment(null)}
            >
              <motion.div 
                layoutId={`treatment-card-${selectedTreatment}`}
                className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                {treatments.find(t => t.id === selectedTreatment)!.description && (
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div 
                        className="p-4 rounded-full mr-6"
                        style={{ 
                          backgroundColor: treatments.find(t => t.id === selectedTreatment)!.color,
                          color: '#F5ECE0'
                        }}
                      >
                        {React.createElement(treatments.find(t => t.id === selectedTreatment)!.icon, { className: "w-12 h-12" })}
                      </div>
                      <h3 className="text-3xl font-bold text-[#3C1F0F]">
                        {treatments.find(t => t.id === selectedTreatment)!.name}
                      </h3>
                    </div>

                    <p className="text-lg mb-6 text-[#3C1F0F]">
                      {treatments.find(t => t.id === selectedTreatment)!.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-[#B24D1F]">Duration</h4>
                        <p className="text-[#3C1F0F]">
                          {treatments.find(t => t.id === selectedTreatment)!.duration}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-[#B24D1F]">Benefits</h4>
                        <ul className="space-y-1">
                          {treatments.find(t => t.id === selectedTreatment)!.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-[#3C1F0F]">
                              <span 
                                className="w-2 h-2 rounded-full mr-2"
                                style={{ backgroundColor: treatments.find(t => t.id === selectedTreatment)!.color }}
                              ></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
