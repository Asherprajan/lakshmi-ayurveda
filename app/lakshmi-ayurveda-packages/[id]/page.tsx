"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { packages } from "@/lib/packages"
import { FaLeaf, FaClock, FaCheck, FaArrowLeft, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaSnapchat } from "react-icons/fa"
import { FiPhone as FiPhoneIcon, FiMail as FiMailIcon, FiMapPin as FiMapPinIcon } from "react-icons/fi"
import Header from "@/components/Header"
import Image from "next/image"
import { use } from "react"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default function PackageDetailPage({ params }: PageProps) {
  const { id } = use(params)
  const pkg = packages.find(p => p.id === id)

  if (!pkg) {
    notFound()
  }

  // Validate package data
  if (!pkg.name || !pkg.subtitle || !pkg.treatments || !pkg.benefits || !pkg.packageIncludes) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f5f0] via-[#fff7f0] to-[#f1e3d0]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1a0e07] via-[#3c1f0f] to-[#9a3e0f] text-white py-24 shadow-2xl overflow-hidden">
        {/* Hero Blur Image */}
        {pkg.image && (
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={pkg.image}
              alt={pkg.name}
              fill
              className="object-cover w-full h-full blur-lg opacity-40"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a0e07]/80 via-[#3c1f0f]/70 to-[#9a3e0f]/80" />
          </div>
        )}
        {/* Decorative gold lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F1AD60]/60 via-transparent to-[#F1AD60]/60 opacity-60 z-10" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#F1AD60]/60 via-transparent to-[#F1AD60]/60 opacity-60 z-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-20">
          <div className="mb-10">
            <Link
              href="/lakshmi-ayurveda-packages"
              className="inline-flex items-center gap-2 text-[#F1AD60] hover:text-white transition-colors duration-200 font-medium tracking-wide"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span className="uppercase text-xs tracking-widest">Back to Packages</span>
            </Link>
          </div>
          <div className="text-center">
            {/* Add image if available */}
            {pkg.image && (
              <div className="flex justify-center mb-8">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  width={600}
                  height={350}
                  className="rounded-3xl shadow-xl object-cover max-h-72 w-auto"
                  priority
                />
              </div>
            )}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-['Playfair_Display'] tracking-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-[#F1AD60] via-[#fff7f0] to-[#F1AD60] bg-clip-text text-transparent">
                {pkg.name}
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-[#F1AD60] max-w-2xl mx-auto mb-8 italic font-light drop-shadow">
              {pkg.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-6">
              <div className="flex items-center gap-2 text-[#F1AD60] bg-white/10 px-5 py-2 rounded-full shadow-inner border border-[#F1AD60]/30">
                <FaClock className="w-5 h-5" />
                <span className="text-lg font-medium">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-[#F1AD60] bg-white/10 px-5 py-2 rounded-full shadow-inner border border-[#F1AD60]/30">
                <FaLeaf className="w-5 h-5" />
                <span className="text-lg font-medium">{pkg.treatments.length} Treatments</span>
              </div>
            </div>
          </div>
        </div>
        {/* Subtle gold overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F1AD60]/10 via-transparent to-[#F1AD60]/10 z-30" />
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-14">
            {/* Objective */}
            <section className="bg-white/90 rounded-3xl shadow-2xl p-10 border border-[#F1AD60]/30 backdrop-blur-md">
              <h2 className="text-3xl font-extrabold text-[#9a3e0f] mb-6 font-['Playfair_Display'] tracking-wide border-l-4 border-[#F1AD60] pl-4">
                Package Objective
              </h2>
              <p className="text-[#3c1f0f] text-lg leading-relaxed font-light">
                {pkg.objective}
              </p>
            </section>

            {/* Treatments */}
            <section className="bg-white/90 rounded-3xl shadow-2xl p-10 border border-[#F1AD60]/30 backdrop-blur-md">
              <h2 className="text-3xl font-extrabold text-[#9a3e0f] mb-6 font-['Playfair_Display'] tracking-wide border-l-4 border-[#F1AD60] pl-4">
                Treatments Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pkg.treatments.map((treatment, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border-2 transition-all duration-200 shadow-sm ${
                      treatment.for
                        ? "border-[#F1AD60] bg-gradient-to-br from-[#fff7f0] via-[#f8e7c0]/60 to-[#fff7f0]"
                        : "border-[#F1AD60]/20 bg-white/80"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-4 h-4 bg-gradient-to-br from-[#F1AD60] to-[#fff7f0] rounded-full mt-2 flex-shrink-0 shadow" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#3c1f0f] mb-2 text-lg flex items-center gap-2">
                          {treatment.title}
                          {treatment.for && (
                            <span className="ml-2 px-2 py-1 text-xs bg-[#F1AD60]/20 text-[#9a3e0f] rounded-full border border-[#F1AD60]/40 font-medium uppercase tracking-wider">
                              {treatment.for === "women" ? "Women" : "Men"}
                            </span>
                          )}
                        </h3>
                        <p className="text-[#3c1f0f]/80 text-sm leading-relaxed font-light">
                          {treatment.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-white/90 rounded-3xl shadow-2xl p-10 border border-[#F1AD60]/30 backdrop-blur-md">
              <h2 className="text-3xl font-extrabold text-[#9a3e0f] mb-6 font-['Playfair_Display'] tracking-wide border-l-4 border-[#F1AD60] pl-4">
                Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {pkg.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-[#F1AD60] mt-1 flex-shrink-0" />
                    <span className="text-[#3c1f0f] font-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Package Includes */}
            <section className="bg-white/90 rounded-3xl shadow-2xl p-10 border border-[#F1AD60]/30 backdrop-blur-md">
              <h2 className="text-3xl font-extrabold text-[#9a3e0f] mb-6 font-['Playfair_Display'] tracking-wide border-l-4 border-[#F1AD60] pl-4">
                Package Includes
              </h2>
              <div className="space-y-4">
                {pkg.packageIncludes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-[#F1AD60] mt-1 flex-shrink-0" />
                    <span className="text-[#3c1f0f] font-light">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Notes */}
            {pkg.notes && pkg.notes.length > 0 && (
              <section className="bg-gradient-to-br from-[#fff7f0] via-[#f8e7c0]/60 to-[#fff7f0] rounded-3xl shadow-2xl p-10 border-2 border-[#F1AD60]/60 backdrop-blur-md">
                <h2 className="text-3xl font-extrabold text-[#9a3e0f] mb-6 font-['Playfair_Display'] tracking-wide border-l-4 border-[#F1AD60] pl-4">
                  Important Notes
                </h2>
                <div className="space-y-4">
                  {pkg.notes.map((note, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-gradient-to-br from-[#F1AD60] to-[#fff7f0] rounded-full mt-2 flex-shrink-0 shadow" />
                      <span className="text-[#3c1f0f] font-light">{note}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Cost Information */}
            <section className="bg-gradient-to-r from-[#9a3e0f] via-[#b24d1f] to-[#F1AD60] rounded-3xl shadow-2xl p-10 text-white border border-[#F1AD60]/30">
              <h2 className="text-3xl font-extrabold mb-6 font-['Playfair_Display'] tracking-wide border-l-4 border-[#F1AD60] pl-4">
                Cost Information
              </h2>
              <p className="text-[#F5ECE0] text-lg leading-relaxed font-light">
                {pkg.costNote}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            {/* Quick Contact */}
            <section className="bg-white/90 rounded-3xl shadow-2xl p-8 border border-[#F1AD60]/30 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-[#9a3e0f] mb-6 font-['Playfair_Display'] tracking-wide border-l-4 border-[#F1AD60] pl-3">
                Get Started
              </h3>
              <div className="space-y-5">
                <Link
                  href="/contact-us"
                  className="w-full bg-gradient-to-r from-[#9a3e0f] via-[#b24d1f] to-[#F1AD60] text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:from-[#8a2e0f] hover:to-[#a23d0f] transition-all duration-200 text-center block tracking-wide uppercase"
                >
                  Book Consultation
                </Link>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[#3c1f0f]">
                    <FaPhone className="w-4 h-4 text-[#F1AD60]" />
                    <span className="font-light">+91 9747205046</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#3c1f0f]">
                    <FaEnvelope className="w-4 h-4 text-[#F1AD60]" />
                    <span className="font-light">Lakshmiayurvedakerala@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#3c1f0f]">
                    <FaMapMarkerAlt className="w-4 h-4 text-[#F1AD60]" />
                    <span className="font-light">Kovalam, Trivandrum, Kerala</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Other Packages */}
            <section className="bg-white/90 rounded-3xl shadow-2xl p-8 border border-[#F1AD60]/30 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-[#9a3e0f] mb-6 font-['Playfair_Display'] tracking-wide border-l-4 border-[#F1AD60] pl-3">
                Other Packages
              </h3>
              <div className="space-y-4">
                {packages
                  .filter(p => p.id !== pkg.id)
                  .slice(0, 3)
                  .map((otherPkg) => (
                    <Link
                      key={otherPkg.id}
                      href={`/lakshmi-ayurveda-packages/${otherPkg.id}`}
                      className="block p-5 rounded-xl border border-[#F1AD60]/20 hover:border-[#F1AD60] hover:bg-gradient-to-br hover:from-[#fff7f0] hover:to-[#f8e7c0]/60 transition-all duration-200 shadow-sm"
                    >
                      <h4 className="font-semibold text-[#3c1f0f] mb-1 text-lg">
                        {otherPkg.name}
                      </h4>
                      <p className="text-sm text-[#3c1f0f]/70 font-light">
                        {otherPkg.subtitle}
                      </p>
                    </Link>
                  ))}
              </div>
            </section>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-[#1a0e07] via-[#3c1f0f] to-[#9a3e0f] text-[#F5ECE0] py-16 overflow-hidden mt-20 shadow-inner">
        {/* Glassmorphic background blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-gradient-to-br from-[#F5ECE0]/10 to-[#F1AD60]/10 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-gradient-to-tl from-[#F1AD60]/10 to-[#B24D1F]/10 rounded-full blur-2xl z-0" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#B24D1F]/10 to-[#3C1F0F]/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 z-0" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div
            className="grid md:grid-cols-3 gap-10 rounded-3xl bg-[#1a0e07]/80 backdrop-blur-xl border border-[#F1AD60]/30 shadow-2xl p-10"
            style={{
              background: "linear-gradient(135deg, rgba(26,14,7,0.92) 60%, rgba(178,77,31,0.10) 100%)",
              boxShadow: "0 8px 48px 0 rgba(241, 173, 96, 0.10)",
              border: "1.5px solid #F1AD60",
              backdropFilter: "blur(18px)",
            }}
          >
            <div>
              <h3 className="font-['Playfair_Display'] text-3xl font-extrabold mb-4 drop-shadow text-[#F1AD60] tracking-wide">
                Ayurveda Heritage Villa
              </h3>
              <p className="opacity-90 leading-relaxed font-light text-lg">
                Where ancient wisdom meets modern luxury in the heart of Kerala.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-5 mt-8">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-[#F1AD60] transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#F1AD60] transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://wa.me/919747205046"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="hover:text-[#F1AD60] transition-colors"
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  href="https://www.youtube.com/@ayurvedaheritagevilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="hover:text-[#F1AD60] transition-colors"
                >
                  <FaYoutube size={24} /> 
                </a>
                <a
                  href="https://www.snapchat.com/add/ayurvedaheritagevilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Snapchat"
                  className="hover:text-[#F1AD60] transition-colors"
                >
                  <FaSnapchat size={24} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#F1AD60] text-lg tracking-wide">Contact</h4>
              <div className="space-y-3 opacity-90 text-base">
                <div className="flex items-center space-x-3">
                  <FiPhoneIcon className="w-5 h-5 text-[#F1AD60]" />
                  <span className="font-light">+91 9747205046</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMailIcon className="w-5 h-5 text-[#F1AD60]" />
                  <span className="font-light">Lakshmiayurvedakerala@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMapPinIcon className="w-5 h-5 text-[#F1AD60]" />
                  <span className="font-light">Oluppuvila Veedu, Kannankodu, Vellar, Kovalam, Trivandrum, Kerala 695527</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#F1AD60] text-lg tracking-wide">Experience</h4>
              <div className="space-y-2 opacity-90 text-base font-light">
                <p>Treatments</p>
                <p>Accommodation</p>
                <p>Wellness Programs</p>
                <p>Cultural Events</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#F1AD60]/40 mt-10 pt-8 text-center opacity-80 bg-[#1a0e07]/80 rounded-b-3xl backdrop-blur-md">
            <p className="font-light tracking-wide">&copy; 2024 Ayurveda Heritage Villa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 