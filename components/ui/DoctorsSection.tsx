import DoctorProfile from './DoctorProfile';

const DoctorsSection = () => {
  const doctor = {
    name: "Anand P",
    qualification: "BAMS Shalya Tantra (General Surgery)", 
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

  return (
    <section className="relative py-24 px-4 overflow-hidden" style={{ backgroundColor: "#FFF7F0" }}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#3C1F0F]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3C1F0F]/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-[#3C1F0F]/10 rounded-full text-[#3C1F0F]/80 font-medium mb-4">
            Expert Care
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#3C1F0F] font-serif">
            Meet Our Expert Doctor
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#3C1F0F]/70 leading-relaxed">
            Experience the wisdom of traditional Ayurvedic healing combined with modern medical expertise
            under the guidance of our distinguished practitioner.
          </p>
        </div>

        {/* Doctor Profile */}
        <div className="max-w-6xl mx-auto">
          <DoctorProfile
            name={doctor.name}
            qualification={doctor.qualification}
            experience={doctor.experience}
            specialization={doctor.specialization}
            imageUrl={doctor.imageUrl}
          />
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
};

export default DoctorsSection;