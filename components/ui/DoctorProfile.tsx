import Image from 'next/image';

interface DoctorProfileProps {
  name: string;
  qualification: string;
  experience: string;
  specialization: string[];
  imageUrl: string;
}

const DoctorProfile = ({ name, qualification, experience, specialization, imageUrl }: DoctorProfileProps) => {
  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 p-8 md:p-12 bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative w-64 h-64 md:w-80 md:h-96 shrink-0">
        <div className="absolute inset-0 bg-[#3C1F0F]/10 rounded-[2rem] transform rotate-3 transition-transform group-hover:rotate-6" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] border-8 border-white shadow-lg">
          <Image
            src={imageUrl}
            alt={`Dr. ${name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 256px, 384px"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-center md:items-start max-w-2xl">
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-4xl md:text-5xl font-bold text-[#3C1F0F]">Dr. {name}</h3>
          <p className="text-xl md:text-2xl font-medium text-[#3C1F0F]/80">{qualification}</p>
          <div className="inline-block px-6 py-2 bg-[#3C1F0F]/10 rounded-full">
            <p className="text-lg text-[#3C1F0F]/90">{experience}</p>
          </div>
        </div>

        <div className="mt-8 w-full">
          <h4 className="text-2xl font-semibold text-[#3C1F0F] mb-4">Areas of Expertise</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {specialization.map((spec, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 p-3 bg-[#3C1F0F]/5 rounded-xl hover:bg-[#3C1F0F]/10 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#3C1F0F]/60" />
                <span className="text-[#3C1F0F]/80 font-medium">{spec}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 w-full">
         
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile; 