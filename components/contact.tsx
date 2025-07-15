"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#FFF7F0" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif-custom text-4xl md:text-5xl font-bold mb-6" style={{ color: "#3C1F0F" }}>
            Contact Us
          </h2>
          <p className="font-sans-custom text-xl max-w-3xl mx-auto opacity-80" style={{ color: "#3C1F0F" }}>
            Begin your journey to wellness. Reach out to us for reservations or any inquiries about our treatments and
            facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-serif-custom text-2xl font-semibold mb-8" style={{ color: "#3C1F0F" }}>
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "#F1AD60" }}>
                  <Phone className="w-6 h-6" style={{ color: "#3C1F0F" }} />
                </div>
                <div>
                  <h4 className="font-sans-custom font-semibold mb-1" style={{ color: "#3C1F0F" }}>
                    Phone
                  </h4>
                  <p className="font-sans-custom" style={{ color: "#3C1F0F", opacity: 0.8 }}>
                    +91 98765 43210
                  </p>
                  <p className="font-sans-custom" style={{ color: "#3C1F0F", opacity: 0.8 }}>
                    +91 87654 32109
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "#F1AD60" }}>
                  <Mail className="w-6 h-6" style={{ color: "#3C1F0F" }} />
                </div>
                <div>
                  <h4 className="font-sans-custom font-semibold mb-1" style={{ color: "#3C1F0F" }}>
                    Email
                  </h4>
                  <p className="font-sans-custom" style={{ color: "#3C1F0F", opacity: 0.8 }}>
                    info@ayurvedavilla.com
                  </p>
                  <p className="font-sans-custom" style={{ color: "#3C1F0F", opacity: 0.8 }}>
                    reservations@ayurvedavilla.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "#F1AD60" }}>
                  <MapPin className="w-6 h-6" style={{ color: "#3C1F0F" }} />
                </div>
                <div>
                  <h4 className="font-sans-custom font-semibold mb-1" style={{ color: "#3C1F0F" }}>
                    Address
                  </h4>
                  <p className="font-sans-custom" style={{ color: "#3C1F0F", opacity: 0.8 }}>
                    Heritage Villa Road
                    <br />
                    Kovalam, Trivandrum
                    <br />
                    Kerala 695527, India
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative underline */}
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

          {/* Contact Form */}
          <div className="p-8 rounded-3xl" style={{ backgroundColor: "#F5ECE0" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="font-sans-custom border-0 bg-white/50 focus:bg-white transition-colors duration-300"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="font-sans-custom border-0 bg-white/50 focus:bg-white transition-colors duration-300"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="font-sans-custom border-0 bg-white/50 focus:bg-white transition-colors duration-300"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="font-sans-custom border-0 bg-white/50 focus:bg-white transition-colors duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full font-sans-custom text-lg py-6 rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#9A3E0F",
                  color: "#F5ECE0",
                }}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
