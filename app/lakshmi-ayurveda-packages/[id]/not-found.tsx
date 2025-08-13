import Link from "next/link"
import { FaArrowLeft, FaHome } from "react-icons/fa"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="mb-8">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHome className="w-12 h-12 text-amber-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">
              Package Not Found
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              The Ayurveda package you're looking for doesn't exist. Please check the URL or browse our available packages.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/lakshmi-ayurveda-packages"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-medium hover:from-amber-700 hover:to-orange-700 transition-all duration-200"
            >
              <FaArrowLeft className="w-4 h-4" />
              View All Packages
            </Link>
            
            <div className="pt-4">
              <Link
                href="/"
                className="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 