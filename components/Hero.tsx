'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download } from 'lucide-react'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-24 md:pt-20 px-4 relative bg-black text-white"
      style={{ backgroundColor: '#000000', color: '#ffffff' }}
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center md:text-left"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-6 md:mb-8 font-bold"
            style={{ color: '#ffffff' }}
          >
            Yusif.
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12"
            style={{ color: '#d1d5db' }}
          >
            <p>
              Hi, I&apos;m Yusif, a second year CS Student and developer focused on building the future with code. I&apos;m interested in AI and Full-Stack development.
            </p>
            <p>
              You&apos;ll find projects that reflect my skills and growth as a developer. From designing intuitive user interfaces to building AI-powered applications, I collaborate with teams to build high-quality, scalable solutions that enhance user experiences.
            </p>
            <p>
              Always eager to learn, I thrive on solving complex problems. Outside of coding, I enjoy watching Formula 1 and combat sports. Feel free to reach out to me!
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start"
          >
            <Link href="/Yusif%20Imanov%20Resume.pdf" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 inline-flex items-center justify-center gap-2 text-sm md:text-base"
                style={{ backgroundColor: '#ffffff', color: '#000000' }}
              >
                Download Resume
                <Download size={18} className="md:w-5 md:h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
