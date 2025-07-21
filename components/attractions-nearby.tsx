"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock } from "lucide-react"

const attractions = [
  {
    name: "Kovalam Beach",
    distance: "3.5 km",
    time: "9 min drive",
    image: "/kovalam.jpeg",
    description: "Located in Kerala, India, a renowned coastal town known for its beautiful crescent-shaped beaches and tranquil atmosphere.",
  },
  {
    name: "Sree Padmanabhaswamy Temple",
    distance: "13 km",
    time: "22 min drive",
    image: "/temple.jpeg",
    description: "A revered Hindu temple dedicated to Lord Vishnu, famous for its immense wealth, intricate architecture blending Kerala and Dravidian styles, and strict visitor dress code.",
  },
  {
    name: "Aazhimala Shiva Temple",
    distance: "8.7 km",
    time: "16 min drive",
    image: "/azhimala.jpeg",
    description: "A Hindu temple on the Arabian Sea coast near Vizhinjam, known for the 18 m tall Gangadhareshwara sculpture, the tallest Shiva sculpture in Kerala.",
  },
  {
    name: "Vellayani Lake",
    distance: "7.8 km",
    time: "17 min drive", 
    image: "/lake.jpeg",
    description: "The largest freshwater lake in Thiruvananthapuram, popular for boating, bird watching, and experiencing village life tranquility. Known for its scenic beauty and annual Ayyankali boat race during Onam.",
  },
  {
    name: "Samudra Beach Park",
    distance: "0.6 km",
    time: "8 min walk",
    image: "/beach.jpeg",
    description: "A tranquil coastal retreat located in Kovalam, Kerala, offering a serene seaside experience.",
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
