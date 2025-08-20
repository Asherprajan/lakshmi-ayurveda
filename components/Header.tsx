"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import LanguageSwitcher from "./LanguageSwitcher"

// Theme colors
const PRIMARY_BG = "bg-[#1a0e07]"
const PRIMARY_BG_SCROLLED = "bg-[#1a0e07]/90"
const PRIMARY_BORDER = "border-[#F1AD60]/40"
const PRIMARY_ACCENT = "text-[#F1AD60]"
const PRIMARY_ACCENT_BG = "bg-[#F1AD60]"
const PRIMARY_ACCENT_HOVER = "hover:text-[#F1AD60]"
const NAV_FONT = "font-['Manrope']"
const NAV_FONT_BOLD = "font-['Playfair_Display'] font-bold"

// Icon components
const MenuIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export default function Header() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Navigation links with translations
  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about-us", label: t("nav.about") },
    { href: "/lakshmi-ayurveda-services", label: t("nav.services") },
    { href: "/lakshmi-ayurveda-packages", label: t("nav.packages") },
    { href: "/gallery", label: t("Gallery") },
    { href: "/contact-us", label: t("nav.contact") },
    
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on outside click
  useEffect(() => {
    if (!isMenuOpen) return
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element
      if (!target.closest('nav')) setIsMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isMenuOpen])

  // Escape closes menu
  useEffect(() => {
    if (!isMenuOpen) return
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen((v) => !v)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${NAV_FONT} ${isScrolled ? PRIMARY_BG_SCROLLED + " shadow-lg backdrop-blur-md" : PRIMARY_BG} ${PRIMARY_BORDER} border-b`}
    >
      <nav className="px-4 lg:px-8 py-2.5 max-w-7xl mx-auto" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Lakshmi Ayurveda Home">
            <Image
              src="/nav.png"
              alt="Lakshmi Ayurveda Logo"
              width={64}
              height={64}
              className="h-12 w-auto lg:h-16 lg:w-auto drop-shadow-lg"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-base px-1.5 py-0.5 transition-colors duration-200 border-b-2 border-transparent ${PRIMARY_ACCENT} ${PRIMARY_ACCENT_HOVER} hover:border-[#F1AD60]`}
                    style={{ color: "#F1AD60" }} // Ensure text is visible
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Language Switcher */}
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-[#F1AD60] hover:bg-[#F1AD60]/10 focus:outline-none focus:ring-2 focus:ring-[#F1AD60] rounded-lg transition-all duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"} overflow-hidden`}
          id="mobile-menu"
        >
          <div className="pt-4 pb-4 border-t border-[#F1AD60]/20">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-2 rounded-md text-base font-medium text-[#F1AD60] bg-[#1a0e07]/80 hover:bg-[#F1AD60]/10 transition-colors duration-200"
                    style={{ color: "#F1AD60" }} // Ensure text is visible
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}