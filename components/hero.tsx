"use client"

import { useEffect } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"

const imageVariants = {
  initial: { scale: 1.08, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
}

// Animate text one by one (letter by letter for h1, word by word for h3)
const textContainerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.06 } }, // smaller stagger for per-letter
}

const letterVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const h3ContainerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.18 } }, // word by word
}

const wordVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

function splitTextToLetters(text: string) {
  // Returns array of letters, preserving spaces as non-breaking spaces
  return text.split("").map((char, i) =>
    char === " " ? "\u00A0" : char
  )
}

function splitTextToWords(text: string) {
  // Returns array of words, preserving spaces
  const words = text.split(" ");
  return words.map((word, i) => (i < words.length - 1 ? word + " " : word));
}

// Optimized theme gradient: a smooth, balanced blend between gold and deep brown
const THEME_GRADIENT =
  "linear-gradient(90deg, #F1AD60 0%, #F1AD60 35%, #F1AD60 60%, #9A3E0F 100%)";

const GRADIENT_TEXT_STYLE = {
  display: "inline-block",
  whiteSpace: "pre",
  background: THEME_GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

export default function Hero() {
  const handleScrollDown = () => {
    // Scroll to next section smoothly
    const nextSection = document.querySelector('[data-hero-scroll-target]') || document.body;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleScrollDown();
    }, 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const h1Text = "Welcome to Lakshmi Ayurveda.";
  const h3Text = "Yoga and Medical Tourism.";

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-white">
      {/* Logo in top left */}
     
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        initial="initial"
        animate="animate"
        variants={imageVariants as Variants}  
      >
        {/* Desktop Image */}
        <motion.div
          className="hidden sm:block w-full h-full absolute top-0 left-0"
          variants={imageVariants as Variants}
        >
          <Image
            src="/desktop.jpeg"
            alt="Ayurveda Nature Desktop"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
        {/* Mobile Image */}
        <motion.div
          className="block sm:hidden w-full h-full absolute top-0 left-0"
          variants={imageVariants as Variants}
        >
          <Image
            src="/mobile.jpeg"
            alt="Ayurveda Nature Mobile"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
        {/* Overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-black/60 z-[1]" />
      </motion.div>
      <motion.div
        className="relative z-10 space-y-4 w-full px-4 text-left lg:text-center flex flex-col items-start lg:items-center"
        initial="initial"
        animate="animate"
        variants={textContainerVariants}
      >
        <motion.h1
          className="font-serif-custom font-bold text-2xl sm:text-6xl drop-shadow-lg text-left lg:text-center flex flex-wrap justify-start lg:justify-center"
        >
          {splitTextToLetters(h1Text).map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants as Variants}
              style={GRADIENT_TEXT_STYLE}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div
          className="font-sans-custom text-base sm:text-3xl font-light drop-shadow text-left lg:text-center flex flex-wrap justify-start lg:justify-center"
          variants={h3ContainerVariants}
        >
          {splitTextToWords(h3Text).map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants as Variants}
              style={GRADIENT_TEXT_STYLE}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      {/* Scroll Down Indicator */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll down"
        className="absolute left-1/2 bottom-8 z-20 -translate-x-1/2 flex flex-col items-center group"
        style={{ outline: "none" }}
      >
        <span className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/80 group-hover:text-[#F1AD60] transition-colors duration-200" />
        </span>
        <span className="text-xs mt-1 text-white/70 group-hover:text-[#F1AD60] transition-colors duration-200 font-sans-custom">
          Scroll Down
        </span>
      </button>
    </section>
  )
}
