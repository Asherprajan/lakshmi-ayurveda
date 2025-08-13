"use client"

import Header from "@/components/Header"
import Footer from "@/components/footer"
import { motion } from 'framer-motion'
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock, 
  FiArrowRight,
  FiSend,
  FiMessageCircle
} from 'react-icons/fi'

const contactCards = [
  {
    icon: FiPhone,
    title: "Phone",
    desc: "Call us anytime for immediate assistance",
    content: (
      <a
        href="tel:+919747205046"
        className="text-[#B24D1F] hover:text-[#8B3A15] font-medium hover:underline break-all transition-colors"
      >
        +91 9747205046
      </a>
    ),
  },
  {
    icon: FiMail,
    title: "Email",
    desc: "Send us a detailed message",
    content: (
      <a
        href="mailto:lakshmiayurvedaheritageretreat@gmail.com"
        className="text-[#B24D1F] hover:text-[#8B3A15] font-medium hover:underline break-all transition-colors"
      >
        lakshmiayurvedaheritageretreat@gmail.com
      </a>
    ),
  },
  {
    icon: FiMapPin,
    title: "Address",
    desc: "Visit our serene location",
    content: (
      <a
        href="https://maps.app.goo.gl/2Qw1v6v7k8k9"
        className="text-[#B24D1F] hover:text-[#8B3A15] font-medium hover:underline break-all transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lakshmi Ayurveda Heritage Villa, Kovalam, Trivandrum, Kerala, India
      </a>
    ),
  },
  {
    icon: FiClock,
    title: "Business Hours",
    desc: "We're here when you need us",
    content: (
      <span className="text-[#B24D1F] font-medium break-all">24/7 Available</span>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

const backgroundVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF7F0] via-[#FEF9F4] to-[#FFF7F0] text-[#3C1F0F] font-['Manrope']">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 md:py-32 bg-gradient-to-br from-[#FFF7F0] via-[#F1AD60]/20 to-[#B24D1F]/10 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <motion.div
            variants={backgroundVariants}
            animate="animate"
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#B24D1F]/15 to-[#F1AD60]/10 rounded-full blur-3xl"
          />
          <motion.div
            variants={backgroundVariants}
            animate="animate"
            transition={{ delay: 2 }}
            className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-tl from-[#3C1F0F]/10 to-[#F1AD60]/15 rounded-full blur-3xl"
          />
          <motion.div
            variants={backgroundVariants}
            animate="animate"
            transition={{ delay: 4 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#F1AD60]/5 to-[#B24D1F]/5 rounded-full blur-3xl"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-[#3C1F0F]/80 font-medium mb-8 border border-[#3C1F0F]/20 shadow-lg"
          >
            <FiMessageCircle className="w-5 h-5" />
            <span>Get in Touch</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-8 text-[#3C1F0F] font-serif leading-tight"
          >
            {"Let's Begin Your"}
            <span className="block text-[#B24D1F]">Wellness Journey</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-[#3C1F0F]/70 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Connect with our Ayurvedic experts and discover the path to holistic wellness. 
            {"We're"} here to guide you every step of the way.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-2 text-[#B24D1F] font-medium"
          >
            <span>Ready to start?</span>
            <FiArrowRight className="w-5 h-5 animate-pulse" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact Information Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 py-16 md:py-24"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3C1F0F]">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-lg text-[#3C1F0F]/70 max-w-2xl mx-auto">
            Choose the most convenient way to get in touch. Our team is ready to assist you.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactCards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#B24D1F]/10 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="p-3 bg-[#B24D1F]/10 rounded-xl group-hover:bg-[#B24D1F]/20 transition-colors"
                >
                  <card.icon className="text-[#B24D1F] w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-[#3C1F0F]">{card.title}</h3>
                  <p className="text-sm text-[#3C1F0F]/60">{card.desc}</p>
                </div>
              </div>
              {card.content}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#B24D1F] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <FiSend className="w-5 h-5" />
            <span>Send us a Message</span>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
