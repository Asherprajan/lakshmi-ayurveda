import type { Metadata } from 'next'
import Header from "@/components/Header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'Contact Us | Lakshmi Ayurveda Heritage Villa - Get in Touch',
  description: 'Contact Lakshmi Ayurveda Heritage Villa in Kovalam, Trivandrum, Kerala. Call +91 9747205046 or send us a message for reservations, treatments, and wellness programs.',
  keywords: [
    'contact Lakshmi Ayurveda Heritage Villa',
    'Ayurveda resort contact Kovalam Trivandrum',
    'book Ayurvedic treatments Kerala',
    'Ayurveda villa reservations Kovalam',
    'wellness retreat contact Kerala',
    'Panchakarma booking contact',
    'Ayurvedic consultation contact',
    'Ayurveda Heritage Villa phone number',
    'Kovalam Ayurveda resort contact',
    'Trivandrum wellness center contact'
  ],
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF7F0] via-[#FEF9F4] to-[#FFF7F0] text-[#3C1F0F] font-['Manrope']">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#FFF7F0] via-[#F1AD60]/20 to-[#B24D1F]/10 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#B24D1F]/15 to-[#F1AD60]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-tl from-[#3C1F0F]/10 to-[#F1AD60]/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#F1AD60]/5 to-[#B24D1F]/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-[#3C1F0F]/80 font-medium mb-8 border border-[#3C1F0F]/20 shadow-lg">
            <span>Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#3C1F0F] font-serif leading-tight">
            {"Let's Begin Your"}
            <span className="block text-[#B24D1F]">Wellness Journey</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#3C1F0F]/70 max-w-3xl mx-auto leading-relaxed mb-12">
            Connect with our Ayurvedic experts and discover the path to holistic wellness. 
            {"We're"} here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3C1F0F]">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-lg text-[#3C1F0F]/70 max-w-2xl mx-auto">
            Choose the most convenient way to get in touch. Our team is ready to assist you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#B24D1F]/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#B24D1F]/10 rounded-xl group-hover:bg-[#B24D1F]/20 transition-colors">
                <span className="text-[#B24D1F] w-6 h-6">📞</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#3C1F0F]">Phone</h3>
                <p className="text-sm text-[#3C1F0F]/60">Call us anytime for immediate assistance</p>
              </div>
            </div>
            <a
              href="tel:+919747205046"
              className="text-[#B24D1F] hover:text-[#8B3A15] font-medium hover:underline break-all transition-colors"
            >
              +91 9747205046
            </a>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#B24D1F]/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#B24D1F]/10 rounded-xl group-hover:bg-[#B24D1F]/20 transition-colors">
                <span className="text-[#B24D1F] w-6 h-6">✉️</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#3C1F0F]">Email</h3>
                <p className="text-sm text-[#3C1F0F]/60">Send us a detailed message</p>
              </div>
            </div>
            <a
              href="mailto:lakshmiayurvedaheritageretreat@gmail.com"
              className="text-[#B24D1F] hover:text-[#8B3A15] font-medium hover:underline break-all transition-colors"
            >
              lakshmiayurvedaheritageretreat@gmail.com
            </a>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#B24D1F]/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#B24D1F]/10 rounded-xl group-hover:bg-[#B24D1F]/20 transition-colors">
                <span className="text-[#B24D1F] w-6 h-6">📍</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#3C1F0F]">Address</h3>
                <p className="text-sm text-[#3C1F0F]/60">Visit our serene location</p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/2Qw1v6v7k8k9"
              className="text-[#B24D1F] hover:text-[#8B3A15] font-medium hover:underline break-all transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lakshmi Ayurveda Heritage Villa, Kovalam, Trivandrum, Kerala, India
            </a>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#B24D1F]/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#B24D1F]/10 rounded-xl group-hover:bg-[#B24D1F]/20 transition-colors">
                <span className="text-[#B24D1F] w-6 h-6">🕒</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#3C1F0F]">Business Hours</h3>
                <p className="text-sm text-[#3C1F0F]/60">We're here when you need us</p>
              </div>
            </div>
            <span className="text-[#B24D1F] font-medium break-all">24/7 Available</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
