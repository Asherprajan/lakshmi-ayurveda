"use client"

import React from 'react'
import Preloader from './Preloader'

interface FullPagePreloaderProps {
  isLoading: boolean
  children: React.ReactNode
}

const FullPagePreloader: React.FC<FullPagePreloaderProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#FFF7F0] z-50 flex items-center justify-center">
        <div className="text-center">
          <Preloader size="lg" text="Welcome to Lakshmi Ayurveda" />
          <p className="mt-6 text-[#3C1F0F]/70 text-sm max-w-md mx-auto">
            Preparing your authentic Ayurvedic experience...
          </p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export default FullPagePreloader 