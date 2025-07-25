"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

// Navigation links with proper routes
const navLinks = [
  { href: "/", label: "Home", current: true },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/treatments", label: "Treatments" },
  { href: "/doctors", label: "Doctors" },
  { href: "/contact", label: "Contact" },
]

// Icon components for better maintainability
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#9A3E0F]/95 backdrop-blur-sm shadow-md' : 'bg-[#9A3E0F]'
    } border-b border-gray-200`}>
      <nav className="px-4 lg:px-6 py-3" aria-label="Main navigation">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" aria-label="Lakshmi Ayurveda Home">
            <div className="relative">
              <Image 
                src="/nav.png" 
                alt="Lakshmi Ayurveda Logo" 
                width={36} 
                height={36} 
                className="h-9 w-auto transition-transform group-hover:scale-105"
                priority
              />
            </div>
        
          </Link>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 text-gray-100 hover:text-[--primary] hover:bg-gray-100/10 focus:outline-none focus:ring-2 focus:ring-[--primary] focus:ring-offset-2 rounded-lg transition-all duration-200"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`} 
          id="mobile-menu"
        >
          <div className="pt-4 pb-3 border-t border-[#9A3E0F]/20">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      link.current
                        ? 'bg-white text-[#9A3E0F]'
                        : 'text-white hover:text-[#F1AD60] hover:bg-[#9A3E0F]/80'
                    }`}
                    aria-current={link.current ? 'page' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Mobile Actions */}
         
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    link.current
                      ? 'text-[#F1AD60] border-b-2 border-[#F1AD60]'
                      : 'text-white hover:text-[#F1AD60] hover:border-b-2 hover:border-[#F1AD60]'
                  }`}
                  aria-current={link.current ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}