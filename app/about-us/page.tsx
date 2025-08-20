"use client"

import Header from "@/components/Header"
import Footer from "@/components/footer"
import {
  Leaf,      
  Globe2,   
  Landmark,
  Target,
  Star,
  UserCog,
  ClipboardList,
  TreePine,
  Plane,
  UserCheck,
  Sprout,
  RefreshCcw,
  Syringe,
  Bed,
  Mail,
  Phone,
  MapPin,
  // Lotus, // Removed as lotus is not there
} from "lucide-react"
import { motion } from "framer-motion"

// Color theme for white background
const footerBg = "bg-white"
const footerText = "text-neutral-900"
const footerAccent = "text-amber-600"
const footerBorder = "border-amber-200"
const footerCardBg = "bg-white"
const footerCardAccent = "bg-gradient-to-br from-amber-100 to-yellow-100"

const heroFeatures = [
  {
    icon: <Leaf className="w-5 h-5 inline-block mr-2 text-[#8B4513]" />,
    label: "Authentic Ayurveda",
  },
  {
    icon: <UserCog className="w-5 h-5 inline-block mr-2 text-[#8B4513]" />, // Replacing Lotus
    label: "Traditional Yoga",
  },
  {
    icon: <Globe2 className="w-5 h-5 inline-block mr-2 text-[#8B4513]" />,
    label: "Medical Tourism",
  },
]

const whyChooseFeatures = [
  {
    icon: <Leaf className="w-7 h-7 text-[#8B4513]" />,
    title: "Authentic Ayurveda",
    description:
      "Classical practices with traditional herbal preparations tailored to your unique constitution.",
  },
  {
    icon: <UserCog className="w-7 h-7 text-[#8B4513]" />, // Replacing Lotus
    title: "Dedicated Yoga Programs",
    description:
      "Daily sessions guided by certified instructors for physical, mental, and emotional well-being.",
  },
  {
    icon: <UserCog className="w-7 h-7 text-[#8B4513]" />,
    title: "Expert Care Team",
    description:
      "Experienced Ayurvedic doctors, therapists, and yoga teachers committed to your healing journey.",
  },
  {
    icon: <ClipboardList className="w-7 h-7 text-[#8B4513]" />,
    title: "Customized Plans",
    description:
      "Personalized treatments based on in-depth consultation and pulse diagnosis (Nadi Pariksha).",
  },
  {
    icon: <TreePine className="w-7 h-7 text-[#8B4513]" />,
    title: "Healing Environment",
    description:
      "Peaceful natural setting that enhances detoxification, relaxation, and inner peace.",
  },
  {
    icon: <Plane className="w-7 h-7 text-[#8B4513]" />,
    title: "Medical Tourism Support",
    description:
      "Special packages including accommodation, travel support, and medical coordination.",
  },
  {
    icon: <UserCheck className="w-7 h-7 text-[#8B4513]" />,
    title: "Experienced Practitioners",
    description:
      "Certified doctors, yoga instructors, homeopaths, and therapists with decades of expertise.",
  },
  {
    icon: <Sprout className="w-7 h-7 text-[#8B4513]" />,
    title: "Natural Healing",
    description:
      "Purest herbal oils, medicated therapies, and homeopathic remedies for safe rejuvenation.",
  },
  {
    icon: <RefreshCcw className="w-7 h-7 text-[#8B4513]" />,
    title: "Holistic Care",
    description:
      "Addressing root causes of imbalance in both body and mind for lasting health.",
  },
]

