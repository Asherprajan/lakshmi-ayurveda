"use client"

import Link from "next/link"
import Image from "next/image"
import { packages } from "@/lib/packages"
import Header from "@/components/Header"
import { motion, useInView } from "framer-motion"
import React, { useRef } from "react"
import Footer from "@/components/footer" // <-- ADDED FOOTER IMPORT

// Helper: fallback image if pkg.image is not present
const getPackageImage = (pkg: any, idx: number) => {
  if (pkg.image) return pkg.image
  const fallbackImages = [
    "/rejuvination.jpeg",
    "/stress.jpeg",
    "/weight.jpeg",
    "/joint.jpeg",
    "/panchakarma.jpeg",
    "/women.jpeg",
  ]
  return fallbackImages[idx % fallbackImages.length]
}

function HeroSection({
  isHeroInView,
  heroRef,
}: {
  isHeroInView: boolean
  heroRef: React.RefObject<HTMLElement>
}) {
  return (
    <section
      ref={heroRef as React.RefObject<HTMLElement>}
      className="relative bg-gradient-to-br from-[#1a0e07] via-[#3C1F0F] to-[#B24D1F] text-[#F5ECE0] py-32 overflow-hidden"
    >
      {/* Ornamental Background */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0e07]/90 to-[#3C1F0F]/90" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#3C1F0F]/20 to-[#B24D1F]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#3C1F0F]/20 to-[#F1AD60]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#B24D1F]/15 to-[#3C1F0F]/15 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-20 left-10 w-32 h-32 border border-[#F1AD60]/30 rounded-full opacity-50" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-[#F1AD60]/20 rounded-full opacity-40" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-[#F1AD60]/25 rounded-full opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F1AD60]/20 to-[#B24D1F]/20 px-6 py-2 rounded-full border border-[#F1AD60]/30 mb-6">
            <div className="w-2 h-2 bg-[#F1AD60] rounded-full animate-pulse" />
            <span className="text-[#F1AD60] font-medium text-sm tracking-wider">
              PREMIUM AYURVEDA PACKAGES
            </span>
            <div className="w-2 h-2 bg-[#F1AD60] rounded-full animate-pulse" />
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
          className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
        >
          <span className="bg-gradient-to-r from-[#F5ECE0] via-[#F1AD60] to-[#F5ECE0] bg-clip-text text-transparent">
            Luxury Ayurveda
          </span>
          <br />
          <span className="text-[#F5ECE0]">Treatment Packages</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Discover holistic healing and rejuvenation with our curated Ayurveda
          packages, blending ancient wisdom and modern luxury.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            { label: "Authentic Treatments", icon: "🌿" },
            { label: "Expert Practitioners", icon: "👩‍⚕️" },
            { label: "Luxury Accommodation", icon: "🏨" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 bg-[#F1AD60]/10 px-4 py-2 rounded-full border border-[#F1AD60]/30"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-[#F1AD60] text-sm font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PackageCard({
  pkg,
  idx,
  isPackagesInView,
}: {
  pkg: any
  idx: number
  isPackagesInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={
        isPackagesInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 60, scale: 0.95 }
      }
      transition={{
        duration: 0.8,
        delay: idx * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative flex flex-col rounded-2xl shadow-lg hover:shadow-2xl border border-[#3C1F0F]/10 overflow-hidden transition-all duration-500 hover:border-[#B24D1F]/20 cursor-pointer transform-gpu"
      style={{ minHeight: "420px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getPackageImage(pkg, idx)}
          alt={`${pkg.name} treatment package`}
          fill
          className="object-cover object-center w-full h-full transition-all duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={idx < 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3C1F0F]/80 via-[#B24D1F]/40 to-transparent" />
      </div>
      {/* Glassmorphic Details Card */}
      <div
        className="relative z-10 flex-1 flex flex-col p-6 m-4 rounded-2xl bg-[#FFF7F0]/80 backdrop-blur-lg border border-[#3C1F0F]/10 shadow-xl"
        style={{
          boxShadow: "0 8px 32px 0 rgba(60, 31, 15, 0.08)",
        }}
      >
        {/* Header Section */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold font-serif text-[#3C1F0F] group-hover:text-[#B24D1F] transition-colors duration-500 leading-tight flex-1 drop-shadow">
              {pkg.name}
            </h3>
          </div>
          {/* Rating with Enhanced Stars */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isPackagesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{
                    delay: idx * 0.1 + i * 0.05,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="w-4 h-4 bg-gradient-to-r from-[#B24D1F] to-[#F1AD60] rounded-full shadow-sm"
                />
              ))}
            </div>
            <span className="text-sm text-[#B24D1F] font-medium">5.0</span>
            <span className="text-xs text-[#B24D1F]/60">(24 reviews)</span>
          </div>
          {/* Enhanced Subtitle */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3C1F0F]/5 to-[#B24D1F]/5 px-4 py-2 rounded-full border border-[#3C1F0F]/10">
            <div className="w-2 h-2 bg-[#B24D1F] rounded-full" />
            <span className="text-sm text-[#B24D1F] font-medium">
              {pkg.subtitle}
            </span>
          </div>
        </div>
        {/* Description */}
        <p className="text-[#3C1F0F]/80 mb-6 leading-relaxed text-sm line-clamp-3 group-hover:text-[#B24D1F] transition-colors duration-500">
          {pkg.objective}
        </p>
        {/* Price & Action Section */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-[#FFF7F0]/90 backdrop-blur-sm text-[#B24D1F] px-4 py-2 rounded-full text-xs font-semibold shadow border border-[#3C1F0F]/10 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#B24D1F] rounded-full animate-pulse" />
              {pkg.duration}
            </div>
          </div>
          {pkg.details && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={isPackagesInView ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
              transition={{
                delay: idx * 0.1 + 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="bg-[#FFF7F0]/70 backdrop-blur px-4 py-3 rounded-xl border border-[#3C1F0F]/10 mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#B24D1F] rounded-full" />
                <span className="text-xs font-semibold text-[#B24D1F] uppercase tracking-wide">
                  Package Includes
                </span>
              </div>
              <p className="text-xs text-[#3C1F0F]/80 leading-relaxed">
                {pkg.details}
              </p>
            </motion.div>
          )}
          <Link
            href={`/lakshmi-ayurveda-packages/${pkg.id}`}
            tabIndex={0}
            aria-label={`View details for ${pkg.name} package`}
            className="block"
          >
            <motion.div
              className="w-full bg-gradient-to-r from-[#B24D1F] to-[#F1AD60] text-white py-3 px-6 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-500 group-hover:from-[#3C1F0F] group-hover:to-[#B24D1F] relative overflow-hidden"
              whileHover={{
                scale: 1.025,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">View Package Details</span>
            </motion.div>
          </Link>
        </div>
      </div>
      {/* Premium Badge */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-gradient-to-r from-[#B24D1F] to-[#F1AD60] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg border border-[#3C1F0F]/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          <span className="relative z-10">PREMIUM</span>
        </div>
      </div>
    </motion.div>
  )
}

function PackagesGrid({
  isPackagesInView,
  packagesRef,
}: {
  isPackagesInView: boolean
  packagesRef: React.RefObject<HTMLDivElement>
}) {
  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      ref={packagesRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isPackagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {packages.map((pkg: any, idx: number) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            idx={idx}
            isPackagesInView={isPackagesInView}
          />
        ))}
      </motion.div>
      <BottomCTA isPackagesInView={isPackagesInView} />
    </div>
  )
}

function BottomCTA({ isPackagesInView }: { isPackagesInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isPackagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      className="text-center mt-20"
    >
      <div
        className="bg-gradient-to-br from-[#F5ECE0]/90 to-amber-50/80 rounded-3xl shadow-2xl p-12 max-w-5xl mx-auto border border-amber-200/50 relative overflow-hidden backdrop-blur-lg"
        style={{
          boxShadow: "0 8px 32px 0 rgba(178, 77, 31, 0.10)",
        }}
      >
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-orange-200/20 to-amber-200/20 rounded-full blur-2xl" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-[#3C1F0F] mb-6 font-['Playfair_Display']">
            Begin Your Transformative Journey
          </h2>
          <p className="text-lg text-[#B24D1F] mb-8 max-w-3xl mx-auto">
            Experience the ancient wisdom of Ayurveda in a luxurious setting
            designed for your complete wellness transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact-us"
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                Contact Our Experts
              </Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/lakshmi-ayurveda-services"
                className="border-2 border-amber-600 text-amber-600 px-10 py-4 rounded-xl font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function PackagesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const packagesRef = useRef<HTMLDivElement>(null)
  
  const isHeroInView = useInView(heroRef as React.RefObject<Element>, {
    once: true,
    amount: 0.3,
  })
  
  const isPackagesInView = useInView(packagesRef as React.RefObject<Element>, {
    once: true,
    amount: 0.2,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex flex-col">
      <Header />
      <HeroSection isHeroInView={isHeroInView} heroRef={heroRef as React.RefObject<HTMLElement>} /> 
      <PackagesGrid isPackagesInView={isPackagesInView} packagesRef={packagesRef as React.RefObject<HTMLDivElement>} />
      <Footer /> {/* <-- ADDED FOOTER COMPONENT */}
    </div>
  )
}