"use client"

import DoctorProfile from './DoctorProfile';
import { motion, useInView } from 'framer-motion';
import { Heart, Sparkles, Users, Award, Clock, Star, ArrowRight, Stethoscope } from 'lucide-react';
import { useState, useRef } from 'react';
import ContactModal from '../contact-modal';

const DoctorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const doctor = {
    name: "Dr. Anand P",
    qualification: "BAMS", 
    experience: "31 Years (Ayurveda & Panchakarma)",
    specialization: [
      "Skin Diseases",
      "Arthritis", 
      "Gastroenterology", 
      "General Medicine",
      "Preventive Care"
    ],
    imageUrl: "/doc.jpeg",
    achievements: [
      "Certified Panchakarma Specialist",
      "Traditional Ayurveda Expert",
      "Holistic Wellness Practitioner"
    ]
  };

  const [contactModalOpen, setContactModalOpen] = useState(false);
  
  const handleContactSubmit = async (data: { name: string; phone: string; message: string }) => {
    console.log("Contact form submitted:", data);
  };

  const stats = [
    {
      icon: Users,
      number: "15,000+",
      label: "Patients Healed",
      description: "Successfully treated patients worldwide",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Clock,
      number: "31",
      label: "Years Excellence",
      description: "Decades of dedicated practice",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate",
      description: "Patient satisfaction & recovery",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Star,
      number: "5.0",
      label: "Patient Rating",
      description: "Consistently excellent reviews",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-[#FFF9F5] via-[#FFF7F0] to-[#FDF6F0]"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#9A3E0F]/6 via-[#B24D1F]/4 to-transparent rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#F1AD60]/8 via-[#F5ECE0]/6 to-transparent rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#B24D1F]/3 to-[#3C1F0F]/3 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
        
        {/* Floating Elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-[#F1AD60]/20 to-[#B24D1F]/20 rounded-2xl backdrop-blur-sm"
        />
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-br from-[#9A3E0F]/15 to-[#F5ECE0]/15 rounded-full backdrop-blur-sm"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-24"
        >
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#9A3E0F] to-[#B24D1F] rounded-full flex items-center justify-center shadow-lg">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#F5ECE0]/90 to-[#F1AD60]/40 text-[#B24D1F] rounded-full font-sans-custom text-sm font-bold border-2 border-[#B24D1F]/20 shadow-sm">
              Meet Our Ayurvedic Expert
            </span>
            <div className="w-12 h-12 bg-gradient-to-br from-[#F1AD60] to-[#F5ECE0] rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-[#9A3E0F]" />
            </div>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="font-serif-custom text-5xl md:text-7xl font-bold mb-8 text-[#3C1F0F] leading-tight bg-gradient-to-r from-[#3C1F0F] to-[#5D2F17] bg-clip-text text-transparent"
          >
            Healing Through Ancient Wisdom
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="font-sans-custom text-xl md:text-2xl max-w-4xl mx-auto text-[#3C1F0F]/80 leading-relaxed mb-8"
          >
            Experience the profound transformation that comes from authentic Ayurvedic healing, 
            guided by decades of expertise and unwavering dedication to your wellness journey.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 text-sm font-medium text-[#B24D1F]"
          >
            <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full border border-[#B24D1F]/20">
              <Sparkles className="w-4 h-4" />
              <span>Traditional Methods</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full border border-[#B24D1F]/20">
              <Heart className="w-4 h-4" />
              <span>Holistic Approach</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full border border-[#B24D1F]/20">
              <Award className="w-4 h-4" />
              <span>Proven Results</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats Grid */}
       

        {/* Doctor Profile with Enhanced Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/50">
            <DoctorProfile
              name={doctor.name}
              qualification={doctor.qualification}
              experience={doctor.experience}
              specialization={doctor.specialization}
              imageUrl={doctor.imageUrl}
            />
          </div>
        </motion.div>

        {/* Revolutionary CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          
        </motion.div>
      </div>

      <ContactModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onSubmit={handleContactSubmit}
        title="Begin Your Ayurvedic Healing Journey"
      />
    </section>
  );
};

export default DoctorsSection;