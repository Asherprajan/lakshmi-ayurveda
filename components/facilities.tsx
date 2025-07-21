"use client"

import { Waves, Building, Users, Car, Wifi, Utensils } from "lucide-react"

const facilities = [
  {
    icon: <Waves className="w-12 h-12" />,
    title: "Yoga Shala",
    description: "Serene yoga pavilion with traditional wooden flooring, natural ventilation and panoramic views of nature.",
  },
  {
    icon: <Building className="w-12 h-12" />,
    title: "Ayurveda Hall",
    description: "Dedicated treatment spaces with traditional architecture and modern therapeutic equipment.",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Concierge Service",
    description: "24/7 personalized assistance for all your needs, from dining to local excursions.",
  },
  {
    icon: <Car className="w-12 h-12" />,
    title: "Valet Parking",
    description: "Secure covered parking with valet service for your convenience and peace of mind.",
  },
  {
    icon: <Wifi className="w-12 h-12" />,
    title: "High-Speed WiFi",
    description: "Complimentary high-speed internet throughout the property for staying connected.",
  },
  {
    icon: <Utensils className="w-12 h-12" />,
    title: "Organic Kitchen",
    description: "Farm-to-table dining with Ayurvedic principles and locally sourced ingredients.",
  },
]

export default function Facilities() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#FFF7F0" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif-custom text-4xl md:text-5xl font-bold mb-6" style={{ color: "#3C1F0F" }}>
            Facilities
          </h2>
          <p className="font-sans-custom text-xl max-w-3xl mx-auto opacity-80" style={{ color: "#3C1F0F" }}>
            Every amenity thoughtfully designed to enhance your wellness journey and ensure complete comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#F5ECE0" }}
            >
              <div className="mb-6 transition-colors duration-300 group-hover:scale-110" style={{ color: "#B24D1F" }}>
                {facility.icon}
              </div>

              <h3 className="font-serif-custom text-2xl font-semibold mb-4" style={{ color: "#3C1F0F" }}>
                {facility.title}
              </h3>

              <p className="font-sans-custom leading-relaxed" style={{ color: "#3C1F0F", opacity: 0.8 }}>
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
