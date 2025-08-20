"use client"

import React, { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { FiGlobe, FiChevronDown } from 'react-icons/fi'

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  const handleLanguageChange = (langCode: 'en' | 'ru') => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 text-[#F1AD60] hover:bg-[#F1AD60]/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F1AD60] focus:ring-offset-2 focus:ring-offset-[#1a0e07]"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <FiGlobe className="w-4 h-4" />
        <span className="text-sm font-medium hidden sm:inline">
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
        <span className="text-sm font-medium sm:hidden">
          {currentLanguage?.code.toUpperCase()}
        </span>
        <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#1a0e07] border border-[#F1AD60]/20 rounded-lg shadow-xl z-50">
          <ul className="py-1" role="listbox">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLanguageChange(lang.code as 'en' | 'ru')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-[#F1AD60]/10 transition-colors duration-200 ${
                    language === lang.code 
                      ? 'text-[#F1AD60] bg-[#F1AD60]/20' 
                      : 'text-[#F1AD60]/80 hover:text-[#F1AD60]'
                  }`}
                  role="option"
                  aria-selected={language === lang.code}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Backdrop to close dropdown when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default LanguageSwitcher 