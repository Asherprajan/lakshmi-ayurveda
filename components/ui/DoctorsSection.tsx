import DoctorProfile from './DoctorProfile';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Users } from 'lucide-react';
import { useState } from 'react';
import ContactModal from '../contact-modal';
const DoctorsSection = () => {
  const doctor = {
    name: "Anand P",
    qualification: "BAMS", 
    experience: "31 Years (Ayurveda & Panchakarma)",
    specialization: [
      "Skin Diseases",
      "Arthritis", 
      "Gastroenterology", 
      "General Medicine",
      "Preventive Care"
    ],
    imageUrl: "/doc.jpeg"
  };
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const handleContactSubmit = async (data: { name: string; phone: string; message: string }) => {
    console.log("Contact form submitted:", data)
  }
  return (
    <section className="relative py-24 px-4 overflow-hidden" style={{ backgroundColor: "#FFF7F0" }}>
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#9A3E0F]/8 to-[#B24D1F]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-tl from-[#F1AD60]/8 to-[#F5ECE0]/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#B24D1F]/5 to-[#3C1F0F]/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-[#B24D1F]" />
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#F5ECE0]/80 to-[#F1AD60]/30 text-[#B24D1F] rounded-full font-sans-custom text-sm font-semibold border border-[#B24D1F]/20">
              Expert Care
            </span>
            <Sparkles className="w-6 h-6 text-[#B24D1F]" />
          </div>
          
          <h2 className="font-serif-custom text-4xl md:text-6xl font-bold mb-6 text-[#3C1F0F] leading-tight">
            Meet Our Expert Doctor
          </h2>
          
          <p className="font-sans-custom text-xl max-w-3xl mx-auto text-[#3C1F0F]/70 leading-relaxed">
            Experience the wisdom of traditional Ayurvedic healing combined with modern medical expertise
            under the guidance of our distinguished practitioner.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#9A3E0F] to-[#B24D1F] rounded-full mb-3 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="font-serif-custom text-3xl font-bold text-[#3C1F0F]">10,000+</div>
              <div className="font-sans-custom text-sm text-[#3C1F0F]/70">Patients Treated</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#B24D1F] to-[#F1AD60] rounded-full mb-3 mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="font-serif-custom text-3xl font-bold text-[#3C1F0F]">31</div>
              <div className="font-sans-custom text-sm text-[#3C1F0F]/70">Years Experience</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F1AD60] to-[#F5ECE0] rounded-full mb-3 mx-auto">
                <Sparkles className="w-8 h-8 text-[#3C1F0F]" />
              </div>
              <div className="font-serif-custom text-3xl font-bold text-[#3C1F0F]">5.0</div>
              <div className="font-sans-custom text-sm text-[#3C1F0F]/70">Patient Rating</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Doctor Profile */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <DoctorProfile
            name={doctor.name}
            qualification={doctor.qualification}
            experience={doctor.experience}
            specialization={doctor.specialization}
            imageUrl={doctor.imageUrl}
          />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#F5ECE0]/50 to-[#F1AD60]/20 rounded-2xl p-8 border border-[#3C1F0F]/10">
            <h3 className="font-serif-custom text-2xl md:text-3xl font-bold text-[#3C1F0F] mb-4">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="font-sans-custom text-lg text-[#3C1F0F]/70 mb-6 max-w-2xl mx-auto">
              Book your consultation with Dr. Anand P and experience the transformative power of authentic Ayurvedic healing.
            </p>
            <motion.button    
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#9A3E0F] to-[#B24D1F] text-white font-sans-custom font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#B24D1F] hover:to-[#9A3E0F]"
              onClick={() => setContactModalOpen(true)}
            >
              Schedule Your Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
      <ContactModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onSubmit={handleContactSubmit}
        title="Book Ayurvedic Consultation"
      />
            </section>
  );
};

export default DoctorsSection;