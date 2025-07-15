"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock } from "lucide-react"

const attractions = [
  {
    name: "Kovalam Beach",
    distance: "2.5 km",
    time: "5 min drive",
    image: "/placeholder.svg?height=300&width=400",
    description: "Famous crescent-shaped beach with golden sands and lighthouse views.",
  },
  {
    name: "Padmanabhaswamy Temple",
    distance: "15 km",
    time: "25 min drive",
    image: "/placeholder.svg?height=300&width=400",
    description: "Ancient temple dedicated to Lord Vishnu, known for its Dravidian architecture.",
  },
  {
    name: "Trivandrum Airport",
    distance: "12 km",
    time: "20 min drive",
    image: "/placeholder.svg?height=300&width=400",
    description: "International airport with connections to major cities worldwide.",
  },
  {
    name: "Napier Museum",
    distance: "18 km",
    time: "30 min drive",
    image: "/placeholder.svg?height=300&width=400",
    description: "Historic museum showcasing Kerala's art, culture, and heritage.",
  },
  {
    name: "Vellayani Lake",
    distance: "8 km",
    time: "15 min drive",
    image: "/placeholder.svg?height=300&width=400",
    description: "Largest freshwater lake in Trivandrum, perfect for boating and fishing.",
  },
]

export default function AttractionsNearby() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#9A3E0F" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif-custom text-4xl md:text-5xl font-bold mb-6" style={{ color: "#F5ECE0" }}>
            Attractions Nearby
          </h2>
          <p className="font-sans-custom text-xl max-w-3xl mx-auto" style={{ color: "#F5ECE0", opacity: 0.9 }}>
            Discover the rich cultural heritage and natural beauty surrounding our villa.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max">
            {attractions.map((attraction, index) => (
              <Card
                key={index}
                className="w-80 cursor-pointer transition-all duration-500 hover:scale-105"
                style={{ backgroundColor: "#F5ECE0" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      className={`w-full h-48 object-cover transition-transform duration-500 ${
                        hoveredIndex === index ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div className="absolute top-4 right-4">
                      <div
                        className="px-3 py-1 rounded-full text-sm font-sans-custom font-semibold"
                        style={{ backgroundColor: "#F5ECE0", color: "#3C1F0F" }}
                      >
                        {attraction.distance}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif-custom text-xl font-semibold mb-2" style={{ color: "#3C1F0F" }}>
                      {attraction.name}
                    </h3>

                    <div className="flex items-center mb-3 text-sm font-sans-custom" style={{ color: "#B24D1F" }}>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{attraction.time}</span>
                      <MapPin className="w-4 h-4 ml-4 mr-1" />
                      <span>{attraction.distance}</span>
                    </div>

                    <p className="font-sans-custom text-sm leading-relaxed" style={{ color: "#3C1F0F", opacity: 0.8 }}>
                      {attraction.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