const services = [
  {
    icon: <Leaf className="w-8 h-8 text-[#8B4513]" />,
    title: "Ayurvedic Treatments",
    items: [
      "Panchakarma",
      "Abhyanga",
      "Shirodhara",
      "Herbal Medicine",
      "Pulse Diagnosis",
    ],
  },
  {
    icon: <UserCog className="w-8 h-8 text-[#8B4513]" />, // Replacing Lotus
    title: "Yoga & Wellness",
    items: [
      "Daily Sessions",
      "Meditation",
      "Pranayama",
      "Workshops",
      "Stress Management",
    ],
  },
  {
    icon: <Plane className="w-8 h-8 text-[#8B4513]" />,
    title: "Medical Tourism",
    items: [
      "Airport Pickup",
      "Translation",
      "Visa Support",
      "Cultural Guidance",
      "Travel Coordination",
    ],
  },
  {
    icon: <Bed className="w-8 h-8 text-[#8B4513]" />,
    title: "Accommodation",
    items: [
      "Natural Setting",
      "Organic Cuisine",
      "Spa Amenities",
      "Healing Environment",
      "Comfortable Rooms",
    ],
  },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFF7F0] text-[#3C1F0F] font-['Manrope']">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="relative py-20 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7F0]/40 to-[#FFF7F0]/30"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            className="inline-block p-3 bg-[#FFF7F0]/60 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-[#3C1F0F] text-sm font-medium">
              Established Excellence
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-[#3C1F0F] mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Welcome to
            <span className="block text-5xl md:text-7xl bg-gradient-to-r from-[#3C1F0F] via-[#8B4513] to-[#D2691E] bg-clip-text text-transparent">
              Lakshmi Ayurveda
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-[#3C1F0F] max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Where ancient wisdom meets modern wellness. We honour the timeless healing traditions of Ayurveda,
            the transformative power of Yoga, and the trust of holistic medical tourism.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm text-[#3C1F0F]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {heroFeatures.map((f, i) => (
              <motion.span
                key={i}
                className="px-4 py-2 bg-[#FFF7F0]/60 rounded-full flex items-center gap-2"
                custom={i}
                variants={fadeInUp}
              >
                {f.icon}
                {f.label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Story Section */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <motion.div
                className="inline-block p-2 bg-[#FFF7F0]/80 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-[#3C1F0F] text-sm font-medium">
                  Our Story
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl font-bold text-[#3C1F0F]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A Center of Excellence
              </motion.h2>
              <motion.p
                className="text-[#3C1F0F] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Lakshmi Ayurveda, Yoga & Medical Tourism is a center of excellence dedicated to restoring natural
                health and balance. We bring together the therapeutic power of classical Ayurveda and traditional
                Yoga, offering holistic treatments that promote lasting wellness.
              </motion.p>
              <motion.p
                className="text-[#3C1F0F] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our facility is thoughtfully designed to accommodate both local and international guests, making
                us a trusted destination for medical and wellness tourism in India. With experienced doctors,
                skilled therapists, and a tranquil environment, we ensure every guest receives personalized care
                and a truly rejuvenating experience.
              </motion.p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#FFF7F0] to-[#F5F5DC] rounded-3xl p-0 h-96 w-64 mx-auto flex items-center justify-center overflow-hidden">
                <img
                  src="/about1.jpeg"
                  alt="Lakshmi Ayurveda Center Portrait"
                  className="object-cover w-full h-full rounded-3xl"
                  style={{ aspectRatio: "3/4" }}
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#F5F5DC] to-[#FFF7F0] rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#FFF7F0] to-[#F5F5DC] rounded-full opacity-60"></div>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission & Vision Cards */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#3C1F0F] mb-4">
              Our Purpose
            </h2>
            <p className="text-[#3C1F0F] max-w-2xl mx-auto">
              Discover what drives us to provide authentic healing experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              className="bg-[#FFF7F0] rounded-2xl p-8 border border-[#D2691E]/20 relative overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2691E]/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#FFF7F0] rounded-2xl flex items-center justify-center mb-6 border border-[#D2691E]/20">
                  <Target className="w-8 h-8 text-[#8B4513]" />
                </div>
                <h3 className="text-2xl font-bold text-[#3C1F0F] mb-4">
                  Our Mission
                </h3>
                <p className="text-[#3C1F0F] leading-relaxed">
                  To provide authentic, natural treatments that restore balance to the body, mind, and spirit.
                  We invite you to discover a sanctuary where healing traditions meet global standards, and
                  every step brings you closer to holistic health.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-[#FFF7F0] rounded-2xl p-8 border border-[#8B4513]/20 relative overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#8B4513]/10 rounded-full -translate-y-16 -translate-x-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#FFF7F0] rounded-2xl flex items-center justify-center mb-6 border border-[#8B4513]/20">
                  <Star className="w-8 h-8 text-[#8B4513]" />
                </div>
                <h3 className="text-2xl font-bold text-[#3C1F0F] mb-4">
                  Our Vision
                </h3>
                <p className="text-[#3C1F0F] leading-relaxed">
                  To be a global healing sanctuary—a place where people from all walks of life can come to
                  restore balance, prevent disease, and rediscover their well-being through the ancient sciences
                  of Ayurveda and Yoga.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us - Feature Grid */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#3C1F0F] mb-4">
              Why Choose Lakshmi?
            </h2>
            <p className="text-[#3C1F0F] max-w-2xl mx-auto">
              Experience the difference that authentic traditions and expert care make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#FFF7F0] backdrop-blur-sm rounded-xl p-6 border border-[#D2691E]/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFF7F0] to-[#F5F5DC] rounded-xl flex items-center justify-center mb-4 border border-[#D2691E]/20">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-[#3C1F0F] mb-2">
                  {feature.title}
                </h4>
                <p className="text-[#3C1F0F] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Holistic Care Section */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <motion.div
            className="bg-gradient-to-r from-[#FFF7F0] to-[#F5F5DC] rounded-3xl p-12 text-[#3C1F0F] relative overflow-hidden border border-[#D2691E]/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E]/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8B4513]/10 rounded-full translate-y-24 -translate-x-24"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">
                Holistic & Integrated Care
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-[#3C1F0F] leading-relaxed mb-4">
                    We go beyond symptom management to address the root causes of imbalance in both body and mind—helping
                    you achieve long-lasting health and vitality. Every individual is unique—and so is their wellness path.
                  </p>
                  <p className="text-[#3C1F0F] leading-relaxed">
                    We design customized treatment plans combining Ayurveda, Yoga, and Homeopathy tailored to your specific health goals.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="text-[#3C1F0F] leading-relaxed">
                    At Lakshmi, we invite you to embark on a transformative wellness journey. Whether you're seeking
                    relief from chronic conditions, stress, fatigue, or simply want to improve your overall health,
                    let our holistic approach guide you toward a balanced, energized, and healthier life—naturally.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Services Overview */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#3C1F0F] mb-4">
              Our Services
            </h2>
            <p className="text-[#3C1F0F] max-w-2xl mx-auto">
              Comprehensive wellness solutions for your holistic health journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#FFF7F0] backdrop-blur-sm rounded-xl p-6 border border-[#D2691E]/20 shadow-lg"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFF7F0] to-[#F5F5DC] rounded-2xl flex items-center justify-center mb-4 mx-auto border border-[#D2691E]/20">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-[#3C1F0F] mb-3 text-center">
                  {service.title}
                </h3>
                <ul className="space-y-1">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-[#3C1F0F] text-sm flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-[#8B4513] rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        
      </main>

      <Footer />
    </div>
  )
}
