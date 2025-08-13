"use client"

import { useState, JSX, useEffect } from "react"
import {
  FiSun,
  FiTrendingUp,
  FiDroplet,
  FiHeart,
  FiActivity,
  FiZap,
  FiGlobe,
  FiUsers,
  FiCalendar,
  FiCheckCircle,
  FiArrowRight,
  FiStar,
  FiTarget,
  FiAward
} from "react-icons/fi"
import {
  FaLeaf,
  FaSeedling,
  FaPlane,
  FaPassport,
  FaUserMd,
  FaHospital,
  FaWeight,
  FaFemale,
  FaMale,
  FaSpinner
} from "react-icons/fa"
import Header from "@/components/Header"
import Footer from "@/components/footer"

// Color theme matching about-us page
const BG = "#FFF7F0"
const TEXT = "#3C1F0F"
const ACCENT = "#8B4513"
const ACCENT_DARK = "#D2691E"

interface Therapy {
  name: string
  icon: JSX.Element
  description: string
  benefits: string[]
}

interface YogaProgram {
  name: string
  icon: JSX.Element
  description: string
  duration: string
}

interface Package {
  name: string
  duration: string
  price: string
  features: string[]
  icon: JSX.Element
  popular?: boolean
}

interface MedicalTourismService {
  name: string
  icon: JSX.Element
  description: string
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("therapies")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const ayurvedicTherapies: Therapy[] = [
    {
      name: "Abhyanga",
      icon: <FaSeedling className="w-8 h-8" />,
      description: "Full-body herbal oil massage using warm therapeutic oils to nourish the skin, improve circulation, and balance the doshas.",
      benefits: ["Improves blood circulation", "Relieves muscle tension", "Promotes deep relaxation", "Balances Vata dosha"]
    },
    {
      name: "Shirodhara",
      icon: <FiSun className="w-8 h-8" />,
      description: "Continuous pouring of warm herbal oil on the forehead to calm the nervous system and promote mental clarity.",
      benefits: ["Reduces stress and anxiety", "Improves sleep quality", "Enhances mental clarity", "Calms the nervous system"]
    },
    {
      name: "Panchakarma",
      icon: <FiTrendingUp className="w-8 h-8" />,
      description: "Complete detoxification and rejuvenation program combining five therapeutic procedures to cleanse the body of toxins.",
      benefits: ["Deep detoxification", "Removes accumulated toxins", "Restores natural balance", "Boosts immunity"]
    },
    {
      name: "Kizhi",
      icon: <FaLeaf className="w-8 h-8" />,
      description: "Herbal pouch therapy using medicinal herbs wrapped in cloth and heated with warm oils for targeted treatment.",
      benefits: ["Reduces inflammation", "Relieves pain", "Improves joint mobility", "Enhances healing"]
    },
    {
      name: "Udwarthanam",
      icon: <FaWeight className="w-8 h-8" />,
      description: "Herbal powder massage for weight loss and metabolism boost using special herbal powders and techniques.",
      benefits: ["Aids weight loss", "Improves metabolism", "Reduces cellulite", "Tones muscles"]
    },
    {
      name: "Classical Detox Therapies",
      icon: <FiZap className="w-8 h-8" />,
      description: "Traditional purification therapies including Nasya, Vamana, Virechana, and Basti for complete body cleansing.",
      benefits: ["Complete body purification", "Removes deep-seated toxins", "Restores dosha balance", "Prevents diseases"]
    }
  ]

  const yogaPrograms: YogaProgram[] = [
    {
      name: "Traditional Hatha Yoga",
      icon: <FiActivity className="w-8 h-8" />,
      description: "Classical yoga practice focusing on physical postures, breathing techniques, and meditation for overall wellness.",
      duration: "Daily sessions"
    },
    {
      name: "Therapeutic Yoga Sessions",
      icon: <FaUserMd className="w-8 h-8" />,
      description: "Specialized yoga sessions designed to address specific health conditions and promote healing.",
      duration: "Customized duration"
    },
    {
      name: "Pranayama (Breath Control)",
      icon: <FiActivity className="w-8 h-8" />,
      description: "Ancient breathing techniques to enhance vitality, improve lung capacity, and calm the mind.",
      duration: "Daily practice"
    },
    {
      name: "Yoga Nidra & Meditation",
      icon: <FiHeart className="w-8 h-8" />,
      description: "Deep relaxation techniques and meditation practices for stress relief and mental clarity.",
      duration: "Daily sessions"
    },
    {
      name: "Yoga for Chronic Conditions",
      icon: <FiHeart className="w-8 h-8" />,
      description: "Specialized yoga programs for stress, lifestyle disorders, and chronic health conditions.",
      duration: "Tailored programs"
    }
  ]

