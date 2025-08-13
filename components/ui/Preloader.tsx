"use client"

import React from 'react'
import { FaLeaf, FaSeedling } from 'react-icons/fa'

interface PreloaderProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  showText?: boolean
}

const Preloader: React.FC<PreloaderProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Outer rotating ring */}
        <div className={`absolute inset-0 border-4 border-[#3C1F0F]/20 rounded-full ${sizeClasses[size]}`}></div>
        
        {/* Inner rotating ring */}
        <div className={`absolute inset-0 border-4 border-transparent border-t-[#3C1F0F] rounded-full ${sizeClasses[size]} animate-spin`}></div>
        
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <FaLeaf className="w-1/2 h-1/2 text-[#3C1F0F] animate-pulse" />
        </div>
      </div>
      
      {showText && (
        <div className="text-center">
          <p className={`${textSizeClasses[size]} text-[#3C1F0F] font-medium`}>
            {text}
          </p>
          <div className="flex items-center justify-center space-x-1 mt-2">
            <div className="w-2 h-2 bg-[#3C1F0F] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-[#3C1F0F] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-[#3C1F0F] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Preloader 