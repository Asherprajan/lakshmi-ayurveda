import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaSnapchat } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-[#1a0e07] text-[#F5ECE0] py-12 overflow-hidden">
      {/* Glassmorphic background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-gradient-to-br from-[#F5ECE0]/10 to-[#F1AD60]/10 rounded-full blur-3xl z-0" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-gradient-to-tl from-[#F1AD60]/10 to-[#B24D1F]/10 rounded-full blur-2xl z-0" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#B24D1F]/10 to-[#3C1F0F]/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 z-0" />  


<div className="max-w-7xl mx-auto px-4 relative z-10">
  <div
    className="grid md:grid-cols-3 gap-8 rounded-3xl bg-[#1a0e07]/80 backdrop-blur-xl border border-[#F1AD60]/20 shadow-2xl p-8"
    style={{
      background: "linear-gradient(135deg, rgba(26,14,7,0.92) 60%, rgba(178,77,31,0.10) 100%)",
      boxShadow: "0 8px 48px 0 rgba(241, 173, 96, 0.10)",
      border: "1.5px solid #F1AD60",
      backdropFilter: "blur(18px)",
    }}
  >
    <div>
      <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4 drop-shadow">Ayurveda Heritage Villa</h3>
      <p className="opacity-80 leading-relaxed">
        Where ancient wisdom meets modern luxury in the heart of Kerala.
      </p>
      {/* Social Media Icons */}
      <div className="flex gap-4 mt-6">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-[#F1AD60] transition-colors"
        >
          <FaFacebook size={22} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-[#F1AD60] transition-colors"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="https://wa.me/919747205046"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-[#F1AD60] transition-colors"
        >
          <FaWhatsapp size={22} />
        </a>
        <a
          href="https://www.youtube.com/@ayurvedaheritagevilla"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="hover:text-[#F1AD60] transition-colors"
        >
          <FaYoutube size={22} /> 
        </a>
        <a
          href="https://www.snapchat.com/add/ayurvedaheritagevilla"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Snapchat"
          className="hover:text-[#F1AD60] transition-colors"
        >
          {/* Snapchat icon SVG */}
          <FaSnapchat size={22} />
        </a>
      </div>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Contact</h4>
      <div className="space-y-2 opacity-80">
        <div className="flex items-center space-x-2">
          <FiPhone className="w-4 h-4" />
          <span>+91 9747205046</span>
        </div>
        <div className="flex items-center space-x-2">
          <FiMail className="w-4 h-4" />
          <span>Lakshmiayurvedakerala@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FiMapPin className="w-4 h-4" />
          <span>Oluppuvila Veedu, Kannankodu, Vellar, Kovalam, Trivandrum, Kerala 695527</span>
        </div>
      </div>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Experience</h4>
      <div className="space-y-2 opacity-80">
        <p>Treatments</p>
        <p>Accommodation</p>
        <p>Wellness Programs</p>
        <p>Cultural Events</p>
      </div>
    </div>
  </div>
  <div className="border-t border-[#F1AD60]/40 mt-8 pt-8 text-center opacity-70 bg-[#1a0e07]/70 rounded-b-3xl backdrop-blur-md">
    <p>&copy; 2024 Ayurveda Heritage Villa. All rights reserved.</p>
  </div>
</div>
    
    </footer>
  )
}