  const medicalTourismServices: MedicalTourismService[] = [
    {
      name: "Pre-arrival Consultation",
      icon: <FiCalendar className="w-8 h-8" />,
      description: "Comprehensive consultation and itinerary planning before your arrival to ensure personalized treatment."
    },
    {
      name: "Visa Guidance & Documentation",
      icon: <FaPassport className="w-8 h-8" />,
      description: "Complete assistance with visa applications and medical documentation for international travelers."
    },
    {
      name: "Airport Pickup & Accommodation",
      icon: <FaPlane className="w-8 h-8" />,
      description: "Seamless airport transfer and comfortable accommodation arrangements for your stay."
    },
    {
      name: "On-site Translators",
      icon: <FiUsers className="w-8 h-8" />,
      description: "Professional translation services available on request to ensure clear communication during treatments."
    },
    {
      name: "Post-treatment Support",
      icon: <FiCheckCircle className="w-8 h-8" />,
      description: "Ongoing follow-up support and guidance after your treatment program completion."
    }
  ]

  const wellnessPackages: Package[] = [
    {
      name: "Detox & Rejuvenation Retreat",
      duration: "7 Days",
      price: "₹25,000",
      icon: <FiZap className="w-8 h-8" />,
      features: [
        "Daily Ayurvedic therapies",
        "Yoga and meditation sessions",
        "Satvik meals",
        "Progress monitoring",
        "Accommodation included"
      ]
    },
    {
      name: "Stress Management Program",
      duration: "10 Days",
      price: "₹35,000",
      icon: <FiHeart className="w-8 h-8" />,
      features: [
        "Therapeutic stress relief treatments",
        "Mindfulness practices",
        "Lifestyle counseling",
        "Relaxation techniques",
        "Complete accommodation"
      ],
      popular: true
    },
    {
      name: "Weight Loss & Metabolism Boost",
      duration: "14 Days",
      price: "₹45,000",
      icon: <FaWeight className="w-8 h-8" />,
      features: [
        "Specialized weight loss therapies",
        "Metabolism-boosting treatments",
        "Dietary guidance",
        "Exercise programs",
        "Full accommodation"
      ]
    },
    {
      name: "Joint & Spine Care",
      duration: "Customized",
      price: "₹30,000+",
      icon: <FiTarget className="w-8 h-8" />,
      features: [
        "Targeted joint therapies",
        "Spine alignment treatments",
        "Pain relief techniques",
        "Mobility enhancement",
        "Flexible duration"
      ]
    },
    {
      name: "Women's Wellness & Hormonal Balance",
      duration: "10-14 Days",
      price: "₹40,000",
      icon: <FaFemale className="w-8 h-8" />,
      features: [
        "Hormonal balance treatments",
        "Women-specific therapies",
        "Reproductive health support",
        "Emotional wellness",
        "Complete care package"
      ]
    },
    {
      name: "International Medical Tourism",
      duration: "Tailored",
      price: "₹50,000+",
      icon: <FiGlobe className="w-8 h-8" />,
      features: [
        "Complete medical tourism support",
        "Visa and travel assistance",
        "Translation services",
        "Post-treatment follow-up",
        "Premium accommodation"
      ]
    }
  ]
  
