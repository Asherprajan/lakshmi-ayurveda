import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Clock, Star } from 'lucide-react';

interface DoctorProfileProps {
  name: string;
  qualification: string;
  experience: string;
  specialization: string[];
  imageUrl: string;
}

const DoctorProfile = ({ name, qualification, experience, specialization, imageUrl }: DoctorProfileProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group"
    >
      <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 p-8 lg:p-12 bg-white/90 backdrop-blur-sm rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#3C1F0F]/5">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#9A3E0F]/5 to-[#B24D1F]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#F1AD60]/5 to-[#F5ECE0]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image Container */}
        <div className="relative w-72 h-72 lg:w-80 lg:h-96 shrink-0">
          {/* Decorative frame */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#9A3E0F]/20 to-[#B24D1F]/20 rounded-[2rem] transform rotate-2 group-hover:rotate-3 transition-transform duration-500" />
          <div className="absolute inset-2 bg-gradient-to-br from-[#F1AD60]/10 to-[#F5ECE0]/10 rounded-[1.5rem] transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500" />
          
          {/* Main image container */}
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500">
            <Image
              src={imageUrl}
              alt={`Dr. ${name}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 288px, 320px"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3C1F0F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Experience badge */}
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#9A3E0F] to-[#B24D1F] text-white px-4 py-2 rounded-full shadow-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-sans-custom text-sm font-medium">{experience}</span>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center lg:items-start max-w-2xl text-center lg:text-left">
          {/* Doctor Info */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <Award className="w-6 h-6 text-[#B24D1F]" />
              <span className="font-sans-custom text-sm font-medium text-[#B24D1F]">Expert Practitioner</span>
            </div>
            
            <h3 className="font-serif-custom text-4xl lg:text-5xl font-bold text-[#3C1F0F] leading-tight">
              Dr. {name}
            </h3>
            
            <p className="font-sans-custom text-xl lg:text-2xl font-medium text-[#3C1F0F]/80">
              {qualification}
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F1AD60] text-[#F1AD60]" />
              ))}
              <span className="font-sans-custom text-sm text-[#3C1F0F]/70 ml-2">5.0 Rating</span>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="w-full">
            <h4 className="font-serif-custom text-2xl font-semibold text-[#3C1F0F] mb-6">
              Areas of Expertise
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specialization.map((spec, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group/spec flex items-center gap-3 p-4 bg-gradient-to-r from-[#F5ECE0]/50 to-[#F1AD60]/20 rounded-xl hover:from-[#F5ECE0]/70 hover:to-[#F1AD60]/30 transition-all duration-300 border border-[#3C1F0F]/5 hover:border-[#B24D1F]/20"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#9A3E0F] to-[#B24D1F] group-hover/spec:scale-125 transition-transform duration-300" />
                  <span className="font-sans-custom text-[#3C1F0F]/90 font-medium group-hover/spec:text-[#3C1F0F] transition-colors duration-300">
                    {spec}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
    
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorProfile; 