  return (
    <div
      className="min-h-screen font-['Manrope'] flex flex-col"
      style={{
        backgroundColor: BG,
        color: TEXT,
      }}
    >
      <Header />

      {/* Hero Section */}
      <section
        className={`relative py-20 overflow-hidden transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          background: `linear-gradient(135deg, #FFF7F0 0%, #FFF7F0 60%, #D2691E10 100%)`,
          color: TEXT,
        }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10" />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, #FFF7F0 0%, #FFF7F0 100%)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1
            className={`font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Services
          </h1>
          <p
            className={`text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Discover comprehensive Ayurvedic treatments, yoga programs, and wellness packages designed to restore your natural balance and vitality.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section
        className={`py-8 border-b transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{
          background: BG,
          borderColor: `${ACCENT}33`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: "therapies", label: "Ayurvedic Therapies", icon: <FaSeedling className="w-5 h-5" /> },
              { id: "yoga", label: "Yoga & Meditation", icon: <FiActivity className="w-5 h-5" /> },
              { id: "tourism", label: "Medical Tourism", icon: <FiGlobe className="w-5 h-5" /> },
              { id: "packages", label: "Wellness Packages", icon: <FiHeart className="w-5 h-5" /> }
            ].map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 border hover:scale-105 ${
                  activeTab === tab.id
                    ? "shadow-lg"
                    : "hover:bg-[#8B4513]/10"
                }`}
                style={{
                  background: activeTab === tab.id ? ACCENT : BG,
                  color: activeTab === tab.id ? "#FFF7F0" : TEXT,
                  borderColor: activeTab === tab.id ? ACCENT : `${ACCENT}4D`,
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 flex-1">
        {/* Ayurvedic Therapies */}
        {activeTab === "therapies" && (
          <section
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div
              className="text-center mb-16 transition-all duration-700 delay-100"
            >
              <h2
                className="font-['Playfair_Display'] text-4xl font-bold mb-6"
                style={{ color: TEXT }}
              >
                Ayurvedic Therapies
              </h2>
              <p className="text-xl" style={{ color: `${TEXT}CC` }}>
                Restore balance and eliminate toxins with time-tested Ayurvedic treatments that have been practiced for thousands of years.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ayurvedicTherapies.map((therapy, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    background: "#FFF7F0",
                    color: TEXT,
                    borderColor: `${ACCENT}33`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div 
                    className="mb-4 transition-all duration-500 hover:scale-110" 
                    style={{ color: ACCENT }}
                  >
                    {therapy.icon}
                  </div>
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4" style={{ color: TEXT }}>
                    {therapy.name}
                  </h3>
                  <p className="mb-6 leading-relaxed" style={{ color: `${TEXT}CC` }}>
                    {therapy.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold mb-3" style={{ color: TEXT }}>Key Benefits:</h4>
                    <ul className="space-y-2">
                      {therapy.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: `${TEXT}B3` }}>
                          <FiCheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Yoga & Meditation */}
        {activeTab === "yoga" && (
          <section
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div
              className="text-center mb-16 transition-all duration-700 delay-100"
            >
              <h2
                className="font-['Playfair_Display'] text-4xl font-bold mb-6"
                style={{ color: TEXT }}
              >
                Yoga & Meditation
              </h2>
              <p className="text-xl" style={{ color: `${TEXT}CC` }}>
                Enhance vitality and calm with daily guided practices that harmonize body, mind, and spirit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {yogaPrograms.map((program, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    background: "#FFF7F0",
                    color: TEXT,
                    borderColor: `${ACCENT}33`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div 
                    className="mb-4 transition-all duration-500 hover:scale-110" 
                    style={{ color: ACCENT }}
                  >
                    {program.icon}
                  </div>
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4" style={{ color: TEXT }}>
                    {program.name}
                  </h3>
                  <p className="mb-4 leading-relaxed" style={{ color: `${TEXT}CC` }}>
                    {program.description}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: `${ACCENT}1A`,
                      color: TEXT,
                    }}
                  >
                    <FiCalendar className="w-4 h-4" />
                    {program.duration}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Medical Tourism */}
        {activeTab === "tourism" && (
          <section
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div
              className="text-center mb-16 transition-all duration-700 delay-100"
            >
              <h2
                className="font-['Playfair_Display'] text-4xl font-bold mb-6"
                style={{ color: TEXT }}
              >
                Medical Tourism Services
              </h2>
              <p className="text-xl" style={{ color: `${TEXT}CC` }}>
                Trusted care for international guests seeking Ayurvedic treatment for chronic conditions, recovery, and rejuvenation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {medicalTourismServices.map((service, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    background: "#FFF7F0",
                    color: TEXT,
                    borderColor: `${ACCENT}33`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div 
                    className="mb-4 transition-all duration-500 hover:scale-110" 
                    style={{ color: ACCENT }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl font-bold mb-4" style={{ color: TEXT }}>
                    {service.name}
                  </h3>
                  <p className="leading-relaxed" style={{ color: `${TEXT}CC` }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Treatment Areas */}
            <div
              className={`rounded-2xl p-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                background: `linear-gradient(90deg, #FFF7F0 0%, #F5F5DC 100%)`,
                color: TEXT,
              }}
            >
              <h3 className="font-['Playfair_Display'] text-3xl font-bold mb-6 text-center">
                Treatment Areas
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Ayurvedic treatment for chronic conditions",
                  "Recovery after surgery or illness",
                  "Rejuvenation and detox programs",
                  "Personalized wellness retreats"
                ].map((area, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <FiCheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Wellness Packages */}
        {activeTab === "packages" && (
          <section
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div
              className="text-center mb-16 transition-all duration-700 delay-100"
            >
              <h2
                className="font-['Playfair_Display'] text-4xl font-bold mb-6"
                style={{ color: TEXT }}
              >
                Wellness Packages
              </h2>
              <p className="text-xl" style={{ color: `${TEXT}CC` }}>
                Customizable programs combining Ayurveda and Yoga, with accommodation, dietary guidance, and expert consultation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wellnessPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 shadow-lg border-2 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105 ${
                    pkg.popular ? "relative" : ""
                  } ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    background: "#FFF7F0",
                    color: TEXT,
                    borderColor: pkg.popular ? ACCENT : `${ACCENT}33`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div
                        className="px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2"
                        style={{
                          background: ACCENT,
                          color: "#FFF7F0",
                        }}
                      >
                        <FiStar className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div 
                    className="mb-4 transition-all duration-500 hover:scale-110" 
                    style={{ color: ACCENT }}
                  >
                    {pkg.icon}
                  </div>
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-2" style={{ color: TEXT }}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-bold text-xl" style={{ color: ACCENT }}>{pkg.price}</span>
                    <span className="text-sm" style={{ color: `${TEXT}99` }}>{pkg.duration}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: `${TEXT}CC` }}>
                        <FiCheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg"
                    style={{
                      background: ACCENT,
                      color: "#FFF7F0",
                    }}
                  >
                    Book Now
                    <FiArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
